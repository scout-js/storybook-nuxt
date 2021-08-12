<template>
  <section data-block-type="grammar">
    <h2>Grammatik</h2>
    <div id="accordion">
      <!-- Steigerungsformen -->
      <InfiniteSteigerungsformenTables />

      <!--   Starke Beugung (ohne Artikel)   -->
      <div class="con-dec__wrapper declination combined-groups">
        <h3 class="accordion-tables__header">{{ 'Starke Beugung (ohne Artikel)' }}</h3>
        <div class="accordion-content">
          <div class="accordion-groups">
            <div class="accordion-tables__group">
              <Table :sidebar="declination.sidebar" :items="declination.maskulin" />
              <Table :sidebar="declination.sidebar" :items="declination.femininum" />
            </div>
            <div class="accordion-tables__group">
              <Table :sidebar="declination.sidebar" :items="declination.neutrum" />
              <Table :sidebar="declination.sidebar" :items="declination.plural" />
            </div>
          </div>
          <div class="accordion-hints__group">
            <div class="accordion__item__hint">{{ declination.hint }}</div>
          </div>
        </div>
      </div>

      <!--   Schwache Beugung (mit Artikel)   -->
      <div class="con-dec__wrapper declination combined-groups">
        <h3 class="accordion-tables__header">{{ 'Schwache Beugung (mit Artikel)' }}</h3>
        <div class="accordion-content">
          <div class="accordion-groups">
            <div class="accordion-tables__group">
              <Table :sidebar="declination.sidebar" :items="declination.maskulin" />
              <Table :sidebar="declination.sidebar" :items="declination.femininum" />
            </div>
            <div class="accordion-tables__group">
              <Table :sidebar="declination.sidebar" :items="declination.neutrum" />
              <Table :sidebar="declination.sidebar" :items="declination.plural" />
            </div>
          </div>
          <div class="accordion-hints__group">
            <div class="accordion__item__hint">{{ declination.hint }}</div>
          </div>
        </div>
      </div>

      <!--   Gemischte Beugung (mit ein, kein, Possessivpronomen u.a.)   -->
      <div class="con-dec__wrapper declination combined-groups">
        <h3 class="accordion-tables__header">{{ 'Gemischte Beugung (mit ein, kein, Possessivpronomen u.a.)' }}</h3>
        <div class="accordion-content">
          <div class="accordion-groups">
            <div class="accordion-tables__group">
              <Table :sidebar="declination.sidebar" :items="declination.maskulin" />
              <Table :sidebar="declination.sidebar" :items="declination.femininum" />
            </div>
            <div class="accordion-tables__group">
              <Table :sidebar="declination.sidebar" :items="declination.neutrum" />
              <Table :sidebar="declination.sidebar" :items="declination.plural" />
            </div>
          </div>
          <div class="accordion-hints__group">
            <div class="accordion__item__hint">{{ declination.hint }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { declination } from '~/static/data.json'
import Table from '~/components/Table'

export default {
  name: 'DeklinationAdjectives',
  components: { Table },
  data() {
    return {
      declination,
    }
  },
}
</script>
