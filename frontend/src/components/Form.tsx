import { ChangeEvent, useState } from "react";
import Book from "../interfaces/Book";

const initialValues = {
    title: '',
    author: '',
    year: '',
    dateStarted: '',
    dateFinished: '',
}

export default function Form() {
    const [values, setValues] = useState<Book>(initialValues)
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendBook();
        setValues(initialValues)
     }

     const sendBook = async() => {
        await fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res => res.json()).catch(err => console.log(err))
     }
  return (
    <form onSubmit={handleSubmit}>
    <div className='flex gap-4 mt-4'>
        <div>
            <label htmlFor="title">
                <input type="text" onChange={handleChange} value={values.title} name='title' id='title' className='select-none outline-none p-2 text-xs w-full h-full' placeholder='Nombre del libro'/>
            </label>
        </div>
        <div>
            <label htmlFor="author">
                <input type="text" onChange={handleChange} value={values.author} name='author' id='author' className='select-none outline-none p-2 text-xs w-full h-full' placeholder='Autor'/>
            </label>
        </div>
        <div>
            <label htmlFor="year">
                <input type="text" onChange={handleChange} value={values.year} name='year' id='year' className='select-none outline-none p-2 text-xs w-full h-full' placeholder='Año'/>
            </label>
        </div>
        <div>
            <label htmlFor="dateStarted">
                <input type="text" onChange={handleChange} value={values.dateStarted} name='dateStarted' id='dateStarted' className='select-none outline-none p-2 text-xs w-full h-full' placeholder='Fecha en la que empezaste a leerlo'/>
            </label>
        </div>
        <div>
            <label htmlFor="dateFinished">
                <input type="text" onChange={handleChange} value={values.dateFinished} name='dateFinished' id='dateFinished' className='select-none outline-none p-2 text-xs w-full h-full' placeholder='Fecha en la que lo terminaste'/>
            </label>
        </div>
        <div>
            <label htmlFor="image">
                <input type="file" onChange={handleChange} name='image' id='image' className='select-none outline-none p-2 text-xs w-full h-full text-white'/>
            </label>
        </div>
    </div>
        <div className='flex justify-center items-center mt-4'>
            <button type='submit' className='text-gray-100 hover:bg-slate-700 hover:text-white duration-300 bg-slate-600 rounded-md px-8 py-2'>Añadir</button>
        </div>
    </form>
  )
}
