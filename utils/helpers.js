export const formatPrice = (price) => {
  if (typeof price !== 'string') return price;
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const formatArea = (area) => {
  return area.replace(/м²/g, 'м²').trim();
};

export const truncateText = (text, length = 80) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

export default {
  formatPrice,
  formatArea,
  truncateText,
};
