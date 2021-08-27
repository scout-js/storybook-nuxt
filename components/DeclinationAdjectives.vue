<template>
  <section data-block-type="grammar">
    <h2 id="grammatik">Grammatik</h2>
    <div id="accordion">
      <!--   Steigerungsformen   -->
      <InfiniteSteigerungsformenTables id="steigerungsformen" title="Steigerungsformen" />

      <!--   Starke Beugung (ohne Artikel)   -->
      <DeclinationTables id="starke-beugung" title="Starke Beugung (ohne Artikel)" />

      <!--   Schwache Beugung (mit Artikel)   -->
      <DeclinationTables id="schwache-beugung" title="Schwache Beugung (mit Artikel)" />

      <!--   Gemischte Beugung (mit ein, kein, Possessivpronomen u.a.)   -->
      <DeclinationTables id="gemischte-beugung" title="Gemischte Beugung (mit ein, kein, Possessivpronomen u.a.)" />
    </div>
  </section>
</template>

<script>
import { declination } from '~/static/data.json'
import InfiniteSteigerungsformenTables from '~/components/InfiniteSteigerungsformenTables'
import DeclinationTables from '~/components/DeclinationTables'

export default {
  name: 'DeclinationAdjectives',
  components: { InfiniteSteigerungsformenTables, DeclinationTables },
  data() {
    return {
      declination,
    }
  },
}
</script>
