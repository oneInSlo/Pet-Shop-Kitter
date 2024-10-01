const addEventOnElem = function(elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);



/*-----------------------------------*\
  #PRINT-FORMATTED-DATE
    day-name, day month
\*-----------------------------------*/

function printFormattedDate() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const currentDate = new Date();
  const day = days[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  
  const formattedDate = `${day}, ${month} ${date}`;
  
  const formattedDateSpan = document.getElementById('formattedDate');

  if (window.innerWidth > 992) {
      formattedDateSpan.textContent = formattedDate;
  } else {
      formattedDateSpan.style.display = 'none';
  }
  
}

printFormattedDate();



/*-----------------------------------*\
  #SALE
\*-----------------------------------*/

function calculateTimeUntilPromotionEnd(endDate) {
  const currentTime = new Date();
  const endTime = new Date(endDate);
  
  const timeDiff = endTime - currentTime;

  let inSecondsCurrent = currentTime.getTime() / 1000;

  let weekHours = (endTime.getTime() / 1000) - 604800;

  const seconds = Math.floor(timeDiff / 1000) % 60;
  const minutes = Math.floor(timeDiff / 1000 / 60) % 60;
  const hours = Math.floor(timeDiff / 1000 / 60 / 60);
  
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  
  const countdownElement = document.getElementById('countdown');

  let time = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds; 

  countdownElement.innerHTML = time;

  if (weekHours < inSecondsCurrent) 
    countdownElement.style.color = 'red';
  else 
    countdownElement.style.color = 'black';
  
}

function setPrices(endDate) {
  const currentDate = new Date();
  
  const newPriceElements = document.querySelectorAll('.new-price');
  const salePriceElements = document.querySelectorAll('.sale-price');
  const finalPriceElements = document.querySelectorAll('.final-price');

  newPriceElements.forEach(function(newPriceElement, index) {
    if (currentDate > endDate) {
      newPriceElement.style.display = 'none';
      const finalPriceElement = finalPriceElements[index];
      finalPriceElement.dataset.value = salePriceElements[index].textContent.slice(1);
    } else {
      newPriceElement.style.display = 'block';
      const finalPriceElement = finalPriceElements[index];
      finalPriceElement.dataset.value = newPriceElements[index].textContent.slice(1);
    }
  });

  salePriceElements.forEach(function(salePriceElement) {
    if (currentDate > endDate) {
      salePriceElement.style.textDecoration = 'none';
      salePriceElement.style.color = '#ED6335';
    } else {
      salePriceElement.style.color = '#878787';
    }
  });
}

function isOnSale(endDate) {
  const currentDate = new Date();
  if (currentDate > endDate) 
    return false;
  else
    return true;
}

const endDate = new Date('2024-05-28T00:00:00'); 
calculateTimeUntilPromotionEnd(endDate);
setPrices(endDate);
isOnSale(endDate);

setInterval(() => {
  calculateTimeUntilPromotionEnd(endDate);
}, 1000);

setInterval(() => {
  setPrices(endDate);
}, 1000);

setInterval(() => {
  isOnSale(endDate);
}, 1000);

let newPriceElements = document.querySelectorAll('.new-price');

newPriceElements.forEach(function(element) {
    let originalPrice = parseFloat(element.getAttribute('data-original-price'));
    
    let newPrice = originalPrice * 0.85;

    element.textContent = '€' + newPrice.toFixed(2);
});



/*-----------------------------------*\
  #SETTINGS
    change theme / bg
\*-----------------------------------*/

function colorChange() {
  setOverride();

  let picked = document.getElementById("background-color");
  let valueColor = picked.value;
  document.body.style.backgroundColor = valueColor;

  localStorage.setItem("background-color", document.body.style.backgroundColor);
}

function colorSelectChange() {
  setOverride();

  let picked = document.getElementById("selectColorScheme");

  if (picked.value == 'night') {
    document.body.style.backgroundColor = "#0A0A0A";
  } else if (picked.value == 'eyeComfort') {
    document.body.style.backgroundColor = "#E6DFAF";
  } else if (picked.value == 'vivid') {
    document.body.style.backgroundColor = "#A3CCBE";
  }

  localStorage.setItem("background-color", document.body.style.backgroundColor);
}

function loadBackgroundColor() {
  setOverride();  
  document.body.style.backgroundColor = localStorage.getItem("background-color");
}

function setOverride() {
  document.getElementById("header").style.backgroundColor = "white";
  document.getElementById("box-cont").style.backgroundColor = "white";
}



/*-----------------------------------*\
  #SHOW-PRODUCTS : CATFOOD.HTML
\*-----------------------------------*/


