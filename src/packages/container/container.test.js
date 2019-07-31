import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Container from './index';

describe('Container', () => {
  it('1. Container - is vue instance', () => {
    const wrapper = mount(Container);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Container - can render data attribute', () => {
    const wrapper = mount(Container);
    const attribute = 'data-test-container';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Container - can render text in default slot', () => {
    const message = 'Container message';
    const wrapper = mount(Container, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
