export class BlogPost {
  isFav?: boolean;
  constructor(public title: string, public summary: string) {
    this.title = title;
    this.summary = summary;
  }
}
