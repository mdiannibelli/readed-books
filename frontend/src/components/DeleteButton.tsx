import useBooksData from '../hooks/data';

export default function DeleteButton() {
    const [books,deleteBooks] = useBooksData();
  return (
    <div className="flex justify-end items-end relative">
    <button onClick={deleteBooks} className="absolute top-0 right-0 mx-8 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 duration-300 outline-none select-none">Borrar todos</button>
</div>
  )
}
