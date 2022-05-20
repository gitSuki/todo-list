export default class Project {
    constructor(title, description, status, taskList){
        this.title = title
        this.description = description
        this.status = status
        this.taskList = taskList
    }

    changeTitle(title){
        this.title = title
        return title
    }

    changeDescription(description){
        this.description = description
        return description
    }

    toggleComplete(){
        return (this.status = "incomplete") ? this.status = "complete" : this.status = "incomplete"
    }

    addTask(task){
        taskList.push(task)
        return task
    }
}