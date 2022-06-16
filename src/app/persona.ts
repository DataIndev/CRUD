export class Persona {

    nombre!:string
    apellido!:string
    img!:string
    id!:number

    constructor(id:number,nombre:string,apellido:string,img:string){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.img = img
        
    }

}
