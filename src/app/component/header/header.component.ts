import {Component, OnInit} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {TieredMenuModule} from "primeng/tieredmenu";
import {SidebarModule} from "primeng/sidebar";
import {InputSwitchModule} from "primeng/inputswitch";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ColorPickerModule} from "primeng/colorpicker";
import {SliderModule} from "primeng/slider";
import {DividerModule} from "primeng/divider";
import {SelectButtonModule} from "primeng/selectbutton";
import {NgOptimizedImage} from "@angular/common";
import {ThemeService} from "../../core/theme.service";
import {DropdownModule} from "primeng/dropdown";
import {FontService} from "../../core/font.service";
import {LanguageService} from "../../core/language.service";

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
export class HeaderComponent implements OnInit {

  sidebarVisible: boolean = false;

  formGroup!: FormGroup;

  constructor(private themeService: ThemeService,
              private fontService: FontService,
              protected languageService: LanguageService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      isDark: this.themeService.isThemeDark(),
      fontColor: this.fontService.getFontColor(),
      fontSize: this.fontService.fontSizes.indexOf(this.fontService.getFontSize()),
      language: this.languageService.getLanguage(),
    })
  }

  onDarkModeChange(isDark: boolean) {
    this.themeService.toggleMode(isDark);
  }

  onFontColorChange(color: string | object) {
    if (typeof color === 'string') {
      this.fontService.changeFontColor(color);
    }
  }

  onFontSizeChange(size: number | undefined) {
    let fontSize : string = this.fontService.fontSizes.at(size ?? 1);
    this.fontService.changeFontSize(fontSize);
  }

  onLanguageChange(language: string | object) {
    if (typeof language === "string") {
      this.languageService.changeLanguage(language);
    }
  }

  onRestoreDefault() {
    localStorage.clear();
    window.location.reload();
  }

}
