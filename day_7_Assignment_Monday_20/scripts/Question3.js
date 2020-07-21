async function todo(){
    return new Promise((resolve,reject)=>{
        setTimeout(async()=>{
            // getTodo();
            let data= await fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json());
            let error=false;
            if (!error) {
                resolve(data);
            }
            else{
                reject("error occured");
            }
        },1000)
    })
}
 function getDetails(data) {
     console.log(data);
}
todo().then(data=>getDetails(data)).catch(error=>console.log(error))