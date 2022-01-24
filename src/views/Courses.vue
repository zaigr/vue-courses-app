<template>
    <div class='action-bar'>
        <SearchBar placeholder='Enter course name...' />
    </div>
    <main>
        <CourseCard v-for='course in courses' :course='course' :key='course.id' />
    </main>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import { DataSource, Course } from '@/helpers/DataSource'

import SearchBar from '@/components/common/SearchBar.vue'
import CourseCard from '@/components/CourseCard.vue'

export default defineComponent({
  components: {
    CourseCard,
    SearchBar
  },
  data () {
    return {
      courses: [] as Course[]
    }
  },
  mounted () {
    this.courses = DataSource.GetCourses()
  }
})
</script>

<style scoped>
.action-bar {
    margin: 2%;
}
</style>
