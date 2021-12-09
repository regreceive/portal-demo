declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
declare enum env {
  RUNTIME_NAMESPACE = '',
}

interface Window {
  antd: any;
  React: any;
  ReactDOM: any;
  moment: any;
  $$config: {
    service: { [key: string]: string };
    [key: string]: any;
  };
  env: { [key: string]: any };
  g_portal: any;
  URL: typeof URL;
}
