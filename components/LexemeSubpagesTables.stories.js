import '../static/assets/styles.scss'

export default {
  title: 'Lexeme Subpage Tables',
}

export const TableConjugation = () => ({
  template:  '<ConjugationTables />',
})

export const TableDeclination = () => ({
  template:  '<DeclinationTables />',
})

export const TableConjugationImperativ = () => ({
  template:  '<ConjugationImperativTables />',
})

export const TableDeclinationNoun = () => ({
  template:  '<DeclinationNounTables />',
})

export const TableInfiniteSteigerungsformen = () => ({
  template:  '<InfiniteSteigerungsformenTables />',
})
