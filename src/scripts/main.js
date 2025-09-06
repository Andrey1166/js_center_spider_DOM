'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.style.position = wall.style.position || 'relative';
spider.style.position = 'absolute';

if (spider.clientWidth > 0 && wall.clientWidth > 0) {
  spider.style.left = (wall.clientWidth - spider.clientWidth) / 2 + 'px';
  spider.style.top = (wall.clientHeight - spider.clientHeight) / 2 + 'px';
}
