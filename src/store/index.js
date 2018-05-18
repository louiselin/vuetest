import Vue from 'vue';
import Vuex from 'vuex';
import imgs from './modules/imgs';
import joke from './modules/joke';
import test from './modules/test';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        imgs,
        joke,
        test
    }
})
