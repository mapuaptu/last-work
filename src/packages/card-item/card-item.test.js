import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import CardItem from './index';

describe('CardItem', () => {
  it('1. CardItem - is vue instance', () => {
    const wrapper = mount(CardItem);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. CardItem - can render data attribute', () => {
    const wrapper = mount(CardItem);
    const attribute = 'data-test-card-item';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. CardItem - can render text in default slot', () => {
    const message = 'CardItem message';
    const wrapper = mount(CardItem, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
