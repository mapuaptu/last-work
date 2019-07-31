import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Select from './index';

describe('Select', () => {
  it('1. Select - is vue instance', () => {
    const wrapper = mount(Select);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Select - can render data attribute', () => {
    const wrapper = mount(Select);
    const attribute = 'data-test-select';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Select - can render text in default slot', () => {
    const message = 'Select message';
    const wrapper = mount(Select, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
