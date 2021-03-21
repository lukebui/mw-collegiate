/*
An etymology is an explanation of the historical origin of a word. While the etymology contained in an et most typically relates to the headword, it may also explain the origin of a defined run-on phrase or a particular sense.

Display Guidance
Typically displayed inline within square brackets or in its own block with a heading such as "Word Origin".
*/

export type EtymologyContent = ['text', string]

export type EtymologySupplementalNote = ['et_note', [['t', string]]]

export type Etymology = Array<EtymologyContent | EtymologySupplementalNote>
