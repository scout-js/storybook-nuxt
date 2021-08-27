<template>
  <div class="con-dec__wrapper conjugation independent-groups">
    <h3 v-if="id && title" :id="id" class="accordion-tables__header">{{ title }}</h3>
    <div class="accordion-groups">
      <div class="accordion-group">
        <div class="accordion-tables__group">
          <Table :sidebar="conjugation.sidebar" :items="conjugation.prasens" />
          <Table v-if="full" :sidebar="conjugation.sidebar" :items="conjugation.prateritum" />
          <Table v-else :sidebar="conjugation.sidebar" :items="conjugation.perfekt" />
        </div>
      </div>
      <div v-if="full" class="accordion-group">
        <div class="accordion-tables__group">
          <Table :sidebar="conjugation.sidebar" :items="conjugation.perfekt" />
          <Table :sidebar="conjugation.sidebar" :items="conjugation.plusquamperfekt" />
        </div>
      </div>
      <div class="accordion-group">
        <div class="accordion-tables__group">
          <Table :sidebar="conjugation.sidebar" :items="conjugation.futurI" />
          <Table :sidebar="conjugation.sidebar" :items="conjugation.futurIi" />
        </div>
      </div>
      <div class="accordion-hints__group">
        <div class="accordion__item__hint"><sup>(1)</sup> <span>{{ conjugation.hint }}</span></div>
        <div class="accordion__item__hint"><sup>(2)</sup> <span>{{ conjugation.hint }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { conjugation } from '~/static/data.json'
  import Table from '~/components/Table'

  export default {
    name: 'СonjugationTables',
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
      full: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        conjugation,
      }
    },
  }
</script>
