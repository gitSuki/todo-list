import Project from './project';

export default class Task extends Project {
    constructor(title, description, status, priority, importance){
        super(title, description, status)
        this.priority = priority
        this.importance = importance
    }

    toggleComplete(){
        // overriding superclass method
        return (this.status = "incomplete") ? this.status = "complete" : this.status = "incomplete"
    }

    togglePriority(){
        // should only ever be 'urgent' or 'not urgent'
        return (this.prioirty = "urgent") ? this.status = "not urgent" : this.status = "urgent"
    }

    toggleImportance(){
        // should only ever be 'important' or 'not important'
        return (this.importance = "important") ? this.importance = "not important" : this.importance = "important"
    }
}