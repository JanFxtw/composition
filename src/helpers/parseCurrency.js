export default (value) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
