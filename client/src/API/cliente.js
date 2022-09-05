let URL = 'http://localhost:5000/api/clientes/' 
export async function getClient (){
    const res = await fetch(URL);
    return await res.json();
}

export async function getByIdClient (id){
    const res = await fetch(URL + id);
    return await res.json();
}


export async function saveClient (data){
    fetch(URL,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'Application/json'
        }
    })
    return true
}

export async function updateClient (id,data){
    fetch(URL + id,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'Application/json'
        }
    })
    return true
}

export async function destroyClient(id){
    fetch(URL + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return true
}