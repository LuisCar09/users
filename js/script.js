const ulContainer = document.getElementById('listaUsuarios')
const API ='https://jsonplaceholder.typicode.com/users'
let users = ''
const getData = () => {
    
    fetch(API).then((response) => {
        if (!response.ok) {
            throw new Error('Error fetching data')
        }else{
            
            return response.json()
        }
    }).then((data) =>{
        
        let show = data.map((user) => {
            
             return (`
             <li class="item-list">
                 <article>
                     <div>
                         <p><span>Nombre: </span>${user.name}</p>
                         <p><span>Edad: </span>${randomAge()}</p>
                         <p><span>Username: </span>${user.username}</p>
                         <p><span>Tel&eacute;fono: </span>${user.phone}</p>
                         <p><span>Email: </span>${user.email}</p>
                     </div>
                     <img src="./assets/img/${user.id}.jpeg" alt="profile-picture">
                 </article>
                 <div class="footer">
                     <p><span>Compa&ntilde;ia: </span>${user.company.name}</p>
                     <p><span>Direcci&oacute;n: </span>${user.address.street},${user.address.suite},${user.address.city}</p>
                 </div>
             </li>
            `)
        }).join('')
        
        ulContainer.innerHTML = show
        
    }).catch((error) => {
        console.log(error.message)
    })
    
}

const randomAge = () => {
    const minAge = 18;
    const maxAge = 99
    return Math.floor(Math.random() * ((maxAge - minAge) + 1) +  minAge)
}

getData()

