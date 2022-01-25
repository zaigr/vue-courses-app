<template>
    <div class='action-bar'>
        <SearchBar placeholder='Enter course name...' />
        <Button @click='navigateCreateCourse' text='Add new course' :style='{ float: "right" }' />
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
import Button from '@/components/common/Button.vue'

export default defineComponent({
  components: {
    CourseCard,
    SearchBar,
    Button
  },
  data () {
    return {
      courses: [] as Course[]
    }
  },
  methods: {
    navigateCreateCourse () {
      this.$router.push('/courses/add')
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
