<template>
  <div>
  <AccountCreator></AccountCreator>
  <AccountList></AccountList>
 </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AccountCreator from '@/components/AccountCreator.vue';
import AccountList from '@/components/AccountList.vue';
import store from '@/store';
import { mapState } from 'vuex';
import { CREATE_ACCOUNT } from '@/mutation-types';

@Component({
  components: {
    AccountCreator,
    AccountList
  },
})

export default class Accounts extends Vue {}
</script>
