/*
Display Guidance
Typically presented as a link in a separate paragraph, where the link text is provided by displayname. The table is generally presented as an image on a separate page.
A table reference URL should be in the following form: https://www.merriam-webster.com/table/collegiate/[base filename].htm where [base filename] equals the value of tableid.
*/

export interface Table {
  tableid: string // ID of the target table
  displayname: string // text to display in table link
}
