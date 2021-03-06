/*
 * Copyright 2015-2016 Imply Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { expect } from 'chai';
import * as sinon from 'sinon';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';
import { mockRequireEnsure } from '../../utils/test-utils/index';

import { EssenceMock, TimekeeperMock } from '../../../common/models/mocks';

describe('FilterTile', () => {
  var { FilterTile } = mockRequireEnsure('./filter-tile');

  it('adds the correct class', () => {
    var renderedComponent = TestUtils.renderIntoDocument(
      <FilterTile
        clicker={null}
        essence={EssenceMock.wikiTotals()}
        timekeeper={TimekeeperMock.fixed()}
        menuStage={null}
      />
    );

    expect(TestUtils.isCompositeComponent(renderedComponent), 'should be composite').to.equal(true);
    expect((ReactDOM.findDOMNode(renderedComponent) as any).className, 'should contain class').to.contain('filter-tile');
  });

});
