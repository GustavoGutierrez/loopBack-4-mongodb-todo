import {StarterApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {StarterApplication};

export async function main(options?: ApplicationConfig) {
  const app = new StarterApplication(options);
  await app.boot();
  await app.start();
  return app;
}
