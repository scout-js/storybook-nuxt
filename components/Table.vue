<template>
  <div class="accordion-table">
    <Sidebar :sidebar="sidebar" />
    <ul class="accordion--list content-column">
      <li v-for="(item, key) in items" :key="key" class="accordion--item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    props: {
      sidebar: {
        type: Array,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
    },
  }
</script>
