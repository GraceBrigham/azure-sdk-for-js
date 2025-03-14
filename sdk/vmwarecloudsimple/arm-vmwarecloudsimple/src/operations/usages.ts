/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Usages } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { VMwareCloudSimple } from "../vMwareCloudSimple.js";
import {
  Usage,
  UsagesListNextOptionalParams,
  UsagesListOptionalParams,
  UsagesListResponse,
  UsagesListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Usages operations. */
export class UsagesImpl implements Usages {
  private readonly client: VMwareCloudSimple;

  /**
   * Initialize a new instance of the class Usages class.
   * @param client Reference to the service client
   */
  constructor(client: VMwareCloudSimple) {
    this.client = client;
  }

  /**
   * Returns list of usage in region
   * @param regionId The region Id (westus, eastus)
   * @param options The options parameters.
   */
  public list(
    regionId: string,
    options?: UsagesListOptionalParams
  ): PagedAsyncIterableIterator<Usage> {
    const iter = this.listPagingAll(regionId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(regionId, options, settings);
      }
    };
  }

  private async *listPagingPage(
    regionId: string,
    options?: UsagesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Usage[]> {
    let result: UsagesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(regionId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(regionId, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    regionId: string,
    options?: UsagesListOptionalParams
  ): AsyncIterableIterator<Usage> {
    for await (const page of this.listPagingPage(regionId, options)) {
      yield* page;
    }
  }

  /**
   * Returns list of usage in region
   * @param regionId The region Id (westus, eastus)
   * @param options The options parameters.
   */
  private _list(
    regionId: string,
    options?: UsagesListOptionalParams
  ): Promise<UsagesListResponse> {
    return this.client.sendOperationRequest(
      { regionId, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param regionId The region Id (westus, eastus)
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    regionId: string,
    nextLink: string,
    options?: UsagesListNextOptionalParams
  ): Promise<UsagesListNextResponse> {
    return this.client.sendOperationRequest(
      { regionId, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResponse
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.regionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResponse
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.regionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
