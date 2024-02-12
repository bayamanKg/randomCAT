const btn = document.querySelector('.btn')
const image = document.querySelector('.img')
const url = " https://api.thecatapi.com/v1/images/search"
const load = document.querySelector('.load')

async function fetchHandler(){
    try{
        const responce = await fetch(url)
        const data = await responce.json()
        image.src = data[0].url
    }
    catch(error){
        console.log(error)
    }
}

btn.addEventListener("click", () => {
    fetchHandler()
})

let isClick = true;

btn.addEventListener("click", () => {
    if(isClick){
        load.classList.add("hiden")
    setTimeout(() => {
        load.classList.remove('hiden')
    }, 2000)
    }
    isClick = false;
})