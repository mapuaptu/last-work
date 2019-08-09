import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Icon from './index';

describe('Icon', () => {
  it('1. Icon - can render data-test attribute', () => {
    const wrapper = mount(Icon);
    const attribute = 'data-test-icon';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Icon - can render content in default slot', () => {
    const content = 'Icon content';
    const wrapper = mount(Icon, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
