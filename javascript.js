let orderList = document.getElementById("orders")

let marinara = document.createElement("li")
marinara.innerHTML = "1 Pizza Marinara";
orderList.appendChild(marinara)

let mushroom = document.createElement("li")
mushroom.innerHTML = "1 Pizza Mushrooms";
orderList.appendChild(mushroom)


let readyList = document.getElementById("ready")

let margharita = document.getElementById("margharita")
orderList.removeChild(margharita)
readyList.appendChild(margharita)