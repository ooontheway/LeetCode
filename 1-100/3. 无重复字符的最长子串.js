/**
 * @description https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let len = 0
  let val = ''
  for (let i = 0; i < s.length; i++) {
    if (val.indexOf(s[i]) === -1) {
      val = val + s[i]
      if (val.length > len) {
        len = val.length
      }
    } else {
      val = val + s[i]
      let index = val.indexOf(s[i])
      val = val.slice(index + 1)
    }
  }
  return len
}