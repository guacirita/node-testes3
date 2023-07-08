const Item = require("../item");

describe('teste dos itens', () => {
  it("Deve ter 3 campos: nome, valor, quantidade", () => {
    const item = new Item("Beterraba", 2.5, 10);

    expect(item.nome).toBe("Beterraba");
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(10);
  });

  it("Deve ter o preço calculado de acordo com a quantidade", () => {
    const item = new Item("batata", 0.1, 3);

    expect(item.pegaValorTotalItem()).toBeCloseTo(0.3); // toBeCloseTo por aproximação
  })
});
