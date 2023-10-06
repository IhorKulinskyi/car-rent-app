const formatAddress = (address) => {
  const [city, country] = address.split(",").splice(1, 2);

  return {
    city,
    country,
  };
};

export default formatAddress;