import Vue from 'vue';
import Vuex from 'vuex';
import { CREATE_ACCOUNT, SHOW_TOAST, HIDE_TOAST } from './mutation-types';
import { Account } from '@/models/Account';
import { JohtoState } from './models/JohtoState';
import { ToastStatus } from './models/ViewHelpers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new JohtoState([], ToastStatus.ERROR, 'Greetings', true),

  mutations: {
    [CREATE_ACCOUNT]: (state, account: Account) => {
      state.accounts.push(account);
    },
    [SHOW_TOAST]: (state: any, message: string, status: ToastStatus) => {
      state.toastMessage = message;
      state.toastStatus = status;
      state.toastVisible = true;
    },
    [HIDE_TOAST]: (state: any) => {
      state.toastVisible = false;
    },
  },
  actions: {
  },
});
