import axios from "axios";

describe("InkedUp application", function() {
    before(() => {
        return axios
            .delete("http://localhost:8080/pens?_cleanup=true")
            .catch((err) => err);
    });

    beforeEach(() => {
        const pens = [
            { "displayName": "Montblanc Starwalker Urban Spirit", "id": 1 },
            { "displayName": "Platinum President", "id": 2 },
            { "displayName": "Pelikan Souveran M1000", "id": 3 }
        ];

        return pens.map(item =>
            axios.post("http://localhost:8080/pens", item,
                { headers: { "Content-Type": "application/json" } }
            )
        );
    });

    afterEach(() => {
        return axios
            .delete("http://localhost:8080/pens?_cleanup=true")
            .catch((err) => err);
    });

    it("Visits InkedUp", function () {
        cy.visit("http://localhost:3000/");
        cy.get("h2[data-test='heading']").contains('InkedUp')
    });

    it("Shows a pen list", () => {
        cy.visit("http://localhost:3000/");
        cy.get("div[data-test='pen-list']").should("exist");
        cy.get("div.pen-item").should((pens) => {
            expect(pens).to.have.length(3);

            const displayNames = [...pens].map(x => x.querySelector("h2").innerHTML);
            expect(displayNames).to.deep.equal(["Montblanc Starwalker Urban Spirit", "Platinum President", "Pelikan Souveran M1000"]);
        });
    });
});