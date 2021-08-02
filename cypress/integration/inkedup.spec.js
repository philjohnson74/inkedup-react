describe("InkedUp application", function() {
    it("Visits InkedUp", function () {
        cy.visit("http://localhost:3000/");
        cy.get("h2[data-test='heading']").contains('InkedUp')
    })

    it("Shows a pen list", () => {
        cy.visit("http://localhost:3000/");
        cy.get("div[data-test='pen-list']").should("exist");
        cy.get("div.pen-item").should((pens) => {
            expect(pens).to.have.length(2);

            const displayNames = [...pens].map(x => x.querySelector("h2").innerHTML);
            expect(displayNames).to.deep.equal(["Montblanc Starwalker Urban Spirit", "Platinum President"]);
        });
    })
})