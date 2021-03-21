/*
A defined run-on phrase is an expression or phrasal verb formed from the headword. This phrase, its definition section, and other information such as pronunciations, together make up a defined run-on.

Display Guidance
Each defined run-on is typically displayed in a new paragraph.
The drp is displayed in bold and preceded by an em-dash.
*/

import { Inflections } from './inflections'
import {
  GeneralLabels,
  ParenthesizedSubjectStatusLabel,
  SubjectStatusLabels
} from './labels'
import { Pronunciations } from './pronunciations'
import { DefinitionSections } from './sense'
import { UsageNotes } from './usageNotes'
import { Variants } from './variants'
import { VerbalIllustrations } from './verbalIllustrations'

export interface DefinedRunOn {
  drp?: string // defined run-on phrase
  def: DefinitionSections
  utxt?: Array<VerbalIllustrations | UsageNotes>
  ins?: Inflections
  lbs?: GeneralLabels
  prs?: Pronunciations
  psl?: ParenthesizedSubjectStatusLabel
  sls?: SubjectStatusLabels
  vrs?: Variants
}

export type DefinedRunOns = Array<DefinedRunOn>
