//^	XOR	Sets each bit to 1 if only one of two bits is 1
//5 ^ 1	4	0101 ^ 0001	 0100
console.log(5 ^ 1);
console.log(5 | 1 );
console.log(~5 );

//Converting Decimal to Binary
console.log( dec2bin(-5));
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
