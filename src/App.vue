<template>
<div id="app">
  <header class="navbar">
    <section class="navbar-section">
      <router-link class="btn btn-link nav-link" to="/">Home</router-link>
      <router-link class="btn btn-link nav-link" to="/about">About</router-link>
      <router-link class="btn btn-link nav-link" to="/accounts">Accounts</router-link>
    </section>
  </header>
  <div :class="toastStatus">
    <button v-on:click="closeToast" class="btn btn-clear float-right"></button>
    {{toastMessage}}
  </div>
  <router-view/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';
import { HIDE_TOAST } from '@/mutation-types';
import { mapState } from 'vuex';

@Component({
  computed: mapState(['toastMessage']),
})

export default class App extends Vue {
  get toastStatus(): string {
    const toastColor = 'toast-' + this.$store.state.toastStatus;
    const toastVisibility = this.$store.state.toastVisible ? '' : 'd-hide';
    const toastCore = 'p-centered text-center toast';
    const toastStatus =  toastCore + ' ' + toastColor + ' ' + toastVisibility;
    return toastStatus;
  }

  public closeToast() {
    store.commit(HIDE_TOAST);
  }
}
</script>
