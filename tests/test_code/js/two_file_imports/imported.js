class myClass {
    constructor() {
        this.doit()
    }

    get doit() {
        this.doit2()
    }

    doit2() {
        console.log('at the end')
    }
}

function inner() {
    console.log("inner")
}

function bye() {

}

module.exports = {myClass, inner, 'hi': bye};
