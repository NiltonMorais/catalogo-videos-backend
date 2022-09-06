import Id from "../value-object/id";
export default class Category {
    
    constructor(private _name: string, 
        private _description: string = '', 
        private _is_active: boolean = true, 
        readonly created_at: Date = new Date(), 
        readonly id: Id = new Id()){
            this.validate();
    }

    update(name: string, description: string): void {
        this._name = name;
        this._description = description;
        this.validate();
    }

    activate(): void{
        this._is_active = true;
    }

    desactivate(): void{
        this._is_active = false;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }
    
    get is_active(): boolean {
        return this._is_active;
    }

    private validate(): void {
        if(this.name === null || this.name === undefined || this.name === ''){
            throw new Error('Name is required');
        }
        if(this.name.length > 120){
            throw new Error('Name must be less or equal than 120 characters');
        }
    }
}