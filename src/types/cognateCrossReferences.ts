/*
When a headword is a less common spelling of another word with the same meaning, there will be a cognate cross-reference pointing to the headword with the more common spelling.

Display Guidance
The cxt cross-reference target is typically displayed in smallcaps. If cxr is present, do not display but use in forming cross-reference hyperlink as described below.
The cxl label is typically displayed in italics and should be followed by a space.
A cxn is typically displayed in normal font and should be preceded by a space.
If the cxs array has more than one element, separate them by a comma and space.
*/
export interface CognateCrossReferenceTarget {
  cxl?: string // cognate cross-reference label

  cxr?: string // when present, use as cross-reference target ID for immediately preceding cxt

  cxt: string // provides hyperlink text in all cases, and cross-reference target ID when no immediately following cxr

  cxn?: string // sense number of cross-reference target
}

export type CognateCrossReferenceTargets = Array<CognateCrossReferenceTarget>

export interface CognateCrossReference {
  cxl: string // cognate cross-reference label
  cxtis: CognateCrossReferenceTargets
}

export type CognateCrossReferences = Array<CognateCrossReference>
