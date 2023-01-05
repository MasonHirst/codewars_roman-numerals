function integerToRoman(num) {
   // Create an object with key-value pairs representing the Roman numerals and their corresponding values
   const romanNumerals = {
     M: 1000,
     CM: 900,
     D: 500,
     CD: 400,
     C: 100,
     XC: 90,
     L: 50,
     XL: 40,
     X: 10,
     IX: 9,
     V: 5,
     IV: 4,
     I: 1
   }
 
   // Initialize an empty string to store the Roman numeral representation
   let result = ''
 
   // Iterate over the object and subtract the value of each numeral from the input number until it becomes 0
   for (const [numeral, value] of Object.entries(romanNumerals)) {
      while (num >= value) {
         result += numeral
         num -= value
      }
   }
   return result
 }

 console.log(integerToRoman(1234)) // "MCCXXXIV"