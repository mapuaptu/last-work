import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import FormField from './index';

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
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });

  it('4. FormField - can render text in label slot', () => {
    const message = 'FormField message';
    const wrapper = mount(FormField, {
      slots: {
        label: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });

  it('5. FormField - can render text in message slot', () => {
    const message = 'FormField message';
    const wrapper = mount(FormField, {
      slots: {
        message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
