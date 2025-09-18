package com.rn.sdk.bill24

import android.content.Context
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.exception.Exceptions
import expo.modules.kotlin.functions.Queues
import com.bill24.b24paymentsdk.main.B24PaymentSdk
import com.rn.sdk.bill24.records.Bill24InstantPaymentSdk
import com.rn.sdk.bill24.records.Bill24InstantPaymentTopUp
import com.rn.sdk.bill24.records.Bill24PaymentResult

class Bill24SdkModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('Bill24Sdk')` in JavaScript.
    Name("Bill24Sdk")

    AsyncFunction("instantPaymentSdk") { params: Bill24InstantPaymentSdk ->
            if (params.userSyncCode.isBlank()) {
                return@AsyncFunction Bill24PaymentResult(
                    "userSyncCode is required", false
                )
            }
            if (params.refererKey.isBlank()) {
                return@AsyncFunction Bill24PaymentResult("refererKey is required", false)
            }
             B24PaymentSdk.instantPaymentSdk(
                 context,
                 params.userSyncCode,
                 params.refererKey,
                 params.language,
                 params.isDarkMode,
                 params.isProduction,
                 params.testingEnv,
                 params.isDisplayCurrencySymbol
             )
            return@AsyncFunction Bill24PaymentResult(
                "Instant Payment SDK initialized successfully", true
            )
        }.runOnQueue(Queues.MAIN)

        AsyncFunction("instantPaymentSdkTopUp") { params: Bill24InstantPaymentTopUp ->
            if (params.paymentMethodId.isBlank()) {
                return@AsyncFunction Bill24PaymentResult(
                    "paymentMethodId is required", false
                )
            }
            if (params.refererKey.isBlank()) {
                return@AsyncFunction Bill24PaymentResult(
                    "refererKey is required", false
                )
            }
             B24PaymentSdk.instantPaymentSdkTopUp(
                 currentActivity, // Use activity context instead
                 params.paymentMethodId,
                 params.refererKey,
                 params.language,
                 params.isDarkMode,
                 params.isProduction,
                 params.testingEnv,
                 params.isDisplayCurrencySymbol
             )
            return@AsyncFunction Bill24PaymentResult(
                "Instant Payment SDK Top Up initialized successfully", true
            )
        }.runOnQueue(Queues.MAIN)
    }

    private val context: Context
        get() = requireNotNull(appContext.reactContext) { "React Application Context is null" }

    private val currentActivity
        get() = appContext.currentActivity ?: throw Exceptions.MissingActivity()
}
