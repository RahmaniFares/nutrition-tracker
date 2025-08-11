import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./home/footer/footer.component";
import { HeaderComponent } from './home/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nutrition-app';

  ngAfterViewInit(): void {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    const header = document.querySelector('.sticky-nav') as HTMLElement;
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        header.classList.remove('shadow-md');
        return;
      }

      if (currentScroll > lastScroll && !header.classList.contains('-translate-y-full')) {
        header.classList.add('-translate-y-full');
        header.classList.remove('shadow-md');
      } else if (currentScroll < lastScroll && header.classList.contains('-translate-y-full')) {
        header.classList.remove('-translate-y-full');
        header.classList.add('shadow-md');
      }

      lastScroll = currentScroll;
    });
  }
}
