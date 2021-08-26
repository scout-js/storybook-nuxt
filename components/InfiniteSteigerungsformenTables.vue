<template>
  <div class="con-dec__wrapper declination combined-groups odd">
    <h3 v-if="id && title" :id="id" class="accordion-tables__header">{{ title }}</h3>
    <div class="accordion-content">
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
        <div class="accordion__item__hint"><sup>(1)</sup> {{ infinite.hint }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { infinite } from '~/static/data.json'
  import ContentPart from '~/components/ContentPart'

  export default {
    name: 'InfiniteSteigerungsformenTables',
    components: { ContentPart },
    props: {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        infinite,
      }
    },
  }
</script>
