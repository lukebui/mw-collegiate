/*
Provide usage information on a headword, defined run-on phrase, or undefined entry word.

Display Guidance
An uns is typically displayed inline in normal font, preceded by a space and an em-dash.
*/

import { RunIn } from './runIn'
import { VerbalIllustrations } from './verbalIllustrations'

export type UsageNote = [
  ['text', string],
  ...Array<['text', string] | RunIn | VerbalIllustrations>
]

export type UsageNotes = ['uns', UsageNote[]]
