import { NativeModule, requireNativeModule } from 'expo';

import { Bill24SdkModuleEvents } from './Bill24Sdk.types';

declare class Bill24SdkModule extends NativeModule<Bill24SdkModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<Bill24SdkModule>('Bill24Sdk');
