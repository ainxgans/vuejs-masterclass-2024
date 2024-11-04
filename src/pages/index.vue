<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { onMounted } from 'vue'
const getProjects = async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) {
    console.error(error)
  }
  console.log('Projects:', data)
}

onMounted(() => {
  getProjects()
})
</script>

<template>
  <div>
    <h1>Home</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }"
      >Go to projects 1</RouterLink
    >
  </div>
</template>

<style lang=""></style>
