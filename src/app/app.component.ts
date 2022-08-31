import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-netflix'

  comedyFilms: Ifilms = {
    section: 'Comedia',
    films: [
      {
        title: 'Casi 300',
        image: '../assets/images/Comedia/casi300.webp'
      },
      {
        title: 'Los Cazafantasmas',
        image: '../assets/images/Comedia/cazafantasmas.webp'
      },
      {
        title: 'El Dictador',
        image: '../assets/images/Comedia/dictador.webp'
      },
      {
        title: 'Érase una vez... Hollywood',
        image: '../assets/images/Comedia/erasehollywood.webp'
      },
      {
        title: 'Family Guy',
        image: '../assets/images/Comedia/family guy.webp'
      }
    ]
  }

  horrorFilms: Ifilms = {
    section: 'Terror',
    films: [
      {
        title: 'El Apostol',
        image: '../assets/images/Terror/apostol.jpg'
      },
      {
        title: 'La Calle del Terror Parte II',
        image: '../assets/images/Terror/calleterror.jpg'
      },
      {
        title: 'Infierno Bajo el Agua',
        image: '../assets/images/Terror/infiernoagua.webp'
      },
      {
        title: 'Insidious II',
        image: '../assets/images/Terror/insidious2.webp'
      },
      {
        title: 'Life',
        image: '../assets/images/Terror/life.webp'
      }
    ]
    }

    topTen : Ifilms = {
      section: 'Top Ten',
      films: [
        {
          title: 'La Casa de Papel',
          image: '../assets/images/Top10/1-papel.webp'
        },
        {
          title: 'La Reina del Flow',
          image: '../assets/images/Top10/2-reina.webp'
        },
        {
          title: 'Titanes',
          image: '../assets/images/Top10/3-titanes.webp'
        },
        {
          title: 'Lost in Space',
          image: '../assets/images/Top10/4-lostinspace.webp'
        },
        {
          title: 'Donde Caben Dos',
          image: '../assets/images/Top10/5-dondecaben.webp'
        },
      ]
    }
}

interface Ifilms {
  section: string,
  films: IfilmsObject[]
}

interface IfilmsObject {
  title: string,
  image: string
}
