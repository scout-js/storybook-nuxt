<template>
  <ul class="accordion--list content-column">
    <li v-for="(item, key) in items" :key="key" class="accordion--item">{{ item }}</li>
  </ul>
</template>

<script>
  export default {
    name: 'ContentPart',
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  }
</script>
