const products = require('./products.interface');
class Products {
	constructor() {
		// displayProducts();
		productArray();
	}
}

function displayProducts() {
	console.log('products', products);
}

function productArray() {
	let product = {
    	productNamePrice: []
	};

	products.map((item) => {        
    	product.productNamePrice.push({ 
        	"productName" : item.productName,
        	"productPrice"  : item.productPrice,
    	});
	});
		console.log(product.productNamePrice);

	lowestPrice = product.productNamePrice[0].productPrice;
	product.productNamePrice.map((item) => { lowestPrice > item.productPrice ? ( lowestPrice = item.productPrice , productName = item.productName ) : lowestPrice  } )
	leastPriceWithThisName(productName);
}

function leastPriceWithThisName(name){
	console.log(name);
}

// Do not edit below this line
const product = new Products();
