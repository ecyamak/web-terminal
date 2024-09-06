import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {CommonSharedModule} from "../../../common/module/common.shared.module";

@Component({
  standalone: true,
  selector: 'app-console-output',
  templateUrl: 'console.output.component.html',
  styleUrls: ['console.output.component.css'],
  imports: [CommonSharedModule]
})
export class ConsoleOutputComponent implements OnChanges {

  @Input() outputs!: string[];
  @Input() typingDelay: number = 100;
  @Input() erasingDelay: number = 100;
  @Input() waitingDelay: number = 2000;

  protected text: string = '';
  protected isReadonly: boolean = true;
  private index: number = 0;

  @Output() event: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['outputs'].firstChange) {
      this.type();
    } else {
      this.text = this.outputs[0];
    }
  }

  type(): void {
    const letters: string[] = this.outputs[this.index].split("");
    const typing = () : void => {
      if (letters.length > 0) {
        this.text += letters.shift();
      } else {
        if (this.index !== this.outputs.length - 1) {
          this.delete();
        } else {
          this.isReadonly = false;
          this.index = 0;
          this.event.emit(true);
        }
        return;
      }
      setTimeout(typing, this.typingDelay);
    };
    setTimeout(typing, this.waitingDelay);
  }

  delete(): void {
    const letters : string[] = this.outputs[this.index++].split("");
    const deleting = (): void => {
      if (letters.length > 0) {
        letters.pop();
        this.text = letters.join("");
      } else {
        this.type();
        return;
      }
      setTimeout(deleting, this.erasingDelay);
    };
    setTimeout(deleting, this.waitingDelay);
  }

}
