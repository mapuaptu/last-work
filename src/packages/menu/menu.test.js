import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Menu from './index';

describe('Menu', () => {
  it('1. Menu - can render data-test attribute', () => {
    const wrapper = mount(Menu);
    const attribute = 'data-test-menu';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Menu - can render content in default slot', () => {
    const content = 'Modal content';
    const wrapper = mount(Menu, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Menu - click can trigger open menu', () => {
    const wrapper = mount(Menu);
    const toggle = wrapper.find({ ref: 'toggle' });

    toggle.trigger('click');

    expect(wrapper.vm.mobileOpen).to.equal(true);
  });
});
