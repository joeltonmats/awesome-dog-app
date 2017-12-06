import { Dog } from './model.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class DogService {

    private serverUrl = 'https://awesome-dog-api.herokuapp.com';

    constructor(
        private http: HttpClient,
    ) { }

    getDogAll(page: Number, qdtByPage): Observable<Dog[]> {
        const urlGetDogAll = `${this.serverUrl}/dogs?_page=${page}&_limit=${qdtByPage}`;

        return this.http.get<Dog[]>(urlGetDogAll);

    }


    getDogByName(name: string): Observable<Dog> {
        const urlGetDogByName = `${this.serverUrl}/dogs?name=${name}`;

        return this.http.get<Dog>(urlGetDogByName);
    }
}
