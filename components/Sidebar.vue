<template>
  <ul class="accordion--list sidebar-column dashed">
    <li v-for="(item, id) in sidebar" :key="id" class="accordion--item">{{ item }}</li>
  </ul>
</template>

<script>
  export default {
    name: 'Sidebar',
    props: {
      sidebar: {
        type: Array,
        required: true,
      },
    },
  }
</script>
