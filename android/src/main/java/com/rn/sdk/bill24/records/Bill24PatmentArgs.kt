package com.rn.sdk.bill24.records

import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record
import java.io.Serializable

internal open class Bill24InstantPaymentSdk(
    @Field var userSyncCode: String,
    @Field var refererKey: String,
    @Field var language: String? = "en",
    @Field var isDarkMode: Boolean = false,
    @Field var isProduction: Boolean = false,
    @Field var testingEnv: String? = "STAG",
    @Field var isDisplayCurrencySymbol: Boolean = false
) : Record, Serializable

internal open class Bill24InstantPaymentTopUp(
    @Field var paymentMethodId: String,
    @Field var refererKey: String,
    @Field var language: String?,
    @Field var isProduction: Boolean = false,
    @Field var isDarkMode: Boolean,
    @Field var testingEnv: String? = "STAG",
    @Field var isDisplayCurrencySymbol: Boolean = false
) : Record, Serializable