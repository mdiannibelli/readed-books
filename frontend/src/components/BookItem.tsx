import Book from "../interfaces/Book";

interface Props {
    book: Book;
}


export default function BookItem({book}:Props) {
  return (
    <div key={book.id} className="border-2 rounded-md p-4 border-gray-600">
                    <h2 className="text-white text-3xl text-pretty">{book.title}</h2>
                    <span className="text-white text-2xl italic">{book.year}</span>
                    <div className="flex justify-center items-center gap-2">
                        <p className="text-gray-400 text-xs">{book.dateStarted}</p>
                        <p className="text-gray-400 text-xs">{book.dateFinished}</p>
                    </div>
                </div>
  )
}
