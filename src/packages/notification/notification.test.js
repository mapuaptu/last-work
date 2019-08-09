import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Notification from './index';
import Icon from '../icon/index';

describe('Notification', () => {
  it('1. Notification - can render data-test attribute', () => {
    const wrapper = mount(Notification);
    const attribute = 'data-test-notification';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Notification - can render content in default slot', () => {
    const content = 'Notification content';
    const wrapper = mount(Notification, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Notification - can render dd-icon', () => {
    const wrapper = mount(Notification, {
      propsData: {
        status: 'info',
      },
    });

    expect(wrapper.contains(Icon)).to.equal(true);
  });
});
