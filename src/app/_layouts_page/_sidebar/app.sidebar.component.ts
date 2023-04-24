import { Component, ElementRef } from '@angular/core';
import { LayoutPageService } from '../service/app.layout.service';

@Component({
    selector: 'app-sidebar-content',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
    constructor(public layoutService: LayoutPageService, public el: ElementRef) { }
}

