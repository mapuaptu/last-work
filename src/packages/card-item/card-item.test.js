import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import CardItem from './index';

describe('CardItem', () => {
  it('1. CardItem - can render data-test attribute', () => {
    const wrapper = mount(CardItem);
    const attribute = 'data-test-card-item';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. CardItem - can render content in default slot', () => {
    const content = 'CardItem content';
    const wrapper = mount(CardItem, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. CardItem - can render content in name slot', () => {
    const content = 'CardItem content';
    const wrapper = mount(CardItem, {
      slots: {
        name: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('4. CardItem - can render content in value slot', () => {
    const content = 'CardItem content';
    const wrapper = mount(CardItem, {
      slots: {
        value: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
