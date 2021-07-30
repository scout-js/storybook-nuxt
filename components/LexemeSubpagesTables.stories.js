import { withKnobs } from "@storybook/addon-knobs"
import "assets/conjugation.scss"

export default {
  title: 'Lexeme Subpage Tables',
  decorators: [withKnobs]
}

export const TableDeklination = () => ({
  template:  '<DeklinationTables />',
})

export const TableConjugation = () => ({
  template:  '<KonjugationTables />',
})
