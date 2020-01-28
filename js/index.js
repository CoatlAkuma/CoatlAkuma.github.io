$( document ).ready(function() {
    var products = JSON.parse( localStorage.getItem('products') || "[]");

    products.forEach(function(item, index, array) {
            $( "#listView" + item.Category).append(
                "<div class=\"col-lg-3 col-md-3\">\n" +
                "\t\t\t\t\t\t\t\t\t\t<div class=\"single-product\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-img\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"product.html?id=" + item.Id + "\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t<img id=\"img" + item.Id + "\" class=\"primary-image\" src=\"img/product/17.jpg\" alt=\"\" />\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t</a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"actions\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"action-buttons\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"add-to-cart\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"product.html?id=" + item.Id + "\">View</a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n" +
                "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-content\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"product.html?id=" + item.Id + "\">" + item.Name + "</a></h2>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pro-rating\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-star\"></i></a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-star\"></i></a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-star\"></i></a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-star\"></i></a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-star\"></i></a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price-box\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"new-price\">€" + item.Price + " / day </span>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t</div>")

        if (item.Img != "")
        {
            $('#img' + item.Id).attr('src', item.Img);
            //$('#img' + item.Id).width(480); // Units are assumed to be pixels
            //$('#img' + item.Id).height(606);
        }
    });
});
