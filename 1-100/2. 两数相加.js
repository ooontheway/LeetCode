/**
 * @description https://leetcode.cn/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  const l1Arr = nodeListToArray(l1)
  const num1 = l1Arr.reverse().join('')
  const l2Arr = nodeListToArray(l2)
  const num2 = l2Arr.reverse().join('')
  const result = add(num1, num2)
  
  return arrayToNodeList(result.split('').reverse())
}

function add(a, b) {
  // 取两个数字的最大长度
  let maxLength = Math.max(a.length, b.length)
  // 用0去补齐长度
  a = a.padStart(maxLength, 0) // "0009007199254740991"
  b = b.padStart(maxLength, 0) // "1234567899999999999"
  // 定义加法过程中需要用到的变量
  let t = 0
  let f = 0   //"进位"
  let sum = ""
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f
    f = Math.floor(t / 10)
    sum = t % 10 + sum
  }
  if (f == 1) {
    sum = '1' + sum
  }
  return sum
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function arrayToNodeList(list) {
  let header = new ListNode(0)
  let current = header
  for (let i = 0; i < list.length; i++) {
  current.next = { val: list[i], next: null }
  current = current.next
  }
  return header.next
}
function nodeListToArray(node) {
  const list = []
  let header = node
  while (header) {
  list.push(header.val)
  header = header.next
  }
  return list
}