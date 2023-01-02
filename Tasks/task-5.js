export const product = function () {
  return [].reduce.call(
    arguments,
    function (res, elem) {
      return res * elem;
    },
    this.product
  );
};

export const contextObj = {
  product: 10,
};

export const getProduct = function (a, b) {
  return product.call(contextObj, 2, 3, a, b);
};
