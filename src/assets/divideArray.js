export function divideArray(originalArray, numberOfSubarrays) {
  console.log(originalArray, numberOfSubarrays);

  const subarraySize = Math.ceil(originalArray.length / numberOfSubarrays);

  const subarrays = [];
  for (let i = 0; i < numberOfSubarrays; i++) {
    const startIdx = i * subarraySize;
    const endIdx = (i + 1) * subarraySize;
    const subarray = originalArray.slice(startIdx, endIdx);
    subarrays.push(subarray);
  }

  return subarrays;
}
