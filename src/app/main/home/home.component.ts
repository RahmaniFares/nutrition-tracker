import { toSignal } from '@angular/core/rxjs-interop';
import { AfterViewInit, Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentComponent } from "./content/content.component";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(16px)' }),
        animate('350ms cubic-bezier(.4,0,.2,1)', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ]
})
export class HomeComponent   {





}
