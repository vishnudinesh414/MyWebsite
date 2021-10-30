
function validate() {
  let x = document.form1.fullname.value;
  x = x.trim();
  let y = document.form1.email.value;
  y = y.trim();
  let z = document.form1.subject.value;
  z = z.trim();
  let q = document.form1.message.value;
  q = q.trim();
  
  if(x == ""  &&  y == ""  &&  z == "" && q == "")
  {
    document.getElementById('name-err').style.display = 'block';
    document.getElementById('email-err').style.display = 'block';
    document.getElementById('sub-err').style.display = 'block';
    document.getElementById('msg-err').style.display = 'block';
    return false;
  }
  
  if (x == "") {
    document.getElementById('name-err').style.display = 'block';
    return false;
  } else {
    document.getElementById('name-err').style.display = 'none';
  }

  if (specialcharvalidation() == false){
    return false;
  }

  if (y == "") {
    document.getElementById('email-err').style.display = 'block';
    return false;
  } else {
    document.getElementById('email-err').style.display = 'none';
  }

  if (z == "") {
    document.getElementById('sub-err').style.display = 'block';
    return false;
  } else {
    document.getElementById('sub-err').style.display = 'none';
  }

  if (q == "") {
    document.getElementById('msg-err').style.display = 'block';
    return false;
  } else {
    document.getElementById('msg-err').style.display = 'none';
  }

  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(y))) {
    document.getElementById('email-err').style.display = 'block';
    return false;
  } else {
    document.getElementById('email-err').style.display = 'none';
  }
  return true;


}
function specialcharvalidation() {

  var x = document.form1.fullname.value;
  var format = /[!@#$%^&*()_+ \-=\[\]{};':"\\|,.<>\/?]+/;

  if (format.test(x)) {
    document.getElementById('name-err').style.display = 'block';
    return false;
  } else {
    document.getElementById('name-err').style.display = 'none';
  }
  if (!(/^([^0-9]*)$/.test(x))) {
    document.getElementById('name-err').style.display = 'block';
    return false;
  }
  else {
    document.getElementById('name-err').style.display = 'none';
  }
  return true;

}