// function fetchData(){
//    fetch("https://reqres.in/api/users?page=2")
//    .then(response=>{
//        if(!response.ok ){
//          throw Error("Error")
//        } return response.json();
//          })
//     .then(data =>{
//     console.log(data.data)
//     // return <p>Test Raj</p>
//     return document.querySelector("#app").insertAdjacentHTML("afterbegin","<h1>hello </h1>");
//     //      })
//     })


//     then((data) => {
//         let authors = data;
  
//         authors.map(function(author) {
//           let li = document.createElement('li');
//           let name = document.createElement('h2');
//           let email = document.createElement('span');
//           name.innerHTML = `${author.name}`;
//           email.innerHTML = `${author.email}`;
          
//         li.appendChild(name);
//         li.appendChild(email);
//         list.appendChild(li); 
        
//     // const html = data.data.map(user =>{
//     //     return `
//     //    <div class = "user">
//     //    <p><img src = "${user.avatar}" alt ="${user.first_name}" /> </p>
//     //    <p>Name: ${user.first_name }</p>
//     //    <p>Name: ${user.email }</p>
//     //     </div>
//     //      `;
//     //     })
//     //     .join("");
       
//     //     document.querySelector("#app").insertAdjacentHTML("afterbegin","<h1>hello </h1>");
//     //      })
//     .catch (error =>{
//         console.log(error)
//          });

//    }   

// fetchData();

// function postData(){
//     fetch("https://reqres.in/api/users?page=2",{
//         method: 'POST',
//         headers:{
//             'Content-Type':'application/json'
//          },
//          body :JSON.stringify({
//         "name" : "morpheus",
//         "job" :"leader"
//     })
//     })
//     .then(response=>{
//         if(!response.ok ){
//             throw Error("Error")
//         }
//       return response.json();
//           })
//     .then(data =>{
//      console.log(data)
//      })
//      .catch (error =>{
//          console.log(error)
//           });
//      }   
//   fetchData();
let handler = {
    get: function(target, name) {
      return name in target ? target[name] : 42
    }
  }
  
  let p = new Proxy({}, handler)
  p.a = 1
  console.log(p.a, p.b)

