import { Component } from '@angular/core';
import { FolderExplorer } from "../folder-explorer/folder-explorer";
import folderObj from './folder_data'
@Component({
  selector: 'app-home',
  imports: [FolderExplorer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  folderObj = folderObj;
}
