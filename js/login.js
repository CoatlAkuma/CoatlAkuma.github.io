function UserInfo(num,name,mail,password){
    this.Number=num;
    this.Name=name;
    this.Mail=mail;
    this.Password=password;
}

var lastPage

$( document ).ready(function() {
    lastPage = JSON.parse( localStorage.getItem('lastPage') || "[]");
    localStorage.setItem("lastPage",JSON.stringify(null) );
});

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

        if (lastPage === null)
            window.location.href = "index.html";
        else
            window.location.href = lastPage;
    }
})

$('#login').click(function () {

    var users = JSON.parse( localStorage.getItem('userInfo') || "[]");

    var isUserExist = users.find(isExist);

    if (isUserExist != null)
    {
        localStorage.setItem("userOnline",JSON.stringify(isUserExist.Number));

        if (lastPage === null)
        window.location.href = "index.html";
        else
            window.location.href = lastPage;
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
