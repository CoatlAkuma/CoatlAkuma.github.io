function Products(id, img, name, description, price, category, userId, date){
    this.Id=id;
    this.Img=img;
    this.Name=name;
    this.Description=description;
    this.Price=price;
    this.Category=category;
    this.UserId=userId;
    this.Date=date;
}

var img

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            img = e.target.result
            $('#img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#ImgUpload").change(function(){
    readURL(this);
});

$( document ).ready(function() {
    var isUserOnline = JSON.parse( localStorage.getItem('userOnline') || "[]");

    if (isUserOnline === 0)
    {

    }
    else if (isUserOnline != '' )
    {

    }
    else
    {
        localStorage.setItem("lastPage",JSON.stringify("add_product.html") );
        window.location.href = "register.html?#";
    }
});

$('#Submit').click(function() {
    var data = JSON.parse(localStorage.getItem('products') || "[]");

    var userId = JSON.parse(localStorage.getItem('userOnline') || "[]");

    var length = data.length;

    var num = length;
    var name = $('#EquipmentName').val();
    var description = $('#EquipmentDesc').val();
    var price = $('#EquipmentPrice').val();
    var userId = userId;
    var category;

    if (name == "" || price == "")
    {
        alert("Not all required fields are filled!")
    }
    else
    {
        if ($("#isEquipment").prop("checked"))
            category = "Equipment"
        else
            category = "Resources"

        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

        data.push(new Products(num,img,name,description,price,category,userId,date))
        localStorage.setItem("products",JSON.stringify(data) );

        $('#EquipmentImgUpload').val('');
        $('#EquipmentName').val('');
        $('#EquipmentDesc').val('');
        $('#EquipmentPrice').val('');

        alert("Product added!");
        window.location.href = "my_account.html";
    }
});