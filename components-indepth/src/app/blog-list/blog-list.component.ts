import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[][] = [];
  currentPage!: number;

  constructor(private blogDataService: BlogDataService) {}

  @ViewChildren('tile')
  blogPostTileComponents!: QueryList<BlogPostTileComponent>;

  ngOnInit(): void {
    this.currentPage = 0;
    this.blogPosts = this.blogDataService.getData();
  }
  updatePage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
  expandAll(): void {
    this.blogPostTileComponents.forEach((post) => post.showFullSummary());
  }

  FavouriteAll(): void {
    this.blogPosts[this.currentPage].forEach((post) => (post.isFav = true));
  }
}
