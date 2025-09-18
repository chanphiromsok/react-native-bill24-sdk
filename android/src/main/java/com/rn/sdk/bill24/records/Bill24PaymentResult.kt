package com.rn.sdk.bill24.records

import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record
import java.io.Serializable

internal class Bill24PaymentResult(
    @Field var message: String,
    @Field var success: Boolean,
) : Record, Serializable
