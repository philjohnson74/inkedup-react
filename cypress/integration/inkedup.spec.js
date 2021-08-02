describe("InkedUp application", function() {
    it("Visits InkedUp", function () {
        cy.visit("http://localhost:3000/");
        cy.get('h2[data-test="heading"]').contains('InkedUp')
    })
})