module.exports = function toReadable(number) {
  if (number < 1) return 'zero'
  
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['', '', 'twenty ', 'thirty ', 
  'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety ']

  const hundred = ~~(number / 100)
  let ten = ~~((number - hundred * 100) / 10), 
      one = number - hundred * 100 - ten * 10,
      setStr = ''

  if(hundred) {
    setStr += ones[hundred] + ' hundred '
  } else {
    setStr = ''
  }

  if(ten === 1) {
    ten = 0
    one = number - hundred * 100
  }

  return `${setStr}${tens[ten]}${ones[one]}`.trim()
}
