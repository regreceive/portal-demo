import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function initRender(div: HTMLDivElement) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(div.clientWidth, div.clientHeight);

  // renderer.setClearColor(0xffffff);
  if (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  div.appendChild(renderer.domElement);
  return renderer;
}
function initCamera(div: HTMLDivElement) {
  const camera = new THREE.PerspectiveCamera(
    45,
    div.clientWidth / div.clientHeight,
    0.1,
    2000,
  );
  camera.position.set(0, 20, 220);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  return camera;
}

function initLight(scene: THREE.Scene) {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const light = new THREE.PointLight(0xffffff, 0.5);
  light.position.set(0, 50, 50);
  light.castShadow = true;
  scene.add(light);
  return light;
}

let woman: THREE.Object3D;
// 导入模型
function initModel(scene: THREE.Scene) {
  new MTLLoader()
    .setPath(`${window.location.pathname}female02/`)
    .load('female02.mtl', function (materials) {
      materials.preload();

      new OBJLoader()
        .setMaterials(materials)
        .setPath(`${window.location.pathname}female02/`)
        .load('female02.obj', function (object) {
          object.position.y = -85;
          scene.add(object);
          woman = object;
        });
    });
}

function initControls(camera: THREE.Camera, renderer: THREE.Renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);

  // 如果使用animate方法时，将此函数删除
  // controls.addEventListener( 'change', render );
  // 使动画循环使用时阻尼或自转 意思是否有惯性
  controls.enableDamping = true;
  //动态阻尼系数 就是鼠标拖拽旋转灵敏度
  controls.dampingFactor = 0.25;
  //是否可以缩放
  controls.enableZoom = true;
  //是否自动旋转
  // controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
  //设置相机距离原点的最远距离
  controls.minDistance = 1;
  //设置相机距离原点的最远距离
  controls.maxDistance = 500;
  //是否开启右键拖拽
  controls.enablePan = true;
  return controls;
}

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isUnMounted = false;

    setTimeout(() => {
      const renderer = initRender(ref.current as HTMLDivElement);
      const camera = initCamera(ref.current as HTMLDivElement);
      const scene = new THREE.Scene();
      const light = initLight(scene);
      const controls = initControls(camera, renderer);

      function render() {
        renderer.render(scene, camera);
        light.position.copy(camera.getWorldPosition(new THREE.Vector3()));
        if (woman) {
          woman.rotation.y -= 0.009;
        }
        requestAnimationFrame(render);
      }
      render();

      function resizeHandle() {
        const { clientWidth, clientHeight } = ref.current!;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      }
  
      parent.addEventListener('resize', resizeHandle);
  
      initModel(scene);
    }, 100);

    // return () => {
    //   parent.removeEventListener('resize', resizeHandle);
    //   renderer.dispose();
    //   controls.dispose();
    //   isUnMounted = true;
    // };
  }, []);

  return <div style={{ height: '100%' }} ref={ref} />;
};

export default Home;
