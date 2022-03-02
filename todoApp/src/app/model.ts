export class Model {
    user;
    items;

    constructor() {
        this.user = "Huseyn";
        this.items =  [
                        new TodoItem("Spor" ,false),
                        new TodoItem("Kahvalti" ,false),
                        new TodoItem("Kitab Okumak" ,false),
                        new TodoItem("Sinema" ,false),
                     ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description,action) {
        this.description = description;
        this.action = action;
    }
}
// const m = new Model();