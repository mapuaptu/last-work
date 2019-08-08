import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Block from './index';

describe('Block', () => {
  it('1. Block - can render data-test attribute', () => {
    const wrapper = mount(Block);
    const attribute = 'data-test-block';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Block - can render content in default slot', () => {
    const content = 'Block content';
    const wrapper = mount(Block, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
