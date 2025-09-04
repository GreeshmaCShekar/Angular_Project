import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {
  user: any;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.activatedRoute.params.pipe(switchMap((params: any) =>
      this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    )).subscribe((userResponse: any) => {
      this.user = userResponse;
    });
  }
}
