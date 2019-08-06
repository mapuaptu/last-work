import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Form from './index';

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

  it('4. Form - emit("submit")', () => {
    const wrapper = mount(Form);

    wrapper.trigger('submit');

    expect(!!wrapper.emitted('submit')).to.equal(true);
  });
});
