<template>
  <main class="home">
    <div class="grid-container full">
      <div class="grid-x grid-margin-x">
        <div class="cell homepage">
          <h1>{{ title }}</h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      title: 'Home',
    }
  }
}
</script>
