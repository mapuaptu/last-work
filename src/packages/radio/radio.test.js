import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Radio from './index';

describe('Radio', () => {
  it('1. Radio - can render data-test attribute', () => {
    const wrapper = mount(Radio);
    const attribute = 'data-test-radio';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Radio - can render conten in default slot', () => {
    const content = 'Radio content';
    const wrapper = mount(Radio, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });

  it('3. Radio - click trigger emit("input")', () => {
    const wrapper = mount(Radio, {
      propsData: {
        value: '123',
        label: '321',
      },
    });

    wrapper.trigger('click');

    expect(!!wrapper.emitted('input')).to.equal(true);
  });
});
