import { Component } from '@angular/core';
import { LayoutPageService } from '../service/app.layout.service';

@Component({
    selector: 'app-footer-content',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    constructor(public layoutService: LayoutPageService) { }
}
