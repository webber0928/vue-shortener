<template>
  <div id="app">
    <p>
      <router-link :to="{path: '/'}">Index</router-link>
      <router-link :to="{path: '/search'}">Search</router-link>
    </p>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
