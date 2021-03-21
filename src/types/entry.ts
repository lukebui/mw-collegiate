/*
The organizational unit of a dictionary. An entry consists of at minimum a headword, along with content defining or translating the headword.
*/

import { AlternateHeadwords } from './alternateHeadwords'
import { Artwork } from './artwork'
import { CognateCrossReferences } from './cognateCrossReferences'
import { DefinedRunOns } from './definedRunOns'
import { DirectionalCrossReferenceSection } from './directionalCrossReferenceSection'
import { Etymology } from './etymology'
import { FirstKnownUse } from './firstKnownUse'
import { HeadwordInformation } from './headwordInformation'
import { Homograph } from './homograph'
import { Inflections } from './inflections'
import { FunctionalLabel, GeneralLabels } from './labels'
import { EntryMetadata } from './meta'
import { QuotationSection } from './quotationSection'
import { DefinitionSections } from './sense'
import { ShortDefinitions } from './shortDefinitions'
import { SynonymSection } from './synonymSection'
import { Table } from './tables'
import { UndefinedRunOns } from './undefinedRunOns'
import { UsageSection } from './usageSection'
import { Variants } from './variants'

export interface Entry {
  meta: EntryMetadata
  hwi: HeadwordInformation
  hom?: Homograph
  ahws?: AlternateHeadwords
  vrs?: Variants
  fl?: FunctionalLabel
  lbs?: GeneralLabels
  ins?: Inflections
  cxs?: CognateCrossReferences
  def?: DefinitionSections
  uros?: UndefinedRunOns
  dros?: DefinedRunOns
  et?: Etymology
  dxnls?: DirectionalCrossReferenceSection
  usages?: UsageSection
  syns?: SynonymSection
  quotes?: QuotationSection
  art?: Artwork
  table?: Table
  date?: FirstKnownUse
  shortdef?: ShortDefinitions
}
