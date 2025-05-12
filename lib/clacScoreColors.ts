export const calcScoreColors = (score: number, maxScore: number) => {
  const percentage = (score / maxScore) * 100;
  if (percentage > 65) {
    return "bg-green-500";
  } else if (percentage < 65 && percentage > 40) {
    return "bg-orange-500";
  } else {
    return "bg-red-500";
  }
};
