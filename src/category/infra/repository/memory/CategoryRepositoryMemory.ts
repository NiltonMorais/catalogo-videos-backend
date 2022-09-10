import Category from "category/domain/entity/Category";
import CategoryRepository from "category/domain/repository/CategoryRepository";
import Id from "category/domain/value-object/Id";

export default class CategoryRepositoryMemory implements CategoryRepository {
    data: Category[] = [];

    async insert(category: Category): Promise<void> {
        this.data.push(category);
    }

    async update(category: Category): Promise<void> {
        await this.get(category.id);
        const indexFound = this.data.findIndex((i) => i.id === category.id);
        this.data[indexFound] = category;
    }

    async findById(id: string | Id): Promise<Category> {
        const _id = `${id}`;
        return this.get(_id);
    }

    async findAll(): Promise<Category[]> {
        return this.data;
    }

    async delete(id: string | Id): Promise<void> {
        const _id = `${id}`;
        await this.get(_id);
        const indexFound = this.data.findIndex((i) => i.id === id);
        this.data.splice(indexFound, 1);
    }

    private async get(id: string): Promise<Category> {
        const item = this.data.find((i) => i.id === id);
        if(!item){
            throw new Error(`Category not found for ID '${id}'`);
        }
        return item;
    }
}