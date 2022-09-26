1. created a package.json -- npm init -y
2. changed the author name to Vishavjit Parihar in package.json
3. installed jest using -- npm i -D jest. Thus jest is a part of our node_module
4. to run the jest code - i made changes to the package.json file. I changed the script function in that file
5. inside the script function I wrote `"test : "jest"`
6. in order to run the script i typed -- "npm test" in the terminal
7. created jest.test.js and wrote code inside that file
8. after running different test - changed the name from jest.test.js to jest.js
9. moved jest.js to folder named __tests__
10. I will re name the jest.js back to jest.test.js again
11. I will run npm test -- it will run both jest.test.js and jest.js inside the __test__ folder
12. I wrote a class called Student in student.js, and i also wrote student.spec.js so that we can test the student.js file.
13. When I was trying to run student.spec.js -- it gave me an error, beacause inside student.spec.js i defiened a `new Student`. I was trying to make a new object out of a class. But student.spec.js deosnt know what Student class is. 
14. To avoid that problem we need to export student.js and do the importing of student.js inside the student.spec.js
