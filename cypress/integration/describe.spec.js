it("External test...", () => {

})

describe("Group of tests", () => {
    it("An internal test of this group", () => {
    });

    describe.skip("Internal group of tests", () => {
        it("An internal test of this group", () => {
        });
    })
})
