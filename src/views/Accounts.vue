<template>
 <div>
  <AccountCreator></AccountCreator>
  <div>
    <h3>Counters</h3>
    <p>Counter: {{count}}</p>
  </div>
 </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AccountCreator from '@/components/AccountCreator.vue';
import store from '@/store';
import { mapState } from "vuex";

@Component({
  components: {
    AccountCreator,
  },
  computed: mapState(['count'])
})
export default class Accounts extends Vue {}
</script>
