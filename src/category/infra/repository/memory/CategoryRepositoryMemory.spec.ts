import Id from "../../../domain/value-object/Id";
import Category from "../../../domain/entity/Category";
import CategoryRepositoryMemory from "./CategoryRepositoryMemory";

test("Deve inserir uma categoria", async () => {
    const repository = new CategoryRepositoryMemory();
    expect(repository.data).toHaveLength(0);
    const category = new Category('My Category', 'Description');
    await repository.insert(category);
    expect(repository.data).toHaveLength(1);
    expect(repository.data[0].name).toBe('My Category');
    expect(repository.data[0].description).toBe('Description');
});

test("Deve listar todas as categorias", async () => {
    const repository = new CategoryRepositoryMemory();
    expect(repository.data).toHaveLength(0);
    const category1 = new Category('My Category1', 'Description1');
    const category2 = new Category('My Category2', 'Description2');
    await repository.insert(category1);
    await repository.insert(category2);

    const data: Category[] = await repository.findAll();
    expect(data).toHaveLength(2);
    expect(data[0].name).toBe('My Category1');
    expect(data[0].description).toBe('Description1');
    expect(data[1].name).toBe('My Category2');
    expect(data[1].description).toBe('Description2');
});

test("Deve buscar uma categoria pelo id string", async () => {
    const repository = new CategoryRepositoryMemory();
    expect(repository.data).toHaveLength(0);
    const category = new Category('Movie', 'My Videos', false, new Date(), new Id('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5'));
    await repository.insert(category);
    const categoryFounded: Category = await repository.findById('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5');
    expect(repository.data).toHaveLength(1);
    expect(repository.data[0].name).toBe(categoryFounded.name);
    expect(repository.data[0].description).toBe(categoryFounded.description);
});

test("Deve buscar uma categoria pelo objeto id", async () => {
    const repository = new CategoryRepositoryMemory();
    expect(repository.data).toHaveLength(0);
    const category = new Category('Movie', 'My Videos', false, new Date(), new Id('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5'));
    await repository.insert(category);
    const categoryFounded: Category = await repository.findById(new Id('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5'));
    expect(repository.data).toHaveLength(1);
    expect(repository.data[0].name).toBe(categoryFounded.name);
    expect(repository.data[0].description).toBe(categoryFounded.description);
});

test("Deve lançar uma excessão ao buscar uma categoria que não existe", async () => {
    const repository = new CategoryRepositoryMemory();
    expect(repository.data).toHaveLength(0);
    expect(() => repository.findById('fake id')).rejects.toThrowError("Category not found for ID 'fake id'");
});

test("Deve atualizar uma categoria", async () => {
    const repository = new CategoryRepositoryMemory();
    expect(repository.data).toHaveLength(0);
    const category = new Category('Movie', 'My Videos', false, new Date(), new Id('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5'));
    await repository.insert(category);
    category.update('name updated', 'description updated');
    await repository.update(category);
    const categoryUpdated: Category = await repository.findById(category.id);
    expect(categoryUpdated.name).toBe('name updated');
    expect(categoryUpdated.description).toBe('description updated');
});

test("Deve lançar uma excessão ao atualizar uma categoria que não existe", async () => {
    const repository = new CategoryRepositoryMemory();
    expect(repository.data).toHaveLength(0);
    const category = new Category('Movie', 'My Videos', false, new Date(), new Id('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5'));
    expect(() => repository.update(category)).rejects.toThrowError("Category not found for ID '723b8dcd-e9f2-4c33-8758-8bdcb8a862c5'");
});

test("Deve excluir uma categoria", async () => {
    const repository = new CategoryRepositoryMemory();
    expect(repository.data).toHaveLength(0);
    const category = new Category('Movie', 'My Videos', false, new Date(), new Id('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5'));
    await repository.insert(category);
    expect(repository.data).toHaveLength(1);
    expect(repository.data[0].id).toBe('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5');
    await repository.delete('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5');
    expect(repository.data).toHaveLength(0);
});

test("Deve lançar excessão ao excluir categoria que não existe", async () => {
    const repository = new CategoryRepositoryMemory();
    expect(() => repository.delete('fake id')).rejects.toThrowError("Category not found for ID 'fake id'");
});