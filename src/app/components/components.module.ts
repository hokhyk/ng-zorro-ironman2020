import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ButtonComponent } from './button/button.component';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components.routing.module';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TaskDetailComponent } from './demos/todo/task-detail/task-detail.component';
import { TaskListComponent } from './demos/todo/task-list/task-list.component';
import { TodoComponent } from './demos/todo/todo.component';
import { DrawerContentComponent } from './drawer/drawer-content/drawer-content.component';
import { DrawerComponent } from './drawer/drawer.component';
import { LayoutComponent } from './layout/layout.component';
import { TableAjaxComponent } from './table/table-ajax/table-ajax.component';
import { TableDragSortingComponent } from './table/table-drag-sorting/table-drag-sorting.component';
import { TableHeadComponent } from './table/table-head/table-head.component';
import { TableComponent } from './table/table.component';

const COMPONENTS = [
  ComponentsComponent,
  LayoutComponent,
  TodoComponent,
  TaskListComponent,
  ButtonComponent,
  TableComponent,
  DatePickerComponent,
  DrawerComponent
];

const CHILD_COMPONENTS = [
  TableHeadComponent,
  TableDragSortingComponent,
  TableAjaxComponent
];

const MODAL_COMPONENTS = [
  TaskDetailComponent,
  DrawerContentComponent
];

@NgModule({
  declarations   : [
    ...COMPONENTS,
    ...CHILD_COMPONENTS,
    ...MODAL_COMPONENTS
  ],
  imports        : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    ScrollingModule,
    NgZorroAntdModule,
    ComponentsRoutingModule
  ],
  entryComponents: [
    ...MODAL_COMPONENTS
  ]
})

export class ComponentsModule {

}
