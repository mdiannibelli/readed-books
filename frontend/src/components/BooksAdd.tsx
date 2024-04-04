import Form from "./Form";


export default function BooksAdd() {
  return (
    <section className="flex flex-col justify-center items-center fixed z-100 bg-white bottom-0 left-0 right-0 p-8 border-t-2 border-gray-200">
        <h1 className="text-2xl text-gray-700 mb-8">Agregá un libro que hayas leido</h1>
        <Form/>
    </section>
  )
}
