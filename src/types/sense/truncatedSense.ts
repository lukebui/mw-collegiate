/*
A truncated sense is a sense without a definition, and is used almost exclusively when two sense numbers are separated by a non-definition element.

Display Guidance
Handle the same as sense.
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
import { SenseNumber } from './senseNumber'

export type TruncatedSense = [
  'sen',
  {
    et?: Etymology
    ins?: Inflections
    lbs?: GeneralLabels
    prs?: Pronunciations
    sgram?: SenseSpecificGrammaticalLabel
    sls?: SubjectStatusLabels
    sn?: SenseNumber
    vrs?: Variants
  }
]
