<template>
  <ul class="accordion__list content-column">
    <li v-for="(item, key) in items" :key="key" class="accordion__item">{{ item }}</li>
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
