import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Datepicker from './index';

describe('Datepicker', () => {
  it('1. Datepicker - is vue instance', () => {
    const wrapper = mount(Datepicker);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Datepicker - can render data attribute', () => {
    const wrapper = mount(Datepicker);
    const attribute = 'data-test-datepicker';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Datepicker - can render text in default slot', () => {
    const message = 'Datepicker message';
    const wrapper = mount(Datepicker, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
