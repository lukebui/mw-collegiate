/*
Entries may have illustrations to provide a visual depiction of the headword.

Display Guidance
When displaying an image on a page, it is typically preceded by lead-in text such as "Illustration of [headword]".
1. If you want to link to a separate page containing both image and caption, the URL should be in the following form: https://www.merriam-webster.com/art/dict/[base filename].htm where [base filename] equals the value of artid. For the Example below, this URL would be: https://www.merriam-webster.com/art/dict/heart.htm
2. If you prefer to link directly to the image, the URL should be in the following form: https://www.merriam-webster.com/assets/mw/static/art/dict/[base filename].gif where [base filename] equals the value of artid. Use the content of capt to pull in the caption content. For the Example below, this URL would be: https://www.merriam-webster.com/assets/mw/static/art/dict/heart.gif
*/
export interface Artwork {
  artid: string // filename of target image
  capt?: string // image caption text
}
