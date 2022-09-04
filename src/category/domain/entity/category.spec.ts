import Category from './category';

test('Deve criar uma categoria', () => {
    const category = new Category('Movie', 'My Videos', true, new Date('2022-09-03T20:34:09.323Z'));
    expect(category.name).toBe('Movie');
    expect(category.description).toBe('My Videos');
    expect(category.is_active).toBeTruthy();
    expect(category.created_at.toISOString()).toBe('2022-09-03T20:34:09.323Z');
});

test('Deve criar uma categoria passando apenas o nome', () => {
    const category = new Category('Movie');
    expect(category.name).toBe('Movie');
    expect(category.description).toBe('');
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBeInstanceOf(Date);
});

test('Deve criar uma categoria inativa', () => {
    const category = new Category('Movie', 'My Videos', false, new Date('2022-09-03T20:34:09.323Z'));
    expect(category.name).toBe('Movie');
    expect(category.description).toBe('My Videos');
    expect(category.is_active).toBeFalsy();
    expect(category.created_at.toISOString()).toBe('2022-09-03T20:34:09.323Z');
});

