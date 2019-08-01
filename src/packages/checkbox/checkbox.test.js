import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Checkbox from './index';

describe('Checkbox', () => {
  it('1. Checkbox - is vue instance', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Checkbox - can render data attribute', () => {
    const wrapper = mount(Checkbox);
    const attribute = 'data-test-checkbox';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Checkbox - can render text in default slot', () => {
    const message = 'Checkbox message';
    const wrapper = mount(Checkbox, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });

  it('4. Checkbox - can render input', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.contains('input')).to.equal(true);
  });

  it('5. Checkbox - click trigger checked state on inner input', () => {
    const wrapper = mount(Checkbox);
    const input = wrapper.find('input');

    wrapper.trigger('click');

    expect(input.element.checked).to.equal(true);
  });

  it('6. Checkbox - click trigger emit("input")', () => {
    const wrapper = mount(Checkbox);

    wrapper.trigger('click');

    expect(!!wrapper.emitted().input).to.equal(true);
  });
});
