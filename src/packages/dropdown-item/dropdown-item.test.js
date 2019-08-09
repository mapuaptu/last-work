import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import DropdownItem from './index';

describe('DropdownItem', () => {
  it('1. DropdownItem - can render data-test attribute', () => {
    const wrapper = mount(DropdownItem);
    const attribute = 'data-test-dropdown-item';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. DropdownItem - can render content in default slot', () => {
    const content = 'DropdownItem content';
    const wrapper = mount(DropdownItem, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
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
