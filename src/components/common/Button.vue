<template>
    <button class='btn'>{{ text }}</button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: (): string => 'Click'
    }
  }
})
</script>

<style>
.btn {
    width: 160px;
    height: 40px;
    text-decoration: none;
    font-size: medium;
    border-style: solid;
    border-width: small;
    border-color: purple;
    background-color: white;
    color: black;
    cursor: pointer;
    user-select: none;
}
</style>
