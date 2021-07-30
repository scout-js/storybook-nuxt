<template>
  <div class="accordion-wrapper conjugation">
    <h3 class="accordion-tables_header">{{ 'Konjugation ///// Gemischte Beugung (mit ein, kein, Possessiv-pronomen u.a.)' }}</h3>
    <div class="accordion-tables">
      <div class="accordion-tables_group">
        <Table :sidebar="konjugation.sidebar" :items="konjugation.prasens" />
        <Table :sidebar="konjugation.sidebar" :items="konjugation.prateritum" />
      </div>
      <div class="accordion-tables_group">
        <Table :sidebar="konjugation.sidebar" :items="konjugation.perfekt" />
        <Table :sidebar="konjugation.sidebar" :items="konjugation.plusquamperfekt" />
      </div>
      <div class="accordion-tables_group">
        <Table :sidebar="konjugation.sidebar" :items="konjugation.futurI" />
        <Table :sidebar="konjugation.sidebar" :items="konjugation.futurIi" />
      </div>
    </div>
  </div>
</template>

<script>
  import {konjugation} from "~/static/data.json"
  export default {
    name: 'KonjugationTables',
    data() {
      return {
        konjugation,
      }
    },
  }
</script>
