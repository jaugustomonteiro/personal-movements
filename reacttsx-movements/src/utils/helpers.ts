export const formatDate = (date: string): string => {
  const value = date.split('/');
  return `${value[2]}-${value[1]}-${value[0]}`;
};

export const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export const formatValueWithoutBRL = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

export const transactions: any = {
  // eslint-disable-next-line
  ['credit card']: 'Cartão de crédito',
  // eslint-disable-next-line
  ['account debit']: 'Débito em conta',
  // eslint-disable-next-line
  ['account credit']: 'Crédito em conta',
};
