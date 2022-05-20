import Task from './task';

describe(`Task class object`, () => {
    const testTask = new Task("Task Name", "Task I plan to do", "incomplete", "urgent", "important")
    
    // testing constructor variables
    test(`Title should be "Task Name"`, () => {
        expect(testTask.title).toMatch("Task Name")
    })

    test(`Description should be "Task I plan to do"`, () => {
        expect(testTask.title).toMatch("Task Name")
    })

    test(`Status should be "incomplete"`, () => {
        expect(testTask.status).toMatch("incomplete")
    })

    test(`Priority should be "urgent"`, () => {
        expect(testTask.priority).toMatch("urgent")
    })

    test(`Importance should be "important"`, () => {
        expect(testTask.importance).toMatch("important")
    })

    // testing methods
    test(`Title should be changes to "Testing"`, () => {
        expect(testTask.changeTitle("Testing")).toMatch("Testing")
    })

    test(`Description should be changes to "Testing"`, () => {
        expect(testTask.changeDescription("Testing")).toMatch("Testing")
    })

    test(`Status should be "complete"`, () => {
        expect(testTask.toggleComplete()).toMatch("complete")
    })

    test(`Priority should be changed to "not urgent"`, () => {
        expect(testTask.togglePriority()).toMatch("not urgent")
    })

    test(`Importance should be changed to "not important"`, () => {
        expect(testTask.toggleImportance()).toMatch("not important")
    })
})