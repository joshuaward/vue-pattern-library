<template>
  <main class="about">
    <hero></hero>
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="cell">
          <h1>{{ title }}</h1>
        </div>
      </div>
      <div class="grid-x grid-padding-x grid-margin-y">
        <div class="cell">
          Some stuff...
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import hero from '@/components/hero'
import card from '@/components/card'

export default {
  name: 'about',
  components: {
    hero,
    card
  },
  data () {
    return {
      title: 'About'
    }
  }
}
</script>
