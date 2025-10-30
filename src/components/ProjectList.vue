<script setup lang="ts">
const projects = [
  { id: 1, name: 'TodoList' },
  { id: 2, name: 'Random Quote Generator' },
]
</script>
<template>
  <div>
    <h2>Project List</h2>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <router-link :to="`/projects/${project.id}`">{{ project.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
