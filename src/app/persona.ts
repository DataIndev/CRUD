export class Persona {

    nombre!:string
    apellido!:string
    edad!:number
    id!:number

    constructor(id:number, nombre:string,apellido:string,edad:number){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.id = id
        
    }

    

}
