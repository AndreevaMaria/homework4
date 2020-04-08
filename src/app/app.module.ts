import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { PersonalComponent } from './personal/personal.component';
import { AbilitisComponent } from './abilitis/abilitis.component';


@NgModule({
   declarations: [
      AppComponent,
      ExperienceComponent,
      PersonalComponent,
      AbilitisComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
