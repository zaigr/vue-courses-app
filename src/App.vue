<template>
  <Header />
  <Courses />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/Header.vue'
import Courses from '@/views/Courses.vue'

export default defineComponent({
  components: {
    Header,
    Courses
  }
})

</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

input {
    border-style: solid;
    border-width: small;
    outline: none;
}

</style>
