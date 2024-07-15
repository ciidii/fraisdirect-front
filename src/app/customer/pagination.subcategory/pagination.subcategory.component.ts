import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination.subcategory',
  standalone: true,
  imports: [],
  templateUrl: './pagination.subcategory.component.html',
  styleUrl: './pagination.subcategory.component.css'
})
export class PaginationSubcategoryComponent {

  @Input() currentPage: number = 0;
  @Input() itemsPerPage: number = 3;
  @Input() totalItems: number = 0;
  @Output() pageChange = new EventEmitter<number>();

  nextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.totalItems) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
}
