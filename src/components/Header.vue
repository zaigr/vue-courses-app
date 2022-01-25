<template>
    <header class='header'>
        <img class='header-logo' src='..\assets\logo.png' alt='logo' />
        <div class='header-login'>
            <a class='account' href='#'>David</a>
            <Button text='Logout' @click='onClick' />
        </div>
    </header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import Button from '@/components/common/Button.vue'

export default defineComponent({
  components: {
    Button
  },
  methods: {
    onClick (): void {
      alert('On click')
    }
  }
})
</script>

<style scoped>
.header {
    border-style: solid;
    border-color: red;
    border-width: small;
    height: 100px;
    max-height: 120px;
}

.header-logo {
    float: left;
    padding-left: 2%;
    height: 100px;
    max-width: 100%;
    max-height: 100%;
}

.header-login {
    float: right;
    position: relative;
    margin-right: 2%;
    top: 50%;
    transform: translate(0, -50%);
}

a.account {
    text-decoration: none;
    font-size: 120%;
    font-weight: bold;
    padding: 0.5em 2.5em;
    color: black;
    user-select: none;
}
</style>
