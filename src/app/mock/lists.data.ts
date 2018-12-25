export interface HeaderLink {
  buttonText: string;
  name: string;
  url: string;
  icon: string;
}
export interface MockHeader {
  title: string;
  hasCTO?: boolean;
  heroBG?: string;
  link?: HeaderLink;
}

// export const MockHeaders = {
//   'home': {
//     title: 'Find location./n/n Get weather./n/ Make plans.',
//     hasCTO: true,
//     heroBG: 'url(' + '../assets/images/backgrounds/map_blue.jpg' + ')',
//     link: {
//       name: 'Location',
//       url: 'location',
//       buttonText: 'Searh Location',
//       icon: 'ocation_on'
//     }

//   }
// };

export interface Action {
  buttonType?:
    | 'mat-fab'
    | 'mat-mini-fab'
    | 'mat-flat-button'
    | 'mat-raised-button'
    | 'mat-stroked-button'
    | 'mat-button';
  args?: any;
  icon?: string;
  name?: 'log' | 'navigate' | 'save' | 'delete';
}

export class FlexItem {
  title: string;
  subtitle?: string;
  image?: { url: string; alt: string };
  caption: string;
  alignActions: 'start' | 'center' | 'end';
  actions: Action[];
}

export const MockFlexList: FlexItem[] = [
  {
    title: 'Fast and Intelligent',
    subtitle: 'Uses Weather API endpoint with custom search fields',
    image: {
      url: 'https://placeimg.com/400/400/any',
      alt: 'Image'
    },
    caption:
      'A simple design makes finding the weather a breeze... wherever you are.',
    alignActions: 'end',
    actions: [
      {
        buttonType: 'mat-mini-fab',
        name: 'navigate',
        args: ['location'],
        icon: 'navigation'
      }
    ]
  },
  {
    title: 'HTTP back-end',
    subtitle: 'No fuss, just a url',
    image: {
      url: 'https://placeimg.com/400/400/any',
      alt: 'Image'
    },
    caption: 'Results are returned as Json, paresed then displayed.',
    alignActions: 'end',
    actions: [
      {
        buttonType: 'mat-mini-fab',
        name: 'navigate',
        args: ['home'],
        icon: 'navigation'
      }
    ]
  },
  {
    title: 'Save your locations',
    subtitle: 'Resgister with MyWeather, and do-whacha-wat, yo',
    image: {
      url: 'https://placeimg.com/400/400/any',
      alt: 'Image'
    },
    caption: `Connect with Google or Facebook, or use your <b>email</b> and <b>password</b>.`,
    alignActions: 'end',
    actions: [
      {
        buttonType: 'mat-mini-fab',
        name: 'navigate',
        args: ['home'],
        icon: 'navigation'
      }
    ]
  }
];
