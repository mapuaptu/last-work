import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Spinner from './index';

describe('Spinner', () => {
  it('1. Spinner - can render data-test attribute', () => {
    const wrapper = mount(Spinner);
    const attribute = 'data-test-spinner';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Spinner - can render content in default slot', () => {
    const content = 'Spinner content';
    const wrapper = mount(Spinner, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
