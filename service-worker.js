// Version number for caching purposes (day_month_year)
const version = 7_9_2022;

// Workbox
self.__WB_DISABLE_DEV_LOGS = true
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
     ({request}) => request.destination === 'image',
     new workbox.strategies.CacheFirst()
);