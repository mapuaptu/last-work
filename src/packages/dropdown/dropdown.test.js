import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Dropdown from './index';

describe('Dropdown', () => {
  it('1. Dropdown - can render data-test attribute', () => {
    const wrapper = mount(Dropdown);
    const attribute = 'data-test-dropdown';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Dropdown - can render content in default slot', () => {
    const content = 'Dropdown content';
    const wrapper = mount(Dropdown, {
      propsData: {
        value: true,
      },
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Dropdown - can render content in control slot', () => {
    const content = 'Dropdown content';
    const wrapper = mount(Dropdown, {
      slots: {
        control: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
