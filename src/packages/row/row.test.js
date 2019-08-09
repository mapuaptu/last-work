import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Row from './index';

describe('Row', () => {
  it('1. Row - can render data-test attribute', () => {
    const wrapper = mount(Row);
    const attribute = 'data-test-row';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Row - can render content in default slot', () => {
    const content = 'Row content';
    const wrapper = mount(Row, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
