const expect = chai.expect;
describe('Generator', () => {
    var x, y, z;
    function *foo(){
        x = 10;
        y = 20;
        yield;
        z = x + y;
    }
    var iterator = foo();
    it('should return an iterator when called', () => {
        expect(!!iterator.next).to.be.true;
    })
    it('should stop at yield point', () => {
        expect(x).to.equal(undefined);
        expect(y).to.equal(undefined);
        expect(z).to.equal(undefined);
        iterator.next();
        expect(x).to.equal(10);
        expect(y).to.equal(20);
        expect(z).to.equal(undefined);
        iterator.next();
        expect(x).to.equal(10);
        expect(y).to.equal(20);
        expect(z).to.equal(30);
    })
    it('', function(){
        function *foo() {
            try {
                yield 1;
            }
            catch (err) {
                debugger
                console.log( err );
            }

            yield 2;
            console.log("test");
            throw "Hello!";
        }

        var it = foo();

        it.next();                // { value: 1, done: false }

        try {
            debugger
            it.throw( "Hi!" );  // Hi!
            debugger                    // { value: 2, done: false }
            it.next();
            debugger
            console.log( "never gets here" );
        }
        catch (err) {
            debugger
            console.log( err ); // Hello!
        }

    })
})
