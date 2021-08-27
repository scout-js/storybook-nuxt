<template>
  <section data-block-type="grammar">
    <h2 id="grammatik">{{ 'Grammatik' }}</h2>
    <div id="accordion">
      <DeclinationNounTables id="deklination" title="Deklination" />
    </div>
  </section>
</template>

<script>
import { declination } from '~/static/data.json'
import DeclinationNounTables from '~/components/DeclinationNounTables'

export default {
  name: 'DeclinationNouns',
  components: { DeclinationNounTables },
  data() {
    return {
      declination,
    }
  },
}
</script>
