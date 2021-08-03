<template>
  <div class="accordion-wrapper konjugation independent-groups imperativ">
    <h3 class="accordion-tables_header">{{ konjugation.imperativ.title }}</h3>
    <div class="accordion-groups">
      <div class="accordion-group">
        <div class="accordion-tables_group">
          <Table :sidebar="konjugation.imperativ.sidebar" :items="konjugation.imperativ.content" />
        </div>
        <div class="accordion-hints_group">
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
    name: 'KonjugationImperativTables',
    components: { Table },
    data() {
      return {
        konjugation,
      }
    },
  }
</script>
