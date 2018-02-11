const path = document.querySelector('#wave');
const animation = document.querySelector('#moveTheWave');
const m = 0.512286623256592433;

function buildWave(w, h) {

    const a = h / 4;
    const y = h / 2;

    const pathData = [
    'M', w * 0, y + a / 2,
    'c',
      a * m, 0,
      -(1 - a) * m, -a,
      a, -a,
    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a,
    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a,

    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a,
    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a,
    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a,
    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a,
    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a
  ].join(' ');

    path.setAttribute('d', pathData);
}

buildWave(90, 60);


$(document).ready(function () {
    console.log('loading');
    setTimeout(showpage, 3000);
});

function showpage() {
    console.log('fade');
    $("#loadingscreen").addClass('fadeaway');
    setTimeout(hiddenloading, 1000);
}

function hiddenloading() {
    console.log('ready');
    $("#loadingscreen").addClass('loadinghidden');
    $("#loadingscreen").removeClass('fadeaway');
    $("#loading").hide();
}
