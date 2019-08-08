import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Checkbox from './index';

describe('Checkbox', () => {
  it('1. Checkbox - can render data-test attribute', () => {
    const wrapper = mount(Checkbox);
    const attribute = 'data-test-checkbox';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Checkbox - can render content in default slot', () => {
    const content = 'Checkbox content';
    const wrapper = mount(Checkbox, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Checkbox - click trigger checked state on inner input', () => {
    const wrapper = mount(Checkbox);
    const input = wrapper.find('input');

    wrapper.trigger('click');

    expect(input.element.checked).to.equal(true);
  });

  it('4. Checkbox - click trigger emit("input")', () => {
    const wrapper = mount(Checkbox);

    wrapper.trigger('click');

    expect(!!wrapper.emitted('input')).to.equal(true);
  });
});
