function Products(id, pic, name, description, price, category, userId, date){
    this.Id=id;
    this.Pic=pic;
    this.Name=name;
    this.Description=description;
    this.Price=price;
    this.Category=category;
    this.UserId=userId;
    this.Date=date;
}

var id

$( document ).ready(function() {
    var products = JSON.parse( localStorage.getItem('products') || "[]")
    var users = JSON.parse( localStorage.getItem('userInfo') || "[]")

    var url_string = window.location.href
    var url = new URL(url_string)
    id = url.searchParams.get("id")

    if (products[id].Img != "")
        $('#img').attr('src', products[id].Img);

    $('#name').append(products[id].Name)
    $('#price').append("€" + products[id].Price + " / day")
    $('#description').append(products[id].Description)
    $('#DateAdded').append(products[id].Date)
    $('#Owner').append(users[products[id].UserId].Name)

    pickmeup('input', {
        position       : 'right',
        hide_on_select : true,
        mode           : 'range',
        min            : products[id].Date,
    });

    var userId = JSON.parse( localStorage.getItem('userOnline') || "[]");
    if (userId === users[products[id].UserId].Number)
        $('#rent').hide()
});

$('#rent').click(function () {
    var isUserOnline = JSON.parse( localStorage.getItem('userOnline') || "[]");
    var date = pickmeup('#date').get_date(true);

    var count = $('#count').val();

    if (isUserOnline === 0)
    {
        window.location.href = "checkout.html?id=" + id + "&date=" + date + "&count=" + count;
    }
    else if (isUserOnline != '' )
    {
        window.location.href = "checkout.html?id=" + id + "&date=" + date + "&count=" + count;
    }
    else
    {
        window.location.href = "register.html?#";
    }
})

