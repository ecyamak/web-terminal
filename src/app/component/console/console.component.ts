import {Component, OnInit} from "@angular/core";
import {ConsoleInputComponent} from "./input/console.input.component";
import {ConsoleOutputComponent} from "./output/console.output.component";
import {TranslateService} from "@ngx-translate/core";
import {CommonSharedModule} from "../../common/module/common.shared.module";

@Component({
  standalone: true,
  selector: 'app-console',
  templateUrl: 'console.component.html',
  styleUrls: ['console.component.css'],
  imports: [CommonSharedModule, ConsoleInputComponent, ConsoleOutputComponent]
})
export class ConsoleComponent implements OnInit {

  constructor(private translate: TranslateService) {
  }

  protected isReady: boolean = false;
  protected isReadonly: boolean = true;
  protected outputs: string[] = [];

  ngOnInit(): void {
    this.translate.get('console.greeting').subscribe((result: string) => {
      this.outputs.push(result);
    });
    this.translate.get('console.info').subscribe((result: string) => {
      this.outputs.push(result);
      this.isReady = true;
    });
  }

  inputEvent(event: string[]): void {
    this.outputs = event;
  }

  outputEvent(event: boolean): void {
    this.isReadonly = false;
  }

}
