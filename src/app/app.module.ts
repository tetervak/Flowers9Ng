import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FlowerDetailsComponent} from './flower-details/flower-details.component';
import {FlowerDataService} from './flower-data.service';
import {FooterModule} from './footer/footer.module';
import {HttpClientModule} from '@angular/common/http';
import { FlowerTableComponent } from './flower-table/flower-table.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: FlowerTableComponent},
  {path: 'flowers/:id', component: FlowerDetailsComponent},
  {path: '**', redirectTo: ''}
];

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
    RouterModule.forRoot(routes)
  ],
  providers: [FlowerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
