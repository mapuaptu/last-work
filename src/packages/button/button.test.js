import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Button from './index';
import Icon from '../icon/index';

describe('Button', () => {
  it('1. Button - can render data-test attribute', () => {
    const wrapper = mount(Button);
    const attribute = 'data-test-button';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Button - can render content in default slot', () => {
    const content = 'Button content';
    const wrapper = mount(Button, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Button - can render Icon', () => {
    const icon = 'circle';
    const wrapper = mount(Button, {
      propsData: {
        icon,
      },
    });

    expect(wrapper.contains(Icon)).to.equal(true);
  });
});
