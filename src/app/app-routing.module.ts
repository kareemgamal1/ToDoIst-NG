import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { InboxComponent } from './pages/inbox/inbox.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{ path: 'inbox', component: InboxComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
