const formatPrice = (price) => {
  return Number(price.replace("$", ""));
};

export default formatPrice;
