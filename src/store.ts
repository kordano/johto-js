import Vue from 'vue';
import Vuex from 'vuex';
import { CREATE_ACCOUNT } from './mutation-types';
import { Account } from '@/models/Account';
import { JohtoState } from './models/JohtoState';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new JohtoState([]),
  mutations: {
    [CREATE_ACCOUNT]: (state, account: Account) => {
      state.accounts.push(account);
    },
  },
  actions: {
  },
});
