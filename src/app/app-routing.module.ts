import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipComponent } from 'src/app/animations/flip/flip.component';
import { BouncingComponent } from './animations/bouncing/bouncing.component';
import { ShakeComponent } from './animations/shake/shake.component';
import { SlideOutComponent } from './animations/slide-out/slide-out.component';

const routes: Routes = [
  { path: 'flip', component: FlipComponent },
  { path: 'slide-out', component: SlideOutComponent },
  { path: 'bouncing', component: BouncingComponent },
  { path: 'shaking', component: ShakeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
