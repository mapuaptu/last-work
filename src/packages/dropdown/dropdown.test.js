import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Dropdown from './index';

describe('Dropdown', () => {
  it('1. Dropdown - is vue instance', () => {
    const wrapper = mount(Dropdown);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Dropdown - can render data attribute', () => {
    const wrapper = mount(Dropdown);
    const attribute = 'data-test-dropdown';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Dropdown - can render text in default slot', () => {
    const message = 'Dropdown message';
    const wrapper = mount(Dropdown, {
      propsData: {
        value: true,
      },
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
