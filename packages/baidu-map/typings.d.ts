declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.gql' {
  import { DocumentNode } from 'graphql';
  const content: {
    [key: string]: {
      gql: DocumentNode;
      send: (variables?: any) => Promise<{ data: any }>;
    };
  };
  export default content;
}
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
    [key: string]: any;
  };
  env: { [key: string]: any };
  g_portal: any;
}
