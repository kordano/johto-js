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
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AccountLevel } from '@/models/Account.ts';

@Component
export default class AccountCreator extends Vue {
  @Prop() private firstname!: string;
  @Prop() private lastname!: string;
  @Prop() private level!: number;
  @Prop() private email!: string;
  @Prop() private phone!: string;
  @Prop() private occupation!: string;
}

</script>
