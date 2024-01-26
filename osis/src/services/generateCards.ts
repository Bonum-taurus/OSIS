export const generateAmountCards = (amount: number) => {
  const result = [];

  for (let i = 1; i <= amount; i++) {
    result.push(`${i}`);
  }

  return result;
}