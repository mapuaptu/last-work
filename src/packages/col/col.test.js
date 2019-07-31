import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Col from './index';

describe('Col', () => {
  it('1. Col - is vue instance', () => {
    const wrapper = mount(Col);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Col - can render data attribute', () => {
    const wrapper = mount(Col);
    const attribute = 'data-test-col';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Col - can render text in default slot', () => {
    const message = 'Col message';
    const wrapper = mount(Col, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
