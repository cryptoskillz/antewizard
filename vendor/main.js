
$( document ).ready(function() {


  var fatwallet = "TMc653br1ndZhxPjjtmzhzh5dwvMnpu54T";
  var tdwaleet = "TLqiMfo8g7WxRw4HbXxuv6fkQ5mMmT52UK";
  var cwwallet = "TSgcHBs2bKiJvoxUbVJdVhEpFg7gvJwDxc";
  var brokerwallet = "";
  var brokername = "";

  var broker = findGetParameter("broker");
  var anteprice = findGetParameter("anteprice");
  var antequantity = findGetParameter("antequantity");
  var brokerfee = findGetParameter("brokerfee");
  var buyerwallet = findGetParameter("buyerwallet");
  var buyername = findGetParameter("buyername");
  var sellerwallet = findGetParameter("sellerwallet");
  var sellername = findGetParameter("sellername");

  //debug
  /*
  console.log(broker)
  console.log(anteprice)
  console.log(antequantity)
  console.log(brokerfee)
  console.log(buyerwallet)
  console.log(buyername)
  console.log(sellerwallet)
  console.log(sellername)
  */



  //set the broker
  switch(broker) {
    case "1":
        brokerwallet = fatwallet;
        brokername = "Fatmacedonian";
        break;
    case "2":
         brokerwallet = tdwallet;
        brokername = "Tronics_Dude";
        break;
    case "3":
        brokerwallet = cwwallet;
        brokername = "Cryptozwerg";

        break;
    default:
         brokerwallet = fatwallet
        brokername = "Fatmacedonian";

}

//calc it
var price = anteprice * antequantity;
var fee = price / 100 *  brokerfee;
var totalcost = price + fee;
var splitfee = fee / 2;
var splitcost = price + splitfee;

//output it
$('#broker').append(brokername);
$('#antequantity').append(antequantity);
$('#anteprice').append(anteprice);
$('#brokerfee').append(brokerfee+'% ('+fee+' trx)');
$('#netcost').append(price+' TRX');
$('#totalcost').append(totalcost+' TRX');
$('#buyer').append(buyername+' send '+splitcost+' TRX (cost ='+price+' TRX & fee='+splitfee+' TRX )to '+brokername+' wallet '+brokerwallet+'');
$('#sellerinfo').append(sellername+' send '+antequantity+' Ante  & fee='+splitfee+' TRX  to '+brokername+' waleet '+brokerwallet+'');



         




});
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
