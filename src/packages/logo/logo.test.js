import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Logo from './index';

describe('Logo', () => {
  it('1. Logo - can render data-test attribute', () => {
    const wrapper = mount(Logo);
    const attribute = 'data-test-logo';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Logo - can render content in default slot', () => {
    const content = 'Logo content';
    const wrapper = mount(Logo, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
