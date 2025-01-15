import { Routes } from '@angular/router';
import { UsersComponent } from './components/users-list/users.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/homePage.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent
    },

    {
        path: 'header',
        component: HeaderComponent
    },

    {
        path: '',
        component: HomePageComponent
    },

    {
        path: 'footer',
        component: FooterComponent

    },
];
