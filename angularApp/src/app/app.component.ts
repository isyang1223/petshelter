import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { FileSelectDirective, FileUploader  }from 'ng2-file-upload';


const url = 'http://localhost:8000/upload'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    private http: HttpClient
  ) { }
  ngOnInit() {

    this.goHome()
  }
  goHome() {
    this._router.navigate(['/']);
  }

}
