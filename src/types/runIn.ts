/*
Display Guidance
Inline in normal font, except for rie which is typically displayed in bold.
*/

export interface RunInEntryWord {
  rie: string
}

export type RunInInterveningText = ['text', string]

export type RunInWrap = ['riw', Array<RunInEntryWord>]

export type RunIn = ['ri', Array<RunInWrap | RunInInterveningText>]
