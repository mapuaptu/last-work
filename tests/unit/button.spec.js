import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Block from '../../src/packages/block';

describe('Block', () => {
  it('Block - can render', () => {
    const message = 'Block message';
    const wrapper = mount(Block, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
