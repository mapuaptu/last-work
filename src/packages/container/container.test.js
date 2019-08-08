import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Container from './index';

describe('Container', () => {
  it('1. Container - can render data-test attribute', () => {
    const wrapper = mount(Container);
    const attribute = 'data-test-container';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Container - can render content in default slot', () => {
    const content = 'Container content';
    const wrapper = mount(Container, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
