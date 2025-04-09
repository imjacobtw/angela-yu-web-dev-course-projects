import axios from "axios";
import bodyParser from "body-parser";
import express from "express";
import 'dotenv/config';

const WEATHER_RESPONSE = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1744167600,
          "main": {
              "temp": 281.81,
              "feels_like": 279.74,
              "temp_min": 280.4,
              "temp_max": 281.81,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 1000,
              "humidity": 50,
              "temp_kf": 1.41
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 3
          },
          "wind": {
              "speed": 3.54,
              "deg": 156,
              "gust": 7.78
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-09 03:00:00"
      },
      {
          "dt": 1744178400,
          "main": {
              "temp": 280.09,
              "feels_like": 276.94,
              "temp_min": 278.87,
              "temp_max": 280.09,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 999,
              "humidity": 61,
              "temp_kf": 1.22
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 26
          },
          "wind": {
              "speed": 4.93,
              "deg": 159,
              "gust": 11.58
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-09 06:00:00"
      },
      {
          "dt": 1744189200,
          "main": {
              "temp": 277.82,
              "feels_like": 274.01,
              "temp_min": 277.82,
              "temp_max": 277.82,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 997,
              "humidity": 72,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 93
          },
          "wind": {
              "speed": 5.14,
              "deg": 159,
              "gust": 12.28
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-09 09:00:00"
      },
      {
          "dt": 1744200000,
          "main": {
              "temp": 278.5,
              "feels_like": 274.14,
              "temp_min": 278.5,
              "temp_max": 278.5,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 996,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 96
          },
          "wind": {
              "speed": 6.92,
              "deg": 175,
              "gust": 16.61
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-09 12:00:00"
      },
      {
          "dt": 1744210800,
          "main": {
              "temp": 282.32,
              "feels_like": 278.76,
              "temp_min": 282.32,
              "temp_max": 282.32,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 995,
              "humidity": 67,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 7.95,
              "deg": 179,
              "gust": 17.25
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-09 15:00:00"
      },
      {
          "dt": 1744221600,
          "main": {
              "temp": 290.45,
              "feels_like": 289.85,
              "temp_min": 290.45,
              "temp_max": 290.45,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 993,
              "humidity": 62,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 7.6,
              "deg": 195,
              "gust": 14.18
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-09 18:00:00"
      },
      {
          "dt": 1744232400,
          "main": {
              "temp": 292.34,
              "feels_like": 291.88,
              "temp_min": 292.34,
              "temp_max": 292.34,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 990,
              "humidity": 60,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 6.71,
              "deg": 219,
              "gust": 14.73
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-09 21:00:00"
      },
      {
          "dt": 1744243200,
          "main": {
              "temp": 289.84,
              "feels_like": 289.44,
              "temp_min": 289.84,
              "temp_max": 289.84,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 992,
              "humidity": 72,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.54,
              "deg": 260,
              "gust": 12.55
          },
          "visibility": 10000,
          "pop": 0.2,
          "rain": {
              "3h": 0.21
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-10 00:00:00"
      },
      {
          "dt": 1744254000,
          "main": {
              "temp": 284.27,
              "feels_like": 283.76,
              "temp_min": 284.27,
              "temp_max": 284.27,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 995,
              "humidity": 89,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 54
          },
          "wind": {
              "speed": 3.12,
              "deg": 324,
              "gust": 10.22
          },
          "visibility": 10000,
          "pop": 0.72,
          "rain": {
              "3h": 0.38
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-10 03:00:00"
      },
      {
          "dt": 1744264800,
          "main": {
              "temp": 282.75,
              "feels_like": 282.43,
              "temp_min": 282.75,
              "temp_max": 282.75,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 994,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 54
          },
          "wind": {
              "speed": 1.42,
              "deg": 249,
              "gust": 1.47
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-10 06:00:00"
      },
      {
          "dt": 1744275600,
          "main": {
              "temp": 282.7,
              "feels_like": 281.13,
              "temp_min": 282.7,
              "temp_max": 282.7,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 994,
              "humidity": 89,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 2.99,
              "deg": 237,
              "gust": 5.74
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-10 09:00:00"
      },
      {
          "dt": 1744286400,
          "main": {
              "temp": 282.74,
              "feels_like": 281.65,
              "temp_min": 282.74,
              "temp_max": 282.74,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 995,
              "humidity": 91,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 2.27,
              "deg": 237,
              "gust": 3.04
          },
          "visibility": 10000,
          "pop": 0.2,
          "rain": {
              "3h": 0.31
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-10 12:00:00"
      },
      {
          "dt": 1744297200,
          "main": {
              "temp": 288.48,
              "feels_like": 287.92,
              "temp_min": 288.48,
              "temp_max": 288.48,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 996,
              "humidity": 71,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 32
          },
          "wind": {
              "speed": 4.77,
              "deg": 291,
              "gust": 8.1
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 0.84
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-10 15:00:00"
      },
      {
          "dt": 1744308000,
          "main": {
              "temp": 288.3,
              "feels_like": 287.39,
              "temp_min": 288.3,
              "temp_max": 288.3,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 995,
              "humidity": 58,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 52
          },
          "wind": {
              "speed": 2.13,
              "deg": 311,
              "gust": 5.13
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 0.22
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-10 18:00:00"
      },
      {
          "dt": 1744318800,
          "main": {
              "temp": 290.86,
              "feels_like": 290.04,
              "temp_min": 290.86,
              "temp_max": 290.86,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 994,
              "humidity": 52,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 28
          },
          "wind": {
              "speed": 7.37,
              "deg": 310,
              "gust": 10.41
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-10 21:00:00"
      },
      {
          "dt": 1744329600,
          "main": {
              "temp": 287.49,
              "feels_like": 286.62,
              "temp_min": 287.49,
              "temp_max": 287.49,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 995,
              "humidity": 63,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 33
          },
          "wind": {
              "speed": 6.11,
              "deg": 314,
              "gust": 13.15
          },
          "visibility": 10000,
          "pop": 0.26,
          "rain": {
              "3h": 0.42
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-11 00:00:00"
      },
      {
          "dt": 1744340400,
          "main": {
              "temp": 281.8,
              "feels_like": 279.62,
              "temp_min": 281.8,
              "temp_max": 281.8,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 998,
              "humidity": 90,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 47
          },
          "wind": {
              "speed": 3.74,
              "deg": 341,
              "gust": 9.57
          },
          "visibility": 10000,
          "pop": 0.88,
          "rain": {
              "3h": 0.48
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-11 03:00:00"
      },
      {
          "dt": 1744351200,
          "main": {
              "temp": 280.23,
              "feels_like": 277.82,
              "temp_min": 280.23,
              "temp_max": 280.23,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 999,
              "humidity": 95,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 28
          },
          "wind": {
              "speed": 3.53,
              "deg": 323,
              "gust": 8.05
          },
          "visibility": 10000,
          "pop": 0.22,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-11 06:00:00"
      },
      {
          "dt": 1744362000,
          "main": {
              "temp": 280.93,
              "feels_like": 277.98,
              "temp_min": 280.93,
              "temp_max": 280.93,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1000,
              "humidity": 89,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.95,
              "deg": 2,
              "gust": 8.47
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-11 09:00:00"
      },
      {
          "dt": 1744372800,
          "main": {
              "temp": 278.99,
              "feels_like": 275.29,
              "temp_min": 278.99,
              "temp_max": 278.99,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1002,
              "humidity": 85,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.56,
              "deg": 10,
              "gust": 9.36
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-11 12:00:00"
      },
      {
          "dt": 1744383600,
          "main": {
              "temp": 278.54,
              "feels_like": 274.73,
              "temp_min": 278.54,
              "temp_max": 278.54,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1004,
              "humidity": 76,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.54,
              "deg": 7,
              "gust": 8.15
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-11 15:00:00"
      },
      {
          "dt": 1744394400,
          "main": {
              "temp": 281.94,
              "feels_like": 279.63,
              "temp_min": 281.94,
              "temp_max": 281.94,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1004,
              "humidity": 61,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.08,
              "deg": 352,
              "gust": 6.35
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-11 18:00:00"
      },
      {
          "dt": 1744405200,
          "main": {
              "temp": 283.95,
              "feels_like": 282.65,
              "temp_min": 283.95,
              "temp_max": 283.95,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1003,
              "humidity": 60,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 3.66,
              "deg": 348,
              "gust": 6.02
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-11 21:00:00"
      },
      {
          "dt": 1744416000,
          "main": {
              "temp": 283.15,
              "feels_like": 281.51,
              "temp_min": 283.15,
              "temp_max": 283.15,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1003,
              "humidity": 61,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 3.27,
              "deg": 353,
              "gust": 6.52
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-12 00:00:00"
      },
      {
          "dt": 1744426800,
          "main": {
              "temp": 278.88,
              "feels_like": 276.77,
              "temp_min": 278.88,
              "temp_max": 278.88,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1003,
              "humidity": 73,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 34
          },
          "wind": {
              "speed": 2.68,
              "deg": 340,
              "gust": 3.36
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-12 03:00:00"
      },
      {
          "dt": 1744437600,
          "main": {
              "temp": 277.6,
              "feels_like": 275.14,
              "temp_min": 277.6,
              "temp_max": 277.6,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1003,
              "humidity": 76,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 24
          },
          "wind": {
              "speed": 2.81,
              "deg": 350,
              "gust": 4.41
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-12 06:00:00"
      },
      {
          "dt": 1744448400,
          "main": {
              "temp": 276.45,
              "feels_like": 275.08,
              "temp_min": 276.45,
              "temp_max": 276.45,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1003,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 29
          },
          "wind": {
              "speed": 1.56,
              "deg": 17,
              "gust": 1.63
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-12 09:00:00"
      },
      {
          "dt": 1744459200,
          "main": {
              "temp": 276.17,
              "feels_like": 276.17,
              "temp_min": 276.17,
              "temp_max": 276.17,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1003,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 19
          },
          "wind": {
              "speed": 0.96,
              "deg": 17,
              "gust": 0.99
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-12 12:00:00"
      },
      {
          "dt": 1744470000,
          "main": {
              "temp": 282.85,
              "feels_like": 282.85,
              "temp_min": 282.85,
              "temp_max": 282.85,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1003,
              "humidity": 62,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 4
          },
          "wind": {
              "speed": 1.33,
              "deg": 99,
              "gust": 1.24
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-12 15:00:00"
      },
      {
          "dt": 1744480800,
          "main": {
              "temp": 287.05,
              "feels_like": 285.8,
              "temp_min": 287.05,
              "temp_max": 287.05,
              "pressure": 1022,
              "sea_level": 1022,
              "grnd_level": 1001,
              "humidity": 50,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 50
          },
          "wind": {
              "speed": 1.03,
              "deg": 133,
              "gust": 1.12
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-12 18:00:00"
      },
      {
          "dt": 1744491600,
          "main": {
              "temp": 288.92,
              "feels_like": 287.7,
              "temp_min": 288.92,
              "temp_max": 288.92,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 998,
              "humidity": 44,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 4
          },
          "wind": {
              "speed": 1.9,
              "deg": 180,
              "gust": 2.6
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-12 21:00:00"
      },
      {
          "dt": 1744502400,
          "main": {
              "temp": 286.44,
              "feels_like": 285.42,
              "temp_min": 286.44,
              "temp_max": 286.44,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 997,
              "humidity": 61,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 6
          },
          "wind": {
              "speed": 2.12,
              "deg": 156,
              "gust": 1.98
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-13 00:00:00"
      },
      {
          "dt": 1744513200,
          "main": {
              "temp": 283,
              "feels_like": 280.91,
              "temp_min": 283,
              "temp_max": 283,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 997,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 34
          },
          "wind": {
              "speed": 4.13,
              "deg": 153,
              "gust": 10.2
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-13 03:00:00"
      },
      {
          "dt": 1744524000,
          "main": {
              "temp": 281.88,
              "feels_like": 279.75,
              "temp_min": 281.88,
              "temp_max": 281.88,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 996,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 38
          },
          "wind": {
              "speed": 3.68,
              "deg": 160,
              "gust": 9.9
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-13 06:00:00"
      },
      {
          "dt": 1744534800,
          "main": {
              "temp": 281.95,
              "feels_like": 279.33,
              "temp_min": 281.95,
              "temp_max": 281.95,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 994,
              "humidity": 81,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 4.77,
              "deg": 166,
              "gust": 13.18
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2025-04-13 09:00:00"
      },
      {
          "dt": 1744545600,
          "main": {
              "temp": 282.07,
              "feels_like": 279.06,
              "temp_min": 282.07,
              "temp_max": 282.07,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 993,
              "humidity": 81,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 73
          },
          "wind": {
              "speed": 5.89,
              "deg": 167,
              "gust": 15.72
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-13 12:00:00"
      },
      {
          "dt": 1744556400,
          "main": {
              "temp": 288.03,
              "feels_like": 287.32,
              "temp_min": 288.03,
              "temp_max": 288.03,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 991,
              "humidity": 67,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 86
          },
          "wind": {
              "speed": 7.55,
              "deg": 177,
              "gust": 16.76
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-13 15:00:00"
      },
      {
          "dt": 1744567200,
          "main": {
              "temp": 294.07,
              "feels_like": 293.68,
              "temp_min": 294.07,
              "temp_max": 294.07,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 987,
              "humidity": 56,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 79
          },
          "wind": {
              "speed": 8.94,
              "deg": 185,
              "gust": 16.73
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-13 18:00:00"
      },
      {
          "dt": 1744578000,
          "main": {
              "temp": 296.46,
              "feels_like": 296.36,
              "temp_min": 296.46,
              "temp_max": 296.46,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 986,
              "humidity": 58,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 55
          },
          "wind": {
              "speed": 8.08,
              "deg": 202,
              "gust": 16.2
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-13 21:00:00"
      },
      {
          "dt": 1744588800,
          "main": {
              "temp": 293.96,
              "feels_like": 293.79,
              "temp_min": 293.96,
              "temp_max": 293.96,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 986,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 30
          },
          "wind": {
              "speed": 6.58,
              "deg": 205,
              "gust": 14.18
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2025-04-14 00:00:00"
      }
  ],
  "city": {
      "id": 4383306,
      "name": "Dardenne Prairie",
      "coord": {
          "lat": 38.7726,
          "lon": -90.7076
      },
      "country": "US",
      "population": 11494,
      "timezone": -18000,
      "sunrise": 1744112173,
      "sunset": 1744158752
  }
};

async function getWeatherData(cityName) {
  const geocodingResponse = await axios.get(GEOCODING_API_BASE_URL, {
    params: {
      q: cityName,
      appid: API_KEY
    }
  });
  const geocodingData = geocodingResponse.data;

  if (geocodingData.length == 0) {
    throw new Error("That city could not be found.");
  }

  const { latitude, longitude } = geocodingData[0];
  const weatherResponse = await axios.get(WEATHER_API_BASE_URL, {
    params: {
      lat: latitude,
      lon: longitude,
      appid: API_KEY
    }
  });

  return weatherResponse.data;
}

const API_KEY = process.env.API_KEY;
const GEOCODING_API_BASE_URL = "http://api.openweathermap.org/geo/1.0/direct";
const WEATHER_API_BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  return res.render("index", { weatherData: WEATHER_RESPONSE });
  // try {
  //   const weatherData = await getWeatherData("New York");
  //   return res.render("index", { weatherData });
  // } catch (err) {
  //   console.error(err);
  //   return res.render("index", { error: err });
  // }
});

app.post("/", async (req, res) => {
  const { cityName } = req.body;

  try {
    const weatherData = await getWeatherData(cityName);
    return res.render("index", { weatherData });
  } catch (err) {
    console.error(err);
    return res.render("index", { error: err });
  }
});

app.use("/", (req, res) => {
  return res.render("error");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});