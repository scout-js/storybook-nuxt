import '../static/assets/styles.scss'

export default {
  title: 'Lexeme Subpage Tables',
}

export const TableConjugation = () => ({
  template:  '<ConjugationTables id="konjugation" title="Konjugation" />',
})

export const TableDeclination = () => ({
  template:  '<DeclinationTables id="declination" title="Declination" />',
})

export const TableConjugationImperativ = () => ({
  template:  '<ConjugationImperativTables id="imperativ" title="Konjugation: Imperativ" />',
})

export const TableDeclinationNoun = () => ({
  template:  '<DeclinationNounTables id="declination-noun" title="Declination: Noun" />',
})

export const TableInfiniteSteigerungsformen = () => ({
  template:  '<InfiniteSteigerungsformenTables id="infinite" title="Konjugation: Infinite / Deklination: Steigerungsformen" />',
})
