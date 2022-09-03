import Category from '../../../src/category/domain/entity/category';

test('Deve criar uma categoria', () => {
    const category = new Category('Movie');
    expect(category.name).toBe('Movie');
});