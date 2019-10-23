import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    public _http: HttpClient
  ) { }

  getProjects(){
    return this._http.get('http://localhost:9000/projects');
  }

}
