# React Native Bill24 SDK

An unofficial Expo module for integrating Bill24 payment services into React Native applications. This library provides a seamless way to implement Bill24's instant payment and top-up functionality in your mobile apps.

## Features

- 🚀 **Instant Payment**: Quick payment processing with Bill24
- 💰 **Top-up Payments**: Wallet top-up functionality  
- 🌍 **Multi-language Support**: English and Khmer language support
- 🌙 **Dark Mode**: Built-in dark mode support
- 🏗️ **Environment Support**: Production, staging, pilot, and demo environments
- 📱 **Cross-platform**: Works on both iOS and Android
- ⚡ **Expo Compatible**: Built as an Expo module

## Installation

```bash
npm install react-native-bill24-sdk
```

### Additional Setup

#### Android

You can override the B24PaymentSdk version used by this library by adding to your `android/gradle.properties`:

```properties
b24paymentsdkVersion=1.2.0
```

#### iOS

No additional setup required for iOS.

## Usage

### Basic Import

```typescript
import Bill24Sdk from 'react-native-bill24-sdk';
import { 
  Bill24InstantPaymentProps, 
  Bill24InstantPaymentTopUpProps 
} from 'react-native-bill24-sdk';
```

### Instant Payment

Use this method to initiate a general instant payment:

```typescript
const handleInstantPayment = async () => {
  try {
    const result = await Bill24Sdk.instantPaymentSdk({
      userSyncCode: "your-user-sync-code",
      refererKey: "your-referer-key", 
      language: "en", // "en" | "km"
      isDarkMode: false,
      isProduction: false, // Set to true for production
      testingEnv: "DEMO" // "STAG" | "PRODUCTION" | "PILOT" | "DEMO"
    });

    if (result.success) {
      console.log('Payment successful:', result.message);
    } else {
      console.log('Payment failed:', result.message);
    }
  } catch (error) {
    console.error('Payment error:', error);
  }
};
```

### Top-up Payment

Use this method for wallet top-up payments:

```typescript
const handleTopUpPayment = async () => {
  try {
    const result = await Bill24Sdk.instantPaymentSdkTopUp({
      paymentMethodId: "payment-method-id", // Bill24 wallet ID
      refererKey: "your-referer-key",
      language: "en", // "en" | "km"
      isDarkMode: false,
      isProduction: false, // Set to true for production
      testingEnv: "DEMO", // Ignored if isProduction is true
      isDisplayCurrencySymbol: true // Display ៛1,000 vs KHR 1000
    });

    if (result.success) {
      console.log('Top-up successful:', result.message);
    } else {
      console.log('Top-up failed:', result.message);
    }
  } catch (error) {
    console.error('Top-up error:', error);
  }
};
```

## API Reference

### Types

#### Bill24InstantPaymentProps

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `userSyncCode` | `string` | ✅ | User synchronization code from Bill24 |
| `refererKey` | `string` | ✅ | Referer key provided by Bill24 |
| `language` | `"en" \| "km"` | ✅ | Interface language (English or Khmer) |
| `isDarkMode` | `boolean` | ✅ | Enable dark mode for payment UI |
| `isProduction` | `boolean` | ✅ | Production environment flag |
| `testingEnv` | `"STAG" \| "PRODUCTION" \| "PILOT" \| "DEMO"` | ✅ | Testing environment (ignored if `isProduction` is true) |

#### Bill24InstantPaymentTopUpProps

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `paymentMethodId` | `string` | ✅ | Payment method ID (wallet ID) from Bill24 |
| `refererKey` | `string` | ✅ | Referer key provided by Bill24 |
| `language` | `"en" \| "km"` | ✅ | Interface language (English or Khmer) |
| `isDarkMode` | `boolean` | ✅ | Enable dark mode for payment UI |
| `isProduction` | `boolean` | ✅ | Production environment flag |
| `testingEnv` | `"STAG" \| "PRODUCTION" \| "PILOT" \| "DEMO"` | ✅ | Testing environment (ignored if `isProduction` is true) |
| `isDisplayCurrencySymbol` | `boolean` | ✅ | Show currency symbol (៛1,000 vs KHR 1000) |

#### Bill24InstantPaymentTopUpResult

| Property | Type | Description |
|----------|------|-------------|
| `success` | `boolean` | Payment operation success status |
| `message` | `string?` | Result message or error description |

## Environment Configuration

### Testing Environments

- **DEMO**: For development and testing
- **STAG**: Staging environment
- **PILOT**: Pilot testing environment  
- **PRODUCTION**: Production environment (only used when `isProduction` is false)

### Production vs Testing

When `isProduction` is set to `true`, the `testingEnv` parameter is ignored and the SDK uses the production environment.

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

## Example App

Check out the example app in the `example/` directory for a complete implementation:

```bash
cd example
npm install
npm run ios    # For iOS
npm run android # For Android
```

## Troubleshooting

### Common Issues

#### Android Build Issues
- Ensure your `android/gradle.properties` has the correct B24PaymentSdk version
- Check that your `minSdkVersion` is at least 24

#### iOS Build Issues  
- Make sure your deployment target is iOS 13.0+
- Run `cd ios && pod install` if using bare React Native

#### Payment Failures
- Verify your `refererKey` is correct and active
- Check that you're using the correct environment (`isProduction` setting)
- Ensure `userSyncCode` or `paymentMethodId` are valid

## Security Notes

⚠️ **Important Security Considerations:**

- Never hardcode production `refererKey` in your app
- Always validate payment results on your backend
- Use environment variables for sensitive configuration
- Implement proper error handling for failed payments

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For Bill24 SDK specific issues, please contact Bill24 support.
For this library issues, please open an issue on GitHub.

---

**Note**: This is an unofficial library. Please refer to the official Bill24 documentation for the most up-to-date information about their payment services.