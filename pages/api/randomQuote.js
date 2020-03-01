export default (req, res) => {
  res.status(200).json({
    quote: 'Write tests, not too many, mostly integration',
    author: 'Guillermo Rauch'
  });
};
// import _ from 'lodash';
//
// const keys = [
//   new Date('10/1/2019'),
//   new Date('10/2/2019'),
//   new Date('10/3/2019'),
//   new Date('10/4/2019'),
//   new Date('10/5/2019'),
//   new Date('10/6/2019'),
//   new Date('10/7/2019'),
//   new Date('10/8/2019'),
//   new Date('10/9/2019'),
//   new Date('10/10/2019'),
//   new Date('10/11/2019'),
//   new Date('10/12/2019'),
//   new Date('10/13/2019'),
//   new Date('10/14/2019'),
//   new Date('10/15/2019'),
//   new Date('10/16/2019'),
//   new Date('10/17/2019'),
//   new Date('10/18/2019'),
//   new Date('10/19/2019'),
//   new Date('10/20/2019'),
//   new Date('10/21/2019'),
//   new Date('10/21/2019'),
//   new Date('10/22/2019'),
//   new Date('10/23/2019'),
//   new Date('10/24/2019'),
//   new Date('10/25/2019'),
//   new Date('10/26/2019'),
//   new Date('10/27/2019'),
//   new Date('10/28/2019'),
//   new Date('10/29/2019'),
//   new Date('10/30/2019'),
//   new Date('10/31/2019'),
//   new Date('11/1/2019'),
//   new Date('11/2/2019'),
//   new Date('11/3/2019'),
//   new Date('11/4/2019'),
//   new Date('11/5/2019'),
//   new Date('11/6/2019'),
//   new Date('11/7/2019'),
//   new Date('11/8/2019'),
//   new Date('11/9/2019'),
//   new Date('11/10/2019'),
//   new Date('11/11/2019'),
//   new Date('11/12/2019'),
//   new Date('11/13/2019'),
//   new Date('11/14/2019'),
//   new Date('11/15/2019'),
//   new Date('11/16/2019'),
//   new Date('11/17/2019'),
//   new Date('11/18/2019'),
//   new Date('11/19/2019'),
//   new Date('11/20/2019'),
//   new Date('11/21/2019'),
//   new Date('11/22/2019'),
//   new Date('11/23/2019'),
//   new Date('11/24/2019'),
//   new Date('11/25/2019'),
//   new Date('11/26/2019'),
//   new Date('11/27/2019'),
//   new Date('11/28/2019'),
//   new Date('11/29/2019'),
//   new Date('11/30/2019'),
//   new Date('12/1/2019'),
//   new Date('12/2/2019'),
//   new Date('12/3/2019'),
//   new Date('12/4/2019'),
//   new Date('12/5/2019'),
//   new Date('12/6/2019'),
//   new Date('12/7/2019'),
//   new Date('12/8/2019'),
//   new Date('12/9/2019'),
//   new Date('12/10/2019'),
//   new Date('12/11/2019'),
//   new Date('12/12/2019'),
//   new Date('12/13/2019'),
//   new Date('12/14/2019'),
//   new Date('12/15/2019'),
//   new Date('12/16/2019'),
//   new Date('12/17/2019'),
//   new Date('12/18/2019'),
//   new Date('12/19/2019'),
//   new Date('12/20/2019'),
//   new Date('12/21/2019'),
//   new Date('12/22/2019'),
//   new Date('12/23/2019'),
//   new Date('12/24/2019'),
//   new Date('12/25/2019'),
//   new Date('12/26/2019'),
//   new Date('12/27/2019'),
//   new Date('12/28/2019'),
//   new Date('12/29/2019'),
//   new Date('12/30/2019'),
//   new Date('12/31/2019'),
//   new Date('1/1/2020'),
//   new Date('1/2/2020'),
//   new Date('1/3/2020'),
//   new Date('1/4/2020'),
//   new Date('1/5/2020'),
//   new Date('1/6/2020'),
//   new Date('1/7/2020'),
//   new Date('1/8/2020'),
//   new Date('1/9/2020'),
//   new Date('1/10/2020'),
//   new Date('1/11/2020'),
//   new Date('1/12/2020'),
//   new Date('1/13/2020'),
//   new Date('1/14/2020'),
//   new Date('1/15/2020'),
//   new Date('1/16/2020'),
//   new Date('1/17/2020'),
//   new Date('1/18/2020'),
//   new Date('1/19/2020'),
//   new Date('1/20/2020'),
//   new Date('1/21/2020'),
//   new Date('1/22/2020'),
//   new Date('1/23/2020'),
//   new Date('1/24/2020'),
//   new Date('1/25/2020'),
//   new Date('1/26/2020'),
//   new Date('1/27/2020'),
//   new Date('1/28/2020'),
//   new Date('1/29/2020'),
//   new Date('1/30/2020'),
//   new Date('1/31/2020'),
//   new Date('2/1/2020'),
//   new Date('2/2/2020'),
//   new Date('2/3/2020'),
//   new Date('2/4/2020'),
//   new Date('2/5/2020'),
//   new Date('2/6/2020'),
//   new Date('2/7/2020'),
//   new Date('2/8/2020'),
//   new Date('2/9/2020'),
//   new Date('2/10/2020'),
//   new Date('2/11/2020'),
//   new Date('2/12/2020'),
//   new Date('2/13/2020'),
//   new Date('2/14/2020'),
//   new Date('2/15/2020'),
//   new Date('2/16/2020'),
//   new Date('2/17/2020'),
//   new Date('2/18/2020'),
//   new Date('2/19/2020'),
//   new Date('2/20/2020'),
//   new Date('2/21/2020'),
//   new Date('2/22/2020'),
//   new Date('2/23/2020'),
//   new Date('2/24/2020'),
//   new Date('2/25/2020'),
//   new Date('2/26/2020'),
//   new Date('2/27/2020'),
//   new Date('2/28/2020')
// ];
// const values = [
//   0,
//   134.00,
//   0,
//   0,
//   135.60,
//   134.00,
//   134.00,
//   0,
//   134.00,
//   134.00,
//   134.80,
//   134.20,
//   134.20,
//   133.00,
//   134.00,
//   134.00,
//   133.60,
//   134.80,
//   133.60,
//   132.80,
//   135.40,
//   0,
//   0,
//   134.00,
//   134.00,
//   134.00,
//   134.00,
//   134.00,
//   0,
//   0,
//   133.20,
//   133.20,
//   134.20,
//   0,
//   131.80,
//   133.40,
//   133.80,
//   133.80,
//   0,
//   132.20,
//   132.20,
//   133.20,
//   133.20,
//   132.80,
//   132.80,
//   132.40,
//   132.80,
//   132.60,
//   0,
//   132.20,
//   133.00,
//   132.60,
//   132.60,
//   133.20,
//   133.60,
//   134.80,
//   133.40,
//   0,
//   133.4,
//   133.2,
//   133,
//   133.6,
//   133.6,
//   134.6,
//   135,
//   135,
//   0,
//   134.8,
//   134,
//   134.4,
//   0,
//   0,
//   134,
//   134,
//   133.4,
//   134.8,
//   133.4,
//   134.2,
//   0,
//   134.2,
//   133,
//   0,
//   133.4,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   133.6,
//   133.6,
//   133,
//   133,
//   133,
//   133,
//   132,
//   132.6,
//   132.6,
//   132.6,
//   0,
//   134,
//   132.4,
//   132.4,
//   132.4,
//   133,
//   133,
//   0,
//   133.6,
//   133.6,
//   133.6,
//   133.6,
//   133.6,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   0,
//   133.6,
//   132.4,
//   131.8,
//   0,
//   0,
//   132.4,
//   132.4,
//   131.6,
//   131.6,
//   0,
//   0,
//   0,
//   131.8,
//   132.4,
//   132.4,
//   131.4,
//   131.4,
//   0,
//   0,
//   133.4,
//   133.4,
//   132.4,
//   132.2,
//   132.2,
//   131.6,
//   0,
//   133.2,
//   134,
//   0,
//   131.2,
//   131.2,
//   130.2
// ];
// const weights = _.zipObject(keys, values);
// let firstWeekAverage;
// let currentUpOrDown;
// let currentWeekAverage;
// // console.log('*** weights: ', weights);
//
// const formatNumber = number => parseFloat(String(number)).toFixed(2);
//
// const highest = Math.max(...values);
// const lowest = Math.min(...values.filter(number => number !== 0));
//
// function getAvg (weights) {
//   const total = weights.reduce((acc, c) => acc + c, 0);
//   return total / weights.length;
// }
//
// export default (req, res) => {
//   const numbers = Object.values(weights);
//   var perChunk = 7; // items per chunk
//   var arrayChunks = numbers.reduce((resultArray, item, index) => {
//     const chunkIndex = Math.floor(index / perChunk);
//     if (!resultArray[chunkIndex]) {
//       resultArray[chunkIndex] = []; // start a new chunk
//     }
//     resultArray[chunkIndex].push(item);
//     return resultArray;
//   }, []);
//
//   const averages = arrayChunks.reduce((acc, current, index, arrayChunks) => {
//     const filteredCurrent = current.filter(number => number !== 0);
//     const previous = arrayChunks[index - 1] ? index - 1 : 0;
//     const filteredPrevious = arrayChunks[previous].filter(number => number !== 0);
//     if (_.isEmpty(filteredCurrent) || _.isEmpty(filteredPrevious)) {
//       return acc;
//     }
//     // console.log('*** previous: ', previous, index);
//     // console.log('*** arrayChunks[previous]: ', arrayChunks[previous], index);
//     const currentAverage = getAvg(filteredCurrent);
//     if (index === 0) {
//       firstWeekAverage = currentAverage;
//     }
//     if (arrayChunks.length > index) {
//       currentWeekAverage = currentAverage;
//       currentUpOrDown = currentAverage - getAvg(filteredPrevious);
//     }
//     const averageHash = {
//       average: formatNumber(currentAverage),
//       upOrDown: formatNumber(currentAverage - getAvg(filteredPrevious))
//     };
//     // if (index === 16) {
//     //   console.log('*** averageHash: ', averageHash, index);
//     //   console.log('*** current: ', current);
//     // }
//     acc.push(averageHash);
//     return acc;
//   }, []);
//
//   const allAverages = averages.map(avgObject => parseFloat(avgObject.upOrDown));
//   const averagePerWeek = getAvg(allAverages.filter(avg => avg !== 0));
//   const bestWeeklyAverage = Math.min(...allAverages);
//   const worstWeeklyAverage = Math.max(...allAverages);
//   const totalWeeks = arrayChunks.length;
//   const latest = values.reverse().find(number => number !== 0);
//   // const parsedAllAverages = allAverages.map(avg => parseFloat(avg));
//
//   res.status(200).json([arrayChunks, averages, {
//     latestWeight: formatNumber(latest),
//     currentUpOrDown: formatNumber(currentUpOrDown),
//     overall: formatNumber(currentWeekAverage - firstWeekAverage),
//     averagePerWeek: formatNumber(averagePerWeek),
//     highestWeight: highest,
//     lowestWeight: lowest,
//     // firstWeekAverage: formatNumber(firstWeekAverage),
//     // currentWeekAverage: formatNumber(currentWeekAverage),
//     totalWeeks: totalWeeks,
//     bestWeeklyAverage: formatNumber(bestWeeklyAverage),
//     worstWeeklyAverage: formatNumber(worstWeeklyAverage)
//   }]);
// };
