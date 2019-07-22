import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import FormField from '../../src/packages/form-field';

describe('FormField', () => {
  it('1. FormField - is vue instance', () => {
    const wrapper = mount(FormField);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. FormField - can render data attribute', () => {
    const wrapper = mount(FormField);
    const attribute = 'data-test-form-field';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. FormField - can render text in default slot', () => {
    const message = 'FormField message';
    const wrapper = mount(FormField, {
      propsData: {
        value: true,
      },
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
