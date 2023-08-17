import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';

@NgModule({
	imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule, MatChipsModule, MatCardModule, MatTooltipModule, HttpClientModule, InMemoryWebApiModule.forRoot(FakeApiService, {delay: 5000}) ],
	declarations: [ AppComponent, HelloComponent, DashboardComponent, CardComponent ],
	bootstrap:    [ AppComponent ],
	schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
})

export class AppModule 
{ }
