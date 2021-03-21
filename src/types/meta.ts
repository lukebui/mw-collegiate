// Entry metadata is information about the entry, as opposed to the actual content of the entry. Entry metadata is contained in meta.
// Display Guidance: Not intended for display
export interface EntryMetadata {
  id: string // unique entry identifier within a particular dictionary data set, used in cross-references pointing to the entry. It consists of the headword, and in homograph entries, an appended colon and homograph number.
  uuid: string // universally unique identifier
  sort: string // a 9-digit code which may be used to sort entries in the proper dictionary order if alphabetical display is needed
  src: string // source data set for entry—ignore
  section: string // indicates the section the entry belongs to in print, where "alpha" indicates the main alphabetical section, "biog" biographical, "geog" geographical, and "fw&p" the foreign words & phrases section
  stems: string[] // lists all of the entry's headwords, variants, inflections, undefined entry words, and defined run-on phrases. Each stem string is a valid search term that should match this entry
  offensive: boolean // true if there is a label containing "offensive" in the entry; otherwise, false
}
