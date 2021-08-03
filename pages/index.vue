<template>
  <div>
    <DeklinationTables />
    <DeklinationNounTables />
    <InfiniteSteigerungsformenTables />
    <KonjugationTables />
  </div>
</template>

<script>
  import DeklinationTables from '~/components/DeklinationTables'
  import DeklinationNounTables from '~/components/DeklinationNounTables'
  import InfiniteSteigerungsformenTables from '~/components/InfiniteSteigerungsformenTables'
  import KonjugationTables from '~/components/KonjugationTables'

  export default {
    components: { InfiniteSteigerungsformenTables, DeklinationTables, DeklinationNounTables, KonjugationTables }
  }
</script>

<style lang="scss">
  @import "../assets/conjugation";
</style>
