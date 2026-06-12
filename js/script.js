const isProductPage = window.location.pathname.includes("/html/");
const imagePath = isProductPage ? "../assets/" : "assets/";

const products = [
    {
        id: "1",
        name: "iPhone 17 Pro Max",
        price: 34990000,
        description: "Điện thoại cao cấp với màn hình OLED, chip A19 Pro và hệ thống camera chuyên nghiệp.",
        image: imagePath + "Ip17ProMax.jpg",
        link: "chi-tiet.html?id=1"
    },
    {
        id: "2",
        name: "Samsung Galaxy S26 Ultra",
        price: 32990000,
        description: "Smartphone flagship với bút S Pen, camera độ phân giải cao và pin dung lượng lớn.",
        image: imagePath + "SamsungS26Ultra.jpg",
        link: "chi-tiet.html?id=2"
    },
    {
        id: "3",
        name: "MacBook Air M5",
        price: 28990000,
        description: "Laptop mỏng nhẹ, hiệu năng mạnh mẽ, thời lượng pin dài phù hợp học tập và làm việc.",
        image: imagePath + "MacbookAirM5.jpg",
        link: "chi-tiet.html?id=3"
    },
    {
        id: "4",
        name: "Tai nghe AirPods Pro 3",
        price: 6490000,
        description: "Tai nghe không dây chống ồn chủ động, âm thanh chất lượng cao.",
        image: imagePath + "TaingheAirPods.jpg",
        link: "chi-tiet.html?id=4"
    },
    {
        id: "5",
        name: "Apple Watch Series 11",
        price: 11990000,
        description: "Đồng hồ thông minh theo dỗi sức khoẻ và luyện tập .",
        image: imagePath + "AppleWatchSeries11.jpg",
        link: "chi-tiet.html?id=5"
    },
    {
        id: "6",
        name: "Xiaomi Pad 8",
        price: 9990000,
        description: "Máy tính bảng màn hình lớn phục vụ giải trí và học tập.",
        image: imagePath + "XiaomiPad8.jpg",
        link: "chi-tiet.html?id=6"
    },
];

document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    if(productList){
        products.forEach(product => {
            productList.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price.toLocaleString('vi-VN')} VNĐ</p>
                <p>${product.description}</p>
                <a href="chi-tiet.html?id=${product.id}">
                    <button>Xem chi tiết</button>
                </a>
            </div>
            `;
        });
    }
});

function addToCart(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm sản phẩm vào giỏ hàng!");
}
function buyNow(id){
    alert("Cảm ơn bạn đã mua hàng!");
}