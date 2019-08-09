import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Input from './index';
import Userpic from '../userpic/index';
import Icon from '../icon/index';

describe('Input', () => {
  it('1. Input - can render data-test attribute', () => {
    const wrapper = mount(Input);
    const attribute = 'data-test-input';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Input - can render content in default slot', () => {
    const content = 'Input content';
    const wrapper = mount(Input, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Input - can render dd-userpic', () => {
    const wrapper = mount(Input, {
      propsData: {
        image: 'image',
      },
    });

    expect(wrapper.contains(Userpic)).to.equal(true);
  });

  it('4. Input - can render dd-icon', () => {
    const wrapper = mount(Input, {
      provide: {
        root: {
          status: 'success',
        },
      },
    });

    expect(wrapper.contains(Icon)).to.equal(true);
  });
});
