<template>
  <div class="accordion-wrapper deklination combined-groups">
    <h3 class="accordion-tables_header">{{ deklination.title }}</h3>
    <div class="accordion-groups">
      <div class="accordion-tables_group">
        <Table :sidebar="deklination.sidebar" :items="deklination.maskulin" />
        <Table :sidebar="deklination.sidebar" :items="deklination.femininum" />
      </div>
      <div class="accordion-tables_group">
        <Table :sidebar="deklination.sidebar" :items="deklination.neutrum" />
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
  import Table from '~/component/Table'

  export default {
    name: 'DeklinationTables',
    components: { Table },
    data() {
      return {
        deklination,
      }
    },
  }
</script>
