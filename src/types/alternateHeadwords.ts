/*
An alternate headword is a regional or less common spelling of a headword

Display Guidance
See hwi for handling of hw
*/

import { ParenthesizedSubjectStatusLabel } from './labels'
import { Pronunciations } from './pronunciations'

export interface AlternateHeadword {
  hw: string // headword
  prs?: Pronunciations
  psl?: ParenthesizedSubjectStatusLabel
}

export type AlternateHeadwords = Array<AlternateHeadword>
