import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Notification from './index';
import Icon from '../icon/index';

describe('Notification', () => {
  it('1. Notification - is vue instance', () => {
    const wrapper = mount(Notification);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Notification - can render data attribute', () => {
    const wrapper = mount(Notification);
    const attribute = 'data-test-notification';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Notification - can render text in default slot', () => {
    const message = 'Notification message';
    const wrapper = mount(Notification, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });

  it('4. Notification - can render dd-icon', () => {
    const wrapper = mount(Notification, {
      propsData: {
        status: 'info',
      },
    });

    expect(wrapper.contains(Icon)).to.equal(true);
  });
});
