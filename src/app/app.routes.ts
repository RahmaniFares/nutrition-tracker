import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AlimentsComponent } from './main/home/aliments/aliments.component';
import { AlimentDetailsComponent } from './main/home/aliment-details/aliment-details.component';
import { RecipesComponent } from './main/home/recipes/recipes.component';
import { LoginComponent } from './main/home/login/login.component';
import { RegisterComponent } from './main/home/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './main/home/content/content.component';
import { CaloriesCalculatorComponent } from './main/home/calories-calculator/calories-calculator.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    // children: [
    //     {path: 'content',component:ContentComponent },
    //     {path: 'aliments', component: AlimentsComponent },
    //     {path: 'aliment/:id', component: AlimentDetailsComponent },
    //     {path: 'recipes', component: RecipesComponent },
    //     {path: 'login', component: LoginComponent},
    //     {path: 'register', component: RegisterComponent}
    // ]
  },
  {
    path: 'home',
    component: HomeComponent,
     children: [
         {path: 'content',component:ContentComponent },
         {path: 'aliments', component: AlimentsComponent },
         {path: 'aliment/:id', component: AlimentDetailsComponent },
         {path: 'recipes', component: RecipesComponent },
         {path: 'login', component: LoginComponent},
         {path: 'register', component: RegisterComponent},
         {path: 'calculateCalories', component: CaloriesCalculatorComponent}
     ]
  },
  {path:'dashboard',component: DashboardComponent},

];
