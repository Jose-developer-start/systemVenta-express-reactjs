let URL = 'http://localhost:5000/api/productos/' 
export async function getProduct (){
    const res = await fetch(URL);
    return await res.json();
}

export async function getByIdProduct (id){
    const res = await fetch(URL + id);
    return await res.json();
}


export async function saveProduct (data){
    fetch(URL,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'Application/json'
        }
    })
    return true
}

export async function updateProduct (id,data){
    fetch(URL + id,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'Application/json'
        }
    })
    return true
}

export async function destroyProduct(id){
    fetch(URL + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return true
}