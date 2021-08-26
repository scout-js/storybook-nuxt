import '../static/assets/styles.scss'

export default {
  title: 'Lexeme Subpage Tables',
}

export const TableConjugation = () => ({
  template:  '<ConjugationTables id="konjugation" title="Konjugation" />',
})

export const TableDeclination = () => ({
  template:  '<DeclinationTables />',
})

export const TableConjugationImperativ = () => ({
  template:  '<ConjugationImperativTables id="imperativ" title="Konjugation: Imperativ" />',
})

export const TableDeclinationNoun = () => ({
  template:  '<DeclinationNounTables />',
})

export const TableInfiniteSteigerungsformen = () => ({
  template:  '<InfiniteSteigerungsformenTables id="infinite" title="Konjugation: Infinite / Deklination: Steigerungsformen" />',
})
