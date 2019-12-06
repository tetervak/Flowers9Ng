import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FlowerDetailsComponent} from './flower-details/flower-details.component';
import {FlowerDataService} from './flower-data.service';
import {FooterModule} from './footer/footer.module';
import {HttpClientModule} from '@angular/common/http';
import { FlowerTableComponent } from './flower-table/flower-table.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FlowerDetailsComponent,
    FlowerTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FooterModule,
    routing
  ],
  providers: [FlowerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
