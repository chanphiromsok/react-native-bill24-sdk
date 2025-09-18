import { requireNativeView } from 'expo';
import * as React from 'react';

import { Bill24SdkViewProps } from './Bill24Sdk.types';

const NativeView: React.ComponentType<Bill24SdkViewProps> =
  requireNativeView('Bill24Sdk');

export default function Bill24SdkView(props: Bill24SdkViewProps) {
  return <NativeView {...props} />;
}
