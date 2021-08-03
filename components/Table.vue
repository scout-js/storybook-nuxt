<template>
  <div class="accordion-table">
    <Sidebar :sidebar="sidebar" />
    <ContentPart :items="items" />
  </div>
</template>

<script>
  import Sidebar from '~/components/Sidebar'
  import ContentPart from '~/components/ContentPart'

  export default {
    name: 'Table',
    components: { Sidebar, ContentPart },
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
