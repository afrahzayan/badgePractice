async function fetching() {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()

    console.log(data.products.filter(item => {
        if (item.price % 2 === 0) {
            return item
        }
    })) 

} fetching()

