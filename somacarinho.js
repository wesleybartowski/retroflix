function session(){
    sessionStorage.setItem("soma1",0);
    sessionStorage.setItem("soma2",0);
    sessionStorage.setItem("soma3",0);
    sessionStorage.setItem("soma4",0);
    sessionStorage.setItem("soma5",0);
    sessionStorage.setItem("soma6",0);
    sessionStorage.setItem("soma7",0);
    sessionStorage.setItem("soma8",0);
    sessionStorage.setItem("soma9",0);
    sessionStorage.setItem("soma10",0);
    sessionStorage.setItem("soma11",0);
    sessionStorage.setItem("soma12",0);
    sessionStorage.setItem("soma13",0);
    sessionStorage.setItem("soma14",0);
    sessionStorage.setItem("soma15",0);
    sessionStorage.setItem("soma16",0);
    sessionStorage.setItem("soma17",0);
    sessionStorage.setItem("soma18",0);
    
}



function getCart(){

let totalCart = parseFloat(sessionStorage.getItem("soma1"))+
                parseFloat(sessionStorage.getItem("soma2"))+
                parseFloat(sessionStorage.getItem("soma3"))+
                parseFloat(sessionStorage.getItem("soma4"))+
                parseFloat(sessionStorage.getItem("soma5"))+
                parseFloat(sessionStorage.getItem("soma6"))+
                parseFloat(sessionStorage.getItem("soma7"))+
                parseFloat(sessionStorage.getItem("soma8"))+
                parseFloat(sessionStorage.getItem("soma9"))+
                parseFloat(sessionStorage.getItem("soma10"))+
                parseFloat(sessionStorage.getItem("soma11"))+
                parseFloat(sessionStorage.getItem("soma12"))+
                parseFloat(sessionStorage.getItem("soma13"))+
                parseFloat(sessionStorage.getItem("soma14"))+
                parseFloat(sessionStorage.getItem("soma15"))+
                parseFloat(sessionStorage.getItem("soma16"))+
                parseFloat(sessionStorage.getItem("soma17"))+
                parseFloat(sessionStorage.getItem("soma18"));
   
    

document.getElementById("valor").value = "R$"+ (totalCart).toFixed(2);

sessionStorage.setItem("preco",totalCart);

let card = document.getElementById("parcela");
card.addEventListener("click", (e)=>{
switch(card.value){
case"1":
document.getElementById("card").value="R$ "+(totalCart).toFixed(2);
break;
case"2":
document.getElementById("card").value="R$ "+(totalCart/2).toFixed(2)
break;
case"3":
document.getElementById("card").value="R$ "+(totalCart/3).toFixed(2)
break;
case"4":
document.getElementById("card").value="R$ "+(totalCart/4).toFixed(2)
break;

}
}
)

}
