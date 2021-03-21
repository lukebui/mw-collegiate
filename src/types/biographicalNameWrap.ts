/*
A biographical name wrap groups together personal name, surname, and alternate name information within a biographical entry.

Display Guidance
A bnw is displayed inline and followed by a comma and space.
A pname or sname is typically displayed in normal font.
An altname is typically displayed in italics.
*/
export type BiographicalNameWrap = [
  'bnw',
  {
    pname?: string // personal or first name
    sname?: string // surname
    altname?: string // alternate name such as pen name, nickname, title, etc.
  }
]
