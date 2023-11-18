import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temples',
  templateUrl: './temples.component.html',
  styleUrls: ['./temples.component.scss']
})
export class TemplesComponent {
  @Input() temple: any;
}
