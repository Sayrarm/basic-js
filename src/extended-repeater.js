const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  options = options || {};

  const repeatTimes = options.repeatTimes;
  const separator = options.separator === undefined ? "+" : String(options.separator);
  const addition = options.addition === undefined ? "" : String(options.addition);
  const additionRepeatTimes = options.additionRepeatTimes;
  const additionSeparator =
    options.additionSeparator === undefined ? "|" : String(options.additionSeparator);

  let result = "";
    
  for (let i = 0; i < (repeatTimes === undefined ? 1 : repeatTimes); i++) {
    let currentStr = str;
    
      let additionStr = "";

      if(additionRepeatTimes !== undefined) {
           for(let j = 0; j < additionRepeatTimes; j++){
               additionStr += addition + (j === additionRepeatTimes-1 ? "" : additionSeparator);
             }
         }else{
           additionStr = addition;
         }
    currentStr += additionStr;
    result += currentStr + (i === (repeatTimes === undefined ? 0 : repeatTimes - 1) ? "" : separator);
  }
  return result;
}

module.exports = {
  repeater
};
