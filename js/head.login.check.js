function UserInfo(num, mail,password){
    this.Number=num;
    this.Mail=mail;
    this.Password=password;
}

$( document ).ready(function() {

    var isUserOnline = JSON.parse( localStorage.getItem('userOnline') || "[]");

    if (isUserOnline === 0)
    {
        $('#myAccountHead').show();
        $('#myAccountHeadHome').show();

        $('#loginHead').hide();
        $('#loginHeadHome').hide();

        $('#logoutHead').show();
        $('#logoutHeadHome').show();
    }
    else if (isUserOnline != '' )
    {
        $('#myAccountHead').show();
        $('#myAccountHeadHome').show();

        $('#loginHead').hide();
        $('#loginHeadHome').hide();

        $('#logoutHead').show();
        $('#logoutHeadHome').show();
    }
    else
    {
        $('#myAccountHead').hide();
        $('#myAccountHeadHome').hide();

        $('#loginHead').show();
        $('#loginHeadHome').show();

        $('#logoutHead').hide();
        $('#logoutHeadHome').hide();
    }

});

