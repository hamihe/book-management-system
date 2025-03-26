import { Component } from '@angular/core';
import { Book } from '../models/book';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit{
  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books")
    this.books = savedBooks ? JSON.parse(savedBooks) : []
  }

  newBookId: number = Date.now();
  newBookAuthor: string = "";
  newBookTitle: string = "";

  books: Book[] = [];

  addBook() {
      if (this.newBookTitle.trim().length && this.newBookAuthor.trim()) {
        let newBook: Book = {
          id: Date.now(),
          title: this.newBookTitle,
          author: this.newBookAuthor
        }
        this.books.push(newBook)

        this.newBookTitle = "";
        this.newBookAuthor = "";

        localStorage.setItem("books",JSON.stringify(this.books))
      }
    }


   deleteBook(index: number) {
    this.books.splice(index,1)
    localStorage.setItem("books",JSON.stringify(this.books))
   }

}
