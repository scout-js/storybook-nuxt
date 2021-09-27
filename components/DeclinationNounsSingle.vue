<template>
  <section data-block-type="grammar">
    <h2 id="grammatik">{{ 'Grammatik' }}</h2>
    <div id="accordion">
      <DeclinationNounSingleTables id="deklination" title="Deklination" />
    </div>
  </section>
</template>

<script>
import { declination } from '~/static/data.json'
import DeclinationNounSingleTables from '~/components/DeclinationNounSingleTables'

export default {
  name: 'DeclinationSingleNouns',
  components: { DeclinationNounSingleTables },
  data() {
    return {
      declination,
    }
  },
}
</script>
