<template>
  <header class="header">
    <div class="grid-container full">
      <div class="grid-x align-middle align-justify">
        <div class="cell logo">
          <router-link class="nav-link" :to="{ name: 'Home' }" exact>
            <img src="./../assets/img/logo.png">
          </router-link>
        </div>
        <button class="hamburger">
          <span></span>
        </button>
        <nav>
          <router-link class="nav-link" :to="{ name: 'Home' }" exact>Home</router-link>
          <router-link class="nav-link" to="/About">About</router-link>
          <router-link class="nav-link" to="/Docs">Docs</router-link>
          <router-link class="nav-link left" to="/Downlaod" data-tooltip="Download" data-position="left">Download</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      title: 'Header'
    }
  }
}
</script>
