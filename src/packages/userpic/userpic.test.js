import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Userpic from './index';

describe('Userpic', () => {
  it('1. Userpic - can render data-test attribute', () => {
    const wrapper = mount(Userpic);
    const attribute = 'data-test-userpic';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Userpic - can render content in default slot', () => {
    const content = 'Userpic content';
    const wrapper = mount(Userpic, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Userpic - can render image', () => {
    const wrapper = mount(Userpic, {
      propsData: {
        url: 'image',
      },
    });

    expect(wrapper.contains('img')).to.equal(true);
  });
});
