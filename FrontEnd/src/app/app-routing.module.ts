import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './Components/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './Components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './Components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './Components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './Components/experiencia/new-experiencia.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { EditProyectoComponent } from './Components/proyectos/editproyecto.component';
import { NewProyectoComponent } from './Components/proyectos/newproyecto.component';
import { EditSkillComponent } from './Components/skills/editskill.component';
import { NewSkillComponent } from './Components/skills/newskill.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NewEducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'editAbout/:id', component: EditAcercaDeComponent },
  { path: 'editproyecto/:id', component: EditProyectoComponent },
  { path: 'newproyecto', component: NewProyectoComponent },
  { path: 'newskill', component: NewSkillComponent },
  { path: 'editskill/:id', component: EditSkillComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
    })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
