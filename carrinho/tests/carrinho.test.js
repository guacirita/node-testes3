const Carrinho = require("../carrinho");
const Item = require("../item.js");

// verifica se carrinho inicia vazio
describe("teste dos carrinhos", () => {
it("Deve iniciar vazio", () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
});

    it("Deve ter itens", () => {
        const item = new Item("banana", 2, 5);
        const item2 = new Item("laranja", 0.5, 1);

        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(typeof carrinho).toBe("object");
        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);

        console.log(carrinho.itens);

        expect(carrinho.itens).toContain(item); // se contem o item
        expect(carrinho.itens).toContain(item2);
    })
    
    it("Deve ter a propriedade “total” na inicialização", () => {
        const carrinho = new Carrinho();

        expect(carrinho).toHaveProperty("total"); // para ter a propriedade
    })

    it("Deve lançar erro ao finalizar compra com carrinho vazio", () => {
        function englobaErroCarrinho() {
            const carrinho = new Carrinho();
            carrinho.finalizaCompra();
        }
        expect(englobaErroCarrinho).toThrowError("Carrinho de compras vazio");
       
    })

    it("Deve adicionar o frete ", () => {
        function englobaErroCarrinho() {
            const carrinho = new Carrinho();
            carrinho.adicionaFrete(10);
        }
        expect(carrinho.frete).toBe(10);
       
    })
    it("deve finalizar as compras", () => {
        
            const item = new Item("banana", 2, 5);
            const item2 = new Item("mel", 1, 5);

            const carrinho = new Carrinho();
            carrinho.adiciona(item);
            carrinho.adiciona(item2)
            carrinho.adicionaFrete(10);

            expect(carrinho.finalizaCompra()).toStrictEqual({
                subtotal: 15,
                frete: 10,
                total: 25
        });
        
    })
});