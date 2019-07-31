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
});
