/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

interface JQuery {
  hoverdir(options?: any): any;
}

declare module 'socket.io-client' {
  var e: any;
}