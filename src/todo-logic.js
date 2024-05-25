class ToDo {
    constructor (title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    displayTitle(){
        return this.title;
    }
    displayDescription(){
        return this.description;
    }
    displayDueDate(){
        return this.dueDate;
    }
    displayPriority(){
        return this.priority;
    }
}

export {ToDo}