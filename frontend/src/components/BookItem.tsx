import Book from "../interfaces/Book";

interface Props {
    book: Book;
}


export default function BookItem({book}:Props) {
  return (
    <div key={book.id} className="grid grid-cols-8 mt-4 items-center border-2 rounded-md p-6 border-gray-600">
        <img src={book.image ? book.image.fileName : ''} alt={book.author} className="w-full h-full object-cover "/>
        <h2 className="text-gray-700 text-xl text-pretty col-span-3">{book.title}</h2>
        <span className="text-gray-700 text-xl italic ">{book.year}</span>
        <p className="text-gray-500 text-md italic ">{book.dateStarted}</p>
        <p className="text-gray-500 text-md italic ">{book.dateFinished}</p>
        <button>Borrar</button>
  </div>
  )
}
