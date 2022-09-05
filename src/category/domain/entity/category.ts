import Id from "../value-object/id";
export default class Category {
    
    constructor(readonly name: string, 
        readonly description: string = '', 
        readonly is_active: boolean = true, 
        readonly created_at: Date = new Date(), 
        readonly id: Id = new Id()){
    }
}