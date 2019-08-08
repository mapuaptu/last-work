import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Datepicker from './index';

describe('Datepicker', () => {
  it('1. Datepicker - can render data-test attribute', () => {
    const wrapper = mount(Datepicker);
    const attribute = 'data-test-datepicker';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Datepicker - can render content in default slot', () => {
    const content = 'Datepicker content';
    const wrapper = mount(Datepicker, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
