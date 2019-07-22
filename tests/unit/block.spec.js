import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Block from '../../src/packages/block';

describe('Block', () => {
  it('1. Block - is vue instance', () => {
    const wrapper = mount(Block);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Block - can render data attribute', () => {
    const wrapper = mount(Block);

    expect(wrapper.attributes('data-test-block')).to.equal('data-test-block');
  });

  it('3. Block - can render text in default slot', () => {
    const message = 'Block message';
    const wrapper = mount(Block, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
