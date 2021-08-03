<template>
  <div class="accordion-wrapper deklination single-group">
    <h3 class="accordion-tables_header">{{ deklination.noun.title }}</h3>
    <div class="accordion-groups">
      <div class="accordion-tables_group">
        <Table :sidebar="deklination.sidebar" :items="deklination.singular" />
        <Table :sidebar="deklination.sidebar" :items="deklination.plural" />
      </div>
    </div>
    <div class="accordion-hints_group">
      <div class="accordion--item_hint">{{ deklination.hint }}</div>
    </div>
  </div>
</template>

<script>
  import { deklination } from '~/static/data.json'
  import Table from '~/components/Table'

  export default {
    name: 'DeklinationNounTables',
    components: { Table },
    data() {
      return {
        deklination,
      }
    },
  }
</script>
