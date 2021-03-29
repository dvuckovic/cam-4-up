import { shallowMount } from '@vue/test-utils';
import CamPlaceholder from '@/components/CamPlaceholder';

describe('CamPlaceholder', () => {
    const identifier = 1;

    let wrapper;

    it('renders title text when mounted', () => {
        const title = 'CAM FOO';

        wrapper = shallowMount(CamPlaceholder, {
            props: {
                title,
            },
        });

        expect(wrapper.text()).toMatch(title);
    });

    it('renders default styles', () => {
        expect(wrapper.element.style.cursor).toEqual('unset');
        expect(wrapper.element.style['background-color']).toEqual('rgb(0, 0, 0)');
    });

    it('renders the passed background color', async () => {
        const backgroundColor = 'rgb(255, 0, 255)';

        wrapper.setProps({
            backgroundColor,
        });

        await wrapper.vm.$nextTick(() => {});

        expect(wrapper.element.style['background-color']).toEqual(backgroundColor);
    });

    it('does not emit the `placeholderClick` event in case identifier is not supplied', () => {
        wrapper.trigger('click');

        expect(wrapper.emitted().placeholderClick).toBeUndefined();

        delete wrapper.emitted();
    });

    it('renders the pointer cursor when identifier is supplied', async () => {
        wrapper.setProps({
            identifier,
        });

        await wrapper.vm.$nextTick(() => {});

        expect(wrapper.element.style.cursor).toEqual('pointer');
    });

    it('emits the `placeholderClick` event in case the identifier is supplied', () => {
        wrapper.trigger('click');

        expect(wrapper.emitted().placeholderClick).toEqual([ [ identifier ] ]);

        delete wrapper.emitted();
    });
});
