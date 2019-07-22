import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Form from '../../src/packages/form';

describe('Form', () => {
  it('1. Form - is vue instance', () => {
    const wrapper = mount(Form);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Form - can render data attribute', () => {
    const wrapper = mount(Form);
    const attribute = 'data-test-form';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Form - can render text in default slot', () => {
    const message = 'Form message';
    const wrapper = mount(Form, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});