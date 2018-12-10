<template>
  <div>
    <h3>New Account</h3>
    <div>
      <input v-model="firstname" placeholder="firstname">
      <input v-model="lastname" placeholder="lastname">
      <select v-model="level" placeholder="level">
        <option value="0">Other</option>
        <option value="1">Extern</option>
        <option value="2" selected>User</option>
        <option value="3">Admin</option>
      </select>
      <input v-model="email" placeholder="email">
      <input v-model="phone" placeholder="phone">
      <input v-model="occupation" placeholder="occupation">
    </div>
    <div>
      <p>Firstname: {{firstname}}</p>
      <p>Lastname: {{lastname}}</p>
      <p>Level: {{level}}</p>
      <p>Email: {{email}}</p>
      <p>Phone: {{phone}}</p>
      <p>Occupation: {{occupation}}</p>
    </div>
    <button v-on:click='createAccount(firstname, lastname, level, email, phone, occupation)'>ADD</button>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AccountLevel, Account } from '@/models/Account.ts';
import store from '@/store';
import { CREATE_ACCOUNT } from '@/mutation-types';
import uuid from 'uuid/v4';

function isMissing(s: string): void {
  alert(s + " is missing!");
}

@Component({
  methods: {
    createAccount: (firstname: string, lastname: string, level: number, email: string, phone: string, occupation: string) => {
      let checkList: boolean[] = [];
      if (firstname.length == 0  || firstname == null) {
        isMissing("Firstname");
      } else if (lastname.length == 0 || lastname == null) {
        isMissing("Lastname");
      } else if (email.length == 0 || email == null) {
        isMissing("Email");
      } else if (phone.length == 0 || phone == null) {
        isMissing("Phone");
      } else if (occupation.length == 0 || occupation == null) {
        isMissing("Occupation");
      } else {
        store.commit(CREATE_ACCOUNT, new Account(uuid(), level, firstname.trim(), lastname.trim(), email.trim(), phone.trim(), occupation.trim(), uuid()));
      }
    },
  },
})
export default class AccountCreator extends Vue {
  @Prop() private firstname: string = "";
  @Prop() private lastname: string = "";
  @Prop() private level: number = 0;
  @Prop() private email: string = "";
  @Prop() private phone: string = "";
  @Prop() private occupation: string = "";
}

</script>
