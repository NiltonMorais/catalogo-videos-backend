import Category from './category';
import Id from './id';

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

test('Deve criar uma categoria inativa', () => {
    const category = new Category('Movie', 'My Videos', false, new Date('2022-09-03T20:34:09.323Z'));
    expect(category.id.value).toHaveLength(36);
    expect(category.name).toBe('Movie');
    expect(category.description).toBe('My Videos');
    expect(category.is_active).toBeFalsy();
    expect(category.created_at.toISOString()).toBe('2022-09-03T20:34:09.323Z');
});

