/* eslint no-unused-expressions:0 */
import {expect} from 'chai';
import Modal from '../src/sui-modal';

describe('sui-modal component test suite', () => {

  describe('sui-modal', () => {
    it('should be loaded properly', () => {
      expect(Modal).to.not.be.undefined;
    });
  });

});
