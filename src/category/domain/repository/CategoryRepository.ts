import Category from "../entity/Category";
import Id from "../value-object/Id";

export default interface CategoryRepository {
    insert(category: Category): Promise<void>;
    update(category: Category): Promise<void>;
    findById(id: string|Id): Promise<Category>;
    findAll(): Promise<Category[]>;
    delete(id: string|Id): Promise<void>;
}