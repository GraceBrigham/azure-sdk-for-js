/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ServerAdvancedThreatProtection,
  SqlManagementClient,
} from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates an Advanced Threat Protection state.
 *
 * @summary Creates or updates an Advanced Threat Protection state.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-11-01-preview/examples/ServerAdvancedThreatProtectionSettingsCreateMax.json
 */
async function updateAServerAdvancedThreatProtectionSettingsWithAllParameters(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "threatprotection-4799";
  const serverName = "threatprotection-6440";
  const advancedThreatProtectionName = "Default";
  const parameters: ServerAdvancedThreatProtection = { state: "Enabled" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result =
    await client.serverAdvancedThreatProtectionSettings.beginCreateOrUpdateAndWait(
      resourceGroupName,
      serverName,
      advancedThreatProtectionName,
      parameters,
    );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an Advanced Threat Protection state.
 *
 * @summary Creates or updates an Advanced Threat Protection state.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-11-01-preview/examples/ServerAdvancedThreatProtectionSettingsCreateMin.json
 */
async function updateAServerAdvancedThreatProtectionSettingsWithMinimalParameters(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "threatprotection-4799";
  const serverName = "threatprotection-6440";
  const advancedThreatProtectionName = "Default";
  const parameters: ServerAdvancedThreatProtection = { state: "Disabled" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result =
    await client.serverAdvancedThreatProtectionSettings.beginCreateOrUpdateAndWait(
      resourceGroupName,
      serverName,
      advancedThreatProtectionName,
      parameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  updateAServerAdvancedThreatProtectionSettingsWithAllParameters();
  updateAServerAdvancedThreatProtectionSettingsWithMinimalParameters();
}

main().catch(console.error);
