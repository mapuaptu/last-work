import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Input from './index';

describe('Input', () => {
  it('1. Input - is vue instance', () => {
    const wrapper = mount(Input);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Input - can render data attribute', () => {
    const wrapper = mount(Input);
    const attribute = 'data-test-input';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Input - can render text in default slot', () => {
    const message = 'Input message';
    const wrapper = mount(Input, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
