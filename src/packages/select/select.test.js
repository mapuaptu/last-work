import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Select from './index';

describe('Select', () => {
  it('1. Select - can render data-test attribute', () => {
    const wrapper = mount(Select);
    const attribute = 'data-test-select';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Select - can render content in default slot', () => {
    const content = 'Select content';
    const wrapper = mount(Select, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
