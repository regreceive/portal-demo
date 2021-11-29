import { FC, useRef, useEffect, useState } from 'react';
import paper from 'paper';

const circle_margin = 20; // 圆圈边距
const label_font_size = 12; // 插槽指示文字字号
const slot_width = 50; // 插槽宽度
const slot_height = 8; // 插槽高度

const { Path, Color, Point, PointText, Size, Rectangle } = paper;

/**
 *
 * @param slot 插槽动效平移
 * @param progress 进度百分比
 * @param distance 总路程
 * @param angel 角度，用于冲抵
 */
function translate(
  slot: paper.Path.Rectangle,
  progress: number,
  distance: number,
  angel: number,
) {
  slot.rotate(-angel, paper.view.center);
  slot.position.x = paper.view.center.x + distance * progress;
  slot.rotate(angel, paper.view.center);
}

/** AB级 */
function drawText() {
  const a = new PointText({
    content: 'A极',
    fillColor: new Color(0.9, 0.5, 0.5),
    fontSize: 18,
    strokeWidth: 0,
  });
  a.pivot = a.bounds.topCenter;
  a.position = new Point(paper.view.center.x, circle_margin + 10);

  const b = a.clone();
  b.content = 'B极';
  b.position.y += paper.view.viewSize.height / 1.32;
}

/**
 * 画刻度标识
 * @param index 刻度下标
 * @param offset 整体角度偏移
 * @returns
 */
function drawTick(index: number, offset: number) {
  // 绘制文字
  const text = new PointText({
    point: new Point(0, paper.view.center.y - 8),
    fillColor: new Color(0.5, 0.5, 0.5),
    strokeWidth: 0,
    fontSize: label_font_size,
    content: (index < 8 ? index + 1 : 16 - index + "'") + '#',
    opacity: 0,
  });

  text.rotate(9 * index + offset - 4.5, paper.view.center);
  text.rotate((9 * index + offset - 4.5) * -1);

  return text;
}

/**
 *
 * @param rect 绘制插槽
 * @param index 插槽下标
 * @param offset 插槽整体角度偏移
 * @returns
 */
function drawSlot(rect: paper.Rectangle, index: number, offset = -67.5) {
  const slot = new Path.Rectangle(rect);
  slot.pivot = slot.bounds.leftCenter;
  slot.opacity = 0;

  slot.rotate(9 * index + offset, paper.view.center);
  return slot;
}

function toggle(flag: number, path: paper.Path) {
  const red = new Color(1, 0, 0);
  if (flag === 1) {
    path.fillColor = red;
  } else {
    path.fillColor = new Color(1, 1, 1);
  }
}

const Rotor: FC = (props) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const leftSlot = useRef<paper.Path[]>();
  const rightSlot = useRef<paper.Path[]>();
  const leftTick = useRef<paper.PointText[]>();
  const rightTick = useRef<paper.PointText[]>();

  useEffect(() => {
    paper.setup(ref.current!);
    paper.view.viewSize = new Size(320, 320);
    paper.project.currentStyle.strokeColor = new Color(0.5, 0.5, 0.5);

    // 箭头图标
    const reloadIcon = new paper.Path(
      'M13.5 2c-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.015 0-5.662-1.583-7.171-3.957l-1.2 1.775c1.916 2.536 4.948 4.182 8.371 4.182 5.797 0 10.5-4.702 10.5-10.5s-4.703-10.5-10.5-10.5z',
    );
    reloadIcon.pivot = reloadIcon.bounds.center.add(1);
    reloadIcon.position = paper.view.center;
    reloadIcon.fillColor = new Color(0.7, 0.7, 0.7);
    reloadIcon.strokeWidth = 0;

    // 画圆
    new paper.Shape.Circle(
      paper.view.center,
      paper.view.viewSize.width / 2 - circle_margin,
    );

    const rectangle = new Rectangle(
      paper.view.center.x,
      paper.view.center.y - slot_height / 2,
      slot_width,
      slot_height,
    );

    drawText();

    const slotDistance =
      paper.view.viewSize.width / 2 - circle_margin - slot_width;

    const timeoutId = setTimeout(() => {
      // 左侧插槽
      leftTick.current = Array(16)
        .fill(0)
        .map((_, index) => drawTick(index, 112.5));

      leftSlot.current = Array(16)
        .fill(0)
        .map((_, index) => {
          const slot = drawSlot(rectangle, index, 112.5);
          setTimeout(() => {
            const tween = slot.tween(
              { opacity: 0, fillColor: 'red' },
              { opacity: 1, fillColor: 'white' },
              { duration: 500 },
            );
            tween.onUpdate = ({ progress }: any) => {
              translate(slot, progress, slotDistance, 9 * index + 180 - 67.5);
            };
            tween.then(() => {
              leftTick.current?.[index].tweenTo({ opacity: 1 }, 500);
            });
          }, 60 * index);

          return slot;
        });

      // 右侧插槽
      rightTick.current = Array(16)
        .fill(0)
        .map((_, index) => drawTick(index, -67.5));

      rightSlot.current = Array(16)
        .fill(0)
        .map((_, index) => {
          const slot = drawSlot(rectangle, index);
          setTimeout(() => {
            const tween = slot.tween(
              { opacity: 0, fillColor: 'green' },
              { opacity: 1, fillColor: 'white' },
              { duration: 500 }, // 500
            );

            tween.onUpdate = ({ progress }: any) => {
              translate(slot, progress, slotDistance, 9 * index - 67.5);
            };
            tween.then(() => {
              rightTick.current?.[index].tweenTo({ opacity: 1 }, 500);
            });
          }, 60 * index); //60 * index
          return slot;
        });
    }, 3000); // 3000

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <canvas
        ref={ref}
        style={{ width: 320, margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default Rotor;
