import Task from './task';

describe(`Task class object`, () => {
    const testTask = new Task("Task Name", "Task I plan to do")
    
    test(`Title should be "Task Name"`, () => {
        expect(testTask.title).toMatch("Task Name")
    })

    test(`Description should be "Task I plan to do"`, () => {
        expect(testTask.title).toMatch("Task Name")
    })

    test(`Description should be changes to "Testing"`, () => {
        expect(testTask.changeTitle("Testing")).toMatch("Testing")
    })
})