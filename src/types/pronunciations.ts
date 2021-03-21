// A pronunciation specifies how a written word is pronounced aloud. A set of pronunciations is encoded in a prs array.
// Display Guidance
// The entire set of pronunciations is typically surrounded by backslash characters.
// If there are multiple pronunciation objects and an object contains a punctuation member pun, use its contents plus a space to separate the two objects (for example, "\pronunciation 1; pronunciation 2" where pun contains ";").
// If pun is not present, use a comma and space to separate the two objects (for example, "\pronunciation 1, pronunciation 2\").
// The l and l2 pronunciation labels are typically displayed in italics.
export interface Pronunciation {
  mw?: string // written pronunciation in Merriam-Webster format
  l?: string // pronunciation label before pronunciation
  l2?: string // pronunciation label after pronunciation
  pun?: string // punctuation to separate pronunciation objects
  sound?: {
    audio: string // the base filename for audio playback
  } // audio playback information: the audio member contains the base filename for audio playback; the ref and stat members can be ignored.
}

export type Pronunciations = Array<Pronunciation>
