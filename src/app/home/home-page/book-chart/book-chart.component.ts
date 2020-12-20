import {Component, OnInit} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Book} from '../../models/Book';
import {HomeService} from '../../home.service';
import {Router} from '@angular/router';

import {MatDialog} from '@angular/material/dialog';
import {BookModalComponent} from './book-modal/book-modal.component';
import {Bookmarks} from '../../models/Bookmarks';

interface DialogData {
  email: string;
  book: Book;
  cadence: number;
  bookmarks: Bookmarks;
}

@Component({
  selector: 'rahba-book-chart',
  templateUrl: './book-chart.component.html',
  styleUrls: ['./book-chart.component.css']
})
export class BookChartComponent implements OnInit {
  books: Book[];
  email: string;
  selectedBook: Book;
  bookmarks: Bookmarks;
  loaded = false;

  constructor(public homeService: HomeService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadFavoriteBook();
  }

  loadFavoriteBook(): void {
    this.homeService.getFavoritesBookResponse().subscribe(
      (book: HttpResponse<Book[]>) => {this.books = book.body; this.loaded = true; },
      (error: ErrorEvent) => {
        console.log('error', error);
        localStorage.removeItem('jwt');
        this.router.navigateByUrl('/');
      }
    );
  }

  base64ToImg(base64txt: string): any {
      return {'background-image': 'url(data:image/jpg;base64,' + base64txt + ')'};
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookModalComponent, {
      width: `${window.innerWidth / 1.1}px`, height: `${window.innerHeight / 1.1}px`,
      data: {
        email: '',
        book: this.selectedBook,
        cadence: 5,
        bookmarks: this.bookmarks,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
    });
  }

  loadBookmarks(): void {
    this.homeService.loadBookBookmarks(this.selectedBook.id, this.selectedBook.sourceUrl).subscribe(
      (response: HttpResponse<Bookmarks>) => { this.bookmarks = response.body; this.openDialog(); },
      error => console.log('error: ', error)
    );
  }

  onCLick(selectedBook: Book): void {
    this.selectedBook = selectedBook;
    this.loadBookmarks();
  }

}
