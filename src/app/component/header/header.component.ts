import {Component} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {MenuItem} from "primeng/api";
import {MenubarModule} from "primeng/menubar";
import {TieredMenuModule} from "primeng/tieredmenu";
import {SidebarModule} from "primeng/sidebar";
import {InputSwitchModule} from "primeng/inputswitch";

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
  ],
  styleUrls: ['header.component.css']
})
export class HeaderComponent {

  sidebarVisible: boolean = false;

  checked: boolean = false;

  items: MenuItem[]  = [
    {
      label: 'New',
      icon: 'pi pi-fw pi-plus',
    },
    {
      label: 'Delete',
      icon: 'pi pi-fw pi-trash'
    }
  ];

}
