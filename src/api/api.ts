import axios from "axios";

export type Book = {
  id: string;
  title: string;
  resume: string;
  year: string;
  isbn: string;
  category_id: number;
  author_id: number;
  pages: number;
}

export async function getBookList() {
  try {
    const response = await axios.get<Book[]>("http://localhost:3001/books")
    console.log(response)
    return response.data;
    
  } catch (error) {
    console.log(error)
    return []
  }
}