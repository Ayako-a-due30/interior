window.addEventListener("DOMContentLoaded", ()=> {
// ----トグルボタン----------------------
const toggleButton = document.querySelector(".toggle-button");
const toggleMenu = document.querySelector(".toggle-menu");
const toggleItem = document.querySelector(".toggle-item");

toggleButton.addEventListener("click", ()=>{
    toggleMenu.classList.toggle("show-menu");
    toggleButton.classList.toggle("show-menu");
    toggleItem.animate(
      {
        translate:['-4rem',0],
      },
      {
        duration:300,
      }
    );
});


});

// -------商品一覧(index.html)-----------
window.addEventListener("DOMContentLoaded", ()=> {

const productWrap = document.querySelector(".index-product");

    for (let i = 8; i > 0; i--) {
      const content = `
        <div class="index-item">
        <a href="./item${i}.html">
        <img src="./img/item${i}.jpg" alt="" class="product-img">
        <dt>プロダクト</dt>
        <dd>¥99,999 +tax</dd>
        </a>
        </div>`;
      productWrap.insertAdjacentHTML("afterbegin", content);
    }
});

// -------商品一覧(product.html)-----------
window.addEventListener("DOMContentLoaded", ()=> {

const allProductWrap = document.querySelector(".all-product");

    for (let i = 16; i > 0; i--) {
      const content = `
        <div class="product-item">
        <a href="./item${i}.html">
        
        <img src="./img/item${i}.jpg" alt="" class="product-img">
        <dt>プロダクト</dt>
        <dd>¥99,999 +tax</dd>
        </a>
        </div>`;
      allProductWrap.insertAdjacentHTML("afterbegin", content);
    }
});