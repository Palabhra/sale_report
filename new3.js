let num = [];

const grab = document.getElementById("btn1");
console.log(grab);
grab.addEventListener("click",()=>{
     let productName= document.getElementById("pdt_name").value;
    let price = document.getElementById("pdt_price").value;
    let qty = document.getElementById("pdt_quan").value;
    let pdt_des={productName,price,qty};

    num.push(pdt_des);
 
    let var1 = 0;
    let t_data = document.getElementById("data");
    t_data.innerHTML = '';
    for (let i = 0; i < num.length; i++) {
      
        let str_gen = '<tr><th scope="row">' + (i + 1) + '</th><td>' + num[i].productName + '</td><td>' + num[i].price + '</td><td>' + num[i].qty +'</td><td><button type="button" class="btn btn-danger">Delete</button></td></tr >';
        t_data.innerHTML+= str_gen;
        console.log(str_gen);
        let productName = document.getElementById("pdt_name").value='';
        let price = document.getElementById("pdt_price").value='';
        let qty = document.getElementById("pdt_quan").value='';
        var1 = num[i];
        console.log(var1+'--'+i);
    }
    
 
});