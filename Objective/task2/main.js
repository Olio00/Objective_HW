
function profileMagazine(label, schedule, products) {
    
    const makeBlackFriday = function(disc)  {
        if (disc<0 || disc >1) {
            return null 
        }
        for(let i of this.products) {
            i.price = i.price * disc
        }
    }

    const verifySore = function(store) {
        for (let i of store) {
           this.products.forEach(prod => {
            if (prod.productName==i.productName) {
                prod.count = i.count
            }
            
           });
        }
    }
    
    return{
        label,
        schedule,
        products,

        makeBlackFriday,
        verifySore
    }
}

function productStatts(productName, count, price=null) {
    return {
        productName,
        count, 
        price
    }
}

let shop = profileMagazine('ZARA', "Sun:12:00pm, fri: 09:00am", [productStatts("sneekers", 12, 50),productStatts("shirt", 10, 20) , productStatts("t-shirt", 100, 5) ])

console.log(shop)
