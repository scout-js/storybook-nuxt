<template>
  <ul class="accordion__list sidebar-column dashed">
    <li v-for="(item, id) in sidebar" :key="id" class="accordion__item">{{ item }}</li>
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
