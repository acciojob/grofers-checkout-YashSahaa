const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table = document.querySelector("table")
//console.log(table)
const getSum = () => {
//Add your code here
  let prices=document.querySelectorAll(".price")
	let total = 0
	//console.log(prices)
	for (let price of prices) {
		total+=parseInt(price.innerText)
		//console.log(parseInt(price.innerText))
	}
	//console.log(total)
	let row = document.createElement("tr")
	let cell = document.createElement("td")
	cell.innerText = "Total is: "+total
	row.append(cell)
	table.append(row)
};

getSumBtn.addEventListener("click", getSum);

