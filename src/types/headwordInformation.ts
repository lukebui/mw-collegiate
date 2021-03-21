/*
The headword is the word being defined or translated in a dictionary entry. Key headword information is grouped in an hwi object

Display Guidance
The headword is prominently highlighted to the user; this is typically achieved through the use of bold, large point size, distinctive font, etc.
*/
import { Pronunciations } from './pronunciations'

export interface HeadwordInformation {
  hw: string // headword
  prs?: Pronunciations
}
