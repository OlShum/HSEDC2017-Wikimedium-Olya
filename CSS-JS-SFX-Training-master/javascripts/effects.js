$(function() {
  var ftlState = 'full'
  var ftlTransformed = false
  var h1 = $('h1')
  var delay = 50
  var s1;

  var ftla1 = [
                'F',
                'Fa',
                'Fas',
                'Fash',
                'Fashi',
                'Fashio',
                'Fashion',
                'Fashion ',
                'Fashion T',
                'Fashion Te',
                'Fashion Tec',
                'Fashion Tech',
                'Fashion Tech ',
                'Fashion Tech L',
                'Fashion Tech La',
                'Fashion Tech Lab'
              ]

  var ftla2 = [
                'FTL',
                'FaTL',
                'FasTL',
                'FashTL',
                'FashiTL',
                'FashioTL',
                'FashionTL',
                'Fashion TL',
                'Fashion TeL',
                'Fashion TecL',
                'Fashion TechL',
                'Fashion Tech L',
                'Fashion Tech La',
                'Fashion Tech Lab'
              ]

  function h1mutate(arr) {
    clearInterval(s1);
    var i = 0;
    s1 = setInterval(function(){
        h1.text(arr[i]);
        i += 1;
        if(i >= arr.length){
            clearInterval(s1);
        }
    },delay);
  }

  function teletypeFTL() {
    if (ftlTransformed == true) {
      return
    }

    var rev = ftla2.slice()
    rev.reverse()

    h1mutate(rev)

    $('#ftl').addClass('large')
    ftlTransformed = true
  }

  function teletypeFashionTechLabBack() {
    if (ftlTransformed == false) {
      return
    }

    $('#ftl').removeClass('large')

    h1mutate(ftla2)

    ftlTransformed = false
  }

  // $(document).on('scroll', function() {
  function teletype(i) {
    var offset = -document.getElementsByClassName('screen')[0].getBoundingClientRect().top
    var dHeight = $(document).height() - window.innerHeight
    var scrolled = offset/dHeight

    // console.log(i)
    if (i == 1 || i == 5 || i > 9) {
      teletypeFashionTechLabBack()
    } else {
      teletypeFTL()
    }
  }

  setTimeout(function() {
    h1mutate(ftla1)
    setTimeout(function() {
      $('.rectangle').addClass('stage1')
    }, 0)
  }, 100)





  function switchStyles(i) {
    document.getElementById('rectangle').className = 'rectangle'
    $('.rectangle').addClass('stage' + i)

    document.getElementById('taglineWrapper').className = 'taglineWrapper'
    $('.taglineWrapper').addClass('screen' + i)

    if (i == 3) {
      $('#ftl').addClass('white')
    } else if (i == 5) {
      $('#ftl').removeClass('white')
      $('#ftl').addClass('left')
    } else {
      $('#ftl').removeClass('white')
    }
  }


  $(".main").onepage_scroll({
    sectionContainer: ".screen",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {
      // console.log(index)
      // switchStyles(index)
      teletype(index)
      switchStyles(index)
      // ga('send', {'hitType': 'pageview','page': index});
    },  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {
      // console.log(index)
    },   // This option accepts a callback function. The function will be called after the page moves.
    loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
  })

  var colors = [
    ['3137FD', 'D2E2F5', '00BAFF', '789EC8'],
    ['FC3468', 'FF6289', 'FF93AC', 'FFC2CD'],
    ['006633', '00994D', '00CC66', 'A2D2A4']
  ]

  var texts = 4

  var random1000 = Math.floor(Math.random() * 1000)
  var crand = random1000 % colors.length
  var trand = random1000 % texts + 1

  function setMode() {
    document.documentElement.style.setProperty('--color1', '#' + colors[crand][0])
    document.documentElement.style.setProperty('--color2', '#' + colors[crand][1])
    document.documentElement.style.setProperty('--color3', '#' + colors[crand][2])
    document.documentElement.style.setProperty('--color4', '#' + colors[crand][3])

    $('body').addClass('mode' + trand)
  }

  setMode()
})
