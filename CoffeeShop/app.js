const navbar = document.querySelector('.nav-links');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  cartItem.classList.remove('active')
}


const cartItem = docment.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
}




windowc.onscroll = () => {
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
}