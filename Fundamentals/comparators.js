// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the “dictionary” order.
// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
// The values null and undefined equal == each other and do not equal any other value.
// Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.

// 5 > 4                   True  (Simple Comparison)
// "apple" > "pineapple"   False (Comparing 'a' with 'p')
// "2" > "12"              True (Convert to numbers and 2 > 1)    
// undefined == null       True (undefined and null are comparatively equal)
// undefined === null      False (Strict equality is strict. Different types from both sides lead to false.)
// null == "\n0\n"         False (Similar to (4), null only equals undefined.)
// null === +"\n0\n"       False (Strict equality of different types.)