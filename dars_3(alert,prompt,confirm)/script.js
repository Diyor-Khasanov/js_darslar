// alert modal built in
alert("Salom");
// prompt - brauzer js inputi
let isim = prompt("Ismingizni kiriting");
alert(isim);

// confirm
let tasdiq = confirm("Haqiqatan ham davom etasizmi?");
if (tasdiq) {
  alert("Siz davom etdingiz!");
} else {
  alert("Siz bekor qildingiz!");
}

// vazifa
let ism = prompt("Iltimos, ismingizni kiriting:");
let yosh = prompt("Iltimos, yoshingizni kiriting:");

alert(`Salom, ${ism}, siz ${yosh} yoshdasiz`);

let davommi = confirm("Saytga kirishni davom ettirasizmi?");
if (davommi) {
  alert(`Xush kelibsiz, ${ism}!`);
} else {
  alert(`Xayr, ${ism}.`);
}
