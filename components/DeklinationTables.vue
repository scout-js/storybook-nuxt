<template>
  <div class="accordion-wrapper deklination">
    <h3 class="accordion-tables_header">{{ 'Deklination // Gemischte Beugung (mit ein, kein, Possessiv-pronomen u.a.)' }}</h3>
    <div class="accordion-groups">
      <div class="accordion-tables_group">
        <Table class="table--maskulin" :sidebar="deklination.sidebar" :items="deklination.maskulin" />
        <Table class="table--femininum" :sidebar="deklination.sidebar" :items="deklination.femininum" />
      </div>
      <div class="accordion-tables_group">
        <Table class="table--neutrum" :sidebar="deklination.sidebar" :items="deklination.neutrum" />
        <Table class="table--plural" :sidebar="deklination.sidebar" :items="deklination.plural" />
      </div>
    </div>
    <div class="accordion--item_hint">{{ deklination.hint }}</div>
  </div>
</template>

<script>
  import {deklination} from "~/static/data.json"
  export default {
    name: 'DeklinationTables',
    data() {
      return {
        deklination,
      }
    },
  }
</script>
