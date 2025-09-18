import ExpoModulesCore
import B24PaymentSdk

public class Bill24SdkModule: Module {

  public func definition() -> ModuleDefinition {

    Name("Bill24Sdk")

    AsyncFunction("initializePayment") {
            (param: Bill24InstantPaymentSdk) -> [String: Any] in

            if param.userSyncCode.isEmpty {
                return [
                    "message": "userSyncCode is required",
                    "success": false,
                ]
            }
            if param.refererKey.isEmpty {
                return [
                    "message": "refererKey is required",
                    "success": false,
                ]
            }

            guard
                let presentingViewController = self.appContext?.utilities?
                    .currentViewController()
            else {

                return [
                    "message": "failed to get current view controller",
                    "success": false,
                ]

            }

            B24PaymentSdk.instantPaymentSdk(
                from: presentingViewController,
                userSynCode: param.userSyncCode,
                refererKey: param.refererKey,
                language: param.language,
                isDarkMode: param.isDarkMode,
                isProduction: param.isProduction,
                testingEnv: param.testingEnv,
                isDisplayCurrencySymbol: param.isDisplayCurrencySymbol
            )

            return [
                "message": "Instant Payment SDK initialized successfully",
                "success": true,
            ]

        }.runOnQueue(.main)

        AsyncFunction("instantPaymentSdkTopUp") {
            (param: BIll24InstantPaymentTopUp) -> [String: Any] in
            if param.paymentMethodId.isEmpty {
                return [
                    "message": "paymentMethodId is required",
                    "success": false,
                ]
            }
            if param.refererKey.isEmpty {
                return [
                    "message": "refererKey is required",
                    "success": false,
                ]
            }
            guard
                let presentingViewController = self.appContext?.utilities?
                    .currentViewController()
            else {
                return [
                    "message": "failed to get current view controller",
                    "success": false,
                ]
            }
            B24PaymentSdk.instantPaymentSdkTopUp(
                from: presentingViewController,
                paymentMethodId: param.paymentMethodId,
                refererKey: param.refererKey,
                language: param.language,
                isDarkMode: param.isDarkMode,
                isProduction: param.isProduction,
                testingEnv: param.testingEnv,
                isDisplayCurrencySymbol: param.isDisplayCurrencySymbol
            )

            return [
                "message": "Instant Payment SDK Top Up initialized successfully",
                "success": true,
            ]
        }.runOnQueue(.main)

    }
}
