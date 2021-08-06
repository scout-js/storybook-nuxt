<template>
  <div>
    <InfiniteSteigerungsformenTables/>
    <ConjugationImperativTables/>
    <DeclinationTables/>
    <DeclinationNounTables/>
    <ConjugationTables/>
  </div>
</template>

<script>
import DeclinationTables from '~/components/DeclinationTables'
import DeclinationNounTables from '~/components/DeclinationNounTables'
import InfiniteSteigerungsformenTables from '~/components/InfiniteSteigerungsformenTables'
import ConjugationTables from '~/components/ConjugationTables'
import ConjugationImperativTables from '~/components/ConjugationImperativTables'

export default {
  components: {
    DeclinationTables,
    DeclinationNounTables,
    InfiniteSteigerungsformenTables,
    ConjugationTables,
    ConjugationImperativTables
  }
}
</script>

<style lang="scss">
@import "../static/assets/styles";
</style>
