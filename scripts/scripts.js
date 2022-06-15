let cookieCount = document.querySelector('#count')

let count = 0

function increment() {
    count += 1;
    cookieCount.innerText = count;
}

function decrement() {
    if(count <= 0){
        cookieCount.innerText = "NO COOOOOKIES!!!"
    }else{
    count -= 1;
    cookieCount.innerText = count;}
}