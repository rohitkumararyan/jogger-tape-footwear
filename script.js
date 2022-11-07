document.getElementById("submit").addEventListener("click" ,function(e){
    e.preventDefault();

    var obj={
        Name: document.getElementById("name").value,
        DOB: document.getElementById("dob").value ,
        Number: document.getElementById("number").value ,
        Email: document.getElementById("email").value ,
        password:  document.getElementById("password").value
       }
      // localStorage.getItem("obj",obj)
       console.log(obj)

      fetch("content/readme.txt").then((respose)=>{
        return respose.text();
    }).then((data)=>{
       // console.log(data);
       document.write(data);
    })
 }) 