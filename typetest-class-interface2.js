// @ts-check

/** @implements {import("./types").Test1} */
class TypeInterface2 {

    /**
     * @param {string} name: string
     * @param {number} age: number
     */
    constructor(name, age) {
        this.name = name
        this.age = age
        /** 
         this.age = name  // error
         */
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @returns string
     */
    getName() {
        return this.name
    }

    /**
       * @method
       * @public
       * @param {number} para1
       * @param {number} para2
       * @returns number
       */
    add(para1, para2) {
        /**
        return '' // no error !!!
         */
        return para1 + para2
    }

}

let testInterface2 = new TypeInterface2('',4)

/** @type {number} */
let result2

result2 = testInterface.add(2,5)


/**
testInterface.add(2,'')  // error
result = 'test'          // error
 */