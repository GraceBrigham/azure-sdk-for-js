/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { TrafficFilters } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftElastic } from "../microsoftElastic";
import { TrafficFiltersDeleteOptionalParams } from "../models";

/** Class containing TrafficFilters operations. */
export class TrafficFiltersImpl implements TrafficFilters {
  private readonly client: MicrosoftElastic;

  /**
   * Initialize a new instance of the class TrafficFilters class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftElastic) {
    this.client = client;
  }

  /**
   * Delete traffic filter from the account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    monitorName: string,
    options?: TrafficFiltersDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, options },
      deleteOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/deleteTrafficFilter",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.rulesetId],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
