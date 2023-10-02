const card=document.getElementsByClassName("card");
const  btnAdd=document.getElementsByClassName("btn-info");
const btnCart=document.querySelector(".btn-card")
const cartList=document.querySelector("shopping-card-list")


class shopping{
    constructor(image,title,price){
        this.image=image;
        this.title=title;
        this.price=price;
    }

}
class UI{
    addToCart(shopping){
        const listItem=document.createElement("div");
        listItem.classList="list-item";
        listItem.innerHTML=
        `
        
        `

    }

}
for (let i = 0; i < card.length; i++) {
  btnAdd[i].addEventListener("click" ,function(e){
    let title=card[i].getElementsByClassName("card-title")[0].textContent;
    let price=card[i].getElementsByClassName("price")[0].textContent;
    let image=card[i].getElementsByClassName("card-img-top")[0].textContent;

    let shopping=new shopping(title,price,image);
    let UI=new UI();
    UI.addToCart(shopping);





    e.preventDefault();
})
    
}

function cardToggle(){
    btnCart.addEventListener("click" ,function(){
        cartList.classList.toggle("d-none");
    })
}
cardToggle();