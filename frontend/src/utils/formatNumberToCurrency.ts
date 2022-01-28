export const formatNumberToCurrency = (num: number, locale='en-US', currency = 'USD'): string => {
    return num.toLocaleString(locale, { style: 'currency', currency: currency });
}