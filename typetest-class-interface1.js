// @ts-check

/** 
 * @typedef {import("./types").Test1} TestT1  
 * */

/** @implements {TestT1} */
class TypeInterface1 {

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
       * @returns {number}
       */
    add(para1, para2) {
        /**
        return '' // error
         */
        return para1 + para2
    }

}

let testInterface = new TypeInterface1('', 4)

/** @type {number} */
let result

result = testInterface.add(2, 5)


/**
testInterface.add(2,'')  // error
result = 'test'          // error
 */