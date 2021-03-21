/*
A called-also note lists other names a headword is called in a given sense.

Display Guidance
A ca is preceded by an em-dash and a space.
The intro is typically displayed in normal font, and the cat in italics.
The pn is displayed in parentheses, followed by a space.
Note that a ca is typically found at an entry providing detailed definition content, and hence a hyperlink is not generated for the cat target. If the cat target is entered separately in the dictionary, that entry will typically have a cross-reference back to the detailed entry where the ca occurs.
Note, however, that where a catref is present, it may be used to generate a hyperlink if desired.
*/

import { ParenthesizedSubjectStatusLabel } from './labels'
import { Pronunciations } from './pronunciations'

export interface CalledAlsoTarget {
  cat?: string // called-also target text
  catref?: string // called-also reference containing target ID
  pn?: string // parenthesized number
  prs?: Pronunciations
  psl?: ParenthesizedSubjectStatusLabel
}

export type CalledAlsoNote = [
  'ca',
  {
    intro: string // contains introductory text "called also"
    cats: Array<CalledAlsoTarget> // of one or more called-also targets
  }
]
