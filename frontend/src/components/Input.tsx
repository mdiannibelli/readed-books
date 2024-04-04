import { ChangeEvent } from 'react'

interface Props {
    handleChange: (e:ChangeEvent<HTMLInputElement>) => void;
    type: string;
    value?: string;
    name: string;
    id: string;
    placeholder?: string;
}


export default function Input({handleChange, value, name, id, placeholder, type}: Props) {
  return (
    <div>
        <label htmlFor="title">
        <input type={type} onChange={handleChange} value={value} name={name} id={id} className='select-none outline-none p-4 rounded-lg border-2 bg-green-800 text-white text-sm w-full h-full' placeholder={placeholder}/>
        </label>
    </div>
  )
}
