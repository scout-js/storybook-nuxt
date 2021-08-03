import { withKnobs } from "@storybook/addon-knobs"
import "assets/conjugation.scss"

export default {
  title: 'Lexeme Subpage Tables',
  decorators: [withKnobs]
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
