//---------------------------functions-------------------------------------------
//function to get the current value from the input tag
function getValue(id)
{
    var value=document.getElementById(id).value;
    value=parseFloat(value);
    return value;
}
//function to set the value in the input tag
function setValue(id,value){
    document.getElementById(id).value=value;
}
//function to get text from a tag or get the cost form the ticket counter form
function getCost(id)
{
    var cost=document.getElementById(id).innerText;
    cost=parseFloat(cost);
    return cost;
}
//function to set the text in a tag or set the cost int the tag of the  ticket form
function setCost(id,cost){
    document.getElementById(id).innerText=cost;
}
//---------------------------------------------------------------------------//
//increase the booking of first class ticket
document.getElementById("first-class-increase").addEventListener("click",function(){
    var valueIncrease=getValue("quantity-first-class");
    quantityFirstClass=valueIncrease+1;
    setValue("quantity-first-class",quantityFirstClass);

    quantityEconomy=getValue("quantity-economy");

    var subTotalCost=(quantityFirstClass*150)+(quantityEconomy*100);//calculating the ticket cost
    var tax=(subTotalCost/100)*10;//calculating the tax on ticket
    var totalCost=subTotalCost+tax;// calculating the total cost for getting the ticket

    setCost("sub-total-cost",subTotalCost);
    setCost("tax",tax);
    setCost("total-cost",totalCost);
})
//decrease the booking of first class ticket
document.getElementById("first-class-decrease").addEventListener("click",function(){
    var valueDecrease=getValue("quantity-first-class");
    quantityFirstClass=valueDecrease-1;
    setValue("quantity-first-class",quantityFirstClass);

    var subTotalCost=(quantityFirstClass*150)+(quantityEconomy*100);//calculating the ticket cost
    var tax=(subTotalCost/100)*10;//calculating the tax on ticket
    var totalCost=subTotalCost+tax;// calculating the total cost for getting the ticket
    console.log(subTotalCost,tax,totalCost);

    setCost("sub-total-cost",subTotalCost);
    setCost("tax",tax);
    setCost("total-cost",totalCost);
})

//increase the booking of  economy ticket
document.getElementById("economy-increase").addEventListener("click",function(){
    var quantityIncrease=getValue("quantity-economy");
    var quantityEconomy=quantityIncrease+1;
    setValue("quantity-economy",quantityEconomy);

    quantityFirstClass=getValue("quantity-first-class");

    var subTotalCost=(quantityEconomy*100)+(quantityFirstClass*150);//calculating the ticket cost
    var tax=(subTotalCost/100)*10;//calculating the tax on ticket
    var totalCost=subTotalCost+tax;// calculating the total cost for getting the ticket
    console.log(subTotalCost,tax,totalCost);

    setCost("sub-total-cost",subTotalCost);
    setCost("tax",tax);
    setCost("total-cost",totalCost);
})

//decrease the booking of economy ticket
document.getElementById("economy-decrease").addEventListener("click",function(){
    var quantityDecrease=getValue("quantity-economy");
    var quantityEconomy=quantityDecrease-1;
    setValue("quantity-economy",quantityEconomy);

    var subTotalCost=(quantityEconomy*100)+(quantityFirstClass*150);//calculating the ticket cost
    var tax=(subTotalCost/100)*10;//calculating the tax on ticket
    var totalCost=subTotalCost+tax;// calculating the total cost for getting the ticket
    console.log(subTotalCost,tax,totalCost);

    setCost("sub-total-cost",subTotalCost);
    setCost("tax",tax);
    setCost("total-cost",totalCost);
})