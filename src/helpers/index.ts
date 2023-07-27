export const moneyFormatter= (value: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(value);
}

export const calculateTotal = (quantity: number, term: number): number => {
  let total: number;

  // the higher the amount, the lower the interest
  if (quantity < 5000) {
    total = quantity * 1.95;
  } else if (quantity >= 5000 && quantity < 10000) {
    total = quantity * 1.75;
  } else if (quantity >= 10000 && quantity < 15000) {
    total = quantity * 1.5;
  } else {
    total = quantity * 1.25;
  }

  // The longer the term, the higher interest
  switch (term) {
    case 6:
      total *= 1.1;
      break;
    case 12:
      total *= 1.2;
      break;
    case 24:
      total *= 1.4;
      break;
  }

  return total;
}