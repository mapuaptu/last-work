import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Card from '../../src/packages/card';

describe('Card', () => {
  it('1. Card - is vue instance', () => {
    const wrapper = mount(Card);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Card - can render data attribute', () => {
    const wrapper = mount(Card);
    const attribute = 'data-test-card';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Card - can render text in default slot', () => {
    const message = 'Card message';
    const wrapper = mount(Card, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
