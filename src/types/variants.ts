/*
A variant is a different spelling or styling of a headword, defined run-on phrase, or undefined entry word

Display Guidance
A set of variants might be displayed inline with the headword, or in its own block with a lead-in heading such as "variants:".
Each va is typically displayed in bold, less prominently than an hw.
A vl is typically displayed in italics.
*/

import { SenseSpecificInflectionPluralLabel } from './labels'
import { Pronunciations } from './pronunciations'

export interface Variant {
  va: string // variant
  vl?: string // variant label, such as “or”
  prs?: Pronunciations
  spl?: SenseSpecificInflectionPluralLabel
}
export type Variants = Array<Variant>
