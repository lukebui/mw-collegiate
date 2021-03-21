/*
Inflection is the change of form that words undergo in different grammatical contexts, such as tense or number.

Display Guidance
If both if and ifc are present, only one should be displayed to the user. The ifc has traditionally been used in print publications. Both are typically displayed in bold.
The il inflection label is typically displayed in italics, and should be followed by a space.
Inflection objects should be separated by a semicolon and space unless the second object of a pair contains il, in which case they should be separated by a space.
*/

import { SenseSpecificInflectionPluralLabel } from './labels'
import { Pronunciations } from './pronunciations'

export interface Inflection {
  if: string // inflection: a fully spelled-out inflection
  ifc: string // inflection cutback: an inflection ending (eg, "-ing")
  il: string // inflection label, such as “also”, “plural”, “or”
  prs?: Pronunciations
  spl?: SenseSpecificInflectionPluralLabel
}

export type Inflections = Array<Inflection>
