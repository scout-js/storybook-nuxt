import '../static/assets/styles.scss'

export default {
  title: 'Lexeme Subpage Tables',
}

export const TableConjugation = () => ({
  template:  '<KonjugationTables />',
})

export const TableDeklination = () => ({
  template:  '<DeklinationTables />',
})

export const TableKonjugationImperativ = () => ({
  template:  '<KonjugationImperativTables />',
})

export const TableDeklinationNoun = () => ({
  template:  '<DeklinationNounTables />',
})

export const TableInfiniteSteigerungsformen = () => ({
  template:  '<InfiniteSteigerungsformenTables />',
})
