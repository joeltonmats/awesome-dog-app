import { Dog } from './model.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class DogService {

    private serverUrl = "http://localhost:3000";
    private userName = "joeltonmatos";

    constructor(
        private http: HttpClient,
    ) { }

    getDogAll(page: Number, qdtByPage): Observable<Dog[]> {
        const urlGetDogAll = `${this.serverUrl}/array?_page=${page}&_limit=${qdtByPage}`;

        return this.http.get<Dog[]>(urlGetDogAll);

    }
}
