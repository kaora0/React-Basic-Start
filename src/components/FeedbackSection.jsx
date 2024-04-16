import { useState } from 'react'
import Button from './Button/Button'

export default function FeedbackSection(){
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help',
    })

    // const [name, setName] = useState('')
    // const [hasError, setHasError] = useState(false)
    // const [reason, setReason] = useState('help')

    function handleNameChange(event){
        // console.log(event.target.value)

        // setName(event.target.value)
        // setHasError(event.target.value.trim().length==0)
        setForm({
            name: event.target.value,
            hasError: event.target.value.trim().length == 0,
        })
    }


    return(
        <section>
            <h3>Обратная связь</h3>

            <form>
                <label htmlFor="name">Ваше имя</label>
                <input 
                className="control" 
                type="text"  
                id="name"
                style={{
                    border: form.hasError ? '1px solid red' : null
                }}
                value={form.name} 
                onChange={handleNameChange}/>

                <label htmlFor="reason">Причины обращения</label>
                <select id="reason" className="control" value={form.reason}
                onChange={(event) => setReason(event.target.value)}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button isActive={!form.hasError} disabled={form.hasError}>Отправить</Button>

                <br />
                <br />
                <pre>
                    Name: {form.name}
                    <br />
                    Reason: {form.reason}
                </pre>

            </form>
        </section>
    )
}