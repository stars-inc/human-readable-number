module.exports = function toReadable(number) {
  if (number < 1) return 'zero'
  

  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['', '', 'twenty', 'thirty', 
  'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if(number < 20) return ones[number]

  switch(number) {
    case number >= 10 && number < 20: return teens[number - 10]
    default: return `${tens[~~(number / 10)]} ${ones[number % 10]}`
  }

}
