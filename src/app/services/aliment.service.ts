import { HttpClient } from '@angular/common/http';
import { Aliment } from './../models/aliment';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {

  http = inject(HttpClient);
  public  alimentUrl = 'assets/data/aliments.json';
  private alimentsSubject = new BehaviorSubject<Aliment[]>([]);
  public aliments$ = this.alimentsSubject.asObservable();

  GetAliments(page : number = 1, pageSize: number = 10) {
    this.http.get<Aliment[]>(this.alimentUrl).pipe(
      map((aliments: Aliment[]) => {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        aliments = aliments.slice(startIndex, endIndex);
        this.alimentsSubject.next(aliments);
        return aliments;
      })
    )
  }




}
