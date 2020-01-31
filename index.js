/* 
EATING OUT CALCULATOR
-------------------------
Eating out is a world of plus-plus. 
When you see a dish that cost X,
you know you won't pay X amount,
but usually 20% more, to account for
taxes, tips/service charges.
That can be annoying, especially 
if you are on budget.

Now, let's say you only have X amount
of money you are WILLING TO SPEND
on that occassion of eating out.
Let's figure out the net price
of the food (and drink, if you don't BYB)
you can order to satisfy your
budget constraint.
=====================================
GST (INDONESIA): 10% of total bill + service charge
Service Charge: at most 10% from total unsettled bill
Drinks: on average, up to 35% of your whole unsettled bill
(if you decide (and the unwritten rules, you should) order one).
*/

/* //simple JS
function calculateFoodPrice(num, bybStatus) {
    let GSTR = 0.11;
    let SVCR = 0.1;
    let BVGR = 0.35;
    let netBill = 0;
    let afterGST = (1-GSTR)*num;
    let afterSVC = (1-SVCR)*afterGST;

    if(bybStatus === true) {
        netBill = (1-BVGR)*afterSVC;
    } else {
        netBill = afterGST;
    }
    
    return netBill;

}; */

//DEPLOYMENT FUNCTION
function calculateFoodPrice() {
    // console.log("HALO");
    let budget = Number(document.getElementById('budgetInput').value);

    let radios = document.getElementsByName('byb');
    // console.log(radios);
    
    let bd = false; //buy drinks

    for(let i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            bd = radios[i].value;
            break;
        };
    };

    // console.log(bd);
    

    //GST alias PPN
    let gst = Math.round(0.11*budget);
    let postGST = budget-gst;
    document.getElementById('outputGST').innerHTML = gst;

    //Service Charge/Tipping
    let svc = Math.round(0.1*postGST);
    let postSVC = postGST - svc;
    document.getElementById('outputSVC').innerHTML = svc;

    //drinks: the tricky part. Sometimes divide cheapskates from not
    let bvg = 0;
    let postBVG = 0;
    if(bd == "true") {
        bvg = Math.round(0.35*postSVC);
    } else {
        bvg = 0;
    };
    postBVG = postSVC - bvg;

    console.log(bvg);
    
    document.getElementById('outputDrinks').innerHTML = bvg;

    //food is whatever left after beverages
    document.getElementById('outputFood').innerHTML = postBVG; 

    //remarks
    let kmn = '';
    if(bd == "true") {
        kmn = 'Sad but true & common. Restaurants tend to jackup drink prices for profit makeup.'
    } else {
        kmn = 'Proceed with caution. People may deem you a cheapskate!'
    }
    document.getElementById('comments').innerHTML = kmn;



};
