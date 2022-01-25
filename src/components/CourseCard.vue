<template>
<article class='course'>
    <section class='course-description'>
        <h2>{{ $props.course.title }}</h2>
        <p>{{ course.description }}</p>
    </section>
    <section class='course-details'>
        <p><strong>Authors:</strong>{{ course.authors.map(a => a.name).join(' ') }}</p>
        <p><strong>Duration:</strong>{{ course.duration }}</p>
        <p><strong>Created:</strong>{{ course.creationDate }}</p>
        <Button text='Show course' :style='{ marginLeft: "40%", marginTop: "2%" }' />
    </section>
</article>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'

import { Course } from '@/helpers/DataSource'

import Button from '@/components/common/Button.vue'

export default defineComponent({
  components: {
    Button
  },
  props: {
    course: {
      type: Object as PropType<Course>,
      required: true
    }
  }
})
</script>

<style scoped>
.course {
    border-style: solid;
    border-color: green;
    border-width: small;
    margin: 0.5% 2% 0.5% 2%;
    padding: 0% 2% 2% 1%;
    display: inline-block;
}

.course-description {
    float: left;
    max-width: 60%;
}

.course-details {
    float: right;
    width: 30%;
}

</style>
