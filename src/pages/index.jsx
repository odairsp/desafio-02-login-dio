import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Button } from '../components/Button';

const Teste = () => {

    const [name, setName] = useState('odair');
    const [age, setAge] = useState(40);

    const handleName = useCallback(() => {
        setName((prev) => prev === 'odair' ? "Jonas" : 'odair');
    },[])

    const handleAge = useCallback(() => {
        const newAge = age *10;
        console.log('age atual: ', age, newAge);
        setAge((prev) => prev === 40 ? 2025-1978 : 40);
    },[age])

    // useEffect(() => {
    // }, [])

 
    const calculo = useMemo(() => {
        console.log("Calculou", age);
        return 10*age;
    }, [age])

    console.log('renderizou ', calculo);





    return (

        <div style={{ width: "100%", padding: '2rem'}}>
            <h2 style={{ width: "50%", margin: '2rem' }}>NAme: {name}</h2>
            <h2 style={{ width: "50%", margin: '2rem' }}>Idade: {age}</h2>

            <Button title={"Alterar Nome"} variant='secondary' onClick={handleName}></Button>
            <br/>
            <br/>
            <Button title={"Alterar Idade"} variant='secondary' onClick={handleAge}></Button>

        </div>
    )
}

export { Teste }