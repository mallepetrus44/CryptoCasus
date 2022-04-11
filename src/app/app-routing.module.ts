import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './core/pages/main-content/main-content.component';
import { CreateComponent } from './crypto/pages/dialogs/create/create.component';
import { DetailComponent } from './crypto/pages/dialogs/detail/detail.component';
import { ListComponent } from './crypto/pages/dialogs/list/list.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'cryptos', component: ListComponent },
  { path: 'crypto/:id', component : DetailComponent },
  { path: 'add', component : CreateComponent },
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }