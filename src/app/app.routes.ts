import { Routes } from '@angular/router';
import { ContentLayoutComponent } from "./layout/content-layout/content-layout.component";
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: ContentLayoutComponent,
        children: [
            {
                path: 'homes',
                loadChildren: () => import('./features/dashboard-home/dashboard-home.routes').then(m => m.DASHBOARD_HOME_ROUTES)
            },
            {
                path: 'subscriptions',
                loadChildren: () => import('./features/dashboard-subscription/dashboard-subscription.routes').then(m => m.DASHBOARD_SUBSCRIPTION_ROUTES)
            }
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                loadChildren: () => import('./features/login/login.routes').then(m => m.LOGIN_ROUTES)
            },
        ]
    },
    { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];
