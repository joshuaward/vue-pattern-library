<template>
  <main class="home">
    <div class="grid-container full">
      <div class="grid-x grid-margin-x align-center">
        <div class="cell homepage">
          <h1>{{ title }}</h1>
          <button class="download">
            Download
          </button>
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
      title: 'Vue Pattern Library'
    }
  }
}
</script>
