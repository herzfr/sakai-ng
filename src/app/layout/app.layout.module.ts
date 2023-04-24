import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { Route, RouterModule } from '@angular/router';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppConfigModule } from './config/config.module';
import { AppSidebarComponent } from "./app.sidebar.component";
import { AppLayoutExComponent } from './app.layout.component';
import { CommonModule } from '@angular/common';

const router: Route[] = [
    {
        path: '', component: AppLayoutExComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: () => import('../demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'uikit', loadChildren: () => import('../demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
            //     { path: 'utilities', loadChildren: () => import('../demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
            //     { path: 'documentation', loadChildren: () => import('../demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
            //     { path: 'blocks', loadChildren: () => import('../demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
            //     { path: 'pages', loadChildren: () => import('../demo/components/pages/pages.module').then(m => m.PagesModule) },
            //     { path: '**', redirectTo: '/notfound' }
        ]
    }
]

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutExComponent
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        FormsModule,
        // HttpClientModule,
        // BrowserAnimationsModule,
        RouterModule.forChild(router),
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule
    ],
    exports: [AppLayoutExComponent]
})
export class AppLayoutExModule { }
