

window.onload = function () {

// logo   
const logo = document.querySelector('#logo');
logo.addEventListener('click',  () => {
  document.location = 'index.html'
})

// // Burger menu 
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('active');
		header.classList.toggle('sticky');
    if(document.body.style.background === 'fixed') {
      document.body.style.background = ''
      document.body.style.overflow = ''
    } else {
      document.body.style.background = 'fixed'
      document.body.style.overflow = 'hidden'
    }
	});

// Scroll Up 
document.addEventListener("scroll", scrolling);

let scrollUpButton = document.querySelector("#scrollUpButton");
let  footerHeight = document.querySelector('footer').offsetHeight;


// console.log(footerHeight)
// console.log(scrollUpButton.scrollTop)

function scrolling() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.3;
  // let stophere = scrollableHeight - footerHeight
  let stophere = document.body.clientHeight - footerHeight + 100

  // window.onscroll = loc()
  // function loc() {
  //   console.log(document.body.scrollTop)
  // }

  // let rect = window.getBoundingClientRect().bottom;
  // console.log(scrollableHeight)
  // console.log(stophere)
  console.log(stophere)
  console.log(window.pageYOffset)
  // console.log(document.documentElement.scrollTop)
  // console.log(document.body.clientHeight)
  // console.log(footerHeight)

  // scrollUpButton.style.bottom = rect + 'px'

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
    scrollUpButton.position = 'initial'
  }

  if (stophere === window.pageYOffset) {
  // if (stophere === document.body.clientHeight) {
    console.log('here')
    scrollUpButton.style.position = 'sticky'
} 

// console.log(scrollUpButton.scrollTop)

  // if(footerHeight)
}

scrollUpButton.addEventListener("click", scrollToTop);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    // scrollUpButton.style.position = 'initial'
  }


