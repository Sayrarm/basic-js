const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (!email || typeof email !== 'string') {
    return "";
  }
  const atIndex = email.lastIndexOf('@');
  if (atIndex === -1) {
    return "";
  }

  return email.substring(atIndex + 1);
}

module.exports = {
  getEmailDomain
};
