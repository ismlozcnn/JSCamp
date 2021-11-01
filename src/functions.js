function addToCart(quantity, productName = "Elma") {
    console.log("Ürün eklendi : " + productName + " adet :" + quantity)
}

//addToCart()
// addToCart(17)
//addToCart(17)

let sayHello = () => {
    console.log("Hello world beybisi")

}
// sayHello()

let sayHello2 = function () {
    console.log("hello worlds2")
}

// sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}

let product1 = {
    productName: "Elma",
    unitPrice: 10,
    quantity: 5
}

function addToCart3(product) {
    console.log("ürün eklendi :" + product.productName)
    console.log("ürünün fiyatı: " + product.unitPrice)
    console.log("ürünün adeti: " + product.quantity)

}

addToCart3(product1)

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 }

let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 }

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

function addToCart4(x) {
    console.log(products)

}

let products = [
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Elma", unitPrice: 10, quantity: 5 }
]

addToCart4(products)

//rest operatörü kullandıysan diğer değişkenleri ondan önce göndermelisin yoksa patlarsın!!!
function add(bisey, ...numbers) {//rest operatörü
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total)
    console.log(bisey)
}

add(20, 30)
// add(20,30,40)
// add(20,30,40,50)


let sayilar = [30, 10, 500, 600, 120]
console.log(Math.max(...sayilar))   //spread operatörü


let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
]

console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)


let newProductName, newUnitPrice, newQuantity
 ({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity } 
    = { productName: "Elma", unitPrice: 10, quantity: 5 })

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)






