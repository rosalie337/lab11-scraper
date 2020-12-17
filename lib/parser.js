const parse = document => {
  const products = [...document.querySelectorAll('.product_pod');

  return [...products].map(product => ({
    product_image: product.querySelector('.thumbnail').currentSrc,
    rating: product.querySelector('.star-rating').classList[1].toLowerCase(),
    title: product.querySelector('.product_pod > h3 >a').textContent,
    price: product.querySelector('.product-price > price_color').textContent,
    in_stock: !product.querySelector('p.instock').innerText,
  }));
};

module.exports = parse;
