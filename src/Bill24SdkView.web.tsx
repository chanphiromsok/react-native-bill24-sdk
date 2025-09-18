import * as React from 'react';

import { Bill24SdkViewProps } from './Bill24Sdk.types';

export default function Bill24SdkView(props: Bill24SdkViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
