let showImage = $("#so-img");

let detailData = () => {
  let data = localStorage.getItem("data-product-detail")
    ? JSON.parse(localStorage.getItem("data-product-detail"))
    : [];
  return data;
};
let listCart = () => {
  let data = localStorage.getItem("list-cart")
    ? JSON.parse(localStorage.getItem("list-cart"))
    : [];
  return data;
};

let item = detailData();

showImage.append(`
<div class = "img_container" id="show-image">
<div class="img">
    <img src="${item.img}" alt="" id="productImg">
</div>
</div>
        <div class = "info_container animate-right">
        <div class = "product_name animate-left">Rosa Restaurant</div>
        <div class = "product_price">Name: ${item.name}</div>
        <div class = "color">Price:<span>$</span>${item.price}</div>
        <div class = "color_list">
        <div class="color_list-text"> Product detail: </div>
            <div class="color_list-p">
            ${item.productDetail}
            </div> 
        </div>
        <div class="add_cart_btn">  
            <div href=""><div class = "add_cart" onclick="goToCart()" id="add-to-cart">Order</div></div>
        </div>
</div>
`);

$("#add-to-cart").click(() => {
  let dataCart = listCart();
  dataCart.push(detailData());
  localStorage.setItem("list-cart", JSON.stringify(dataCart));
});

const goToCart = () => {
  // redirect sang trang chi tiet gio hang
  location.replace("./order.html");
};
