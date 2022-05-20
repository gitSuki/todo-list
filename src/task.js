export default class Task {
    constructor(title, description, priority){
        this.title = title
        this.description = description
        this.priority = priority
    }

    changeTitle(title){
        this.title = title
        return title
    }

    changeDescription(description){
        this.description = description
        return description
    }

    changePriority(priority){
        this.priority = priority
        return priority
    }

}