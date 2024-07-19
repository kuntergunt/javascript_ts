// @ts-check


/**
 * @import {Test1 as Test1} from "./types";
 * @import {import("./types").Test1 as Test1}
 * 
 */

/** @type {Test1} */
class TypeInterface3 {

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

let testInterface3 = new TypeInterface3('',4)

/** @type {number} */
let result3

result3 = testInterface.add(2,5)


/**
testInterface.add(2,'')  // error
result = 'test'          // error
 */