export interface Bill24InstantPaymentProps {
  userSyncCode: string;
  refererKey: string;
  language: string;
  isDarkMode: boolean;
  isProduction: boolean;
  testingEnv: "STAG" | "PRODUCTION" | "PILOT" | "DEMO";
}

export interface Bill24InstantPaymentTopUpProps {
  /**
   * The payment method ID (wallet ID) associated with the user's Bill24 wallet.
   */
  paymentMethodId: string;
  /**
   * The referer key provided by Bill24.
   */
  refererKey: string;
  /**
   * "en" | "km"
   */
  language: string;
  /**
   * when `isDarkMode` is `true`, the payment UI will be displayed in dark mode
   */
  isDarkMode: boolean;
  /**
   * when `isProduction` is `true`, `testingEnv` will be ignored
   */
  isProduction: boolean;
  /**
   * if `isProduction` is `true`, this value will be ignored
   */
  testingEnv: "STAG" | "PRODUCTION" | "PILOT" | "DEMO";
  /**
   * `false` to display KHR 1000 instead of ៛1,000
   */
  isDisplayCurrencySymbol: boolean;
}

export interface Bill24InstantPaymentTopUpResult {
  success: boolean;
  message?: string;
}
