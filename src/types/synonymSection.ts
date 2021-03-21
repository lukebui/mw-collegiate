/*
Extensive discussions of synonyms for the headword may be included in the entry.

Display Guidance
Typically displayed in a separate paragraph with a heading such as "Synonym Discussion of [headword]".
An sarefs is preceded by "synonyms " in bold, then "see in addition " in normal font, then the sarefs array elements rendered as hyperlinks to other synonym sections.
*/

import { VerbalIllustrations } from './verbalIllustrations'

export interface SynonymDiscussion {
  pl?: string // paragraph label: heading to display at top of section
  pt?: Array<
    | ['text', string] // synonym discussion text
    | VerbalIllustrations
  >
  sarefs: Array<string> // "see in addition" reference: contains one or more elements, each of which is the text and ID of a "see in addition" reference to another synonym section.
}

export type SynonymSection = Array<SynonymDiscussion>
