// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  SentimentResponse,
  TextDocumentBatchStatistics,
  TextDocumentInput,
} from "./generated/models/index.js";
import type { AnalyzeSentimentResult } from "./analyzeSentimentResult.js";
import {
  makeAnalyzeSentimentErrorResult,
  makeAnalyzeSentimentResult,
} from "./analyzeSentimentResult.js";
import { combineSuccessfulAndErroneousDocumentsWithStatisticsAndModelVersion } from "./textAnalyticsResult.js";

/**
 * Array of `AnalyzeSentimentResult` objects corresponding to a batch of input documents, and
 * annotated with information about the batch operation.
 */
export interface AnalyzeSentimentResultArray extends Array<AnalyzeSentimentResult> {
  /**
   * Statistics about the input document batch and how it was processed
   * by the service. This property will have a value when includeStatistics is set to true
   * in the client call.
   */
  statistics?: TextDocumentBatchStatistics;
  /**
   * The version of the text analytics model used by this operation on this
   * batch of input documents.
   */
  modelVersion: string;
}

/**
 * @internal
 */
export function makeAnalyzeSentimentResultArray(
  input: TextDocumentInput[],
  response: SentimentResponse,
): AnalyzeSentimentResultArray {
  return combineSuccessfulAndErroneousDocumentsWithStatisticsAndModelVersion(
    input,
    response,
    makeAnalyzeSentimentResult,
    makeAnalyzeSentimentErrorResult,
  );
}
