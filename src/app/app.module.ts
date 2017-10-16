import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-components/page-header/page-header.component';
import { PageBodyComponent } from './page-components/page-body/page-body.component';
import { PageFooterComponent } from './page-components/page-footer/page-footer.component';
import { NavbarComponent } from './ui-components/navbar/navbar.component';
import { SidebarComponent } from './ui-components/sidebar/sidebar.component';
import { SidebarItemTickerComponent } from './ui-components/sidebar/sidebar-item-ticker/sidebar-item-ticker.component';
import { PageContentComponent } from './page-components/page-content/page-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageBodyComponent,
    PageFooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarItemTickerComponent,
    PageContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
