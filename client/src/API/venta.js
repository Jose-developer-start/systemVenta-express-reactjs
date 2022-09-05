let URL = 'http://localhost:5000/api/ventas/' 
export async function getVentas (){
    const res = await fetch(URL);
    return await res.json();
}

export async function getByIdVentas (id){
    const res = await fetch(URL + id);
    return await res.json();
}


export async function saveVenta (data){
    fetch(URL,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'Application/json'
        }
    })
    return true
}

export async function updateVenta (id,data){
    fetch(URL + id,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'Application/json'
        }
    })
    return true
}

export async function destroyVenta(id){
    fetch(URL + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return true
}