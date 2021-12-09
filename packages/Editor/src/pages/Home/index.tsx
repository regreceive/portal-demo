import { FC, useRef, useEffect } from 'react';
import { editor } from 'monaco-editor';
import { useDebounceFn } from 'ahooks';
import { useAppProps } from 'k2-portal';

const Editor: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const editorInstance = useRef<editor.IStandaloneCodeEditor>();
  const appProps = useAppProps<{ value: string }>();

  const { run } = useDebounceFn(
    () => {
      editorInstance.current?.layout();
    },
    { wait: 100 },
  );

  useEffect(() => {
    editorInstance.current = editor.create(ref.current!, {
      language: 'javascript',
      lineNumbers: 'on',
      roundedSelection: false,
      scrollBeyondLastLine: false,
      readOnly: true,
      theme: 'vs-dark',
    });

    parent.window.addEventListener('resize', () => {
      run();
    });

    run();

    return () => {
      editorInstance.current?.dispose();
    };
  }, []);

  useEffect(() => {
    editorInstance.current?.setValue(appProps.value);
  }, [appProps.value]);

  return <div ref={ref} style={{ height: '100%' }} />;
};

export default Editor;
