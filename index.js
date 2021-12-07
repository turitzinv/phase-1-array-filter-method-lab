// Code your solution here

function findMatching (drivers, name) {
    return drivers.filter((employee) => employee.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch (drivers, name) {
    let fullName = drivers.filter((employee) => employee.slice(0, name.length) === name)
    return fullName
}

function matchName (drivers, name) {
    let match = drivers.filter((employee) => employee.name === name)
    console.log(match)
    return match
}
