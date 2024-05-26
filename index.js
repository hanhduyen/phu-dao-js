function fetchAPI() {
    var postAPI = 'https://svc-0-staging-usf.hotyon.com/search?apiKey=1fedccb4-262f-4e65-ae6d-d01e8024fe83';
    fetch (postAPI) 
        .then (function (response) {
            return response.json();
        })
        .then (response_data => {
            let data = response_data.data;
            let maxPriceItem = null;
            let maxPrice = -1;
            debugger;
            data.items.forEach(item => {
                item.variants.forEach( variant => {
                    if (variant.price > maxPrice) {
                        maxPrice = variant.price;
                        maxPriceItem = {
                            name: item.title,
                            options: item.options,
                            variants: item.variants,
                        };
                    }
                })
            });
            const itemBox = document.getElementById("product-box");
            itemBox.innerHTML = createItem(maxPriceItem)
            document.body.appendChild(itemBox);
            console.log(itemBox);
        })

        // //ex02 tính tổng giá của các biến thể từ sp Testbundle
        // .then (data => {
        //     const findTestBundle = data.find(variants => variants.title === 'Test bundle');
        //     const totalPriceOfVariants = findTestBundle.reduce((prev, variants) =>{
        //     prev + variants.price
        //     }, 0)
        //     document.getElementById("total-price").innerHTML = totalPriceOfVariants;
        // })

        // // exo03 lọc các sp soldout
        // .then (data => {
        //     const soldOutProducts = data.variants.every(variants => variants.available == 0);
        //     document.getElementById("soldout-product").innerHTML = soldOutProducts;
        // })

        // //ex04 lọc option nhập từ input
        // .then (data => {
        //     const btn = document.querySelector('.input-option button');
        //     const input = document.querySelector('.input-option input');
        //     let value
        //     let result = document.querySelector('.input-option .result');
        //     btn.addEventListener('click', function() {
        //         value = data.find(variants => variants.title === input.value);
        //         result.innerText = value;
        //     })
        // })

        // //ex05 lọc sp có giá từ input1 đến input 2
        // .then (data => {
        //     // const btn
        // })
}
function parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.html;
}

function createItem(maxPriceItem, options) {
    debugger;
    let extraData = {};
    maxPriceItem.options.forEach((optionIndex, i) => {
        const optionName = options[i].name;
        const optionValue = options[i].values[optionIndex];
        extraData[optionName] = optionValue;
    });
    let optionHTML = ""
    for (let optionName in extraData) {
        optionHTML += `<li class="">${optionName}: ${extraData[optionName]}</li>`
    }
    return parseHTML (
        `
        <div class="Item-container">
                <h3>sản phẩm có giá cao nhất là:${maxPriceItem.title} </h3>
                <p>giá: ${maxPriceItem.price}</p>
                <p>các biến thể: </p>
                <div class="variants-container">
                    <ul>
                        ${optionHTML}
                    </ul>
                 </div>
            </div>
        `
    )
}