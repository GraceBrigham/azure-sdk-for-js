## API Report File for "@azure-tools/communication-tiering"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { CommonClientOptions } from '@azure/core-client';
import * as coreClient from '@azure/core-client';
import type { KeyCredential } from '@azure/core-auth';
import type { TokenCredential } from '@azure/core-auth';

// @public
export interface AcsTier {
    capabilities?: AcsTierCapabilities;
    tierId?: string;
    tierType?: string;
}

// @public
export interface AcsTierCapabilities {
    calling?: AcsTierCapabilitiesCalling;
    phoneNumberPurchase?: PhoneNumberPurchase[];
    sms?: AcsTierCapabilitiesSms;
    trialPhoneNumberPurchase?: TrialPhoneNumberPurchase[];
    trialPhoneNumberUsage?: TrialPhoneNumberUsage[];
}

// @public
export interface AcsTierCapabilitiesCalling {
    inbound?: CallingInbound[];
    outbound?: CallingOutbound[];
}

// @public
export interface AcsTierCapabilitiesSms {
    inbound?: SmsInbound[];
    outbound?: SmsOutbound[];
}

// @public
export interface AssetDetails {
    aadTenantAcquiredCount?: number;
    numberType?: string[];
    resourceAcquiredCount?: number;
    subscriptionAcquiredCount?: number;
    tierInfo?: AssetDetailsTierInfo;
}

// @public (undocumented)
export interface AssetDetailsModel {
    assetDetails: AssetDetails[];
}

// @public
export interface AssetDetailsTierInfo {
    acquired?: number;
    allowed?: number;
    balance?: number;
    limit?: string;
    scope?: string;
}

// @public
export interface CallingInbound {
    concurrentCalls?: number;
    geographicLimitations?: string;
    scope?: string;
    type?: string;
}

// @public
export interface CallingOutbound {
    concurrentCalls?: number;
    geographicLimitations?: string;
    scope?: string;
    type?: string;
}

// @public
export interface NumberAllotmentGetAcquiredNumberLimitsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NumberAllotmentGetAcquiredNumberLimitsResponse = AssetDetailsModel;

// @public
export interface PhoneNumberPurchase {
    numberType?: string[];
    scope?: string;
    totalNumbers?: number;
}

// @public
export interface SmsInbound {
    geographicLimitations?: string;
    scope?: string;
    smsPerMin?: number;
    type?: string;
}

// @public
export interface SmsOutbound {
    geographicLimitations?: string;
    scope?: string;
    smsPerMin?: number;
    type?: string;
}

// @public
export class TieringClient {
    constructor(connectionString: string, options?: TieringClientOptions);
    constructor(endpoint: string, credential: KeyCredential, options?: TieringClientOptions);
    constructor(endpoint: string, credential: TokenCredential, options?: TieringClientOptions);
    getAcquiredNumberLimits(resourceId: string, options?: NumberAllotmentGetAcquiredNumberLimitsOptionalParams): Promise<AssetDetailsModel>;
    getTierByResourceId(resourceId: string, options?: TieringGetByResourceIdOptionalParams): Promise<AcsTier>;
}

// @public
export interface TieringClientOptionalParams extends coreClient.ServiceClientOptions {
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface TieringClientOptions extends CommonClientOptions {
}

// @public
export interface TieringGetByResourceIdOptionalParams extends coreClient.OperationOptions {
}

// @public
export type TieringGetByResourceIdResponse = AcsTier;

// @public
export interface TrialPhoneNumberPurchase {
    numberType?: string[];
    scope?: string;
    totalNumbers?: number;
    trialPeriodDays?: number;
}

// @public
export interface TrialPhoneNumberUsage {
    calling?: TrialPhoneNumberUsageCalling;
    numberType?: string;
    sms?: TrialPhoneNumberUsageSms;
}

// @public
export interface TrialPhoneNumberUsageCalling {
    inbound?: TrialPhoneNumberUsageCallingBounds[];
    outbound?: TrialPhoneNumberUsageCallingBounds[];
}

// @public
export interface TrialPhoneNumberUsageCallingBounds {
    concurrentCalls?: number;
    maximumCallDurationMinutes?: number;
    scope?: string;
    totalMinutes?: number;
    type?: string;
}

// @public
export interface TrialPhoneNumberUsageSms {
    inbound?: TrialPhoneNumberUsageSmsBounds[];
    outbound?: TrialPhoneNumberUsageSmsBounds[];
}

// @public
export interface TrialPhoneNumberUsageSmsBounds {
    scope?: string;
    smsPerMin?: number;
    total?: number;
    type?: string;
}

// (No @packageDocumentation comment for this package)

```
