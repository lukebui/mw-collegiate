/*
// An undefined entry word is derived from or related to the headword, carries a functional label and possibly other information, but does not have any definitions.
// Display Guidance
// In a set of undefined run-ons, each could be displayed in a new paragraph or kept inline, depending on space considerations.
// The ure is displayed in bold, preceded by an em-dash, and followed by a space.
*/

import { Inflections } from './inflections'
import {
  FunctionalLabel,
  GeneralLabels,
  ParenthesizedSubjectStatusLabel,
  SubjectStatusLabels
} from './labels'
import { Pronunciations } from './pronunciations'
import { UsageNotes } from './usageNotes'
import { Variants } from './variants'
import { VerbalIllustrations } from './verbalIllustrations'

export interface UndefinedRunOn {
  ure?: string // undefined entry word
  fl: FunctionalLabel
  utxt?: Array<VerbalIllustrations | UsageNotes>
  ins?: Inflections
  lbs?: GeneralLabels
  prs?: Pronunciations
  psl?: ParenthesizedSubjectStatusLabel
  sls?: SubjectStatusLabels
  vrs?: Variants
}

export type UndefinedRunOns = Array<UndefinedRunOn>