/*
function showProductsJSON() {
  fetch('./assets/js/products.json')
    .then(response => response.json())
    .then(data => {
      const products = data.products;
      const tableBody = document.getElementById('productTableBody');

      products.forEach(product => {
        const discPrice = product.price - (product.price * (product.discount / 100));
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>€${product.price}</td>
          <td>${product.nutrition}</td>
          <td>€${discPrice.toFixed(2)}</td>
          <td><img src="${product.src}"></td>
        `;
        tableBody.appendChild(row);
      });

      localStorage.setItem('IZDELKI', JSON.stringify(products));
    })
    .catch(error => console.error('Error loading products:', error));
}
*/


// frontend JavaScript code

const loadProducts = () => {
  fetch("http://localhost:3000/product/", {
    method: "GET",
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((products) => {
    // Call a function to dynamically populate the product table
    displayProducts(products);
  })
  .catch((error) => {
    console.error('Error loading products:', error);
    // Handle error
  });
};

const displayProducts = (products) => {
  const table = document.getElementById('productTable');
  table.innerHTML = ''; // Clear previous content
  
  const headerRow = table.insertRow();
  headerRow.innerHTML = `<th>ID</th><th>Name</th><th>Price</th><th>Nutrition</th><th>Discount</th><th>Photo</th>`;
  
  products.forEach((product) => {
    const discPrice = product.price - (product.price * (product.discount / 100));
    const row = table.insertRow();
    row.innerHTML = `
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>€${product.price}</td>
    <td>${product.nutrition}</td>
    <td>€${discPrice.toFixed(2)}</td>
    <td><img src="${product.src}"></td>`;
  });
};







/*-----------------------------------*\
  #CART
\*-----------------------------------*/

function toggleCart() {
  let cart = document.getElementById("cart");
  let backdrop = document.getElementById("backdrop");
  
  cart.classList.toggle("open");
  backdrop.classList.toggle("open");
}

let backdrop = document.getElementById("backdrop");
backdrop.addEventListener("click", closeCart);

document.getElementById("closeShopping").addEventListener("click", closeCart);

function closeCart() {
  let cart = document.getElementById("cart");
  let backdrop = document.getElementById("backdrop");
  
  cart.classList.remove("open");
  backdrop.classList.remove("open");
}

const addToCardButtons = document.querySelectorAll('.card-action-btn');
let productList = [];

window.addEventListener('load', () => {
  const storedCart = sessionStorage.getItem('cart');
  productList = storedCart ? storedCart.split(';').map(function(serializedProduct) {
    const [name, price, quantity, image] = serializedProduct.split(':');
    return { 
      name, 
      price: parseFloat(price), 
      quantity: parseInt(quantity), 
      image 
    };
  }) : [];
  reloadCard();
});

function updateSessionStorage() {
  const serializedproductList = productList.map(product => `${product.name}:${product.price}:${product.quantity}:${product.image}`).join(';');
  sessionStorage.setItem('cart', serializedproductList);
}



addToCardButtons.forEach((button) => {
  button.addEventListener('click', () => {

    let alertDiv = document.getElementById("alertDiv");

    console.log(alertDiv);

    document.getElementById("alertDiv").style.display = "block";

    setTimeout(function(){
      alertDiv.style.display = "none";
    }, 3000);


    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('.card-title').textContent;
    const productPrice = parseFloat(productCard.querySelector('.final-price').getAttribute('data-value'));
    const productImage = productCard.querySelector('.img-cover.default').src;

    const productImagePath = productImage.substring(productImage.indexOf("assets"));

    const existingProductIndex = productList.findIndex(function(product) { return product.name === productName } );

    if (existingProductIndex !== -1) {
      productList[existingProductIndex].quantity++;
    } else {
      productList.push({
        name: productName,
        price: productPrice,
        quantity: 1,
        image: productImagePath
      });
    }
    updateSessionStorage();
    reloadCard();
  });
});

function reloadCard() {
  const list = document.querySelector('.list');
  const total = document.querySelector('.total');
  const quantity = document.querySelector('.quantity');

  list.innerHTML = '';

  let totalPrice = 0;
  let totalCount = 0;

  productList.forEach(product => {
    totalPrice += product.price * product.quantity;
    totalCount += product.quantity;

    const newDiv = document.createElement('li');
    newDiv.innerHTML = 

    ` <div class="product-name">${product.name}</div>
      <div clasS="product-price">€${(product.price * product.quantity).toFixed(2)}</div>
      <div>
        <button onclick="changeQuantity('${product.name}', ${product.quantity - 1})">-</button>
        <div class="count">${product.quantity}</div>
        <button onclick="changeQuantity('${product.name}', ${product.quantity + 1})">+</button>
      </div>
      <div>
        <button onclick="changeQuantity('${product.name}', 0)" class="icon"><ion-icon name="trash-outline" aria-hidden="true"></ion-icon></button>
      </div> `;

      list.appendChild(newDiv);
  });

  total.innerText = totalPrice.toFixed(2);
  quantity.innerText = totalCount;
}

function changeQuantity(productName, quantity) {

  const productIndex = productList.findIndex(product => product.name === productName);

  if (quantity === 0) {
    productList.splice(productIndex, 1);
  } else {
    productList[productIndex].quantity = quantity;
  }

  updateSessionStorage();
  reloadCard();
}


function displayCartItems() {
  const cartData = sessionStorage.getItem('cart');
  const cartTable = document.getElementById('cartTable');

    cartTable.innerHTML = '';

  if (!cartData || !cartTable) {
    return;
  }

  const products = cartData.split(';');

  products.forEach(productData => {
    const [productName, productPrice, productQuantity, productImage] = productData.split(':');

    const newRow = document.createElement('tr');

    const productImageCell = document.createElement('td');
    productImageCell.innerHTML = `<img src="${productImage}" alt="${productName}">`;

    const productNameCell = document.createElement('td');
    productNameCell.textContent = productName;

    const productPriceCell = document.createElement('td');
    productPriceCell.textContent = `€${parseFloat(productPrice).toFixed(2)}`;

    const productQuantityCell = document.createElement('td');
    productQuantityCell.textContent = productQuantity;

    const productFinalPrice = document.createElement('td');
    productFinalPrice.textContent = `€${parseFloat(productPrice * productQuantity).toFixed(2)}`;

    const removeButtonCell = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeProduct(productName);
      displayCartItems();
      displayTotal();
      discount();
      deliverySelect();
      displayTotal();
    });
    removeButtonCell.appendChild(removeButton);

    newRow.appendChild(productImageCell);
    newRow.appendChild(productNameCell);
    newRow.appendChild(productPriceCell);
    newRow.appendChild(productQuantityCell);
    newRow.appendChild(productFinalPrice);
    newRow.appendChild(removeButtonCell);

    cartTable.appendChild(newRow);
  });
}

