import { useState } from 'react'
import Book from '../interfaces/Book';

export default function useBooksData(): [Book[], () => Promise<void>, () => Promise<void>] {
    const [books, setBooks] = useState<Book[]>([])
    const fetchData = async() => { 
        try {
            const response = await fetch('http://localhost:3000/books', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const books = await response.json();
        setBooks(books)
            
        } catch (err) {
            console.error(err)
        }
    }

    const deleteBooks = async() => {
        try {
            const response = await fetch('http://localhost:3000/books', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok) {
                throw new Error('Failed to delete books')
            }
            setBooks([]);
        } catch (error) {
            console.log(error)
        }
    }
  return [books, fetchData, deleteBooks]
}
