$(document).ready(function () {
  $("parent").append(`<div class="myCard">
    <img src="./img/blog-1.png" alt="" width="100%" />
    <span>april 25 2022</span>
    <p>06 ways to do workout inside your home during Covid-19</p>
 
>
  </div>`);

  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      $("parent").append(`<div class="myCard">
        <img src="./img/blog-${j}.png" alt="" width="100%" />
        <span>april 25 2022</span>
        <p>06 ways to do workout inside your home during Covid-19</p>
     
    >
      </div>`);
    }
  }
  $(".myCard").fadeOut();

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y < 100) {
      $(".myCard").fadeOut(3000);
    } else {
      $(".myCard").fadeIn(3000);
    }
  });
  $(".myCard").click(function () {
    let modal = $(".myModal");

    let imgSource = modal[0].children[0].src;
    console.log(imgSource[0].children[0].src);
    $(".myModal").css("display", "block");
  });
  $(".close").click(function () {
    $(".myModal").css("display", "none");
    $(".fadeBackground").css("display", "none");
  });
});
