<template>
  <section data-block-type="grammar">
    <h2>Grammatik</h2>
    <div id="accordion">
      <DeclinationNounTables />
    </div>
  </section>
</template>

<script>
import { declination } from '~/static/data.json'
import Table from '~/components/Table'

export default {
  name: 'DeklinationNouns',
  components: { Table },
  data() {
    return {
      declination,
    }
  },
}
</script>
