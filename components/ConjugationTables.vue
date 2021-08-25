<template>
  <div class="con-dec__wrapper conjugation independent-groups">
    <h3 class="accordion-tables__header">{{ title }}</h3>
    <div class="accordion-groups">
      <div class="accordion-group">
        <div class="accordion-tables__group">
          <Table :sidebar="conjugation.sidebar" :items="conjugation.prasens" />
          <Table :sidebar="conjugation.sidebar" :items="conjugation.prateritum" />
        </div>
        <div class="accordion-hints__group">
          <div class="accordion__item__hint">{{ conjugation.hint }}</div>
        </div>
      </div>
      <div class="accordion-group">
        <div class="accordion-tables__group">
          <Table :sidebar="conjugation.sidebar" :items="conjugation.perfekt" />
          <Table :sidebar="conjugation.sidebar" :items="conjugation.plusquamperfekt" />
        </div>
        <div class="accordion-hints__group">
          <div class="accordion__item__hint">{{ conjugation.hint }}</div>
          <div class="accordion__item__hint">{{ conjugation.hint }}</div>
        </div>
      </div>
      <div class="accordion-group">
        <div class="accordion-tables__group">
          <Table :sidebar="conjugation.sidebar" :items="conjugation.futurI" />
          <Table :sidebar="conjugation.sidebar" :items="conjugation.futurIi" />
        </div>
        <div class="accordion-hints__group">
          <div class="accordion__item__hint">{{ conjugation.hint }}</div>
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
    name: 'KonjugationTables',
    components: { Table },
    props: {
      title: {
        type: String,
        default: 'Konjugation',
      },
    },
    data() {
      return {
        conjugation,
      }
    },
  }
</script>
