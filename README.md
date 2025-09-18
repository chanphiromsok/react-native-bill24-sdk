# React Native Bill24 SDK
Expo/React Native wrapper for the Bill24 Payment SDK.
## Installation

```bash
npm install react-native-bill24-sdk
```

You can override the B24PaymentSdk version used by this library in several ways (in order of priority):
### Android B24PaymentSdk Version Override

Add to your `android/gradle.properties`:
```properties
b24paymentsdkVersion=1.2.0
```

## Usage

```typescript
import { Bill24Sdk } from 'react-native-bill24-sdk';

// Instant payment
const result = await Bill24Sdk.instantPaymentSdk({
  userSyncCode: "your-user-sync-code",
  refererKey: "your-referer-key",
  language: "en",
  isDarkMode: false,
  isProduction: false,
  isDisplayCurrencySymbol: true
});

// Top-up payment
const topUpResult = await Bill24Sdk.instantPaymentSdkTopUp({
  paymentMethodId: "payment-method-id",
  refererKey: "your-referer-key",
  language: "en",
  isDarkMode: false,
  isProduction: false,
  isDisplayCurrencySymbol: true
});
```

## Version Compatibility

| Library Version | Default B24PaymentSdk Version | 
|----------------|-------------------------------|
| 0.1.0          | 1.1.46                       |

## Requirements

### iOS
- iOS 13.0+
- Swift 5.0+
- Xcode 15.0+

### Android  
- minSdkVersion 24
- compileSdkVersion 36
- targetSdkVersion 36