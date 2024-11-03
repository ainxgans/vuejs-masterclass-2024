<template>
  <div>
    <h1>Home</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }"
      >Go to projects 1</RouterLink
    >
  </div>
</template>

<script lang="ts">
export default {}
</script>
<style lang=""></style>
