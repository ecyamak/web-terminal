import {Component} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {TieredMenuModule} from "primeng/tieredmenu";
import {SidebarModule} from "primeng/sidebar";
import {InputSwitchModule} from "primeng/inputswitch";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ColorPickerModule} from "primeng/colorpicker";
import {SliderModule} from "primeng/slider";
import {DividerModule} from "primeng/divider";
import {SelectButtonModule} from "primeng/selectbutton";
import {NgOptimizedImage} from "@angular/common";
import {ThemeService} from "../../core/theme.service";
import {DropdownModule} from "primeng/dropdown";
import {TranslateService} from "@ngx-translate/core";
import {defaultLang} from "../../app.module";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  imports: [
    ButtonModule,
    MenuModule,
    MenubarModule,
    TieredMenuModule,
    SidebarModule,
    InputSwitchModule,
    ReactiveFormsModule,
    ColorPickerModule,
    SliderModule,
    DividerModule,
    SelectButtonModule,
    NgOptimizedImage,
    DropdownModule
  ],
  styleUrls: ['header.component.css']
})
export class HeaderComponent {

  sidebarVisible: boolean = false;

  fontSizes: any[] = ['smaller', 'small', 'medium', 'large']

  languageOptions: any[] = [
    {code: 'tr', icon: '/assets/icon/tr.png', name: 'Turkish'},
    {code: 'en', icon: '/assets/icon/en.png', name: 'English'}
  ];

  constructor(private themeService: ThemeService,
              private translateService: TranslateService) {
  }


  formGroup: FormGroup = new FormGroup({
    darkMode: new FormControl((localStorage.getItem('darkTheme') ?? 'true') === 'true'),
    fontColor: new FormControl(localStorage.getItem('fontColor') ?? '#03C03C'),
    fontSize: new FormControl(this.fontSizes.indexOf(localStorage.getItem('fontSize') ?? '1')),
    language: new FormControl(localStorage.getItem('language') ?? defaultLang),
  });

  onDarkModeChange(isDarkMode: boolean) {
    localStorage.setItem('darkTheme', isDarkMode.toString());
    this.themeService.switchTheme(isDarkMode ? 'theme-dark' : 'theme-light');
  }

  onFontColorChange(color: string | object) {
    if (typeof color === "string") {
      localStorage.setItem('fontColor', color);
      document.body.style.color = color;
      document.body.style.caretColor = color;
    }
  }

  onFontSizeChange(size: number | undefined) {
    let fontSize : string = this.fontSizes.at(size ?? 1);
    localStorage.setItem('fontSize', fontSize);
    document.body.style.fontSize = fontSize;
  }

  onLanguageChange(language: string | object) {
    if (typeof language === "string") {
      localStorage.setItem('language', language);
      this.translateService.use(language);
    }
  }

  onRestoreDefault() {
    localStorage.clear();
    window.location.reload();
  }

}
