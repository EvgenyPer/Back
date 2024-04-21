// перенвдит массив записей в массив их id
export function getIdArray(data: {id:number}[]): number[] {

    return data.map(record=>{return record.id})
    
}
// перенвдит массив записей в массив их id
export function getIdArrayAutor(data: {id_author:number}[]): number[] {

    return data.map(record=>{return record.id_author})
    
}
// перенвдит массив записей в массив их id
export function getIdArrayCategory(data: {id_category:number}[]): number[] {

    return data.map(record=>{return record.id_category})
    
}