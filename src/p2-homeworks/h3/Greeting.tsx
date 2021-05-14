import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.errorFalse;    // need to fix with (?:)
    const displayNone = s.displayNone;

    return (
        <div className={s.content}>
            <input value={name} onChange={setNameCallback} className={error ? inputClass : ''}/>
            <span className={error ? s.errorText : displayNone}>{error ? 'You did\'t enter a name' : ''}</span>
            <button onClick={addUser} className={s.button}>add</button>
            <span className={s.totalUser}>
                <div>Add users: {totalUsers}</div>
            </span>
        </div>
    )
}

export default Greeting
