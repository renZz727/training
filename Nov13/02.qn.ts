export function analyzeHeatMap(heatmap: number[][]): {
  maxTemp: number;
  minTemp: number;
  averageTemp: number;
  hottestPoint: number[];
  coldestPoint: number[];
} {
  let maxTemp = -1;
  let minTemp = Number.MAX_VALUE;
  let coldestPoint: number[] = [];
  let hotestPoint: number[] = [];
  let totalTemp = 0;
  let count = 0;
  for (let i = 0; i < heatmap.length; i++) {
    let minIn = Math.min(...heatmap[i]);
    let maxIn = Math.max(...heatmap[i]);

    if (minIn < minTemp) {
      minTemp = minIn;
      coldestPoint = [i, heatmap[i].indexOf(minIn)];
    }
    if (maxIn > maxTemp) {
      maxTemp = maxIn;
      hotestPoint = [i, heatmap[i].indexOf(maxIn)];
    }
    heatmap[i].forEach((temp: number) => {
      totalTemp += temp;
      count++;
    });
  }
  return {
    maxTemp: maxTemp,
    minTemp: minTemp,
    averageTemp: Number((totalTemp / count).toFixed(1)),
    hottestPoint: hotestPoint,
    coldestPoint: coldestPoint,
  };
}

