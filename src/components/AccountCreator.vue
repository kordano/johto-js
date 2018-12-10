<template>
  <div>
    <h3>New Account</h3>
    <div>
      <input v-model.trim="firstname" placeholder="firstname">
      <input v-model.trim="lastname" placeholder="lastname">
      <select v-model.number="level" placeholder="level">
        <option value="0">Other</option>
        <option value="1">Extern</option>
        <option value="2" selected>User</option>
        <option value="3">Admin</option>
      </select>
      <input v-model.trim="email" placeholder="email">
      <input v-model.trim="phone" placeholder="phone">
      <input v-model.trim="occupation" placeholder="occupation">
    </div>
    <button v-on:click='createAccount()'>ADD</button>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AccountLevel, Account } from '@/models/Account.ts';
import store from '@/store';
import { CREATE_ACCOUNT } from '@/mutation-types';
import uuid from 'uuid/v4';

function isMissing(s: string): void {
  alert(s + ' is missing!');
}

@Component
export default class AccountCreator extends Vue {
  firstname = '';
  lastname = '';
  level = 0;
  email = '';
  phone = '';
  occupation = '';

  createAccount () {
      if (this.firstname.length === 0  || this.firstname == null) {
        isMissing('Firstname');
      } else if (this.lastname.length === 0 || this.lastname == null) {
        isMissing('Lastname');
      } else if (this.email.length === 0 || this.email == null) {
        isMissing('Email');
      } else if (this.phone.length === 0 || this.phone == null) {
        isMissing('Phone');
      } else if (this.occupation.length === 0 || this.occupation == null) {
        isMissing('Occupation');
      } else {
        const account = new Account(uuid(),
                                    this.level,
                                    this.firstname,
                                    this.lastname,
                                    this.email,
                                    this.phone,
                                    this.occupation,
                                    uuid());
        store.commit(CREATE_ACCOUNT, account);
        this.firstname = '';
        this.lastname = '';
        this.level = 0;
        this.email = '';
        this.phone = '';
        this.occupation = '';
      }
    }
}

</script>
