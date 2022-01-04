const person = {
    name : 'Pavel',
    age: 24
}
function info(phone){
    console.log(`Name: ${this.name}, Phone: ${phone}`)
}
function bind(fn, context, ...rest) {
    return function () {
        const uniqId = Date.now().toString()

        context[uniqId] = fn

        const result = context[uniqId](...rest)

        delete context[uniqId]

        return result
    }
}

bind (info,person,'123456')()



