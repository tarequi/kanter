let liList = document.querySelectorAll(".product_link li");
let products = document.querySelectorAll(".product .box");
let btn_All = document.getElementById("all_btn");


liList.forEach(li => {
    li.addEventListener("click", function () {
        // console.log(li.getAttribute("data-class"));
        products.forEach(pro => {
            if (pro.getAttribute("data-class") == li.getAttribute("data-class")) {
                pro.style.display = "block";
            }
            else {
                pro.style.display = "none";
            }
        })
})
})

//for All btn
btn_All.onclick = function () {
    products.forEach(procuct => {
        procuct.style.display = "block";
    })
}