import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Modal from './index';

describe('Modal', () => {
  it('1. Modal - can render data-test attribute', () => {
    const wrapper = mount(Modal);
    const attribute = 'data-test-modal';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Modal - can render content in default slot', () => {
    const content = 'Modal content';
    const wrapper = mount(Modal, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Modal - can render content in control slot', () => {
    const content = 'Modal content';
    const wrapper = mount(Modal, {
      slots: {
        control: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
