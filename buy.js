// const buyProduct = function () {
//   console.log('mahsulot sotib oldingiz');
// };
// let a = 8;
// let q = 'qalay';

// export { a as b, q, buyProduct };

let cart = [];
export default function (maxsulot, soni) {
  let d = 'qalay';
  cart.push({ maxsulot, soni });
  console.log(`siz ${maxsulot} dan ${soni}ta oldiz`);
}
