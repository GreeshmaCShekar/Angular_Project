import { Component } from '@angular/core';

@Component({
  selector: 'app-folder-explorer',
  imports: [
    FolderExplorer
  ],
  templateUrl: './folder-explorer.html',
  styleUrl: './folder-explorer.css',
  inputs: ['folderObj']
})
export class FolderExplorer {
  folderObj: any;
  isExpanded: boolean = false;
}
