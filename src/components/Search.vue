<template>
  <div class="hello">
    <h2>Short URL Links</h2>
    <div class="content">
      <table class="table">
        <tr>
          <th class="th-1">New URL</th>
          <th>Old URL</th>
          <th class="th-3">Hits</th>
        </tr>
        <tr>
          <td>
            <a
              href="url.new"
              target="_blank"
              >url.new</a
            >
          </td>
          <td class="old-url">
            <img
              src="https://www.google.com/s2/favicons?domain=url.old"
              alt="favicon"
            />
            url.old
          </td>
          <td class="td-3">url.hits</td>
        </tr>
      </table>
    </div>

    <div style="text-align: center; padding-top: 5px; font-weight: 600;">
      <p style="color:#777">
        <a href="prev_num">&lt;&lt; Newer </a>
        <!-- &lt;&lt; Newer  -->
        <a href="next_num">Older &gt;&gt;</a>
        <!-- Older &gt;&gt;  -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    this.$axios.get('http://192.168.56.103:3000/search')
      .then(response => { 
        console.log(response.data) 
      })

    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getTop() {
      this.$store.commit('fatchData');
    }
  }
}
</script>

<style scoped>
</style>
