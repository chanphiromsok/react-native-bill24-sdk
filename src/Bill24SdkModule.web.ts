import { registerWebModule, NativeModule } from 'expo';

import { Bill24SdkModuleEvents } from './Bill24Sdk.types';

class Bill24SdkModule extends NativeModule<Bill24SdkModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(Bill24SdkModule, 'Bill24SdkModule');
