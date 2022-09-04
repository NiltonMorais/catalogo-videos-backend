import Id from "./id"

test("Deve criar um id", function(){
    const id = new Id();
    expect(id.value).toHaveLength(36);
});

test("Deve hidratar um id", function(){
    const validateSpy = jest.spyOn(Id.prototype as any, 'validate');
    const id = new Id('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5');
    expect(id.value).toBe('723b8dcd-e9f2-4c33-8758-8bdcb8a862c5');
    expect(validateSpy).toHaveBeenCalled();
});

test('Deve retornar excessão ao criar id inválido', () => {
    const validateSpy = jest.spyOn(Id.prototype as any, 'validate');
    expect(() => new Id('fake id')).toThrow(new Error("Invalid Id for value 'fake id'"));
    expect(validateSpy).toHaveBeenCalled();
});