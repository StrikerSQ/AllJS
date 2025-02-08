const debounce = (func) => {
    let timerID;

    return (...args) => {
        clearTimeout(timerID) 
        
        timerID = setTimeout(() => func.apply(this, args))
        
    }
}