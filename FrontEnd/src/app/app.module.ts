import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './Components/header/header.component';
import { LogoApComponent } from './Components/logo-ap/logo-ap.component';
import { BannerComponent } from './Components/banner/banner.component';
import { SocialComponent } from './Components/social/social.component';
import { AcercaDeComponent } from './Components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { PercentPipe } from '@angular/common';
import { FooterComponent } from './Components/footer/footer.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { InterceptorService } from './service/interceptor-service';
import { NewExperienciaComponent } from './Components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './Components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './Components/educacion/new-educacion.component';
import { EditEducacionComponent } from './Components/educacion/edit-educacion.component';
import { EditAcercaDeComponent } from './Components/acerca-de/edit-acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    BannerComponent,
    SocialComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    FooterComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditAcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    ReactiveFormsModule,

    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      maxPercent: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "'#677E9B'",
      innerStrokeColor: "'#9EA4AB'",
      showImage: true,
      imageWidth: 90,
      imageHeight: 90,
      showSubtitle: false,
      showUnits: false,
      animation: true,
      animationDuration: 1000,
    }),
    HttpClientModule,
  ],
  providers: [
    InterceptorService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
