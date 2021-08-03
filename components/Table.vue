<template>
  <div class="accordion-table">
    <Sidebar :sidebar="sidebar" />
    <ContentPart :items="items" />
  </div>
</template>

<script>
  import Sidebar from '~/component/Sidebar'
  import ContentPart from '~/component/ContentPart'

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
