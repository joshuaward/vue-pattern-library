<template>
  <main class="download">
    <hero></hero>
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <h1>{{ title }}</h1>
        </div>
      </div>
      <div class="grid-x grid-padding-x grid-margin-y" id="cards">
        <card v-for="index in 8" :key="index"></card>
      </div>
    </div>
  </main>
</template>

<script>
import hero from '@/components/hero'
import card from '@/components/card'

export default {
  name: 'download',
  components: {
    hero,
    card
  },
  data () {
    return {
      title: 'Download'
    }
  }
}
</script>
