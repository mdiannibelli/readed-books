type Image = {
    fileName: string;
    fileType: string;
    fileSize: number;
}

type Book = {
    id?: number;
    title: string;
    author: string;
    year: string;
    dateStarted: string;
    dateFinished: string;
    image?: Image;
}

export default Book;

