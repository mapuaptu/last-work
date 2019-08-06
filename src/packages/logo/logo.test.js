import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Logo from './index';

describe('Logo', () => {
  it('1. Logo - is vue instance', () => {
    const wrapper = mount(Logo);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Logo - can render data attribute', () => {
    const wrapper = mount(Logo);
    const attribute = 'data-test-logo';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Logo - can render text in default slot', () => {
    const message = 'Logo message';
    const wrapper = mount(Logo, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });

  it('4. Logo - can render svg', () => {
    const wrapper = mount(Logo);

    expect(wrapper.contains('svg')).to.equal(true);
  });
});
