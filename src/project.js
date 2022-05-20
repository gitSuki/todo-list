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
        let newStatus = (this.status = "incomplete") ? "complete" : "incomplete"
        
        // sets every task within the array to be either complete or incomplete based on the status the project will turn into
        this.taskList.map(task => task.status = newStatus)

        return this.status = newStatus
    }

    addTask(task){
        taskList.push(task)
        return task
    }
}