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

    for (let i = 1; i <= 8; i++) {
      const content = `
        <div class="index-item">
        <a href="./item${i}.html">
        <img src="./img/item${i}.jpg" alt="" class="product-img">
        <dt>プロダクト</dt>
        <dd>¥99,999 +tax</dd>
        </a>
        </div>`;
        // 下のコードのinsertAdjacentHTMLの第一引数に"afterbegin"を
        //入れてしまうと呼び出した新しい要素が常に先頭に挿入されてしまう為、
        //最初に呼ばれた１が下になっていました。
        // "beforeend"に変えると良いですね！！
      // productWrap.insertAdjacentHTML("afterbegin", content);
      productWrap.insertAdjacentHTML("beforeend", content);
    }
});

// -------商品一覧(product.html)-----------
window.addEventListener("DOMContentLoaded", ()=> {

const allProductWrap = document.querySelector(".all-product");

    for (let i = 1; i <= 12; i++) {
      const content = `
        <div class="product-item">
        <a href="./item${i}.html">

        <img src="./img/item${i}.jpg" alt="" class="product-img">
        <dt>プロダクト</dt>
        <dd>¥99,999 +tax</dd>
        </a>
        </div>`;
      allProductWrap.insertAdjacentHTML("beforeend", content);
    }
});
// -------商品一覧:２ページ目(product2.html)----
window.addEventListener("DOMContentLoaded", ()=> {

  const allProductWrap = document.querySelector(".all-product2");
  
      for (let i = 13; i <= 16; i++) {
        const content = `
          <div class="product-item">
          <a href="./item${i}.html">
  
          <img src="./img/item${i}.jpg" alt="" class="product-img">
          <dt>プロダクト</dt>
          <dd>¥99,999 +tax</dd>
          </a>
          </div>`;
        allProductWrap.insertAdjacentHTML("beforeend", content);
      }
  });
  