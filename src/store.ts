import Vue from 'vue';
import Vuex from 'vuex';
import { CREATE_ACCOUNT } from './mutation-types';
import { Account } from '@/models/Account';
import { JohtoState } from './models/JohtoState';
import { ToastStatus } from './models/ViewHelpers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new JohtoState([], ToastStatus.INFO, 'Greetings'),

  mutations: {
    [CREATE_ACCOUNT]: (state, account: Account) => {
      state.accounts.push(account);
    },
  },
  actions: {
  },
});
