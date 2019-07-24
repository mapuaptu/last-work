import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Userpic from '../../src/packages/userpic';

describe('Userpic', () => {
  it('1. Userpic - is vue instance', () => {
    const wrapper = mount(Userpic);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Userpic - can render data attribute', () => {
    const wrapper = mount(Userpic);
    const attribute = 'data-test-userpic';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Userpic - can render text in default slot', () => {
    const message = 'Userpic message';
    const wrapper = mount(Userpic, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});