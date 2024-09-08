import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class FontService {

  fontSizes!: any[];

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.fontSizes = ['smaller', 'small', 'medium', 'large'];
  }

  changeFontColor(fontColor: string) {
    localStorage.setItem('fontColor', fontColor);
    this.document.body.style.color = fontColor;
    this.document.body.style.caretColor = fontColor;
  }

  changeFontSize(fontSize: string) {
    localStorage.setItem('fontSize', fontSize);
    this.document.body.style.fontSize = fontSize;
  }

  getFontColor() {
    return localStorage.getItem('fontColor') ?? '#03C03C';
  }

  getFontSize() {
    return localStorage.getItem('fontSize') ?? 'small';
  }

}
