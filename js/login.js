function UserInfo(num,name,mail,password){
    this.Number=num;
    this.Name=name;
    this.Mail=mail;
    this.Password=password;
}

$('#registrate').click(function () {
    var data = JSON.parse( localStorage.getItem('userInfo') || "[]");
    var length = data.length;

    var num=length;
    var name=$('#username').val();
    var mail=$('#regMail').val();
    var password=$('#regPassword').val();

    if (name == "" || mail == "" || password == "")
    {
        alert("Not all fields are filled!")
    }
    else
    {
        data.push(new UserInfo(num,name,mail,password))
        localStorage.setItem("userInfo",JSON.stringify(data) );
        localStorage.setItem("userOnline",JSON.stringify(num) );
        window.location.href = "index.html";

        $('#username').val('');
        $('#regMail').val('');
        $('#regPassword').val('');
    }
})

$('#login').click(function () {

    var users = JSON.parse( localStorage.getItem('userInfo') || "[]");

    var isUserExist = users.find(isExist);

    if (isUserExist != null)
    {
        localStorage.setItem("userOnline",JSON.stringify(isUserExist.Number));
        window.location.href = "index.html";
    }
    else
    {
        alert("Wrong login or password!")
    }

    $('#logMail').val('');
    $('#logPassword').val('');
})

function isExist(element, index, array) {

    var mail=$('#logMail').val();
    var password=$('#logPassword').val();

    if ((mail == element.Mail || mail == element.Name) && password == element.Password )
        return true;

    return null;
}
