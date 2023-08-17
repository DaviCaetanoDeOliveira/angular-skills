import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})

export class CardService 
{
    constructor(private httpClient: HttpClient) 
	{ }

    public like(id: number) 
	 {
        return new Promise((resolve) => {
            this.httpClient.post('/api/like', id).subscribe((cardAtualizado) => {
                resolve(cardAtualizado);
            });
        });
    }
}
