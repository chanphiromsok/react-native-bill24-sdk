import { requireNativeModule } from "expo";

import {
  Bill24InstantPaymentProps,
  Bill24InstantPaymentTopUpProps,
  Bill24InstantPaymentTopUpResult,
} from "./Bill24Sdk.types";

declare class Bill24SdkModule {
  instantPaymentSdk: (
    params: Bill24InstantPaymentProps
  ) => Promise<Bill24InstantPaymentTopUpResult>;
  /**
   * Initiates the Bill24 instant payment top-up process.
   *
   * @param {Bill24InstantPaymentTopUpProps}- The top-up parameters, including userSyncCode, refererKey, language, isDarkMode, isProduction, testingEnv, amount, currency, phone, etc.
   * @returns {Promise<Bill24InstantPaymentTopUpResult>} Resolves with the top-up result object containing success status, transactionId, message, and other details.
   *
   * @example
   * const params = {
   *   paymentMethodId: "payment method id",
   *   refererKey: "3804",
   *   language: "en",
   *   isDarkMode: false,
   *   isProduction: !__DEV__,
   *   testingEnv: "DEMO",
   *   isDisplayCurrencySymbol: true
   * };
   * await Bill24PaymentModule.instantPaymentSdkTopUp(params);
   */
  instantPaymentSdkTopUp: (
    params: Bill24InstantPaymentTopUpProps
  ) => Promise<Bill24InstantPaymentTopUpResult>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<Bill24SdkModule>("Bill24Sdk");
