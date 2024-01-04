const App = (() => {
    const insert = () => {
        console.log("Inserting a new record into the database");
    };
    const update = () => {
        console.info("Updating the record in the database");
    };
    const upsert = (mode) => {
        if (mode === "insert") {
            App.insert();
        }
        else if (mode === "update") {
            App.update();
        }
        else {
            throw new Error("Invalid Mode");
        }
    };

    const obj = {
        insert,
        update,
        upsert,
    };
    return obj;
})();

module.exports = App;