function removeProduct(productName) {
  let cartData = sessionStorage.getItem('cart');
  if (!cartData) return;

  const products = cartData.split(';');
  const updatedProducts = products.filter(productData => {
    const [name] = productData.split(':');
    return name !== productName;
  });

  sessionStorage.setItem('cart', updatedProducts.join(';'));
}



/*-----------------------------------*\
  #GALLERY - PRODUCT DETAILS
\*-----------------------------------*/

function openModal() {
  var modal = document.getElementById("modal-gallery");
  var img = document.getElementById("bigImg");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  var modal = document.getElementById("modal-gallery");
  modal.style.display = "none";
}

function replaceBigImg(element) {
  let img = document.getElementById("bigImg");
  img.src = element.src;
}




/*-----------------------------------*\
  #USER-LOGIN
\*-----------------------------------*/

const loginUporabnik = (event) => {
  event.preventDefault();
  let uporabnik = {
      username: document.forms[0].username.value,
      password: document.forms[0].password.value,
  };
  fetch("http://localhost:3000/login/", {
      method: "POST",
      body: JSON.stringify(uporabnik),
      headers: {
          "Content-Type": "application/json",
      },
  })
      .then((odgovor) => {
          if (!odgovor.ok) {
              console.log('Network response was not ok');
              throw new Error('Network response was not ok');
          }
          return odgovor.json();
      })
      .then((odgovorJSON) => {
          if (odgovorJSON.status === "success") {
            console.log("bravo :D");
            alert('Welcome back ' + uporabnik.username);
            sessionStorage.setItem("userID", odgovorJSON.userId);
            sessionStorage.setItem("username", uporabnik.username);
            location.reload();
            document.forms[0].reset();
          } else {
            console.log(odgovorJSON.message);
            console.log("nije bravo :(");
          }
      })
      .catch((error) => {
          alert('Wrong username or password.');
      });
};



/*-----------------------------------*\
  #CHECK-USER
\*-----------------------------------*/

function checkUser() {

  let user = sessionStorage.getItem("userID");
  let edit = document.getElementById('editproducts');

  if (user == 1 || user == 2) {
    edit.classList.remove('d-none');
    edit.classList.add('d-inline');
    document.getElementById('home-nav').style.display = 'none';
    document.getElementById('about-us-nav').style.display = 'none';
    document.getElementById('shop-nav').style.display = 'none';
    document.getElementById('cart-nav').style.display = 'none';
    document.getElementById('register-nav').style.display = 'none';
    document.getElementById('settings-nav').style.display = 'none';
    document.getElementById('user-nav').style.display = 'none';
    document.getElementById('crt-nav').style.display = 'none';
  }
  else {
    edit.classList.remove('d-inline');
    edit.classList.add('d-none');
    document.getElementById('home-nav').style.display = 'inline';
    document.getElementById('about-us-nav').style.display = 'inline';
    document.getElementById('shop-nav').style.display = 'inline';
    document.getElementById('cart-nav').style.display = 'inline';
    document.getElementById('register-nav').style.display = 'inline';
    document.getElementById('settings-nav').style.display = 'inline';
    document.getElementById('user-nav').style.display = 'inline';
    document.getElementById('crt-nav').style.display = 'inline';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  checkUser();
});

// Update the user display
document.getElementById('usershow').innerHTML = sessionStorage.getItem("username");