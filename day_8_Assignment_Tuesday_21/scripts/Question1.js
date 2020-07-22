console.log("Question1")
console.log("color iterates in 5 seconds");
var colorarr=['blue','red','yellow','green'];
let ul=document.getElementById('list');
colorarr.forEach(ele => {
   
    ul.innerHTML +=`<li>${ele}</li>`;
    
    
});

let i=0;
    function color(){
        if(i<4){
        setTimeout(()=>{
            document.body.style.backgroundColor=`${colorarr[i]}`
            i++;
            color();
        },5000)
    }
    }
color();
