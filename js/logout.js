$("#confirm").click(function () {
    localStorage.setItem("userOnline",JSON.stringify(false) );
    window.location.href = "index.html";
})