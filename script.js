window.addEventListener('DOMContentLoaded', () => {
    getBitcoinPrice();
    updateBitcoinPrice(newValue)
})

function updateBitcoinPrice(newValue) {
    document.querySelector("#request").innerHTML = `${newValue} (USD)`;
    setTimeout(() => {
        getBitcoinPrice
    }, 100);
}

function getBitcoinPrice() {
    let xhd = new XMLHttpRequest();
    let url = 'https://blockchain.info/q/24hrprice'
    xhd.onload = function() {
        try{
            let data = this.responseText    
            document.querySelector("#request").innerHTML = data;
            updateBitcoinPrice(data)
        }
        catch(e) {
            console.log("ERROR", e)
        }
    }

    xhd.open('GET', url);
    xhd.send();
}