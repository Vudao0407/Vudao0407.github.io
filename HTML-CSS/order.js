let showCart = $("#show-data-cart");
let ids = [];
let result = [];
let obj = {};
let getListCart = () => {
  let data = localStorage.getItem("list-cart")
    ? JSON.parse(localStorage.getItem("list-cart"))
    : [];
  data.forEach((item) => {
    if (!ids.includes(item.id)) {
      ids.push(item.id);
      result.push(item);
    } else {
      // đếm xem nó có bao nhiêu phần tử trog mảng data và gán nó vào key
      if (!obj[`${item.id}`]) {
        obj[`${item.id}`] = 2;
      } else {
        obj[`${item.id}`] = obj[`${item.id}`] + 1;
      }
    }
  });
  return data;
};
getListCart();
result.forEach((item) => {
  showCart.append(`
  <tr>
  <td>
      <div class="cart-info">
      <img src="${item.img}" alt="">
      <div class="td-info">
          <p>${item.name}</p>
          <span style="font-size: 20px;">${item.price}</span><br>
          <a href="">Remove</a>
      </div>

      </div>
  </td>
  <td class="tb-ngu" style="font-size: 20px;">${
    obj[`${item.id}`] ? obj[`${item.id}`] : 1
  }</td>
  <td style="font-size: 20px;"> ${
    obj[`${item.id}`] ? obj[`${item.id}`] * item.price : item.price
  }</td>
</tr>
 
`);
});
