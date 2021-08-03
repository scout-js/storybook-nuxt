<template>
  <div class="accordion-wrapper konjugation independent-groups">
    <h3 class="accordion-tables_header">{{ konjugation.title }}</h3>
    <div class="accordion-groups">
      <div class="accordion-group">
        <div class="accordion-tables_group">
          <Table :sidebar="konjugation.sidebar" :items="konjugation.prasens" />
          <Table :sidebar="konjugation.sidebar" :items="konjugation.prateritum" />
        </div>
        <div class="accordion-hints_group">
          <div class="accordion--item_hint">{{ konjugation.hint }}</div>
        </div>
      </div>
      <div class="accordion-group">
        <div class="accordion-tables_group">
          <Table :sidebar="konjugation.sidebar" :items="konjugation.perfekt" />
          <Table :sidebar="konjugation.sidebar" :items="konjugation.plusquamperfekt" />
        </div>
        <div class="accordion-hints_group">
          <div class="accordion--item_hint">{{ konjugation.hint }}</div>
          <div class="accordion--item_hint">{{ konjugation.hint }}</div>
        </div>
      </div>
      <div class="accordion-group">
        <div class="accordion-tables_group">
          <Table :sidebar="konjugation.sidebar" :items="konjugation.futurI" />
          <Table :sidebar="konjugation.sidebar" :items="konjugation.futurIi" />
        </div>
        <div class="accordion-hints_group">
          <div class="accordion--item_hint">{{ konjugation.hint }}</div>
          <div class="accordion--item_hint">{{ konjugation.hint }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { konjugation } from '~/static/data.json'
  import Table from '~/components/Table'

  export default {
    name: 'KonjugationTables',
    components: { Table },
    data() {
      return {
        konjugation,
      }
    },
  }
</script>
