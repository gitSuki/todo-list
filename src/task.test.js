import Task from './task';

describe(`Task class object`, () => {
    const testTask = new Task("Task Name", "Task I plan to do", "Urgent")
    
    test(`Title should be "Task Name"`, () => {
        expect(testTask.title).toMatch("Task Name")
    })

    test(`Description should be "Task I plan to do"`, () => {
        expect(testTask.title).toMatch("Task Name")
    })

    test(`Description should be "Urgent"`, () => {
        expect(testTask.priority).toMatch("Urgent")
    })

    test(`Title should be changes to "Testing"`, () => {
        expect(testTask.changeTitle("Testing")).toMatch("Testing")
    })

    test(`Description should be changes to "Testing"`, () => {
        expect(testTask.changeDescription("Testing")).toMatch("Testing")
    })

    test(`Priority should be changes to "Low"`, () => {
        expect(testTask.changePriority("Low")).toMatch("Low")
    })
})