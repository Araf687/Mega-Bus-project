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
function setText(id,cost){
    document.getElementById(id).innerText=cost;
}

function calculateCost(quantityFirstClass,quantityEconomy,costId1,costId2,costId3){

    var subTotalCost=(quantityFirstClass*150)+(quantityEconomy*100);//calculating the ticket cost
    var tax=(subTotalCost/100)*10;//calculating the tax on ticket
    var totalCost=subTotalCost+tax;// calculating the total cost for getting the ticket

    setText(costId1,subTotalCost);
    setText(costId2,tax);
    setText(costId3,totalCost);

}
function isEmpty(id)
{
    var value=document.getElementById(id).value;
    if(value=="")
    {
        return 'y';
    }
    else
    {
        return 'n';
    }
}
//---------------------------------------------------------------------------//
//increase the booking of first class ticket
document.getElementById("first-class-increase").addEventListener("click",function(){
    var valueIncrease=getValue("quantity-first-class");
    quantityFirstClass=valueIncrease+1;
    setValue("quantity-first-class",quantityFirstClass);

    quantityEconomy=getValue("quantity-economy");
    calculateCost(quantityFirstClass,quantityEconomy,"sub-total-cost","tax","total-cost");
    
})
//decrease the booking of first class ticket
document.getElementById("first-class-decrease").addEventListener("click",function(){
    var valueDecrease=getValue("quantity-first-class");
    quantityFirstClass=valueDecrease-1;
    if(quantityFirstClass<0)
    {
        quantityFirstClass=0;
    }
    setValue("quantity-first-class",quantityFirstClass);

    quantityEconomy=getValue("quantity-economy");
    calculateCost(quantityFirstClass,quantityEconomy,"sub-total-cost","tax","total-cost");
    
})

//increase the booking of  economy ticket
document.getElementById("economy-increase").addEventListener("click",function(){
    var quantityIncrease=getValue("quantity-economy");
    var quantityEconomy=quantityIncrease+1;
    setValue("quantity-economy",quantityEconomy);

    quantityFirstClass=getValue("quantity-first-class");
    calculateCost(quantityFirstClass,quantityEconomy,"sub-total-cost","tax","total-cost");
})

//decrease the booking of economy ticket
document.getElementById("economy-decrease").addEventListener("click",function(){
    var quantityDecrease=getValue("quantity-economy");
    var quantityEconomy=quantityDecrease-1;
    if(quantityEconomy<0)
    {
        quantityEconomy=0;
    }
    setValue("quantity-economy",quantityEconomy);

    quantityFirstClass=getValue("quantity-first-class");
    calculateCost(quantityFirstClass,quantityEconomy,"sub-total-cost","tax","total-cost");
})
document.getElementById("btn-book-now").addEventListener("click",function(){
    if(getValue("quantity-first-class")==0 && getValue("quantity-economy")==0 ||isEmpty("from")=='y'||isEmpty("to")=='y'||isEmpty("departure")=='y'&& isEmpty("return")=='y')
    {
        alert("You have given wrong input.Please fill the text box correctly and select the quantity.");
        //set default value to every input tag
        setValue("departure","mm/dd/yyyy");
        setValue("return","mm/dd/yyyy");
        setValue("from","");
        setValue("to","");
        setValue("quantity-first-class",0);
        setValue("quantity-economy",0);
    }
    else{
        //geting the information from the booking form.
        var terminal=document.getElementById("from").value;
        var destination=document.getElementById("to").value;
        var passenger=getValue("quantity-first-class")+getValue("quantity-economy");
        var total='$'+document.getElementById("total-cost").innerText;
        var departure=document.getElementById("departure").value;
        var returns=document.getElementById("return").value;
       

        ///set the information as confirmation notification
        setText("terminal",terminal);
        setText("destination",destination);
        setText("total",total);
        setText("passenger",passenger);
        setText("departure-details",departure);
        setText("return-details",returns);
        
        //hide the booking form after the click in book now button and show the confirmation notification
         document.getElementById('booking-form').style.display='none';
         document.getElementById('confirm-booking').style.display='block';
    }
})