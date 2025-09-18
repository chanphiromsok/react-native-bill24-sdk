// Reexport the native module. On web, it will be resolved to Bill24SdkModule.web.ts
// and on native platforms to Bill24SdkModule.ts
export { default } from './Bill24SdkModule';
export { default as Bill24SdkView } from './Bill24SdkView';
export * from  './Bill24Sdk.types';
