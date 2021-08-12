import '../static/assets/styles.scss'

export default {
  title: 'Lexeme Pages',
}

export const PageConjugation = () => ({
  template:  '<ConjugationVerb />',
})

export const PageDeklinationAdjectives = () => ({
  template:  '<DeclinationAdjectives />',
})

export const PageDeclinationNouns = () => ({
  template:  '<DeclinationNouns />',
})
