export const calcScoreColors = (score: number, maxScore: number) => {
  const percentage = (score / maxScore) * 100;

  if (percentage < 40) return `bg-red-500`;
  if (percentage < 65) return `bg-yellow-500`;

  return `bg-green-500`;
};
