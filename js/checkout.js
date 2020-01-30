function Rented(id, productId, userId, date, fullPrice, count){
    this.Id=id;
    this.ProductId=productId;
    this.UserId=userId;
    this.Date=date;
    this.FullPrice=fullPrice;
    this.Count=count;
}

var products
var url

var id
var days
var amount
var date
var count

$( document ).ready(function() {
    products = JSON.parse( localStorage.getItem('products') || "[]")
    var url_string = window.location.href
    url = new URL(url_string)

    id = url.searchParams.get("id")
    count = url.searchParams.get("count")

    date = url.searchParams.get("date")
    var splitedDate = date.split(",");

    var d1 = splitedDate[0].split("-");
    var d2 = splitedDate[1].split("-");

    var nd1 = d1[2] + "-" + d1[1] + "-" + d1[0];
    var nd2 = d2[2] + "-" + d2[1] + "-" + d2[0];

    var date1 = new Date(nd1);
    var date2 = new Date(nd2);

    days = parseInt((date2-date1)/(24*3600*1000)) + 1;

    $('#productName').append(products[id].Name + " х " + count + " х " + days + " days")

    amount = days * products[id].Price
    $('#amount').append(amount + " €")
    $('#totalAmount').append(amount + " €")
});

$('#order').click(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var address = $('#address').val();

    if (firstName == "" || lastName == "" || address == "")
    {
        alert("Not all required fields are filled!")
    }
    else
    {
        var data = JSON.parse( localStorage.getItem('rented') || "[]");
        var userId = JSON.parse( localStorage.getItem('userOnline') || "[]");

        var length = data.length;

        var num=length;

        data.push(new Rented(num,id,userId,date,amount,count))
        localStorage.setItem("rented",JSON.stringify(data) );

        window.location.href = "my_account.html";
    }
})