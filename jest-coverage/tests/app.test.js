const db = require("../app");

describe("Should save the data", () => {
    it("should throw an error if the mode is undefined", () => {
        expect(() => db.upsert()).toThrow(Error);
    });

    it("should call the insert method if the mode is 'insert'", () => {
        jest.spyOn(db, "insert");
        db.upsert("insert");
        expect(db.insert.mock.calls.length).toBe(1);
    });
});
