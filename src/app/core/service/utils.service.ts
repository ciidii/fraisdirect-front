import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  formatImage(image: string): string | undefined {
    if (image !== undefined) {
      return `data:image/png;base64,${image}`;
    }
    return "";
  }
}
