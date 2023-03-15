import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
})
export class BlogPostTileComponent implements OnInit {
  @Input()
  post!: BlogPost;

  fullSummary!: string;
  isExpanded: boolean = false;

  constructor(private truncatePipe: TruncatePipe) {}

  ngOnInit(): void {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 30);
  }
  showFullSummary() {
    this.isExpanded = !this.isExpanded;
    this.post.summary = this.isExpanded
      ? this.fullSummary
      : this.truncatePipe.transform(this.post.summary, 30);
  }
  toggleFav() {
    this.post.isFav = !this.post.isFav;
  }
}
