<template>
  <header class="header">
    <div class="grid-container full">
      <div class="grid-x align-middle align-justify">
        <div class="cell logo">
          <a href="/" class="right" data-tooltip="Home" data-position="right">
            <img src="./../assets/logo.png">
          </a>
        </div>
        <button class="hamburger">
          <span></span>
        </button>
        <nav>
          <!-- <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link> -->
          <router-link class="nav-link" to="/About">About</router-link>
          <router-link class="nav-link" to="/Portfolio">
            Documentation
            <ul class="dropdown-menu">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">Sass</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
          </router-link>
          <router-link class="nav-link" to="/Contact">Download</router-link>
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
