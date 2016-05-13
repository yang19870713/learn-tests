const expect = chai.expect;

describe('test es6 class', () => {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.isHuman = true;
            this.obj = {
                a:1
            };
        }
        getAge() {
            return this.age;
        }
        sayHi() {
            var hi = 'I am ' + this.name;
            console.log(hi);
            return hi;
        }
    }
    class Warrior extends Person{
        constructor(name, age, weapon) {
            super(name, age);
            this.weapon = weapon;
        }
        sayHi() {
            var hi = 'I am ' + this.name + ' with a ' + this.weapon;
            cosole.log(hi);
            return hi;
        }
    }
    var p1 = new Person('PersonA', 20);
    var w1 = new Warrior('WarroirA', 30, 'gun');
    var w2 = new Warrior('WarroirB', 30, 'knife');


    it('should still use the prototype chain ', () => {
        expect(p1.constructor).to.equal(Person);
        expect(Person.prototype).to.equal(p1.__proto__);

        expect(w1.constructor).to.equal(Warrior);
        expect(Warrior.prototype.prototype).to.equal(Person.prootype);

        expect(w1.getAge).to.equal(p1.getAge);
        expect(Warrior.prototype.getAge).to.equal(Person.prototype.getAge);

        expect(w1.sayHi).to.not.equal(p1.sayHi);
        expect(Warrior.prototype.sayHi).to.not.equal(Person.prototype.sayHi);

        expect(w1.isHuman).to.be.true;
        expect(w1.obj).to.not.equal(p1.obj);
    })
})
