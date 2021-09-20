import React, { useEffect, useState } from 'react'

const UseEffect = ({ heading }) => {
    const [data, setData] = useState('Initial Data')
    const [data2, setData2] = useState('Initial Data2')
    const update = () => setData('Updated Data')
    const update2 = () => setData2('Updated Data 2')
    // Component Did Mount
    useEffect(() => {
        console.log('Mounted');
        return () => {
            console.log('Component will unmount');
        }
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setData('Inside timeout')
        }, 5000);
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    // Component Did Update
    // without inputs -> any changes in component, callback runs
    useEffect(() => {
        console.log('Updated All');
        return () => {
            console.log('All update cleanup');
        }
    })
    // with inputs -> only when input is changed, callback runs
    useEffect(() => {
        console.log('heading changed');
        return () => {
            console.log('Heading change cleanup');
        }

    }, [heading])
    useEffect(() => {
        console.log('Updated Data');
        return () => {
            console.log('Data change cleanup');
        }
    }, [data])

    useEffect(() => {
        console.log('Updated Data 2');
        return () => {
            console.log('Data 2 change cleanup');
        }
    }, [data2])
    useEffect(() => {
        console.log('Data or Data 2 is updated ');
        return () => {
            console.log('Both change  cleanup');
        }
    }, [data, data2])


    return (
        <div>
            <h1>{heading}</h1>
            {data}
            {data2}
            <button onClick={update}>Update Data</button>
            <button onClick={update2}>Update Data 2</button>
        </div>
    )
}

export default UseEffect;