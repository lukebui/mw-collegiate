/*
The defining text is the text of the definition or translation for a particular sense.

Display Guidance
Inline in normal font
*/

import { BiographicalNameWrap } from '../biographicalNameWrap'
import { CalledAlsoNote } from '../calledAlsoNote'
import { RunIn } from '../runIn'
import { SupplementalInformationNote } from '../supplementalInformationNote'
import { UsageNotes } from '../usageNotes'
import { VerbalIllustrations } from '../verbalIllustrations'

export type DefiningTextObject = ['text', string]

export type DefiningText = [
  DefiningTextObject,
  ...Array<
    | DefiningTextObject
    | BiographicalNameWrap
    | CalledAlsoNote
    | RunIn
    | SupplementalInformationNote
    | UsageNotes
    | VerbalIllustrations
  >
]
