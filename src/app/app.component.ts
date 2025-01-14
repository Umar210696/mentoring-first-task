import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежа' ];

// console.log (menuItems);
const menuCatalog = menuItems.map (
  (item) => {
    return item.toUpperCase();
  }
)

const menuPagination = ['5', '4', '3', '2', '1'];

console.log(menuPagination);


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog = true;

  readonly headeritem1 = 'Каталог';

  readonly headeritem2 = 'О компании';

  readonly headeritem3 = 'Каталог';


  readonly header2item1 = 'Каталог';

  readonly header2item2 = 'Стройматериалы';

  readonly header2item3 = 'Инструменты';

  readonly header2item4 = 'Электрика';

  readonly header2item5 = 'Интерьер и одежда';

  menuItems = menuCatalog;
  
  menuCatalog = true; 

  isShowMen = true;

  changeMenuText () {
    this.menuItems = menuCatalog.map(
      item => this.menuCatalog ? item.toLowerCase() : item.toUpperCase()
    );

    this.menuCatalog = ! this.menuCatalog
  }

  readonly menuPagination = menuPagination
  
}
