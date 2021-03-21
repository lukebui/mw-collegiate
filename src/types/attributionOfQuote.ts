/*
Direct quotes are used in both verbal illustrations and end-of-entry quotation sections.

Display Guidance
The aq is typically preceded by an em-dash.
Each instance of auth, source, aqdate, should be followed by a comma and space.
*/
export interface AttributionOfQuote {
  auth?: string // name of author
  source?: string // source work for quote
  aqdate?: string // publication date of quote

  // further detail on quote source (eg, name of larger work in which an essay is found); may contain the members source and aqdate (described above)
  subsource?: {
    source?: string // source work for quote
    aqdate?: string // publication date of quote
  }
}
