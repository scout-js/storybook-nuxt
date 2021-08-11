<template>
  <section data-block-type="grammar">
    <h2>Grammatik</h2>
    <div id="accordion">
      <!-- Indicativ -->
      <div class="con-dec__wrapper conjugation independent-groups">
        <h3 class="accordion-tables__header">{{ 'Indicativ' }}</h3>
        <div class="accordion-groups">
          <div class="accordion-group">
            <div class="accordion-tables__group">
              <Table :sidebar="conjugation.sidebar" :items="conjugation.prasens" />
              <Table :sidebar="conjugation.sidebar" :items="conjugation.prateritum" />
            </div>
            <div class="accordion-hints__group">
              <div class="accordion__item__hint">{{ conjugation.hint }}</div>
            </div>
          </div>
          <div class="accordion-group">
            <div class="accordion-tables__group">
              <Table :sidebar="conjugation.sidebar" :items="conjugation.perfekt" />
              <Table :sidebar="conjugation.sidebar" :items="conjugation.plusquamperfekt" />
            </div>
            <div class="accordion-hints__group">
              <div class="accordion__item__hint">{{ conjugation.hint }}</div>
              <div class="accordion__item__hint">{{ conjugation.hint }}</div>
            </div>
          </div>
          <div class="accordion-group">
            <div class="accordion-tables__group">
              <Table :sidebar="conjugation.sidebar" :items="conjugation.futurI" />
              <Table :sidebar="conjugation.sidebar" :items="conjugation.futurIi" />
            </div>
            <div class="accordion-hints__group">
              <div class="accordion__item__hint">{{ conjugation.hint }}</div>
              <div class="accordion__item__hint">{{ conjugation.hint }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Konjunktiv I -->
      <div class="con-dec__wrapper conjugation independent-groups">
        <h3 class="accordion-tables__header">{{ 'Konjunktiv I' }}</h3>
        <div class="accordion-groups">
          <div class="accordion-group">
            <div class="accordion-tables__group">
              <Table :sidebar="conjugation.sidebar" :items="conjugation.prasens" />
              <Table :sidebar="conjugation.sidebar" :items="conjugation.perfekt" />
            </div>
            <div class="accordion-hints__group">
              <div class="accordion__item__hint">{{ conjugation.hint }}</div>
            </div>
          </div>
          <div class="accordion-group">
            <div class="accordion-tables__group">
              <Table :sidebar="conjugation.sidebar" :items="conjugation.futurI" />
              <Table :sidebar="conjugation.sidebar" :items="conjugation.futurIi" />
            </div>
            <div class="accordion-hints__group">
              <div class="accordion__item__hint">{{ conjugation.hint }}</div>
              <div class="accordion__item__hint">{{ conjugation.hint }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Konjunktiv II -->
      <div class="con-dec__wrapper conjugation independent-groups">
        <h3 class="accordion-tables__header">{{ 'Konjunktiv II' }}</h3>
        <div class="accordion-groups">
          <div class="accordion-group">
            <div class="accordion-tables__group">
              <Table :sidebar="conjugation.sidebar" :items="conjugation.prasens" />
              <Table :sidebar="conjugation.sidebar" :items="conjugation.perfekt" />
            </div>
            <div class="accordion-hints__group">
              <div class="accordion__item__hint">{{ conjugation.hint }}</div>
            </div>
          </div>
          <div class="accordion-group">
            <div class="accordion-tables__group">
              <Table :sidebar="conjugation.sidebar" :items="conjugation.futurI" />
              <Table :sidebar="conjugation.sidebar" :items="conjugation.futurIi" />
            </div>
            <div class="accordion-hints__group">
              <div class="accordion__item__hint">{{ conjugation.hint }}</div>
              <div class="accordion__item__hint">{{ conjugation.hint }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Imperativ -->
      <ConjugationImperativTables />

      <!-- Infinitiv -->
      <InfiniteSteigerungsformenTables />
    </div>
  </section>
</template>

<script>
import { conjugation } from '~/static/data.json'
import Table from '~/components/Table'

export default {
  name: 'ConjugationVerb',
  components: { Table },
  data() {
    return {
      conjugation,
    }
  },
}
</script>
