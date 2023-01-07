import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServerComponent } from './project/server/server.component';
import { ServersComponent } from './project/servers/servers.component';
import { SidebarComponent } from './project/sidebar/sidebar.component';
import { NavbarComponent } from './project/navbar/navbar.component';
import { ColumnsComponent } from './project/columns/columns.component';
import { ColumnComponent } from './project/column/column.component';
import { TasksComponent } from './project/tasks/tasks.component';
import { CompletedTasksPipe } from './project/pipes/completedTasks.pipe';
import { ModalComponent } from './project/modal/modal.component';
import { HeaderComponent } from './project/header/header.component';
import { HomeComponent } from './project/home/home.component';
import { ProjectComponent } from './project/project.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
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
    ModalComponent,
    HeaderComponent,
    HomeComponent,
    ProjectComponent,
    AboutUsComponent,
    ContactUsComponent,
    CustomerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
