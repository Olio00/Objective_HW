const data = { login: 'gogi', password: 'GloryOfUkraine', address: 'Kiev' }
function without(obj, dellElm) {
    obj[dellElm] = null
    return obj
}

console.log(without(data, 'address'))