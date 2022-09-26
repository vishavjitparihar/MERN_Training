/**
 * Student should have a name
 * Student should have a grade 
 * Student should have a major
 * When creating student, if no major is specified, they are said to be 'undecided' as a major
 * Student should have an array of classes they are taking
 * Student should have function to calculate their letter grade
 * 
 * I want the ability to sort students by grade and major and name
 * 
 * I also want a fuction, so that student can't withdraw from a class
 */


//importing another file
//pull out the student class from the file student.js
// ./ indicates to look in the current directory
const Student = require('./student.js')


describe('Student Initialization', () => {
    it('Should default major as Undecided', () => {

        const newStudent = new Student({classes: []});
       expect(newStudent.major).toBe('Undecided');
    });

    // if they pass something that's not a array for classes, throw an error

    
    it('Should prevent non-arrays being passed for classes', () => {

        expect(() => new Student({classes: null})).toThrowError(Error);
    })
});



describe('Withdrawl from Classes', () => {

    it('Should allow for the withdrawl of classes', () => {
        const student = new Student({classes: ['Math', 'History', 'Music']});
        student.withdrawFromClass('Math');
        expect(student.classes).not.toContain('Math');
    });

    it('Remove all duplicates when withdrawing a class', () => {
        //if math was in there twice, both would be removed

        const student = new Student({classes: ['Math', 'History', 'Music', 'Math']});
        student.withdrawFromClass('Math');
        expect(student.classes).not.toContain('Math');
    })
});




describe('Sorting Students', () => {

    const students = [ 
        new Student({name: 'Jack', grade: 73, major: 'Math'}), 
        new Student({name: 'Zack', grade: 92, major: 'Science'}), 
        new Student({name: 'Mack', grade: 88, major: 'Algebra'})
    ];

    it('Sorting by grade',() => {

        const [top, middle, last] = students.sort((student1, student2) => {
            return student2.grade - student1.grade
        });

        expect(top.name).toBe('Zack');
    });

    it('Sorting by name',() => {

        const [top, middle, last] = students.sort((student1, student2) => {
            return student1.name < student2.name ? -1 : student1.name > student2.name ? 1 : 0;
        });

        expect(top.name).toBe('Jack');

    });

    it('Sorting by major',() => {
        const [top, middle, last] = students.sort((student1, student2) => {
            return student1.major < student2.major ? -1 : student1.major > student2.major ? 1 : 0;
        });

        expect(top.name).toBe('Mack');
    });
});