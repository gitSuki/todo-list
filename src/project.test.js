import Project from './project';
import Task from './task';

describe(`Project class object`, () => {
    const firstTask = new Task("First Task", "Task I plan to do first", "incomplete", "urgent", "important")
    const secondTask = new Task("Second Task", "Task I plan to do second", "incomplete", "urgent", "not important")
    const thirdTask = new Task("Third Task", "Task I plan to do third", "incomplete", "not urgent", "important")
    const fourthTask = new Task("Fourth Task", "Task I plan to do fourth", "incomplete", "not urgent", "important")
    
    const testProject = new Project("Project Name", "Project I plan to complete", "incomplete", [firstTask, secondTask, thirdTask])

    // testing constructor variables
    test(`Title should be "Project Name"`, () => {
        expect(testProject.title).toMatch("Project Name")
    })
})