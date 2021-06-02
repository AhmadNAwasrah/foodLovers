'use stricr'
let formEl = document.getElementById('formInfo');
let tableEl = document.getElementById('order');

let objArr = [];
function Order(name, foodType,imgPath) {
    this.name = name;
    this.foodType = `Food Type: ${foodType}`;
    this.price = price;
    this.imgPath = `img/${foodType}.jpg`;
    objArr.push(this);

}
function randomPrice() {
    price = Math.floor((Math.random() * 20) + 10);
}
console.log(randomPrice());
formEl.addEventListener('submit', handler);
function handler(event) {
    event.preventDefault(); 
    let cusName = event.target.custmerName.value;
    let foodItem = event.target.foodList.value;
    let newobj = new Order(cusName, foodItem);
   
    //orderobject.render();
    newobj.render();
     setLocalStorage();
}
Order.prototype.render = function () {
    tableEl.textContent = '';
    let thEl=document.createElement('th');
    tableEl.appendChild(thEl);
    thEl.textContent='Order Image';
    let thEl1=document.createElement('th');
    tableEl.appendChild(thEl1);
    thEl1.textContent='Order Detiles';

    for (let i = 0; i < objArr.length; i++) {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
        let tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        let imgEl = document.createElement('img');
        tdEl.appendChild(imgEl);
        imgEl.setAttribute('src', objArr[i].imgPath);

        //  tdEl.textContent = imgEl;
        let tdEl1 = document.createElement('td');
        trEl.appendChild(tdEl1);
        tdEl1.textContent = 'Custmer Name :' + objArr[i].name + objArr[i].foodType + 'Price: '+objArr[i].price;
       
    }

    console.log(objArr);


}

function setLocalStorage() {
    let data = JSON.stringify(objArr);
    localStorage.setItem(name, data);
  
}

function getFromLocalStorage() {
    let strObj = localStorage.getItem(name);
    let normalobj = JSON.parse(strObj);
    if (normalobj != null) {
        let orderobject;
        for (let i = 0; i < normalobj.length; i++) {
            orderobject = new Order(normalobj[i].name, normalobj[i].foodItem)

        }

        orderobject.render();

    }

}
