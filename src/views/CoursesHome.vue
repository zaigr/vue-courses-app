<template>
    <Header />
    <router-view></router-view>
</template>

<script lang='ts'>
import Header from '@/components/Header.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Header
  }
})
</script>
