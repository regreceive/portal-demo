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

interface PortalWindow extends Window {
  $$_K2_SDK: {};
}

interface Window {
  antd: any;
  React: any;
  ReactDOM: any;
  moment: any;
  ht: any;
  $$K2RootWindow: PortalWindow | Window;
  $$k2App: {};
  $$config: {
    service: { [key: string]: string };
    [key: string]: any;
  };  env: { [key: string]: any };
  URL: typeof URL;
}
