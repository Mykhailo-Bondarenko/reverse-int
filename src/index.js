module.exports = function reverse(number) {
  return number.toString().replace(/\D+/, '').split('').reverse().join('');
}
