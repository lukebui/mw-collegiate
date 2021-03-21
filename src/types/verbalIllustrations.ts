/*
A verbal illustration is an example sentence illustrating how a word is used in context. It may either be a made-up sentence or a quotation from a cited source.

Display Guidance
A verbal illustration is typically set off from surrounding text (as by surrounding the entire illustration in angle brackets).
*/

import { AttributionOfQuote } from './attributionOfQuote'

export interface VerbalIllustrationObject {
  t: string // text of verbal illustration
  aq?: AttributionOfQuote
}

export type VerbalIllustration = Array<VerbalIllustrationObject>

export type VerbalIllustrations = ['vis', VerbalIllustration]
