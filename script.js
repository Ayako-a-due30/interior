window.addEventListener("DOMContentLoaded", ()=> {
// ----トグルボタン----------------------
const toggleButton = document.querySelector(".toggle-button");
const toggleMenu = document.querySelector(".toggle-menu");

toggleButton.addEventListener("click", ()=>{
    toggleMenu.classList.toggle(".show-menu");
});



// -------商品一覧(トップページ)-----------
const productWrap = document.querySelector(".product");

    for (let i = 1; i < 9; i++) {
      const content = `
        <div class="product-item">
        <a href="#">
        <img src="./img/item${i}.jpg" alt="" class="product-img">
        <dt>プロダクト</dt>
        <dd>¥99,999 +tax</dd>
        </a>
        </div>`;
      productWrap.insertAdjacentHTML("afterbegin", content);
    }
});