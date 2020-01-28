$( document ).ready(function() {
    var rentedProducts = JSON.parse( localStorage.getItem('rented') || "[]")
    var products = JSON.parse( localStorage.getItem('products') || "[]");
    var users = JSON.parse( localStorage.getItem('userInfo') || "[]")

    var url_string = window.location.href
    var url = new URL(url_string)
    id = url.searchParams.get("id")

    var product = products[rentedProducts[id].ProductId]

    if (product.Img != "")
        $('#img').attr('src', product.Img);

    $('#name').append(product.Name)
    $('#price').append("€" + rentedProducts[id].FullPrice)
    $('#description').append(product.Description)
    $('#DateRate').append(rentedProducts[id].Date)
    $('#Owner').append(users[product.UserId].Name)
    $('#Quantity').append(rentedProducts[id].Count)

    pickmeup('input', {
        position       : 'right',
        hide_on_select : true,
        mode           : 'range',
        min            : products[id].Date,
    });
});

