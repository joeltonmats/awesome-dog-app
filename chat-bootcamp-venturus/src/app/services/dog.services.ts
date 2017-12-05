import { Dog } from './model.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class DogService {

    private serverUrl = "http://demo4213404.mockable.io/";

    constructor(
        private http: HttpClient,
    ) { }

    getDogAll(page: Number, qdtByPage): Observable<Dog[]> {
        // const urlGetDogAll = `${this.serverUrl}/array?_page=${page}&_limit=${qdtByPage}`;
        const urlGetDogAll = `${this.serverUrl}/dogs`;

        return this.http.get<Dog[]>(urlGetDogAll);

    }


    getDogByName(name: string, dogs: Array<Dog>): Dog {
        let dogMatch = null;
        dogs.forEach(item => {
            if (item.name.trim() === name.trim()) {
                dogMatch = item;
            }
        });

        return dogMatch;
    }
}
