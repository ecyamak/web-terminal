import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {defaultLang} from "./app.module";
import {ThemeService} from "./core/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'web-terminal';

  constructor(translateService: TranslateService,
              themeService: ThemeService) {
    themeService.switchTheme((localStorage.getItem('darkTheme') ?? 'true') === 'true' ? 'theme-dark' : 'theme-light');
    translateService.use(localStorage.getItem('language') ?? defaultLang);
    document.body.style.color = localStorage.getItem('fontColor') ?? '#03C03C';
    document.body.style.caretColor = localStorage.getItem('fontColor') ?? '#03C03C';
    document.body.style.fontSize = localStorage.getItem('fontSize') ?? '1';
  }

}
