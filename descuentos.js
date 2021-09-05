//const precio = 200;
//const descuento = 15;


function calcularPrecioConDEscuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento / 100); 
return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById ("InputPrice");
    const priceValue  = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDEscuento(priceValue,discountValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    console.log(precioConDescuento);
}
//console.log({
  //  precio,
    //descuento,
   // porcentajePrecioConDescuento,
    //precioConDescuento,
//});
