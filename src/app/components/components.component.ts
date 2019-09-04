import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent implements OnInit {
  collapsed = false;
  theme = 'dark';
  menus = [
    {
      level: 1,
      title: 'Components',
      icon: 'home',
      open: true,
      children: [
        {
          level: 2,
          title: 'Button',
          path: ['/components', 'button'],
          icon: 'tag'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
