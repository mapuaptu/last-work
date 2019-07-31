import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Icon from './index';

describe('Icon', () => {
  it('1. Icon - is vue instance', () => {
    const wrapper = mount(Icon);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Icon - can render data attribute', () => {
    const wrapper = mount(Icon);
    const attribute = 'data-test-icon';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Icon - can render text in default slot', () => {
    const message = 'Icon message';
    const wrapper = mount(Icon, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
