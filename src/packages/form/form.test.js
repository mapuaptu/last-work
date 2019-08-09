import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Form from './index';

describe('Form', () => {
  it('1. Form - can render data-test attribute', () => {
    const wrapper = mount(Form);
    const attribute = 'data-test-form';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Form - can render content in default slot', () => {
    const content = 'Form content';
    const wrapper = mount(Form, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Form - submit can trigger emit("submit")', () => {
    const wrapper = mount(Form);

    wrapper.trigger('submit');

    expect(!!wrapper.emitted('submit')).to.equal(true);
  });
});
