import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ColumnComponent } from './project/column/column.component';
import { ColumnsComponent } from './project/columns/columns.component';
import { ModalComponent } from './project/modal/modal.component';
import { NavbarComponent } from './project/navbar/navbar.component';
import { CompletedTasksPipe } from './project/pipes/completedTasks.pipe';
import { ServerComponent } from './project/server/server.component';
import { ServersComponent } from './project/servers/servers.component';
import { SidebarComponent } from './project/sidebar/sidebar.component';
import { TasksComponent } from './project/tasks/tasks.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent,
        SidebarComponent,
        NavbarComponent,
        ColumnsComponent,
        ColumnComponent,
        TasksComponent,
        CompletedTasksPipe,
        ModalComponent
      ],
      imports: [
        BrowserModule,
        FontAwesomeModule,
        FormsModule, 
        ReactiveFormsModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'kanban'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Kanban');
  });

  it('should render component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
