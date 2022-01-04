function tickets(person) {
    while (person.length > 0) {
        if (person[0] === person[1]) {
            tickets(person[+1])
            return true
        }
        return false
    }
}

console.log(tickets([25, 50,100]))