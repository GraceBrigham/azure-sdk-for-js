/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { OracleSubscriptions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { OracleDatabaseManagementClient } from "../oracleDatabaseManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  OracleSubscription,
  OracleSubscriptionsListBySubscriptionNextOptionalParams,
  OracleSubscriptionsListBySubscriptionOptionalParams,
  OracleSubscriptionsListBySubscriptionResponse,
  OracleSubscriptionsGetOptionalParams,
  OracleSubscriptionsGetResponse,
  OracleSubscriptionsCreateOrUpdateOptionalParams,
  OracleSubscriptionsCreateOrUpdateResponse,
  OracleSubscriptionUpdate,
  OracleSubscriptionsUpdateOptionalParams,
  OracleSubscriptionsUpdateResponse,
  OracleSubscriptionsDeleteOptionalParams,
  OracleSubscriptionsDeleteResponse,
  OracleSubscriptionsListActivationLinksOptionalParams,
  OracleSubscriptionsListActivationLinksResponse,
  OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  OracleSubscriptionsListCloudAccountDetailsResponse,
  OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  OracleSubscriptionsListSaasSubscriptionDetailsResponse,
  OracleSubscriptionsListBySubscriptionNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing OracleSubscriptions operations. */
export class OracleSubscriptionsImpl implements OracleSubscriptions {
  private readonly client: OracleDatabaseManagementClient;

  /**
   * Initialize a new instance of the class OracleSubscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: OracleDatabaseManagementClient) {
    this.client = client;
  }

  /**
   * List OracleSubscription resources by subscription ID
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: OracleSubscriptionsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<OracleSubscription> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: OracleSubscriptionsListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<OracleSubscription[]> {
    let result: OracleSubscriptionsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: OracleSubscriptionsListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<OracleSubscription> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List OracleSubscription resources by subscription ID
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: OracleSubscriptionsListBySubscriptionOptionalParams,
  ): Promise<OracleSubscriptionsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Get a OracleSubscription
   * @param options The options parameters.
   */
  get(
    options?: OracleSubscriptionsGetOptionalParams,
  ): Promise<OracleSubscriptionsGetResponse> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }

  /**
   * Create a OracleSubscription
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resource: OracleSubscription,
    options?: OracleSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OracleSubscriptionsCreateOrUpdateResponse>,
      OracleSubscriptionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<OracleSubscriptionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resource, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      OracleSubscriptionsCreateOrUpdateResponse,
      OperationState<OracleSubscriptionsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a OracleSubscription
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resource: OracleSubscription,
    options?: OracleSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<OracleSubscriptionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(resource, options);
    return poller.pollUntilDone();
  }

  /**
   * Update a OracleSubscription
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdate(
    properties: OracleSubscriptionUpdate,
    options?: OracleSubscriptionsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OracleSubscriptionsUpdateResponse>,
      OracleSubscriptionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<OracleSubscriptionsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { properties, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      OracleSubscriptionsUpdateResponse,
      OperationState<OracleSubscriptionsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a OracleSubscription
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    properties: OracleSubscriptionUpdate,
    options?: OracleSubscriptionsUpdateOptionalParams,
  ): Promise<OracleSubscriptionsUpdateResponse> {
    const poller = await this.beginUpdate(properties, options);
    return poller.pollUntilDone();
  }

  /**
   * Delete a OracleSubscription
   * @param options The options parameters.
   */
  async beginDelete(
    options?: OracleSubscriptionsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OracleSubscriptionsDeleteResponse>,
      OracleSubscriptionsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<OracleSubscriptionsDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      OracleSubscriptionsDeleteResponse,
      OperationState<OracleSubscriptionsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a OracleSubscription
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    options?: OracleSubscriptionsDeleteOptionalParams,
  ): Promise<OracleSubscriptionsDeleteResponse> {
    const poller = await this.beginDelete(options);
    return poller.pollUntilDone();
  }

  /**
   * List Activation Links
   * @param options The options parameters.
   */
  async beginListActivationLinks(
    options?: OracleSubscriptionsListActivationLinksOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OracleSubscriptionsListActivationLinksResponse>,
      OracleSubscriptionsListActivationLinksResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<OracleSubscriptionsListActivationLinksResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { options },
      spec: listActivationLinksOperationSpec,
    });
    const poller = await createHttpPoller<
      OracleSubscriptionsListActivationLinksResponse,
      OperationState<OracleSubscriptionsListActivationLinksResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * List Activation Links
   * @param options The options parameters.
   */
  async beginListActivationLinksAndWait(
    options?: OracleSubscriptionsListActivationLinksOptionalParams,
  ): Promise<OracleSubscriptionsListActivationLinksResponse> {
    const poller = await this.beginListActivationLinks(options);
    return poller.pollUntilDone();
  }

  /**
   * List Cloud Account Details
   * @param options The options parameters.
   */
  async beginListCloudAccountDetails(
    options?: OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OracleSubscriptionsListCloudAccountDetailsResponse>,
      OracleSubscriptionsListCloudAccountDetailsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<OracleSubscriptionsListCloudAccountDetailsResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { options },
      spec: listCloudAccountDetailsOperationSpec,
    });
    const poller = await createHttpPoller<
      OracleSubscriptionsListCloudAccountDetailsResponse,
      OperationState<OracleSubscriptionsListCloudAccountDetailsResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * List Cloud Account Details
   * @param options The options parameters.
   */
  async beginListCloudAccountDetailsAndWait(
    options?: OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  ): Promise<OracleSubscriptionsListCloudAccountDetailsResponse> {
    const poller = await this.beginListCloudAccountDetails(options);
    return poller.pollUntilDone();
  }

  /**
   * List Saas Subscription Details
   * @param options The options parameters.
   */
  async beginListSaasSubscriptionDetails(
    options?: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<OracleSubscriptionsListSaasSubscriptionDetailsResponse>,
      OracleSubscriptionsListSaasSubscriptionDetailsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<OracleSubscriptionsListSaasSubscriptionDetailsResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { options },
      spec: listSaasSubscriptionDetailsOperationSpec,
    });
    const poller = await createHttpPoller<
      OracleSubscriptionsListSaasSubscriptionDetailsResponse,
      OperationState<OracleSubscriptionsListSaasSubscriptionDetailsResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * List Saas Subscription Details
   * @param options The options parameters.
   */
  async beginListSaasSubscriptionDetailsAndWait(
    options?: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  ): Promise<OracleSubscriptionsListSaasSubscriptionDetailsResponse> {
    const poller = await this.beginListSaasSubscriptionDetails(options);
    return poller.pollUntilDone();
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: OracleSubscriptionsListBySubscriptionNextOptionalParams,
  ): Promise<OracleSubscriptionsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OracleSubscriptionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OracleSubscription,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.OracleSubscription,
    },
    201: {
      bodyMapper: Mappers.OracleSubscription,
    },
    202: {
      bodyMapper: Mappers.OracleSubscription,
    },
    204: {
      bodyMapper: Mappers.OracleSubscription,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.OracleSubscription,
    },
    201: {
      bodyMapper: Mappers.OracleSubscription,
    },
    202: {
      bodyMapper: Mappers.OracleSubscription,
    },
    204: {
      bodyMapper: Mappers.OracleSubscription,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.properties3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.OracleSubscriptionsDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.OracleSubscriptionsDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.OracleSubscriptionsDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.OracleSubscriptionsDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listActivationLinksOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listActivationLinks",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ActivationLinks,
    },
    201: {
      bodyMapper: Mappers.ActivationLinks,
    },
    202: {
      bodyMapper: Mappers.ActivationLinks,
    },
    204: {
      bodyMapper: Mappers.ActivationLinks,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listCloudAccountDetailsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listCloudAccountDetails",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CloudAccountDetails,
    },
    201: {
      bodyMapper: Mappers.CloudAccountDetails,
    },
    202: {
      bodyMapper: Mappers.CloudAccountDetails,
    },
    204: {
      bodyMapper: Mappers.CloudAccountDetails,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSaasSubscriptionDetailsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listSaasSubscriptionDetails",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SaasSubscriptionDetails,
    },
    201: {
      bodyMapper: Mappers.SaasSubscriptionDetails,
    },
    202: {
      bodyMapper: Mappers.SaasSubscriptionDetails,
    },
    204: {
      bodyMapper: Mappers.SaasSubscriptionDetails,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OracleSubscriptionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