// Create cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
  const d = new Date();
  d.setTime(d.getTime() + (24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

document.querySelector("#accept").addEventListener('click', acceptCookieConsent)


// Set cookie consent
function acceptCookieConsent(){
  deleteCookie('user_cookie_consent');
  setCookie('user_cookie_consent', 1, 30);
  document.getElementById("consent-popup").classList.add('hidden');
}

let cookie_consent = getCookie("user_cookie_consent");
if(cookie_consent !== ""){
    document.getElementById("consent-popup").classList.add('hidden');
} else if (cookie_consent === "") {
    document.getElementById("consent-popup").classList.remove('hidden')
}

document.querySelector('#decline').addEventListener('click', () => {
  document.getElementById("consent-popup").classList.add = "disabled";
  }
 )

}


// Initialize and add the map
function initMap(sel) {

  let markers = [
    {
      name: 'PURCH restaurant',
      type: 'Ēdināšana',
      lat: '56.95984755356249',
      long: '24.101384645927986',
      city: 'Rīga',
      imgUrl: './assets/img/map\ purch.png',
      phone: '+371 28361686',
      email: 'info@purch.com',
      address: 'Dzelzavas iela 51A'
    },
    {
      name: 'Kurts coffee',
      type: 'Ēdināšana',
      lat: '56.95063246816818',
      long: '24.08491499333425',
      city: 'Rīga',
      imgUrl: './assets/img/map\ kurts.png',
      phone: '+371 28361686',
      email: 'info@kurtscoffee.lv',
      address: 'Cēsu iela 20, Tērbatas iela 2i'
    },
    {
      name: 'AUCH beauty home',
      type: 'Skaistumkopšana',
      lat: '56.942005337118886',
      long: '24.130202359745546',
      city: 'Rīga',
      imgUrl: './assets/img/AUCHlogo.png',
      phone: '+371 28361686',
      email: 'auchbeauty@gmail.com',
      address: 'Maskavas iela 5, Rīga'
    },
    {
      name: 'Solar Beauty',
      type: 'Skaistumkopšana',
      lat: '56.93967305929707',
      long: '24.09642828387112',
      city: 'Rīga',
      imgUrl: './assets/img/map\ solarium.png',
      phone: '+371 28361686',
      email: 'info@solarbeauty.lv',
      address: 'Torņakalna iela 31, Rīga'
    },
    {
      name: 'Yoga Centrs',
      type: 'Fitness',
      lat: '56.94988672066354',
      long: '24.106254577738383',
      city: 'Rīga',
      imgUrl: './assets/img/map\ warming.png',
      phone: '+371 28361686',
      email: 'info@yogacentrs.lv',
      address: 'Staļļu iela 13, Rīga'
    },
    {
      name: 'Spa Town',
      type: 'Skaistumkopšana',
      lat: '56.64126222089826',
      long: '23.689934721867015',
      city: 'Jelgava',
      imgUrl: './assets/img/map\ spa.png',
      phone: '+371 28361686',
      email: 'info@spatown.com',
      address: 'Liepas iela 2, Jelgava'
    },
    {
      name: 'Eco Fast Food',
      type: 'Ēdināšana',
      lat: '56.65934625045924',
      long: '23.737695953305572',
      city: 'Jelgava',
      imgUrl: './assets/img/map\ eco.png',
      phone: '+371 28361686',
      email: 'info@eff.lv',
      address: 'Brīvības iela 2, Jelgava'
    },
    {
      name: 'Muscle Fit',
      type: 'Fitness',
      lat: '56.650826970875634',
      long: '23.74117524831103',
      city: 'Jelgava',
      imgUrl: './assets/img/map\ weights.png',
      phone: '+371 28361686',
      email: 'info@musclefit.lv',
      address: 'Baložu iela 10, Jelgava'
    },
    {
      name: 'Hawai Pizza',
      type: 'Ēdināšana',
      lat: '56.819401307430965',
      long: '24.594447799932812',
      city: 'Ogre',
      imgUrl: './assets/img/map\ pizza.png',
      phone: '+371 28361686',
      email: 'info@hawaipizza.lv',
      address: 'Vidus Prospekts 43, Ogre'
    },
    {
      name: 'Fine Dine',
      type: 'Ēdināšana',
      lat: '56.81075720383894',
      long: '24.609725661980164',
      city: 'Ogre',
      imgUrl: './assets/img/map\ tray.png',
      phone: '+371 28361686',
      email: 'info@finedine.lv',
      address: 'Dārza iela 25, Ogre'
    },
    {
      name: 'Sporta stunda',
      type: 'Fitness',
      lat: '56.8146226105645',
      long: '24.616626632531126',
      city: 'Ogre',
      imgUrl: './assets/img/map\ dumbbell.png',
      phone: '+371 28361686',
      email: 'info@sportastunda.lv',
      address: 'Jāņa Čakstes iela 31, Ogre'
    } 
  ]

  const filterResult = () => document.querySelectorAll(".selectCustom-trigger")

  const createFilteredResults = document.querySelector('.filteredBusiness')


let arr = Array.from(filterResult())

let whichCity = markers.filter((each) => {
  return each.city === arr[0].innerText
})

let whichFilter = markers.filter((each) => {
  return each.type === arr[1].innerText
})

let totalFilter;

  if(whichCity.length === 0) {
    totalFilter = markers.filter((each) => {
          return each.city === "Rīga"
  })
}

if (whichCity.length !== 0 && whichFilter.length !== 0) {
   totalFilter = markers.filter((each) => {
    return each.city === arr[0].innerText && each.type === arr[1].innerText
  })
} else if (whichCity.length !== 0 && whichFilter.length === 0) {
  totalFilter = whichCity;
} 

if(whichFilter.length !== 0 && whichCity.length !== 0){
  createFilteredResults.innerHTML = ""
  createFilteredResults.classList.add('margin')

  totalFilter.map((each) => {
    
    let resultDiv = document.createElement('div')
    resultDiv.setAttribute('class', "result-div");
    
    let resultImg = document.createElement('img')
    resultImg.setAttribute('class', "result-img");
    resultImg.src = each.imgUrl
    
    let resultTitle = document.createElement('p')
    resultTitle.setAttribute('class', "Text1");
    resultTitle.innerHTML = each.name
    
    let resultText = document.createElement('p')
    resultText.setAttribute('class', "Text2");
    resultText.innerHTML = `${each.phone} <br /> ${each.address}`


    resultDiv.append(resultImg)
    resultDiv.append(resultTitle)
    resultDiv.append(resultText)
    createFilteredResults.append(resultDiv)
  })
}

  let selectedCity = () => {
    if(arr[0].innerText === "Jelgava") {
      return { lat: 56.6511, lng: 23.7214 };
    } else if (arr[0].innerText === "Ogre") {
      return { lat: 56.8147, lng: 24.6045 };
    } else {
      return { lat: 56.95014781446832, lng: 24.111373075886004 }; 
    }
  } 

  let orangeMarker = "./assets/img/map\ marker\ orange.png"
  let blackMarker = "./assets/img/map\ marker\ black.png"

  let map = new google.maps.Map(document.getElementById("map"), 
  {
    mapId: "503295174c71f663",
    center: { lat: 56.94, lng: 24.1 },
    center: selectedCity(),
    zoom: 13,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  });

  
  let allMarkers = [];
  let allInfoWin = [];

  for( let i =0; i < totalFilter.length; i++) {
    const currMarker = totalFilter[i];

    let marker =  new google.maps.Marker({
      position: new google.maps.LatLng(currMarker.lat, currMarker.long),
      map,
      title: currMarker.name,
      icon: orangeMarker,
      animation: google.maps.Animation.DROP
    })

    allMarkers.push(marker)

    const contentString = `
    <div class="content">
      <img class="map-logo" src="${currMarker.imgUrl}" alt="#" />
      <div class="bodyContent">
        <h3>${currMarker.name}</h3>
        <p class="Text2">${currMarker.phone}
        <br />
         ${currMarker.email}
         <br />
        ${currMarker.address}</p>
      </div>
    </div>
  `

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    pixelOffset: new google.maps.Size(50, 50)
  });
  

  marker.addListener("click", () => {
    allInfoWin.map((each) => {
      each.close()
    })

    infowindow.open(
      map,
      marker
    );
    allInfoWin = []
    allInfoWin.push(infowindow)


     if(marker.icon === orangeMarker) {
      allMarkers.map((each) => {
        each.setIcon(orangeMarker)
      })

      marker.setIcon(blackMarker)
    } 
    else {
      marker.setIcon(orangeMarker)
      infowindow.close();
    }
    
  });

  google.maps.event.addListener(map, "click", function(event) {
    infowindow.close();
    marker.setIcon(orangeMarker)
    });
  }

}


window.initMap = initMap;

const mapControls = document.querySelectorAll('.gm-control-active')

console.log(Array.from(mapControls))

