import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import InputSplit from './index';

describe('InputSplit', () => {
  it('1. InputSplit - can render data-test attribute', () => {
    const wrapper = mount(InputSplit);
    const attribute = 'data-test-input-split';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. InputSplit - can render content in default slot', () => {
    const content = 'InputSplit content';
    const wrapper = mount(InputSplit, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
