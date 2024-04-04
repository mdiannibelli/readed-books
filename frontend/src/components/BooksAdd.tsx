import Form from "./Form";


export default function BooksAdd() {
  return (
    <section className="flex flex-col justify-center items-center fixed bottom-0 left-0 right-0 p-8">
        <h1 className="text-2xl text-white">Agregar un libro que has leido</h1>
        <Form/>
    </section>
  )
}
