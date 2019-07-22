import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import InputSplit from '../../src/packages/input-split';

describe('InputSplit', () => {
  it('1. InputSplit - is vue instance', () => {
    const wrapper = mount(InputSplit);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. InputSplit - can render data attribute', () => {
    const wrapper = mount(InputSplit);
    const attribute = 'data-test-input-split';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. InputSplit - can render text in default slot', () => {
    const message = 'InputSplit message';
    const wrapper = mount(InputSplit, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
