import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Radio from '../../src/packages/radio';

describe('Radio', () => {
  it('1. Radio - is vue instance', () => {
    const wrapper = mount(Radio);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Radio - can render data attribute', () => {
    const wrapper = mount(Radio);
    const attribute = 'data-test-radio';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Radio - can render text in default slot', () => {
    const message = 'Radio message';
    const wrapper = mount(Radio, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
