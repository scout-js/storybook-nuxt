<template>
  <div class="con-dec__wrapper declination combined-groups">
    <h3 v-if="id && title" :id="id" class="accordion-tables__header">{{ title }}</h3>
    <div class="accordion-content">
      <div class="accordion-groups">
        <div class="accordion-tables__group">
          <Table :sidebar="declination.sidebar" :items="declination.maskulin" />
          <Table :sidebar="declination.sidebar" :items="declination.femininum" />
        </div>
        <div class="accordion-tables__group">
          <Table :sidebar="declination.sidebar" :items="declination.neutrum" />
          <Table :sidebar="declination.sidebar" :items="declination.plural" />
        </div>
      </div>
      <div class="accordion-hints__group">
        <div class="accordion__item__hint"><sup>(1)</sup> <span>{{ declination.hint }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { declination } from '~/static/data.json'
  import Table from '~/components/Table'

  export default {
    name: 'DeclinationTables',
    components: { Table },
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
        declination,
      }
    },
  }
</script>
