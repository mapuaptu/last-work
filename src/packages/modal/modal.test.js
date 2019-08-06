import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Modal from './index';

describe('Modal', () => {
  it('1. Modal - is vue instance', () => {
    const wrapper = mount(Modal);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Modal - can render data attribute', () => {
    const wrapper = mount(Modal);
    const attribute = 'data-test-modal';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Modal - can render text in default slot', () => {
    const message = 'Modal message';
    const wrapper = mount(Modal, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });

  it('4. Modal - can render text in control slot', () => {
    const message = 'Modal message';
    const wrapper = mount(Modal, {
      slots: {
        control: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });

  it('5. Modal - can render i tag for close icon', () => {
    const wrapper = mount(Modal);

    expect(wrapper.contains('i')).to.equal(true);
  });
});
