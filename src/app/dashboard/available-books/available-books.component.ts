import {Component, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BookModel } from './book.model'

@Component({
    selector: 'event-comp',
    templateUrl: './available-books.component.html'
})
export class AvailableBooksComponent implements OnInit{
    constructor(private http: HttpClient){

    }

    option: boolean[] = []
    books: BookModel[] = []

    ngOnInit(){
        this.http.get("https://api.mockaroo.com/api/8f5d75d0?count=15&key=6b5d9e30")
        .subscribe((response: any[]) => {
            response.forEach(event => {
                var bookObject = new BookModel()
                bookObject.bookName = event.BookName
                bookObject.bookAuthor = event.AuthorName
                bookObject.bookCategory = event.Category
                bookObject.available = event.Available
                this.books.push(bookObject)
            })
        })
    }

    enableOption(i){
        this.option[i] = true;
    }

    disableOption(i){
        this.option[i] = false;
    }
}