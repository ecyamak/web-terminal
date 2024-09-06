import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/*
document.onmousedown = (e: MouseEvent): void => {
  e.preventDefault();
}
 */

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
