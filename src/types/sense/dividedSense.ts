/*
A sense may be divided into two parts to show a particular relationship between two closely related meanings.

Display Guidance
The sdsense should be inline with the preceding dt. The sd is displayed in italics, preceded by a semicolon and space, and followed by a space.
*/

import { Etymology } from '../etymology'
import { Inflections } from '../inflections'
import {
  GeneralLabels,
  SenseSpecificGrammaticalLabel,
  SubjectStatusLabels
} from '../labels'
import { Pronunciations } from '../pronunciations'
import { Variants } from '../variants'
import { DefiningText } from './definingText'

export interface DividedSense {
  sd: string // sense divider
  dt: DefiningText
  et?: Etymology
  ins?: Inflections
  lbs?: GeneralLabels
  prs?: Pronunciations
  sgram?: SenseSpecificGrammaticalLabel
  sls?: SubjectStatusLabels
  vrs?: Variants
}
