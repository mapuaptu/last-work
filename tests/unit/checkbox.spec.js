import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Checkbox from '../../src/packages/checkbox';

describe('Checkbox', () => {
  it('1. Checkbox - is vue instance', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Checkbox - can render data attribute', () => {
    const wrapper = mount(Checkbox);
    const attribute = 'data-test-checkbox';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Checkbox - can render text in default slot', () => {
    const message = 'Checkbox message';
    const wrapper = mount(Checkbox, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
