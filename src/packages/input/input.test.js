import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Input from './index';
import Userpic from '../userpic/index';
import Icon from '../icon/index';

describe('Input', () => {
  it('1. Input - is vue instance', () => {
    const wrapper = mount(Input);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Input - can render data attribute', () => {
    const wrapper = mount(Input);
    const attribute = 'data-test-input';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Input - can render text in default slot', () => {
    const message = 'Input message';
    const wrapper = mount(Input, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });

  it('4. Input - can render input tag', () => {
    const wrapper = mount(Input);

    expect(wrapper.contains('input')).to.equal(true);
  });

  it('5. Input - can render dd-userpic', () => {
    const wrapper = mount(Input, {
      propsData: {
        image: 'image',
      },
    });

    expect(wrapper.contains(Userpic)).to.equal(true);
  });

  it('6. Input - can render dd-icon', () => {
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
