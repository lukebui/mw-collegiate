/*
In addition to the verbal illustrations provided throughout the entry, a larger section of quotations from cited sources is sometimes included.

Display Guidance
Quotations are typically displayed in a separate paragraph with a heading such as "Examples of [headword] in a Sentence".
*/

import { AttributionOfQuote } from './attributionOfQuote'

export interface QuoteObject {
  t: string // quotation text
  aq: AttributionOfQuote
}
export type QuotationSection = Array<QuoteObject>
