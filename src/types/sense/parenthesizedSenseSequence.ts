/*
The parenthesized sense sequence groups together senses whose sense numbers form a sequence of parenthesized numbers.

Display Guidance
If you are generating sense numbers for sense elements in a pseq sequence, put parentheses around the number. For example, the second sense in a sequence should have "(2)" as its sense number.
If you are instead using the sn to display the sense number, it will already contain the parentheses.
*/

import { BindingSubstitute } from './bindingSubstitute'
import { Sense, Senses } from './sense'

export type ParenthesizedSenseSequence = [
  'pseq',
  [Sense, ...Array<Senses | BindingSubstitute>]
]
