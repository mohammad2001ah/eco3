export const getCartCount = () => {
  const saved = localStorage.getItem("cartCount");
  return saved ? parseInt(saved) : 0;
};

export const increaseCartCount = () => {
  const current = getCartCount();
  localStorage.setItem("cartCount", current + 1);
};