/*
In addition to usage notes within definitions, a more extensive usage discussion may be included in the entry.

Display Guidance

Typically displayed in a separate paragraph, using the pl contents as a heading.
A uarefs is preceded by "usage " in bold, then "see in addition " in normal font, followed by one or more uaref members rendered as hyperlinks to other usage sections.
*/

import { VerbalIllustrations } from './verbalIllustrations'

export interface Usage {
  pl?: string // paragraph label: heading to display at top of section
  pt?: Array<
    | ['text', string] // usage discussion text
    | VerbalIllustrations
  >
  uarefs?: Array<{
    uaref: string // usage see in addition reference: contains the text and ID of a "see in addition" reference to another usage section.
  }>
}

export type UsageSection = Array<Usage>
