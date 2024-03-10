const mergeIntervals = function (intervals, merged = []) {
  // Sort the intervals based on the start value
  intervals.sort((a, b) => a.start - b.start);

  // accessing the first element of the intervals array
  let prev = intervals.shift();

  for (const curr of intervals) {
    const { start: prevStart, end: prevEnd } = prev;
    const { start: currStart, end: currEnd } = curr;

    // console.log("prevStart:", prevStart, "prevEnd:", prevEnd);
    // console.log("currStart:", currStart, "currEnd:", currEnd);

    const hasOverlap = currStart <= prevEnd;

    // If there is an overlap, merge them and continue to next iteration
    if (hasOverlap) {
      prev.end = Math.max(prev.end, curr.end);
      continue;
    }

    merged.push(prev);
    prev = curr;
  }

  return [...merged, prev];
};

const inputIntervals = [
  { start: 1, end: 3 },
  { start: 2, end: 6 },
  { start: 8, end: 10 },
  { start: 15, end: 18 },
];

const mergedIntervals = mergeIntervals(inputIntervals);
console.log(mergedIntervals);
