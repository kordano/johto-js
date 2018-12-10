<template>
<div>
  <table class="table">
   <thead>
     <tr>
      <th>ID</th>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Level</th>
      <th>Occupation</th>
      <th>Phone</th>
      <th>Email</th>
     </tr>
    </thead>
    <tbody>
      <tr v-for="account in accounts" :key="account.id">
        <td>{{account.id}}</td>
        <td>{{account.firstname}}</td>
        <td>{{account.lastname}}</td>
        <td>{{account.level}}</td>
        <td>{{account.occupation}}</td>
        <td>{{account.phone}}</td>
        <td>{{account.email}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Account } from '@/models/Account.ts';
import store from '@/store';
import { mapState } from 'vuex';

@Component({
  computed: mapState(['accounts']),
})

export default class AccountList extends Vue {}

</script>
