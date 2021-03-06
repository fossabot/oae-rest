/*!
 * Copyright 2014 Apereo Foundation (AF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

const RestUtil = require('./util');

/**
 * Perform a signed redirect request to UserVoice. The result of this method
 *
 * @param  {RestContext}    restCtx         The context of the current request
 * @param  {Function}       callback        Standard callback function
 * @param  {Object}         callback.err    An error that occurred, if any
 */
const redirect = (restCtx, callback) => {
  return RestUtil.performRestRequest(restCtx, '/api/uservoice/redirect', 'POST', null, callback);
};

module.exports = {
  redirect
};
