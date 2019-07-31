import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Row from './index';

describe('Row', () => {
  it('1. Row - is vue instance', () => {
    const wrapper = mount(Row);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Row - can render data attribute', () => {
    const wrapper = mount(Row);
    const attribute = 'data-test-row';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Row - can render text in default slot', () => {
    const message = 'Row message';
    const wrapper = mount(Row, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
