/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  NameAvailabilityParameters as NameAvailabilityParametersMapper,
  WebPubSubResource as WebPubSubResourceMapper,
  RegenerateKeyParameters as RegenerateKeyParametersMapper,
  CustomCertificate as CustomCertificateMapper,
  CustomDomain as CustomDomainMapper,
  WebPubSubHub as WebPubSubHubMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  Replica as ReplicaMapper,
  SharedPrivateLinkResource as SharedPrivateLinkResourceMapper,
} from "../models/mappers.js";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2024-03-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: NameAvailabilityParametersMapper,
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "Uuid",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$"),
      MaxLength: 63,
      MinLength: 3,
    },
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: WebPubSubResourceMapper,
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: RegenerateKeyParametersMapper,
};

export const replicaName: OperationURLParameter = {
  parameterPath: "replicaName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$"),
      MaxLength: 63,
      MinLength: 3,
    },
    serializedName: "replicaName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const certificateName: OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    serializedName: "certificateName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: CustomCertificateMapper,
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: CustomDomainMapper,
};

export const hubName: OperationURLParameter = {
  parameterPath: "hubName",
  mapper: {
    serializedName: "hubName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: WebPubSubHubMapper,
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper,
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: ReplicaMapper,
};

export const sharedPrivateLinkResourceName: OperationURLParameter = {
  parameterPath: "sharedPrivateLinkResourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$"),
      MaxLength: 63,
      MinLength: 3,
    },
    serializedName: "sharedPrivateLinkResourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: SharedPrivateLinkResourceMapper,
};
