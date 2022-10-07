// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/ 100;

    return precioConDescuento;
}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

const coupons = [
    "HILEL123",
    "HILEL234",
    "HILEL321",
];

const couponess = [
    {
        name: "HILEL123",
        discount: 15,
    },
    {
        name: "HILEL234",
        discount: 30,
    },
    {
        name: "HILEL321",
        discount: 25,
    },
];

function OnClickButtonPreiceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    // const inputDiscount = document.getElementById("InputDiscount");
    // const DiscountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    // //Solución 01
    // switch(couponValue){
    //     case coupons[0]: //HILEL123
    //        descuento = 15;
    //         break;
    //     case coupons[1]: //HILEL234
    //         descuento = 30;
    //         break;
    //     case coupons[2]: //HILEL321
    //          descuento = 25;
    //     break;
    // }

    // // Solución 02
    // if (!coupons.includes(couponValue)) {
    //     alert("El cupón " + couponValue + "no es válido");
    //  } else if (couponValue === "HILEL123") {
    //     descuento = 15;
    //  } else if (couponValue === "HILEL234") {
    //     descuento = 30;
    //  } else if (couponValue === "HILEL321") {
    //     descuento = 25;
    //  }

     
    // const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
    // const resultP = document.getElementById("ResultP");
    // resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

    //Solución 03
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = couponess.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

}