/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Environment,
  EnvironmentsListOptionalParams,
  EnvironmentsGetOptionalParams,
  EnvironmentsGetResponse,
  EnvironmentsCreateOrUpdateOptionalParams,
  EnvironmentsCreateOrUpdateResponse,
  EnvironmentsDeleteOptionalParams,
  EnvironmentsHeadOptionalParams,
  EnvironmentsHeadResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Environments. */
export interface Environments {
  /**
   * Returns a collection of environments.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    options?: EnvironmentsListOptionalParams,
  ): PagedAsyncIterableIterator<Environment>;
  /**
   * Returns details of the environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param environmentName The name of the environment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    environmentName: string,
    options?: EnvironmentsGetOptionalParams,
  ): Promise<EnvironmentsGetResponse>;
  /**
   * Creates new or updates existing environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param environmentName The name of the environment.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    environmentName: string,
    resource: Environment,
    options?: EnvironmentsCreateOrUpdateOptionalParams,
  ): Promise<EnvironmentsCreateOrUpdateResponse>;
  /**
   * Deletes the environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param environmentName The name of the environment.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    environmentName: string,
    options?: EnvironmentsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Checks if specified environment exists.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param environmentName The name of the environment.
   * @param options The options parameters.
   */
  head(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    environmentName: string,
    options?: EnvironmentsHeadOptionalParams,
  ): Promise<EnvironmentsHeadResponse>;
}
