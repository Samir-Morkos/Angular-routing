import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent,title:'HOME' },
  {path:'about', component:AboutComponent,title:'about' },
  {path:'contact', component:ContactComponent,title:'contact' },
  {path:'portfolio', component:PortfolioComponent,title:'portfolio' },




  {path:'**',component:NotFoundComponent,title:'notFounded'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
