<template>
  <div>
    <InfiniteSteigerungsformenTables />
    <KonjugationImperativTables />
    <DeklinationTables />
    <DeklinationNounTables />
    <KonjugationTables />
  </div>
</template>

<script>
  import DeklinationTables from '~/components/DeklinationTables'
  import DeklinationNounTables from '~/components/DeklinationNounTables'
  import InfiniteSteigerungsformenTables from '~/components/InfiniteSteigerungsformenTables'
  import KonjugationTables from '~/components/KonjugationTables'
  import KonjugationImperativTables from '~/components/KonjugationImperativTables'

  export default {
    components: { KonjugationImperativTables, InfiniteSteigerungsformenTables, DeklinationTables, DeklinationNounTables, KonjugationTables }
  }
</script>

<style lang="scss">
  @import "../static/assets/styles";
</style>
