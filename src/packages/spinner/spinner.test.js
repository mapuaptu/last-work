import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Spinner from './index';

describe('Spinner', () => {
  it('1. Spinner - is vue instance', () => {
    const wrapper = mount(Spinner);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Spinner - can render data attribute', () => {
    const wrapper = mount(Spinner);
    const attribute = 'data-test-spinner';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Spinner - can render text in default slot', () => {
    const message = 'Spinner message';
    const wrapper = mount(Spinner, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
