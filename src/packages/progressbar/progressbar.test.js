import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Progressbar from './index';

describe('Progressbar', () => {
  it('1. Progressbar - can render data-test attribute', () => {
    const wrapper = mount(Progressbar);
    const attribute = 'data-test-progressbar';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('2. Progressbar - can render content in default slot', () => {
    const content = 'Progressbar content';
    const wrapper = mount(Progressbar, {
      slots: {
        default: content,
      },
    });

    expect(wrapper.text()).to.include(content);
  });
});
