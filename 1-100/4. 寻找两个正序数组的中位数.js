/**
 * @description https://leetcode.cn/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  if ((nums1.length + nums2.length) % 2 === 1) {
    const mIndex = (nums1.length + nums2.length) / 2;
    let i = 0, j = 0, mValue = 0;
    while (i + j <= mIndex) {
      if ((i < nums1.length && nums1[i] <= nums2[j]) || j >= nums2.length || !nums2.length) {
        mValue = nums1[i];
        i++;
      } else {
        mValue = nums2[j];
        j++;
      }
    }
    return mValue;
  } else {
    const mIndex = (nums1.length + nums2.length) / 2;
    let i = 0, j = 0, m1Value = 0, m2Value = 0;
    while (i + j <= mIndex) {
      m1Value = m2Value;
      if ((i < nums1.length && nums1[i] <= nums2[j]) || j >= nums2.length || !nums2.length) {
        m2Value = nums1[i];
        i++;
      } else {
        m2Value = nums2[j];
        j++;
      }
    }
    return (m1Value + m2Value) / 2;
  }
};