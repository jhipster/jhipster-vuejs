import { shallowMount, createLocalVue } from '@vue/test-utils';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import * as config from '@/shared/config';
import LogsComponent from '@/components/admin/logs/Logs.vue';
import LogsService from '@/components/admin/logs/LogsService.vue';

const localVue = createLocalVue();

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.mixin(LogsService);

jest.mock('axios', () => ({
    get: jest.fn(),
    put: jest.fn()
}));
jest.mock('@/constants.js', () =>({
    SERVER_API_URL: ''
}));

describe('Settings Component', () => {
    let wrapper;
    let comp;

    beforeEach(() => {
        wrapper = shallowMount(LogsComponent, { store, i18n, localVue });
        comp = wrapper.vm;
    });

    it('should be a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    describe('OnInit', () => {
        it('should set all default values correctly', () => {
            expect(comp.filtered).toBe('');
            expect(comp.orderProp).toBe('name');
            expect(comp.reverse).toBe(false);
        });
        it('Should call load all on init', async () => {
            // GIVEN
            axios.get.mockReturnValue(Promise.resolve({}));

            // WHEN
            comp.init();
            await comp.$nextTick();

            // THEN
            expect(axios.get).toHaveBeenCalledWith('management/logs');
        });
    });
    describe('change log level', () => {
        it('should change log level correctly', async () => {
            axios.get.mockReturnValue(Promise.resolve({}));
            axios.put.mockReturnValue(Promise.resolve({}));

            // WHEN
            comp.updateLevel('main', 'ERROR');
            await comp.$nextTick();

            // THEN
            expect(axios.put).toHaveBeenCalledWith('management/logs', {"level": "ERROR", "name": "main"});
            expect(axios.get).toHaveBeenCalledWith('management/logs');
        });
    });
});
