import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {BookChartComponent} from './home-page/book-chart/book-chart.component';
import {BookModalComponent} from './home-page/book-chart/book-modal/book-modal.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {SearchComponent} from './search/search.component';
import { SummaryItemTitlePipe } from './search/summary-item-title/summary-item-title.pipe';

@NgModule({
  declarations: [HomePageComponent, BookChartComponent, BookModalComponent, SearchComponent, SummaryItemTitlePipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    PdfViewerModule
  ],
  bootstrap: [HomePageComponent]
})
export class HomeModule { }
