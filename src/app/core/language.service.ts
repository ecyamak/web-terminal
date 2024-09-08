import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  supportedLanguages!: any[];
  defaultLanguage!: string;

  constructor(private translateService: TranslateService) {
    this.supportedLanguages = [
      {code: 'tr', name: 'lang.turkish', icon: '/assets/icon/tr.png'},
      {code: 'en', name: 'lang.english', icon: '/assets/icon/en.png'}
    ];
    this.defaultLanguage = 'en';
  }

  changeLanguage(language: string) : void {
    localStorage.setItem('language', language);
    this.translateService.use(language);
  }

  getLanguage() : string {
    return localStorage.getItem('language') ?? this.defaultLanguage;
  }

}
