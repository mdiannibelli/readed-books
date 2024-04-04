import { ChangeEvent, useState } from "react";
import Book from "../interfaces/Book";
import Input from "./Input";

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

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await sendBook();
        setValues(initialValues)
     }

     const sendBook = async() => {
        try {
            const response = await fetch('http://localhost:3000/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            if(!response.ok) {
                throw new Error('Error al enviar el libro');
            }
            const contentType = response.headers.get('content-type');
            if(contentType && contentType.includes('application/json')) {
                const data = await response.json();
                console.log(data)
            } else {
                const text = await response.text();
                console.log(text)
            }
            
        } catch (error) {
            console.log(error)
        }
     }
  return (
    <form onSubmit={handleSubmit}>
    <div className='flex gap-4 mt-4'>
        <Input type='text' handleChange={handleChange} value={values.title} name='title' id='title' placeholder='Nombre del libro' />
        <Input type='text' handleChange={handleChange} value={values.author} name='author' id='author' placeholder='Autor' />
        <Input type='text' handleChange={handleChange} value={values.year} name='year' id='year' placeholder='Año del libro' />
        <Input type='text' handleChange={handleChange} value={values.dateStarted} name='dateStarted' id='dateStarted' placeholder='Comienzo de lectura en' />
        <Input type='text' handleChange={handleChange} value={values.dateFinished} name='dateFinished' id='dateFinished' placeholder='Terminado de leer en' />
        {/* <Input type='file' handleChange={handleImageChange} name='image' id='image'/> */}
        <div>
            <label htmlFor="image">
                <input type="file"  name='image' id='image' className='select-none outline-none p-4 rounded-lg border-2 bg-green-800 text-white text-sm w-full h-full'/>
            </label>
        </div>
       
    </div>
        <div className='flex justify-center items-center mt-4'>
            <button type='submit' className='text-gray-100 hover:bg-slate-700 hover:text-white duration-300 bg-slate-600 rounded-md px-8 py-2'>Añadir</button>
        </div>
    </form>
  )
}
