export default class Task {
    constructor(title, description){
        this.title = title
        this.description = description
    }

    changeTitle(title){
        this.title = title

        return title
    }

    changeDescription(description){
        this.description = description

        return description
    }
}