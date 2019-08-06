import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Menu from './index';

describe('Menu', () => {
  it('1. Menu - is vue instance', () => {
    const wrapper = mount(Menu);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Menu - can render data attribute', () => {
    const wrapper = mount(Menu);
    const attribute = 'data-test-menu';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Menu - can render text in default slot', () => {
    const message = 'Modal message';
    const wrapper = mount(Menu, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });

  it('4. Menu - can render icon', () => {
    const wrapper = mount(Menu);

    expect(wrapper.contains('i')).to.equal(true);
  });

  it('5. Menu - can open', () => {
    const wrapper = mount(Menu);
    const toggle = wrapper.find({ ref: 'toggle' });

    toggle.trigger('click');

    expect(wrapper.vm.mobileOpen).to.equal(true);
  });
});
