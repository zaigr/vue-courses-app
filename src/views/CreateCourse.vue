<template>
    <main>
        <section>
            <label>
                Title
                <input type='text' v-model='courseName' placeholder='Enter course name...' />
            </label>
            <label>
                Description
                <input type='textarea' v-model='courseDescription' placeholder='Enter description.. ' />
            </label>
            <Button text='Create course' />
        </section>
        <section>
            <h3>Add author</h3>
            <label>
                Author name
                <input type='text' placeholder='Enter author name...' />
            </label>
        </section>
    </main>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import Button from '@/components/common/Button.vue'

export default defineComponent({
  components: {
    Button
  },
  data () {
    return {
      courseName: '',
      courseDescription: ''
    }
  }
})
</script>
