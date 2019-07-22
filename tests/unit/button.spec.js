import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Button from '../../src/packages/button';

describe('Button', () => {
  it('1. Button - is vue instance', () => {
    const wrapper = mount(Button);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Button - can render data attribute', () => {
    const wrapper = mount(Button);
    const attribute = 'data-test-button';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Button - can render text in default slot', () => {
    const message = 'Button message';
    const wrapper = mount(Button, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
