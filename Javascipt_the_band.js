
const buyBttns = document.querySelectorAll(".js-buy-tickets");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");
const modalPay = document.querySelector(".js-modal-pay");
const contactSend = document.querySelector(".js-contact-send");
// truyền vào modal bằng class .modal

function ShowBuyTickets() {
  modal.classList.add("open");
}

function CloseBuyTickets() {
  modal.classList.remove("open");
}
function CloseOnClicksVoid() {
  event.stopPropagation();
}

function NotificationCustomer() {
  alert("Thanks you for used my services");
}
function AlertForUsed() {
  alert("Send contact successfully");
}

modal.addEventListener("click", CloseBuyTickets);
modalClose.addEventListener("click", CloseBuyTickets);
modalContainer.addEventListener("click", CloseOnClicksVoid);
modalPay.addEventListener("click", NotificationCustomer);

for (const buyBttn of buyBttns) {
  buyBttn.addEventListener("click", ShowBuyTickets);
}
contactSend.addEventListener("click", AlertForUsed);

// begin mobile menu btn
var header = document.getElementById('header');
var mobileMenu = document.getElementById('menu-mobile-btn');
//auto đóng mở menu
mobileMenu.onclick = function() {
  var isClose = header.clientHeight === 46;
  if (isClose) {
    header.style.height = 'auto';
  }
  else {
    header.style.height = '46px';
  }
} 
// auto đóng mở menu
var menuItems = document.querySelectorAll('#nav> li> a');
for( var i = 0; i < menuItems.length ; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(){
      header.style.height = '46px';
    }
}

// end mobile menu btn
