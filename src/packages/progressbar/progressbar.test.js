import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Progressbar from './index';

describe('Progressbar', () => {
  it('1. Progressbar - is vue instance', () => {
    const wrapper = mount(Progressbar);

    expect(wrapper.isVueInstance()).to.equal(true);
  });

  it('2. Progressbar - can render data attribute', () => {
    const wrapper = mount(Progressbar);
    const attribute = 'data-test-progressbar';

    expect(wrapper.attributes(attribute)).to.equal(attribute);
  });

  it('3. Progressbar - can render text in default slot', () => {
    const message = 'Progressbar message';
    const wrapper = mount(Progressbar, {
      slots: {
        default: message,
      },
    });

    expect(wrapper.text()).to.include(message);
  });
});
