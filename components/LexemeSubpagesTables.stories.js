import { withKnobs, text } from "@storybook/addon-knobs"
import "assets/conjugation.scss"
// import { action } from '@storybook/addon-actions'

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
