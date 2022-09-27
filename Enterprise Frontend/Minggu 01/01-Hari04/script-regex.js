var phonenum = document.forms['myform']['phonenum'];
var pattern = /^[a-zA-z]{1,2}\s?\d{1,4}\s?[a-zA-Z]{1,3}$/;

function valid(){

  if (phonenum.value.match(pattern)){
    alert("benar");
    return true;
  }

  else{
    alert("salah")
  }
}