<template>
  <div class="con-dec__wrapper conjugation independent-groups imperativ">
    <h3 id="imperativ" class="accordion-tables__header">{{ conjugation.imperativ.title }}</h3>
    <div class="accordion-groups">
      <div class="accordion-group">
        <div class="accordion-tables__group">
          <Table :sidebar="conjugation.imperativ.sidebar" :items="conjugation.imperativ.content" />
        </div>
        <div class="accordion-hints__group">
          <div class="accordion__item__hint">{{ conjugation.hint }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { conjugation } from '~/static/data.json'
  import Table from '~/components/Table'

  export default {
    name: 'KonjugationImperativTables',
    components: { Table },
    data() {
      return {
        conjugation,
      }
    },
  }
</script>
