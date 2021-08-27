<template>
  <section data-block-type="grammar">
    <h2 id="grammatik">Grammatik</h2>
    <p>Perfektbildung mit „hat“; meist im Infinitiv <i>und</i> im 2.&nbsp;Partizip</p>
    <div id="accordion">
      <!-- Indicativ -->
      <ConjugationTables id="indicativ" title="Indicativ" />

      <!-- Konjunktiv I -->
      <ConjugationTables id="konjunktiv-i" title="Konjunktiv I" :full="false" />

      <!-- Konjunktiv II -->
      <ConjugationTables id="konjunktiv-ii" title="Konjunktiv II" :full="false" />

      <!-- Imperativ -->
      <ConjugationImperativTables id="imperativ" title="Imperativ" />

      <!-- Infinite -->
      <InfiniteSteigerungsformenTables id="infinite" title="Infinite Formen" />
    </div>
  </section>
</template>

<script>
import { conjugation } from '~/static/data.json'
import ConjugationTables from '~/components/ConjugationTables'
import ConjugationImperativTables from '~/components/ConjugationImperativTables'
import InfiniteSteigerungsformenTables from '~/components/InfiniteSteigerungsformenTables'

export default {
  name: 'ConjugationVerb',
  components: { ConjugationTables, ConjugationImperativTables, InfiniteSteigerungsformenTables },
  data() {
    return {
      conjugation,
    }
  },
}
</script>
