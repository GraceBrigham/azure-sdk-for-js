/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  Cluster,
  ClustersListOptionalParams,
  ClustersListByResourceGroupOptionalParams,
  ClustersCreateOptionalParams,
  ClustersCreateResponse,
  ClustersGetOptionalParams,
  ClustersGetResponse,
  ClustersDeleteOptionalParams,
  ClusterForUpdate,
  ClustersUpdateOptionalParams,
  ClustersUpdateResponse,
  ClustersRestartOptionalParams,
  ClustersRestartResponse,
  ClustersStartOptionalParams,
  ClustersStopOptionalParams,
  ClustersPromoteReadReplicaOptionalParams,
  ClustersPromoteReadReplicaResponse,
  NameAvailabilityRequest,
  ClustersCheckNameAvailabilityOptionalParams,
  ClustersCheckNameAvailabilityResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Clusters. */
export interface Clusters {
  /**
   * Lists all clusters in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: ClustersListOptionalParams,
  ): PagedAsyncIterableIterator<Cluster>;
  /**
   * Lists all clusters in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ClustersListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Cluster>;
  /**
   * Creates a new cluster with servers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param parameters The required parameters for creating or updating a cluster.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    clusterName: string,
    parameters: Cluster,
    options?: ClustersCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersCreateResponse>,
      ClustersCreateResponse
    >
  >;
  /**
   * Creates a new cluster with servers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param parameters The required parameters for creating or updating a cluster.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: Cluster,
    options?: ClustersCreateOptionalParams,
  ): Promise<ClustersCreateResponse>;
  /**
   * Gets information about a cluster such as compute and storage configuration and cluster lifecycle
   * metadata such as cluster creation date and time.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersGetOptionalParams,
  ): Promise<ClustersGetResponse>;
  /**
   * Deletes a cluster together with servers in it.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a cluster together with servers in it.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Updates an existing cluster. The request body can contain one or several properties from the cluster
   * definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for updating a cluster.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterForUpdate,
    options?: ClustersUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersUpdateResponse>,
      ClustersUpdateResponse
    >
  >;
  /**
   * Updates an existing cluster. The request body can contain one or several properties from the cluster
   * definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param parameters The parameters for updating a cluster.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    parameters: ClusterForUpdate,
    options?: ClustersUpdateOptionalParams,
  ): Promise<ClustersUpdateResponse>;
  /**
   * Restarts all nodes in the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginRestart(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersRestartOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersRestartResponse>,
      ClustersRestartResponse
    >
  >;
  /**
   * Restarts all nodes in the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginRestartAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersRestartOptionalParams,
  ): Promise<ClustersRestartResponse>;
  /**
   * Starts stopped compute on all cluster nodes.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersStartOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Starts stopped compute on all cluster nodes.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersStartOptionalParams,
  ): Promise<void>;
  /**
   * Stops compute on all cluster nodes.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginStop(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersStopOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Stops compute on all cluster nodes.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginStopAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersStopOptionalParams,
  ): Promise<void>;
  /**
   * Promotes read replica cluster to an independent read-write cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginPromoteReadReplica(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersPromoteReadReplicaOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ClustersPromoteReadReplicaResponse>,
      ClustersPromoteReadReplicaResponse
    >
  >;
  /**
   * Promotes read replica cluster to an independent read-write cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  beginPromoteReadReplicaAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: ClustersPromoteReadReplicaOptionalParams,
  ): Promise<ClustersPromoteReadReplicaResponse>;
  /**
   * Checks availability of a cluster name. Cluster names should be globally unique; at least 3
   * characters and at most 40 characters long; they must only contain lowercase letters, numbers, and
   * hyphens; and must not start or end with a hyphen.
   * @param nameAvailabilityRequest The required parameters for checking if cluster name is available.
   * @param options The options parameters.
   */
  checkNameAvailability(
    nameAvailabilityRequest: NameAvailabilityRequest,
    options?: ClustersCheckNameAvailabilityOptionalParams,
  ): Promise<ClustersCheckNameAvailabilityResponse>;
}
