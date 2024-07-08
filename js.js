//const gia = document.querySelector("#gia")
const tenSach = document.querySelector("#ten-sach");
const sdt = document.querySelector("#sdt");
const tenNguoi = document.querySelector("#ten-nguoi-dat");
const btnGui = document.querySelector("#gui");
const gio = document.querySelector("#time");
const submit = document.querySelector("#submit");
let err = document.querySelector("#ten-sach-err");
let err1 = document.querySelector("#sdt-err");
let err2 = document.querySelector("#ten-nguoi-dat-err");
let err3 = document.querySelector("#time-err");
let giatien = document.querySelector("#gia-err")

function checkphonenumber(phone) {
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

  return phone.match(regexPhoneNumber) ? true : false;
}

//       btnGui.addEventListener('click', function(e){
//          e.preventDefault();
//         console.log(tenSach.value)
//         if(tenSach.value.length < 1){
//             let err = document.querySelector('#ten-sach-err');
//             err.innerHTML = 'vui long nhap ten tu ';
//             err.classList.add('do');
//             err.classList.remove('hidden');
//         }
//         else{
//             err.innerHTML = '';
//             err.classList.add('hidden');
//          }

//    })

submit.addEventListener("submit", function () {
  console.log(tenSach.value);
  if (tenSach.value.length < 1) {
    let err = document.querySelector("#ten-sach-err");
    err.innerHTML = "Hãy điền tên sách mà bạn muốn";

    err.classList.remove("hidden");
    document.getElementById("ten-sach-err").style.color = "red";
  } else if (tenSach.value.length > 50) {
    let err = document.querySelector("#ten-sach-err");
    err.innerHTML = "Tên không dài quá 50 kí tự";

    err.classList.remove("hidden");
    document.getElementById("ten-sach-err").style.color = "red";
  } else {
    err.innerHTML = "";
    err.classList.add("hidden");
  }
});

submit.addEventListener("submit", function () {
  console.log(sdt.value);

  if (!checkphonenumber(sdt.value) == true) {
    console.log("sdt khong hop le");
    let err1 = document.querySelector("#sdt-err");
    err1.innerHTML = "số điện thoại không hợp lệ";
    document.getElementById("sdt-err").style.color = "red";
    err1.classList.remove("hidden");
  } else {
    err1.innerHTML = "";
    err1.classList.add("hidden");
  }
});
// Shift + Alt + F

submit.addEventListener("submit", function () {
  console.log(tenNguoi.value);
  if (tenNguoi.value.length < 1) {
    let err2 = document.querySelector("#ten-nguoi-dat-err");
    err2.innerHTML = "Hãy điền tên của bạn";
    document.getElementById("ten-nguoi-dat-err").style.color = "red";
    err2.classList.remove("hidden");
  } else if (tenNguoi.value.length > 50) {
    let err2 = document.querySelector("#ten-nguoi-dat-err");
    err2.innerHTML = "tên người đặt không dài quá 50 kí tự";
    document.getElementById("ten-nguoi-dat-err").style.color = "red";
    err2.classList.remove("hidden");
  } else {
    err2.innerHTML = "";
    err2.classList.add("hidden");
  }
});
submit.addEventListener("submit", function () {
  console.log(gio.value);
  if (gio.value.length < 1) {
    let err3 = document.querySelector("#time-err");
    err3.innerHTML = "Hãy điền số giờ bạn muốn thuê";
    document.getElementById("time-err").style.color = "red";
    err3.classList.remove("hidden");
  } else if (gio.value < 1) {
    let err3 = document.querySelector("#time-err");
    err3.innerHTML = "Chỉ được phép nhập số dương";
    document.getElementById("time-err").style.color = "red";
    err3.classList.remove("hidden");
  } else {
    err3.innerHTML = "";
    err3.classList.add("hidden");
  }

  btnGui.addEventListener("click", function () {
    
    if (gio.value > 1 && gio.value < 5) {
      let giatien = document.querySelector("#gia-err");
      giatien.innerHTML = "20.000vnđ";
      document.getElementById("gia-err").style.color = "yellow";
      giatien.classList.remove("hidden");
    } else if (gio.value > 5 && gio.value < 10 ) {
      let giatien = document.querySelector("#gia-err");
      giatien.innerHTML = "40.000vnđ";
      document.getElementById("gia-err").style.color = "yellow";
      giatien.classList.remove("hidden");

      
    } 
    else if (gio.value > 10 && gio.value < 15 ) {
      let giatien = document.querySelector("#gia-err");
      giatien.innerHTML = "60.000vnđ";
      document.getElementById("gia-err").style.color = "yellow";
      giatien.classList.remove("hidden");

      
    } 
    else if (gio.value > 15 && gio.value < 20 ) {
      let giatien = document.querySelector("#gia-err");
      giatien.innerHTML = "80.000vnđ";
      document.getElementById("gia-err").style.color = "yellow";
      giatien.classList.remove("hidden");

      
    } 
    else if (gio.value > 20  ) {
      let giatien = document.querySelector("#gia-err");
      giatien.innerHTML = "100.000vnđ";
      document.getElementById("gia-err").style.color = "yellow";
      giatien.classList.remove("hidden");

      
    } 
    else {
      giatien.innerHTML = "";
      giatien.classList.add("hidden");
    }
  });
});

//btnGui.addEventListener("click", function (e) {
 // if((tenSach.value.length > 0 && tenSach.value.length < 50)
 //  && (gio.value.length > 0 && gio.value > 0) && (!checkphonenumber(sdt.value) == false)
 //  && (tenNguoi.value.length > 0 && tenNguoi.value.length < 50)){
//    alert('gửi thành công ');
//  } else {
    //alert('vui nhập nhập lại những ô chưa hợp lệ');

 // }


  


//});

      // btnGui.addEventListener('click', function(e){
      //   e.preventDefault();
      //   console.log(gio.value)
      //   if(gio.value > 1){
             //let giatien = document.querySelector('#gia-err');
             //giatien.innerHTML = 'vui long nhap ten tu ';
             //giatien.classList.add('do');
             //giatien.classList.remove('hidden');
      //       let giatien = document.querySelector("#gia-err");
   // giatien.innerHTML = "Hãy điền tên sách mà bạn muốn";

    //giatien.classList.remove("hidden");
   // document.getElementById("gia-err").style.color = "red";
   //     }
   //      else{
   //          giatien.innerHTML = '';
   //          giatien.classList.add('hidden');
   //       }
//});

