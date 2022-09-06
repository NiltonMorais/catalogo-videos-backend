import Category from './category';
import Id from '../value-object/id';

test('Deve criar uma categoria', () => {
    const category = new Category('Movie', 'My Videos', true, new Date('2022-09-03T20:34:09.323Z'));
    expect(category.id.value).toHaveLength(36);
    expect(category.name).toBe('Movie');
    expect(category.description).toBe('My Videos');
    expect(category.is_active).toBeTruthy();
    expect(category.created_at.toISOString()).toBe('2022-09-03T20:34:09.323Z');
});

test('Deve criar uma categoria passando apenas o nome', () => {
    const category = new Category('Movie');
    expect(category.id.value).toHaveLength(36);
    expect(category.name).toBe('Movie');
    expect(category.description).toBe('');
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBeInstanceOf(Date);
});

test('Deve criar uma categoria passando o id', () => {
    const category = new Category('Movie', 'My Videos', false, new Date(), new Id('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5'));
    expect(category.id.value).toBe('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5');
});

test('Deve retornar excessão ao criar categoria com id inválido', () => {
    expect(() => new Category('Movie', 'My Videos', false, new Date(), new Id('fake id'))).toThrow("Invalid Id for value 'fake id'");
});

test('Deve retornar excessão ao criar categoria com nome vazio', () => {
    expect(() => new Category('')).toThrow('Name is required');
});

test('Deve retornar excessão ao criar categoria com nome maior que 120 caracteres', () => {
    expect(() => new Category('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))
    .toThrow('Name must be less or equal than 120 characters');
});

test('Deve criar uma categoria inativa', () => {
    const category = new Category('Movie', 'My Videos', false, new Date('2022-09-03T20:34:09.323Z'));
    expect(category.id.value).toHaveLength(36);
    expect(category.name).toBe('Movie');
    expect(category.description).toBe('My Videos');
    expect(category.is_active).toBeFalsy();
    expect(category.created_at.toISOString()).toBe('2022-09-03T20:34:09.323Z');
});

test('Deve atualizar uma categoria', () => {
    const category = new Category('Movie', 'My Videos');
    category.update('Movie2', 'My Description')
    expect(category.name).toBe('Movie2');
    expect(category.description).toBe('My Description');
});

test('Deve ativar uma categoria', () => {
    const category = new Category('Movie', 'My Videos', false);
    expect(category.is_active).toBeFalsy();
    category.activate()
    expect(category.is_active).toBeTruthy();
});

test('Deve desativar uma categoria', () => {
    const category = new Category('Movie', 'My Videos', true);
    expect(category.is_active).toBeTruthy();
    category.desactivate()
    expect(category.is_active).toBeFalsy();
});