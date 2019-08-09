import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import FormField from './index';

describe('FormField', () => {
  it('1. FormField - can render data attribute', () => {
    const wrapper = mount(FormField);
    const attribute = 'data-test-form-field';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. FormField - can render content in default slot', () => {
    const content = 'FormField content';
    const wrapper = mount(FormField, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. FormField - can render content in label slot', () => {
    const content = 'FormField content';
    const wrapper = mount(FormField, {
      slots: {
        label: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('4. FormField - can render content in message slot', () => {
    const content = 'FormField content';
    const wrapper = mount(FormField, {
      slots: {
        message: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
