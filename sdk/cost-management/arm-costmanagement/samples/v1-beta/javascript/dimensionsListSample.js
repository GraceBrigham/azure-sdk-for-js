/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CostManagementClient } = require("@azure/arm-costmanagement");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/BillingAccountDimensionsList.json
 */
async function billingAccountDimensionsListLegacy() {
  const scope = "providers/Microsoft.Billing/billingAccounts/100";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCABillingAccountDimensionsList.json
 */
async function billingAccountDimensionsListMca() {
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:6789";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/BillingAccountDimensionsListExpandAndTop.json
 */
async function billingAccountDimensionsListExpandAndTopLegacy() {
  const scope = "providers/Microsoft.Billing/billingAccounts/100";
  const expand = "properties/data";
  const top = 5;
  const options = { expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCABillingAccountDimensionsListExpandAndTop.json
 */
async function billingAccountDimensionsListExpandAndTopMca() {
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:6789";
  const expand = "properties/data";
  const top = 5;
  const options = { expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/BillingAccountDimensionsListWithFilter.json
 */
async function billingAccountDimensionsListWithFilterLegacy() {
  const scope = "providers/Microsoft.Billing/billingAccounts/100";
  const filter = "properties/category eq 'resourceId'";
  const expand = "properties/data";
  const top = 5;
  const options = { filter, expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCABillingAccountDimensionsListWithFilter.json
 */
async function billingAccountDimensionsListWithFilterMca() {
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:6789";
  const filter = "properties/category eq 'resourceId'";
  const expand = "properties/data";
  const top = 5;
  const options = { filter, expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCABillingProfileDimensionsList.json
 */
async function billingProfileDimensionsListMca() {
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:6789/billingProfiles/13579";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCABillingProfileDimensionsListExpandAndTop.json
 */
async function billingProfileDimensionsListExpandAndTopMca() {
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:6789/billingProfiles/13579";
  const expand = "properties/data";
  const top = 5;
  const options = { expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCABillingProfileDimensionsListWithFilter.json
 */
async function billingProfileDimensionsListWithFilterMca() {
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:6789/billingProfiles/13579";
  const filter = "properties/category eq 'resourceId'";
  const expand = "properties/data";
  const top = 5;
  const options = { filter, expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCACustomerDimensionsList.json
 */
async function customerDimensionsListMca() {
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:6789/customers/5678";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCACustomerDimensionsListExpandAndTop.json
 */
async function customerDimensionsListExpandAndTopMca() {
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:6789/customers/5678";
  const expand = "properties/data";
  const top = 5;
  const options = { expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCACustomerDimensionsListWithFilter.json
 */
async function customerDimensionsListWithFilterMca() {
  const scope = "providers/Microsoft.Billing/billingAccounts/12345:6789/customers/5678";
  const filter = "properties/category eq 'resourceId'";
  const expand = "properties/data";
  const top = 5;
  const options = { filter, expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/DepartmentDimensionsList.json
 */
async function departmentDimensionsListLegacy() {
  const scope = "providers/Microsoft.Billing/billingAccounts/100/departments/123";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/DepartmentDimensionsListExpandAndTop.json
 */
async function departmentDimensionsListExpandAndTopLegacy() {
  const scope = "providers/Microsoft.Billing/billingAccounts/100/departments/123";
  const expand = "properties/data";
  const top = 5;
  const options = { expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/DepartmentDimensionsListWithFilter.json
 */
async function departmentDimensionsListWithFilterLegacy() {
  const scope = "providers/Microsoft.Billing/billingAccounts/100/departments/123";
  const filter = "properties/category eq 'resourceId'";
  const expand = "properties/data";
  const top = 5;
  const options = { filter, expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/EnrollmentAccountDimensionsList.json
 */
async function enrollmentAccountDimensionsListLegacy() {
  const scope = "providers/Microsoft.Billing/billingAccounts/100/enrollmentAccounts/456";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/EnrollmentAccountDimensionsListExpandAndTop.json
 */
async function enrollmentAccountDimensionsListExpandAndTopLegacy() {
  const scope = "providers/Microsoft.Billing/billingAccounts/100/enrollmentAccounts/456";
  const expand = "properties/data";
  const top = 5;
  const options = { expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/EnrollmentAccountDimensionsListWithFilter.json
 */
async function enrollmentAccountDimensionsListWithFilterLegacy() {
  const scope = "providers/Microsoft.Billing/billingAccounts/100/enrollmentAccounts/456";
  const filter = "properties/category eq 'resourceId'";
  const expand = "properties/data";
  const top = 5;
  const options = { filter, expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCAInvoiceSectionDimensionsList.json
 */
async function invoiceSectionDimensionsListMca() {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/12345:6789/billingProfiles/13579/invoiceSections/9876";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCAInvoiceSectionDimensionsListExpandAndTop.json
 */
async function invoiceSectionDimensionsListExpandAndTopMca() {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/12345:6789/billingProfiles/13579/invoiceSections/9876";
  const expand = "properties/data";
  const top = 5;
  const options = { expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/MCAInvoiceSectionDimensionsListWithFilter.json
 */
async function invoiceSectionDimensionsListWithFilterMca() {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/12345:6789/billingProfiles/13579/invoiceSections/9876";
  const filter = "properties/category eq 'resourceId'";
  const expand = "properties/data";
  const top = 5;
  const options = { filter, expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ManagementGroupDimensionsList.json
 */
async function managementGroupDimensionsListLegacy() {
  const scope = "providers/Microsoft.Management/managementGroups/MyMgId";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ManagementGroupDimensionsListExpandAndTop.json
 */
async function managementGroupDimensionsListExpandAndTopLegacy() {
  const scope = "providers/Microsoft.Management/managementGroups/MyMgId";
  const expand = "properties/data";
  const top = 5;
  const options = { expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ManagementGroupDimensionsListWithFilter.json
 */
async function managementGroupDimensionsListWithFilterLegacy() {
  const scope = "providers/Microsoft.Management/managementGroups/MyMgId";
  const filter = "properties/category eq 'resourceId'";
  const expand = "properties/data";
  const top = 5;
  const options = { filter, expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ResourceGroupDimensionsList.json
 */
async function resourceGroupDimensionsListLegacy() {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/system.orlando";
  const expand = "properties/data";
  const top = 5;
  const options = { expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the dimensions by the defined scope.
 *
 * @summary Lists the dimensions by the defined scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/SubscriptionDimensionsList.json
 */
async function subscriptionDimensionsListLegacy() {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const expand = "properties/data";
  const top = 5;
  const options = { expand, top };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.dimensions.list(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  billingAccountDimensionsListLegacy();
  billingAccountDimensionsListMca();
  billingAccountDimensionsListExpandAndTopLegacy();
  billingAccountDimensionsListExpandAndTopMca();
  billingAccountDimensionsListWithFilterLegacy();
  billingAccountDimensionsListWithFilterMca();
  billingProfileDimensionsListMca();
  billingProfileDimensionsListExpandAndTopMca();
  billingProfileDimensionsListWithFilterMca();
  customerDimensionsListMca();
  customerDimensionsListExpandAndTopMca();
  customerDimensionsListWithFilterMca();
  departmentDimensionsListLegacy();
  departmentDimensionsListExpandAndTopLegacy();
  departmentDimensionsListWithFilterLegacy();
  enrollmentAccountDimensionsListLegacy();
  enrollmentAccountDimensionsListExpandAndTopLegacy();
  enrollmentAccountDimensionsListWithFilterLegacy();
  invoiceSectionDimensionsListMca();
  invoiceSectionDimensionsListExpandAndTopMca();
  invoiceSectionDimensionsListWithFilterMca();
  managementGroupDimensionsListLegacy();
  managementGroupDimensionsListExpandAndTopLegacy();
  managementGroupDimensionsListWithFilterLegacy();
  resourceGroupDimensionsListLegacy();
  subscriptionDimensionsListLegacy();
}

main().catch(console.error);