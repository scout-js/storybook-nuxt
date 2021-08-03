<template>
  <div class="accordion-wrapper deklination combined-groups odd">
    <h3 class="accordion-tables_header">{{ infinite.title }}</h3>
    <div class="accordion-groups">
      <div class="accordion-tables_group">
        <div class="accordion-table">
          <ContentPart :items="infinite.infinitiv" />
        </div>
      </div>
      <div class="accordion-tables_group">
        <div class="accordion-table">
          <ContentPart :items="infinite.partizipI" />
        </div>
      </div>
      <div class="accordion-tables_group">
        <div class="accordion-table">
          <ContentPart :items="infinite.partizipIi" />
        </div>
      </div>
    </div>
    <div class="accordion-hints_group">
      <div class="accordion--item_hint">{{ infinite.hint }}</div>
    </div>
  </div>
</template>

<script>
  import { infinite } from '~/static/data.json'
  import ContentPart from '~/components/ContentPart'

  export default {
    name: 'InfiniteSteigerungsformenTables',
    components: { ContentPart },
    data() {
      return {
        infinite,
      }
    },
  }
</script>
