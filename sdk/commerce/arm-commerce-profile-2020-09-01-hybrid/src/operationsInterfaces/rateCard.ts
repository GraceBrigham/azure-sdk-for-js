/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { RateCardGetOptionalParams, RateCardGetResponse } from "../models/index.js";

/** Interface representing a RateCard. */
export interface RateCard {
  /**
   * Enables you to query for the resource/meter metadata and related prices used in a given subscription
   * by Offer ID, Currency, Locale and Region. The metadata associated with the billing meters, including
   * but not limited to service names, types, resources, units of measure, and regions, is subject to
   * change at any time and without notice. If you intend to use this billing data in an automated
   * fashion, please use the billing meter GUID to uniquely identify each billable item. If the billing
   * meter GUID is scheduled to change due to a new billing model, you will be notified in advance of the
   * change.
   * @param filter The filter to apply on the operation. It ONLY supports the 'eq' and 'and' logical
   *               operators at this time. All the 4 query parameters 'OfferDurableId',  'Currency', 'Locale', 'Region'
   *               are required to be a part of the $filter.
   * @param options The options parameters.
   */
  get(
    filter: string,
    options?: RateCardGetOptionalParams
  ): Promise<RateCardGetResponse>;
}
