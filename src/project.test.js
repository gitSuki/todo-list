import Project from './project';
import Task from './task';

describe(`Project class object`, () => {
    const firstTask = new Task("First Task", "Task I plan to do first", "complete", "urgent", "important")
    const secondTask = new Task("Second Task", "Task I plan to do second", "incomplete", "urgent", "not important")
    const thirdTask = new Task("Third Task", "Task I plan to do third", "incomplete", "not urgent", "important")
    const fourthTask = new Task("Fourth Task", "Task I plan to do fourth", "incomplete", "not urgent", "important")
    
    const testProject = new Project("Project Name", "Project I plan to complete", "incomplete", [firstTask, secondTask, thirdTask])

    // testing constructor
    test(`Title should be "Project Name"`, () => {
        expect(testProject.title).toMatch("Project Name")
    })

    test(`First task in tasklist should be named "First Task"`, () => {
        expect(testProject.taskList[0].title).toMatch("First Task")
    })

    // testing methods
    test(`Status should be "complete"`, () => {
        expect(testProject.toggleComplete()).toMatch("complete")
    })

    describe('Running toggleComplete on a project should change the status of every element to the new status of the project', () => {
        testProject.toggleComplete()
        test(`Previously incomplete tasks should now be "complete"`, () => {
            expect(testProject.taskList[2].status).toMatch("complete")
        })

        test(`Previously complete tasks should stay "complete"`, () => {
            expect(testProject.taskList[0].status).toMatch("complete")
        })
    })
})