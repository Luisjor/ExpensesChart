
fetch("./data.JSON")
.then(res => res.json())
.then(data => console.log(data))


var maxWas = 0;
const txt =  `
[
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]
`
const myArr = JSON.parse(txt)
var cantidades = [];
var suma = 0;



// Colocar la cantidad correcta por día
for (let i=0; i<myArr.length;i++) {
    document.getElementsByClassName("bar-text")[i].innerText = `\$${myArr[i].amount}`
    cantidades.push(myArr[i].amount)
    suma += Number(cantidades[i])
    if (myArr[i].amount > maxWas) {
        maxWas = myArr[i].amount
    }
}

// Colorear columna con mayor gasto
for (let i=0; i<myArr.length;i++) {
    if (maxWas == cantidades[i]) {
        document.getElementsByClassName("bars-column")[i].style.backgroundColor =
        "hsl(186, 34%, 60%)"
    } 
}

// Colocar gastos de la semana en WEB
document.getElementById("Total-Week").innerText = `\$ ${suma}`

// Cambiar altura de columna según gasto
for (let i=0; i<myArr.length;i++) {
    let HeightPercentage = (cantidades[i] * 70) / maxWas
    document.getElementsByClassName("bars-column")[i].style.height = `${HeightPercentage}%`
}


