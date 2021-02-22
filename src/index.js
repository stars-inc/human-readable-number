module.exports = function toReadable(number) {

  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 
  'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
  'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],

  tens = ['', '', 'twenty ', 'thirty ', 'forty ', 
  'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety ']

  if(number < 20) return ones[number]
}
