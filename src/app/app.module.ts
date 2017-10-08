import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-components/page-header/page-header.component';
import { PageBodyComponent } from './page-components/page-body/page-body.component';
import { PageFooterComponent } from './page-components/page-footer/page-footer.component';
import { NavbarComponent } from './ui-components/navbar/navbar.component';
import { SidebarComponent } from './ui-components/sidebar/sidebar.component';
import { SidebarItemTickerComponent } from './ui-components/sidebar/sidebar-item-ticker/sidebar-item-ticker.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageBodyComponent,
    PageFooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarItemTickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
