import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private gifsService: GifsService){}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTagsHistory(newTag: string){
    this.gifsService.searchTag(newTag);
  }

}
