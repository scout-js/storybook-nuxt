<template>
  <div class="con-dec__wrapper declination combined-groups odd">
    <h3 class="accordion-tables__header">{{ infinite.title }}</h3>
    <div class="accordion-groups">
      <div class="accordion-tables__group">
        <div class="accordion-table">
          <ContentPart :items="infinite.infinitiv" />
        </div>
      </div>
      <div class="accordion-tables__group">
        <div class="accordion-table">
          <ContentPart :items="infinite.partizipI" />
        </div>
      </div>
      <div class="accordion-tables__group">
        <div class="accordion-table">
          <ContentPart :items="infinite.partizipIi" />
        </div>
      </div>
    </div>
    <div class="accordion-hints__group">
      <div class="accordion__item__hint">{{ infinite.hint }}</div>
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
