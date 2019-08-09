import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Switch from './index';

describe('Switch', () => {
  it('1. Switch - can render data-test attribute', () => {
    const wrapper = mount(Switch);
    const attribute = 'data-test-switch';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Switch - can render content in default slot', () => {
    const content = 'Switch content';
    const wrapper = mount(Switch, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Switch - click trigger checked state on inner input', () => {
    const wrapper = mount(Switch);
    const input = wrapper.find('input');

    wrapper.trigger('click');

    expect(input.element.checked).to.equal(true);
  });

  it('4. Switch - click trigger emit("input")', () => {
    const wrapper = mount(Switch);

    wrapper.trigger('click');

    expect(!!wrapper.emitted('input')).to.equal(true);
  });
});
