/*
The definition section groups together all the sense sequences and verb dividers for a headword or defined run-on phrase.

Display Guidance
Typically displayed in a new paragraph.
*/

import { SenseSequence } from './senseSequence'
import { VerbDivider } from './verbDivider'

export interface DefinitionSection {
  vd?: VerbDivider
  sseq: SenseSequence
}

export type DefinitionSections = Array<DefinitionSection>
