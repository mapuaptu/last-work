import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Switch from './index';

describe('Switch', () => {
  it('1. Switch - is vue instance', () => {
    const wrapper = mount(Switch);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Switch - can render data attribute', () => {
    const wrapper = mount(Switch);
    const attribute = 'data-test-switch';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Switch - can render text in default slot', () => {
    const message = 'Switch message';
    const wrapper = mount(Switch, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });

  it('4. Switch - can render input', () => {
    const wrapper = mount(Switch);

    expect(wrapper.contains('input')).to.equal(true);
  });
});
