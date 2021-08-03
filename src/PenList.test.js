import {render} from '@testing-library/react';

import PenList from './PenList';

describe("PenList", () => {
    it("loading", () => {
       const props = {
           loading: true
       };

       const {container} = render(<PenList {...props} />);
       const content = container.querySelector("p");

       expect(content.innerHTML).toContain("Loading");
    });

    it("error", () => {
        const props = {
            error: true
        };
        const {container} = render(<PenList {...props} />);
        const content = container.querySelector("p");
        expect(content.innerHTML).toContain("Error");
    });

    it("render pens", () => {
        const props = {
            pens: [
                { "displayName": "Montblanc Starwalker Urban Spirit", "id": 1 },
                { "displayName": "Platinum President", "id": 2 }
            ]
        };
        const {container} = render(<PenList {...props} />);
        const penDisplayNames = [...container.querySelectorAll("h2")].map(penHeading => penHeading.innerHTML);
        expect(penDisplayNames).toEqual(["Montblanc Starwalker Urban Spirit", "Platinum President"]);
    });
});