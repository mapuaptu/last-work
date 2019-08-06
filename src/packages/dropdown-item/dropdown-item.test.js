import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import DropdownItem from './index';

describe('DropdownItem', () => {
  it('1. DropdownItem - is vue instance', () => {
    const wrapper = mount(DropdownItem);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. DropdownItem - can render data attribute', () => {
    const wrapper = mount(DropdownItem);
    const attribute = 'data-test-dropdown-item';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. DropdownItem - can render text in default slot', () => {
    const message = 'DropdownItem message';
    const wrapper = mount(DropdownItem, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });

  it('3. DropdownItem - can render icon', () => {
    const wrapper = mount(DropdownItem, {
      propsData: {
        icon: 'circle',
      },
    });

    expect(wrapper.contains('i')).to.equal(true);
  });
});
