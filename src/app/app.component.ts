import { Component } from '@angular/core';
import {ThemeService} from "./core/theme.service";
import {LanguageService} from "./core/language.service";
import {FontService} from "./core/font.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'web-terminal';

  constructor(themeService: ThemeService,
              languageService: LanguageService,
              fontService: FontService) {
    themeService.changeTheme(themeService.getTheme());
    languageService.changeLanguage(languageService.getLanguage());
    fontService.changeFontColor(fontService.getFontColor());
    fontService.changeFontSize(fontService.getFontSize());
  }

}
