import Id from "./id"

test("Deve criar um id", function(){
    const id = new Id();
    expect(id.value).toHaveLength(36);
});

test("Deve hidratar um id", function(){
    const id = new Id('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5');
    expect(id.value).toBe('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5');
});

test('Deve retornar excessão ao criar id inválido', () => {
    expect(() => new Id('123')).toThrow(new Error("Invalid Id for value '123'"));
});