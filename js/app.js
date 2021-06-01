'use stricr'
let formEl = document.getElementById('formInfo');
let tableEl = document.getElementById('order');

let objArr = [];
function Order(name, item) {
    this.name = name;
    this.item = item;
    objArr.push(this);

}
formEl.addEventListener('submit', handler);
function handler(event) {
    event.preventDefault();
    let cusName = event.target.custmerName.value;
    let foodItem = event.target.foodList.value;
    let newobj = new Order(cusName, foodItem);
    setLocalStorage();
    orderobject.render();
    newobj.render();
}
Order.prototype.render = function () {
    tableEl.textContent='';
    for (let i = 0; i < objArr.length; i++) {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
        let tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        let imgEl=document.createElement('img');
        tdEl.appendChild(imgEl);
        if(newobj.foodItem=='Shawrma')
        imgEl.src='/img/shawrma.png'
        else if (newobj.foodItem=='Burger')
        imgEl.src='/img/burger.jpg'
        else if (newobj.foodItem=='Pizza')
        imgEl.src='/img/pitza.jpg';

        tdEl.textContent=imgEl;
let tdEl1=document.createElement('td');
trEl.appendChild(tdEl1);
tdEl1='Custmer Name=' + objArr[i].name+'/n Food Type ='+ objArr[i].foodItem+Math.floor((Math.random() * 10) + 1);

    }

    console.log(objArr);


}

function setLocalStorage()
{let data=JSON.stringify(objArr);
localStorage.setItem(name,data);
}

function getFromLocalStorage()
{let strObj=localStorage.getItem(name);
let normalobj=JSON.parse(strObj);
if(normalobj !=null)
{let orderobject;
    for(let i=0;i<normalobj.length;i++)
    {orderobject=new Order(normalobj[i].name,normalobj[i].foodItem)
    
    }

orderobject.render();

}

}
