(() => {
    // block scoping -> Only usable inside the block {}
    // const -> Refence cannot be change (reassignment can't be done)
    // let -> reassignment can be done
    let obj = {
        name: 'Nishat',
        age: 22,
        company: 'CTS'
    };
    console.log(obj);
    // Mutating
    obj.name='Nishat Khan'
    console.log(obj);
    const obj2 = {
        desg: 'Associate',
        age: 23
    }
    // New obj
    obj = {
        ...obj, // Put all values of obj
        // name: 'Nishat Khan 2' // Update only name,
        
        ...obj2,
        age: 25
    }
    console.log(obj);

    const arr1 = [1,2,3,4]
    const arr2 = [5,6,7,8]
    const arr3 = [...arr1,10,100,200, ...arr2]
    console.log(arr3);
    // Object Destructuring
    let nishat = {
        name: 'Nishat Khan',
        age: 23,
        company: 'CTS',
        desg: 'Associate'
    };
    const {name:myName ,age=25,manager='Khan'} = nishat
    console.log(myName,age,manager);
    const arrFn = () => ({count: 10})
})();
const add = (a,b) => a+b
const sub = (a,b) => a-b;


export {add, sub};