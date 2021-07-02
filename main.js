const result = document.getElementById('result')
const filter = document.getElementById('filter')
const list_items = []

filter.addEventListener('input', (e) => filter_data(e.target.value))

async function get_data(){
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    //clear the results
    result.innerHTML = ''

    results.forEach(user => {
        
        const li = document.createElement('li')

        list_items.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-list user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <h5>${user.location.city}, ${user.location.country}</h5>
                    <h5>Email: ${user.email}</h5>
                    <h5>Age:  ${user.dob.age}</h5>
                </div>
        `
        result.appendChild(li)
    })
}

get_data()

function filter_data(search_term){
    list_items.forEach(item => {
        if(item.innerText.toLowerCase().includes(search_term.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}