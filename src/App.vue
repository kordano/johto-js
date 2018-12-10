<template>
<div id="app">
  <header class="navbar">
    <section class="navbar-section">
      <router-link class="btn btn-link nav-link" to="/">Home</router-link>
      <router-link class="btn btn-link nav-link" to="/about">About</router-link>
      <router-link class="btn btn-link nav-link" to="/accounts">Accounts</router-link>
    </section>
  </header>
  <div class="toast toast-primary">
    <button class="btn btn-clear float-right"></button>
    {{toastMessage}}
  </div>
  <router-view/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';
import { mapState } from 'vuex';

@Component({
  computed: mapState(['toastMessage']),
})

export default class App extends Vue {
  get toastStatus(): string {
    const globalStatus = this.$store.state.toastStatus;
    const toastStatus = '';
    return 'toast toast';
  }

}
</script>
