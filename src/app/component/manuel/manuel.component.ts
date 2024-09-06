import {AfterViewInit, Component, Renderer2, ViewChild} from "@angular/core";

@Component({
  standalone: true,
  selector: 'manuel',
  templateUrl: 'manuel.component.html',
  styleUrl: 'manuel.component.css'
})
export class ManuelComponent implements AfterViewInit{

  @ViewChild('manuel') manuel: any;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    //this.renderer.setStyle(this.manuel.nativeElement, 'display', 'none');
  }


}
