/*
The sense gathers together all content relevant to a particular meaning of a headword or defined run-on phrase.

Display Guidance
A typical implementation might generate a newline at a top-level numbered sense, while keeping further nested subsenses inline.
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
import { DividedSense } from './dividedSense'
import { SenseNumber } from './senseNumber'

export interface SenseObject {
  dt: DefiningText
  et?: Etymology
  ins?: Inflections
  lbs?: GeneralLabels
  prs?: Pronunciations
  sdsense?: DividedSense
  sgram?: SenseSpecificGrammaticalLabel
  sls?: SubjectStatusLabels
  sn?: SenseNumber
  vrs?: Variants
}

export type Sense = ['sense', SenseObject]

export type Senses = Sense | Array<Senses>
