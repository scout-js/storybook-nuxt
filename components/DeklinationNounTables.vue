<template>
  <div class="con-dec__wrapper declination single-group">
    <h3 class="accordion-tables__header">{{ declination.noun.title }}</h3>
    <div class="accordion-groups">
      <div class="accordion-tables__group">
        <Table :sidebar="declination.sidebar" :items="declination.singular" />
        <Table :sidebar="declination.sidebar" :items="declination.plural" />
      </div>
    </div>
    <div class="accordion-hints__group">
      <div class="accordion__item__hint">{{ declination.hint }}</div>
    </div>
  </div>
</template>

<script>
  import { declination } from '~/static/data.json'
  import Table from '~/components/Table'

  export default {
    name: 'DeklinationNounTables',
    components: { Table },
    data() {
      return {
        declination,
      }
    },
  }
</script>
