/*
This note provides explanatory or historical information that supplements the definition text.

Display Guidance
Typically displayed after a newline and in normal font. May be preceded with introductory text such as "Note: ".
*/

import { RunIn } from './runIn'
import { VerbalIllustrations } from './verbalIllustrations'

export type SupplementalInformationNote = [
  'snote',
  Array<['t', string] | RunIn | VerbalIllustrations>
]
