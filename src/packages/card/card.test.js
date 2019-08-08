import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Card from './index';

describe('Card', () => {
  it('1. Card - can render data-test attribute', () => {
    const wrapper = mount(Card);
    const attribute = 'data-test-card';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Card - can render content in default slot', () => {
    const content = 'Card content';
    const wrapper = mount(Card, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Card - can render content in title slot', () => {
    const content = 'Card content';
    const wrapper = mount(Card, {
      slots: {
        title: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
