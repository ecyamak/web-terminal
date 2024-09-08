import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  defaultTheme!: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.defaultTheme = 'theme-dark';
  }

  toggleMode(isDark: boolean) {
    let theme = isDark ? 'theme-dark' : 'theme-light';
    this.changeTheme(theme);
  }

  changeTheme(theme: string) {
    localStorage.setItem('theme', theme);
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }

  getTheme() : string {
    return localStorage.getItem('theme') ?? this.defaultTheme;
  }

  isThemeDark(): boolean {
    return this.getTheme() === this.defaultTheme;
  }

}
