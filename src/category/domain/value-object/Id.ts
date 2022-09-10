import { randomUUID } from "crypto";

export default class Id {
    readonly value: string;

    constructor(value?: string){
        this.value = value ?? randomUUID();
        this.validate();
    }

    private validate(): void {
        if(!this.value.match(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)){
            throw new Error(`Invalid Id for value '${this.value}'`);
        }
    }

    toString(): string {
        return this.value;
    }
}