function Products(id, pic, name, description, price, category){
    this.Id=id;
    this.Pic=pic;
    this.Name=name;
    this.Description=description;
    this.Price=price;
    this.Category=category;
}

var showingProdencs = 0
var category

function Create(products){
    showingProdencs = 0

    products.forEach(function(item, index, array) {
        if (item.Category == category)
        {
            $( "#listView" ).append( "<div class=\"product-list-wrapper\">\n" +
                "\t\t\t\t\t\t\t\t<div class=\"single-product\">\t\t\t\t\t\t\t\t\n" +
                "\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12\">\n" +
                "\t\t\t\t\t\t\t\t\t\t<div class=\"product-img\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<a href=\"product.html?id=" + item.Id + "\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<img id=\"img" + item.Id + "\" class=\"primary-image\" src=\"img/product/17.jpg\" alt=\"\" />\n" +
                "\t\t\t\t\t\t\t\t\t\t\t</a>\n" +
                "\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n" +
                "\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 col-sm-8 col-xs-12\">\n" +
                "\t\t\t\t\t\t\t\t\t\t<div class=\"product-content\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"product.html?id=" + item.Id + "\">" + item.Name + "</a></h2>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"pro-rating\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-star\"></i></a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-star\"></i></a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-star\"></i></a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-star\"></i></a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-star\"></i></a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"price-box\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"new-price\">€" + item.Price + " / day </span>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-desc\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<p>" + item.Description + "</p>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n" +
                "\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n" +
                "\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t</div>"  );

            showingProdencs = showingProdencs + 1;

            if (item.Img != "")
            {
                $('#img' + item.Id).attr('src', item.Img);
                //$('#img' + item.Id).width(480); // Units are assumed to be pixels
                //$('#img' + item.Id).height(606);
            }
        }

    });
}

$( document ).ready(function() {
    var url_string = window.location.href
    var url = new URL(url_string)
    category = url.searchParams.get("Category")

    var products = JSON.parse( localStorage.getItem('products') || "[]").reverse();
    if (category == null)
        window.location.href = "?Category=Equipment";

    Create(products)

    $('#ShowCount').append("Showing " + showingProdencs + " of " + products.length + " results")
});

$('select').change(function () {
    var optionSelected = $(this).find("option:selected");
    var valueSelected  = optionSelected.val();

    $( "#listView" ).html("");

    var products = JSON.parse( localStorage.getItem('products') || "[]")

    if (valueSelected == "newness")
        products = products.reverse();
    else if (valueSelected == "fromlow")
        products.sort(function(a, b){return a.Price - b.Price});
    else if (valueSelected == "fromhigh")
        products.sort(function(a, b){return b.Price - a.Price});
    Create(products)
});


