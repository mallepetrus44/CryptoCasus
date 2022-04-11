import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoService } from './service/crypto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { ListComponent } from './pages/dialogs/list/list.component';
import { CreateComponent } from './pages/dialogs/create/create.component';

const routes: Routes = [
  {path: '', component: ListComponent, 
  children: [
    {path: 'add', component: CreateComponent}
  ]},
  // {path: '**', redirectTo:'' }
  ];

@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CryptoService
  ]
})
export class CryptoModule { }
