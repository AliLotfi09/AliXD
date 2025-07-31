import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas');
const app = new Application(canvas);

app.load(import.meta.env.BASE_URL + 'scene.splinecode').then(() => {
  const loader = document.querySelector('section');
  const blackOverlay = document.getElementById('black-overlay');

  // مرحله 1: فید لودینگ
  loader.classList.add('fade-out');

  setTimeout(() => {
    loader.remove();

    // مرحله 2: فید بلک اورلی
    blackOverlay.style.opacity = '0';

    // مرحله 3: حذف کامل اورلی بعد از fade
    setTimeout(() => {
      blackOverlay.remove();
    }, 1000); // باید با duration اورلی یکی باشه

  }, 500); // باید با duration لودینگ یکی باشه
});
