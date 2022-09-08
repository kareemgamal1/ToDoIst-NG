import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavService } from './components/main/sidenav.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TaskSectionComponent } from './components/task-section/task-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    InboxComponent,
    SidenavComponent,
    TaskSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSidenavModule,
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent],
})
export class AppModule {}
