// * Base
import { ChangeDetectionStrategy, Component } from '@angular/core';

// * Types
interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface ICurrentWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  rain: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

@Component({
  selector: 'app-leader-test',
  templateUrl: './leader-test.component.html',
  styleUrls: ['./leader-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaderTestComponent {
  protected currentWeatherData: ICurrentWeather[] = [
    {
      coord: {
        lon: 10.99,
        lat: 44.34,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      base: 'stations',
      main: {
        temp: 298.48,
        feels_like: 298.74,
        temp_min: 297.56,
        temp_max: 300.05,
        pressure: 1015,
        humidity: 64,
        sea_level: 1015,
        grnd_level: 933,
      },
      visibility: 10000,
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
      },
      rain: {
        '1h': 3.16,
      },
      clouds: {
        all: 100,
      },
      dt: 1661870592,
      sys: {
        type: 2,
        id: 2075663,
        country: 'IT',
        sunrise: 1661834187,
        sunset: 1661882248,
      },
      timezone: 7200,
      id: 3163858,
      name: 'Zocca',
      cod: 200,
    },
  ];
}
