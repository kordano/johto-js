<template>
  <div id="app">
    <header class="navbar">
      <section class="navbar-section">
        <router-link class="btn btn-link nav-link" to="/">Home</router-link>
        <router-link class="btn btn-link nav-link" to="/about">About</router-link>
        <router-link class="btn btn-link nav-link" to="/accounts">Accounts</router-link>
      </section>
    </header>
    <router-view/>
  </div>
</template>