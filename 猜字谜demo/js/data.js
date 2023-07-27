// 创建Swiper实例
var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 获取元素和事件监听
var imgs = document.querySelectorAll(".img1");
console.log(imgs);
var mb = document.querySelector(".mb");

function dene() {
  mb.style.display = "none";
}

var usedata = ["表", "爆", "运", "好"];
var butlist = document.querySelectorAll(".tj-bt");
var input = document.querySelectorAll(".use-input");

// 页面加载事件处理
window.onload = function () {
  // 点击事件处理
  for (let i = 0; i < butlist.length; i++) {
    butlist[i].addEventListener("click", function () {
      if (input[i].value === usedata[i]) {
        imgs[i].setAttribute("src", `./images/${usedata[i]}1.png`);
      } else {
        mb.style.display = "block";
        console.log(daan[i].style);
      }
    });
  }
};
