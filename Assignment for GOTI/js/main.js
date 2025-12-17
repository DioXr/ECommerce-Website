document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-box input");
  const products = document.querySelectorAll(".product-card");
  const tabs = document.querySelectorAll(".bestseller-tabs .tab");

  let activeCategory = "rings";

  /* =========================
     TAB CLICK HANDLER
  ========================== */
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      activeCategory = tab.dataset.category;

      // Reset search on tab change
      if (searchInput) searchInput.value = "";

      filterProducts();
    });
  });

  /* =========================
     CORE FILTER LOGIC
  ========================== */
  function filterProducts() {
    const query = searchInput ? searchInput.value.toLowerCase() : "";

    products.forEach(product => {
      const title = product
        .querySelector(".product-title")
        .textContent.toLowerCase();

      const categoryMatch =
        product.dataset.category === activeCategory;

      const searchMatch = title.includes(query);

      // IMPORTANT: use hidden, not display
      product.hidden = !(categoryMatch && searchMatch);
    });
  }

  // Initial render
  filterProducts();
});
