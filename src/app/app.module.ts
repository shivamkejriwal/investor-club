import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-components/page-header/page-header.component';
import { PageBodyComponent } from './page-components/page-body/page-body.component';
import { PageFooterComponent } from './page-components/page-footer/page-footer.component';
import { NavbarComponent } from './ui-components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageBodyComponent,
    PageFooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
