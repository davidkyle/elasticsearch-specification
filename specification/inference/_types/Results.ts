/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { float } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Sparse Embedding tokens are represented as a dictionary
 * of string to double.
 */

export type SparseVector = Dictionary<string, float>

/**
 * Text Embedding results are represented as Dense Vectors
 * of doubles.
 */
export type DenseVector = Array<float>

/**
 * Inference result is the union of all the result types
 */
export type InferenceResult = SparseVector | DenseVector
