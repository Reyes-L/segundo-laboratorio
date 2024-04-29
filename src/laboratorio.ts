/***
 * Debe corregir el codigo para que funcione
 * Debe tipar las donde se le pide y eliminar el tpo de dato any
 * Crear tipo para employe
 * Crear enum para positions y roles
 */

//! Crear tipo de employe
//! Crear enum para roles
//! Crear enum para position (cargo de trabajo)
const employes:any = [
    { id: 1, firstname: 'carlos', lastname: 'gimenez', age: 22, position: 'desarrollador de software full stack', roles: ['ADMIN_ROLE']},
    { id: 2, firstname: 'luis', lastname: 'perez', age: 25, position: 'analista de datos', roles: ['USER_ROLE']},
    { id: 3, firstname: 'carmen', lastname: 'rodriguez', age: 30, position: 'seguridad informática', roles: ['USER_ROLE']},
    { id: 4, firstname: 'andrea', lastname: 'sanchez', age: 27, position: 'ingeniero de redes', roles: ['USER_ROLE']},
    { id: 5, firstname: 'alberto', lastname: 'paez', age: 28, position: 'especialista en cloud computing', roles: ['USER_ROLE']},
];

//! Tipar promesa
export const promise:any = new Promise((resolve, reject)=>{
    if( employes.length ===0 ) return reject('employes not found');
    return resolve(employes);
});

//! Tipar funcion y retorno
export const createEmploye = ( employe:any ) => {
    try {
        const response = promise;
        const newEmploye = {id: response.length+1, ...employe}
        response.push(newEmploye);
        return newEmploye;
    } catch (error) {
        throw new Error(`${error}`)
    }
}

//! Tipar funcion y retorno
export const deleteEmploye = async( id:any ) => {
    try {
        const response = promise;
        return response.filter((employe:any) => employe.id !== id);
    } catch (error) {
        throw new Error(`${error}`)
    }
}

//! Tipar funcion y retorno
export const updateEmploye = async( id:any, newData:any ) => {
    try {
        const response = await promise;
        const index = response.findIndex((employe:any) => employe.id === id);
        if( index === -1 ) return 'Employe not found';
        response[index] = { ...response[index], ...newData };

        return response[index];
    } catch (error) {
        throw new Error(`${error}`)
    }
}

//! Tipar funcion y retorno
export const findOneEmploye = async( id:any ) => {
    try {
        const response = await promise;
        return response.find((employe:any) => employe.id === id);
    } catch (error) {
        throw new Error(`${error}`)
    }
}

//! Tipar funcion y retorno
export const findAllEmploye = async() => {
    try {
        const response = await promise;
        return response;
    } catch (error) {
        throw new Error(`${error}`)
    }
}
