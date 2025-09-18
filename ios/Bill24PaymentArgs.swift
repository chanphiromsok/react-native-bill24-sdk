//
//  Bill24PaymentArgs.swift
//  Pods
//
//  Created by Phirom 7/25/25.
//
import ExpoModulesCore

internal struct Bill24InstantPaymentSdk: Record {
    @Field var userSyncCode: String
    @Field var refererKey: String
    @Field var language: String? = "en"
    @Field var isDarkMode: Bool = false
    @Field var isProduction: Bool = false
    @Field var testingEnv: String? = "STAG"
    @Field var isDisplayCurrencySymbol: Bool? = false
}

internal struct BIll24InstantPaymentTopUp: Record{
    @Field var paymentMethodId: String
    @Field var refererKey: String
    @Field var language: String?
    @Field var isProduction: Bool = false
    @Field var isDarkMode: Bool
    @Field var testingEnv: String? = "STAG"
    @Field var isDisplayCurrencySymbol: Bool? = false
}
