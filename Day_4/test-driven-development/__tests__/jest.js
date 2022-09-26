//This entire file is a test suite
//test suiites are typically geared towards one class or function



//compartmentalize your test based off some category using describe()
describe('Addition', () => {

    //jest will know what test is at runtime
    test('Hello Test', () => {
        //expect takes a value and compares it with another
        // ===
        expect(2+2).toBe(4); //expect 2+2 to be 4
    });

    //here is another method 
    it('should correctly evaluate 2 + 3 = 5', () => {
        expect(2+3).toBe(5);
    });

});



describe('Subtraction', () => {
    test('10-2 is 8', () => {
        expect(10-2).toBe(8);
    });
});



