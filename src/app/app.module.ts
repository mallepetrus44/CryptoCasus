import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { SidenavComponent } from './core/pages/sidenav/sidenav.component';
import { ToolbarComponent } from './core/pages/toolbar/toolbar.component';
import { MainContentComponent } from './core/pages/main-content/main-content.component';
import { DetailComponent } from './crypto/pages/dialogs/detail/detail.component';
import { ListComponent } from './crypto/pages/dialogs/list/list.component';
import { DeleteComponent } from './crypto/pages/dialogs/delete/delete.component';
import { CryptoService } from './crypto/service/crypto.service';
import { CreateComponent } from './crypto/pages/dialogs/create/create.component';
import { EditComponent } from './crypto/pages/dialogs/edit/edit.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    MainContentComponent,
    DetailComponent,
    ListComponent,
    DeleteComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
