function randomImage() {
   var desktop = [
      'assets/img/bg/vapor.gif',
      'assets/img/bg/vapor-1.gif',
      'assets/img/bg/vapor-2.gif',
      'assets/img/bg/vapor-3.jpg',
      'assets/img/bg/vapor-4.jpg',
      'assets/img/bg/vapor-5.gif',
      'assets/img/bg/vapor-6.gif',
      'assets/img/bg/vapor-7.gif',
      'assets/img/bg/vapor-8.gif',
      'assets/img/bg/vapor-9.gif',
      'assets/img/bg/vapor-10.gif',
      'assets/img/bg/vapor-11.gif',
   ];
   var mobile = [
      'assets/img/bg/vapor-mob.jpg',
      'assets/img/bg/vapor-mob2.png',
      'assets/img/bg/vapor-mob3.gif',
      'assets/img/bg/vapor-mob4.jpg',
      'assets/img/bg/vapor-mob5.jpg',
      'assets/img/bg/vapor-mob6.gif',
      'assets/img/bg/vapor-mob7.gif',
      'assets/img/bg/vapor-mob8.gif',
      'assets/img/bg/vapor-mob9.gif',
      'assets/img/bg/vapor-mob10.gif',
      'assets/img/bg/vapor-mob11.gif',
   ];

   if (window.innerWidth <= 800) {
      var x = Math.floor(mobile.length * Math.random());
      var element = document.getElementsByClassName('hero');
      element[0].style['background-image'] = 'url(' + mobile[x] + ')';
   } else {
      var x = Math.floor(desktop.length * Math.random());
      var element = document.getElementsByClassName('hero');
      element[0].style['background-image'] = 'url(' + desktop[x] + ')';
   }
}

document.addEventListener('DOMContentLoaded', randomImage);
