import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class CommonSharedModule {

}
