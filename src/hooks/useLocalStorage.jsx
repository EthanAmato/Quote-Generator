import { useState, useEffect } from 'react'

//Order:
//1. key + initVal passed to useLocalStorage
//2. getSavedVal called in useState which then changes val of Value - only called once on component loading
//3. useEffect called due to value changing, setting whatever our key/val pair in localstorage 
//4. concurrent calls of setValue change value in useLocalStorage and therefore set off useEffect again -> restart from step 3.



//retrieve a value from localstorage given a key
function getSavedValue(key, initialValue) {
    const savedValueFromStorage = JSON.parse(localStorage.getItem(key))
    if (savedValueFromStorage) return savedValueFromStorage; //if we find a thing in our storage with key, return it
    
    //In the case we haven't set it / can't find it:


    //Not entirely necessary, but ensures that 
    if (initialValue instanceof  Function) return initialValue()
    //otherwise just return whatever we started with
    return initialValue;
}


function useLocalStorage(key, initialValue) {

    //default value of either val of existing key/val pair or initial value passed
    const [value, setValue] = useState(() => {
        //using a callback
        //ensures this code isn't rerun over and over again
        //everytime the component is rerendered

        //Check for a saved value in localStorage
        return getSavedValue(key, initialValue)
    });


    //everytime value changes, set it accordingly in localstorage
    useEffect(() => {
        //need stringify because we can only pass strings to localstorage
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    //mimic useState structure by passing back our state and setState vals/function
    return [value, setValue];

}

export default useLocalStorage;