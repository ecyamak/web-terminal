import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Command} from "../../../common/enum/command";
import {CommonSharedModule} from "../../../common/module/common.shared.module";

@Component({
  standalone: true,
  selector: 'app-console-input',
  templateUrl: 'console.input.component.html',
  styleUrls: ['console.input.component.css'],
  imports: [CommonSharedModule]
})
export class ConsoleInputComponent implements OnInit {

  @Input() pattern: string = `^[a-zA-Z]+(\\s\\w+)*$`;
  @Input() visible: boolean = false;
  @Output() event: EventEmitter<string[]> = new EventEmitter<string[]>();

  protected inputForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      command: ["", [Validators.required, Validators.pattern(this.pattern)]]
    });
  }

  submit(): void {
    this.validate(this.inputForm.value.command);
    this.inputForm.reset();
  }

  validate(input: string): void {
    const errors = this.inputForm.get('command')?.errors;
    return errors ? this.event.emit(["error"]) : this.execute(input.split(" "));
  }

  execute(keys: string[]): void {
    switch (keys[0].toLowerCase()) {
      case Command.man:
        return this.event.emit([keys.toString()]);
      default:
        return this.event.emit(["~ecy: invalid command"])
    }
  }

}
