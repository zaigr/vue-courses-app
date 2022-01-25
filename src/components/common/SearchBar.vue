<template>
    <label>
        {{ label }}
        <input type='search' v-model='searchValue' :placeholder='placeholder' />
    </label>
    <Button text='Search' @click='$emit("submit")' :style='{ marginLeft: "1%" }' />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import Button from '@/components/common/Button.vue'

export default defineComponent({
  components: {
    Button
  },
  props: {
    modelValue: String,
    label: String,
    placeholder: {
      type: String,
      default: () => 'Enter...'
    }
  },
  emits: ['update:modelValue', 'reset', 'submit'],
  computed: {
    searchValue: {
      get (): string | undefined {
        return this.modelValue
      },
      set (value: string): void {
        this.$emit('update:modelValue', value)

        if (!value) {
          this.$emit('reset')
        }
      }
    }
  }
})
</script>

<style scoped>

input {
    border-color: orange;
    width: 400px;
    height: 39px;
}

</style>
