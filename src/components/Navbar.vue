/*Most vue.js single page compenents follow this structure of
html within template, core code in scripts, and css in style */
<template>
<div class="pure-menu pure-menu-horizontal">
<div class="container">
<router-link :to="{ path: '/' }" class="pure-menu-heading pure-menu-link"><img src="../assets/logo.jpg"/></router-link>
<ul class="pure-menu-list">
<li class="pure-menu-item"><router-link :to="{ path: '/best' }" class="pure-menu-link">Best</router-link></li>
<li class="pure-menu-item"><router-link :to="{ path: '/new' }" class="pure-menu-link">New</router-link></li>
<li class="pure-menu-item"><router-link :to="{ path: '/job' }" class="pure-menu-link">Jobs</router-link></li>
<li class="pure-menu-item"><router-link :to="{ path: '/ask' }" class="pure-menu-link">Ask</router-link></li>
</ul>
</div>
</div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.pure-menu{
  background-color: #FF6600;
}
.pure-menu a{
  color: white;
}
  img {
    width: 30px;
    height: 30px;
  }
</style>
