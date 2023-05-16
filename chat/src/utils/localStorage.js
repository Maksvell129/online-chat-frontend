function getItem(itemName){
    return localStorage.getItem(itemName)
}


function setItem(itemName, itemValue){
    localStorage.setItem(itemName, itemValue)
    return true
}

function removeItem(itemName){
    localStorage.removeItem(itemName)
    return true
}

export {getItem, setItem, removeItem}