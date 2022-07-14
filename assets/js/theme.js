

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

function scrolling() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.3;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

scrollUpButton.addEventListener("click", scrollToTop);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

 

}


let markers = [
  {
    name: 'PURCH restaurant',
    type: 'Ēdināšana',
    lat: '56.95984755356249',
    long: '24.101384645927986',
    city: 'Rīga',
    imgUrl: '../../assets/img/map\ purch.png',
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
    imgUrl: '../../assets/img/map\ kurts.png',
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
    imgUrl: '../../assets/img/AUCHlogo.png',
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
    imgUrl: '../../assets/img/map\ solarium.png',
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
    imgUrl: '../../assets/img/map\ warming.png',
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
    imgUrl: '../../assets/img/map\ spa.png',
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
    imgUrl: '../../assets/img/map\ eco.png',
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
    imgUrl: '../../assets/img/map\ weights.png',
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
    imgUrl: '../../assets/img/map\ pizza.png',
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
    imgUrl: '../../assets/img/map\ tray.png',
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
    imgUrl: '../../assets/img/map\ dumbbell.png',
    phone: '+371 28361686',
    email: 'info@sportastunda.lv',
    address: 'Jāņa Čakstes iela 31, Ogre'
  } 
]
       

let selectedCity = 'Rīga';
let selectedFilter = 'Izvēlies';


// console.log(markers)


  function hybridSoloInit(elSelect) {
    // Selecting each element separately 
  // const businessLocation = document.querySelector(".business-location").lastElementChild.firstElementChild;
  // const businessFilter = document.querySelector(".business-filter").lastElementChild.firstElementChild;

  // Selecting each element dynamically 
  // const businessFilter = document.querySelector(".business-filter").lastElementChild.firstElementChild;

  // const customSelectorTwo = document.getElementsByClassName("selectCustom-options")[0];

  // const locationOptions = businessLocation.parentElement.lastElementChild.lastElementChild
  // const filterOptions = businessFilter.parentElement.lastElementChild.lastElementChild

  const elSelectNative = elSelect.getElementsByClassName("js-selectNative")[0];
  const elSelectCustom = elSelect.getElementsByClassName("js-selectCustom")[0];
  const customSelector = elSelect.getElementsByClassName("selectCustom-options")[0];

  // Create City and bussiness type filters dynamically 
  // const cities = Array.from(new Set(markers.map((each) => {
  //   return each.city
  //  })))
   
  //  cities.map((each) => {
  //  let newOption = document.createElement("option");
  //  let newDiv = document.createElement("div");

  //    let optionText = document.createTextNode(each);

  //    newOption.innerHTML = optionText.data
  //    newOption.setAttribute('value', optionText.data);

  //    newDiv.appendChild(optionText)
  //    newDiv.setAttribute('class', "selectCustom-option");
  //    newDiv.setAttribute("data-value", optionText.data);

  //   //  businessLocation.append(newOption)
  //   //  locationOptions.append(newDiv)
  //    elSelectNativeTwo.append(newOption)
  //    customSelector.append(newDiv)
  //  })

  //  const businessType = new Set(markers.map((each) => {
  //   return each.type
  //  }))

  //  console.log(businessFilter)
  // //  console.log(businessType)

  //  businessType.map((each) => {
  //   let newOption = document.createElement("option");
  //   let newDiv = document.createElement("div");
 
  //     let optionText = document.createTextNode(each);
 
  //     newOption.innerHTML = optionText.data
  //     newOption.setAttribute('value', optionText.data);
 
  //     newDiv.appendChild(optionText)
  //     newDiv.setAttribute('class', "selectCustom-option");
  //     newDiv.setAttribute("data-value", optionText.data);
 
  //     businessFilter.append(newOption)
  //     filterOptions.append(newDiv)
  //   })

  
  const elSelectCustomBox = elSelectCustom.children[0];
  const elSelectCustomOpts = elSelectCustom.children[1];
  const customOptsList = Array.from(elSelectCustomOpts.children);
  const optionsCount = customOptsList.length;
  const defaultLabel = elSelectCustomBox.getAttribute("data-value");

  // console.log(customOptsList)


  let optionChecked = "";
  let optionHoveredIndex = -1;


  

    


  // Toggle custom select visibility when clicking the box
  elSelectCustomBox.addEventListener("click", (e) => {
    const isClosed = !elSelectCustom.classList.contains("isActive");

    if (isClosed) {
      openSelectCustom();
    } else {
      closeSelectCustom();
    }
  });

  function openSelectCustom() {
    elSelectCustom.classList.add("isActive");
    // selectedCity = elSelectCustom
    // console.log(elSelectCustom.innerHTML)
    
    // Remove aria-hidden in case this was opened by a user
    // who uses AT (e.g. Screen Reader) and a mouse at the same time.
    elSelectCustom.setAttribute("aria-hidden", false);

  // console.log(customOptsList)
  let customOptions = Array.from(document.getElementsByClassName("selectCustom-option"))
  // console.log(customOptions)



    if (optionChecked) {
      // const optionCheckedIndex = customOptions.findIndex(
      const optionCheckedIndex = customOptsList.findIndex(
        (el) => el.getAttribute("data-value") === optionChecked
      );
      updateCustomSelectHovered(optionCheckedIndex);
    }

    // Add related event listeners
    document.addEventListener("click", watchClickOutside);
    document.addEventListener("keydown", supportKeyboardNavigation);
  }

  function closeSelectCustom() {
    elSelectCustom.classList.remove("isActive");

    elSelectCustom.setAttribute("aria-hidden", true);

    updateCustomSelectHovered(-1);

    // Remove related event listeners
    document.removeEventListener("click", watchClickOutside);
    document.removeEventListener("keydown", supportKeyboardNavigation);
  }

  function updateCustomSelectHovered(newIndex) {
    const prevOption = elSelectCustomOpts.children[optionHoveredIndex];
    const option = elSelectCustomOpts.children[newIndex];

    if (prevOption) {
      prevOption.classList.remove("isHover");
    }
    if (option) {
      option.classList.add("isHover");
    }

    optionHoveredIndex = newIndex;
  }

  function updateCustomSelectChecked(value, text) {
    const prevValue = optionChecked;

    const elPrevOption = elSelectCustomOpts.querySelector(
      `[data-value="${prevValue}"`
    );
    const elOption = elSelectCustomOpts.querySelector(`[data-value="${value}"`);

    if (elPrevOption) {
      elPrevOption.classList.remove("isActive");
    }

    if (elOption) {
      elOption.classList.add("isActive");
      
      // selectedCity = elOption.dataset.value;
      // setSelectedCity(elOption.dataset.value)
      let selections = Array.from(document.querySelectorAll('.selectCustom-trigger'));
      // async function getSelections(){
      //   let result = await document.querySelectorAll('.selectCustom-trigger');
      //   return Array.from(result)
      // }

      // console.log(getSelections())
      initMap(selections[0].innerText, selections[1].innerText)
      // initMap(elOption.dataset.value)

      
    }
    // console.log(selectedCity)

    elSelectCustomBox.textContent = text;
    optionChecked = value;

    const selectedEl = document.querySelector('.selectCustom-trigger')

    if(optionChecked !== 'Izvēlies') {
      // console.log('it is');
      // console.log(selectedEl.parentElement.firstElementChild);
      selectedEl.parentElement.firstElementChild.classList.add('selected-bold');
      selectedEl.parentElement.firstElementChild.innerHTML = selectedEl.parentElement.firstElementChild.innerHTML+ "<div class='select-border'></div>";
    }
    // return selectedCity
  }

  // console.log(selectedCity)


  function watchClickOutside(e) {
    const didClickedOutside = !elSelectCustom.contains(event.target);
    if (didClickedOutside) {
      closeSelectCustom();
    }
  }

  function supportKeyboardNavigation(e) {
    // press down -> go next
    if (event.keyCode === 40 && optionHoveredIndex < optionsCount - 1) {
      let index = optionHoveredIndex;
      e.preventDefault(); // prevent page scrolling
      updateCustomSelectHovered(optionHoveredIndex + 1);
    }

    // press up -> go previous
    if (event.keyCode === 38 && optionHoveredIndex > 0) {
      e.preventDefault(); // prevent page scrolling
      updateCustomSelectHovered(optionHoveredIndex - 1);
    }

    // press Enter or space -> select the option
    if (event.keyCode === 13 || event.keyCode === 32) {
      e.preventDefault();

      const option = elSelectCustomOpts.children[optionHoveredIndex];
      const value = option && option.getAttribute("data-value");

      if (value) {
        elSelectNative.value = value;
        updateCustomSelectChecked(value, option.textContent);
      }
      closeSelectCustom();
    }

    // press ESC -> close selectCustom
    if (event.keyCode === 27) {
      closeSelectCustom();
    }
  }

  // Update selectCustom value when selectNative is changed.
  elSelectNative.addEventListener("change", (e) => {
    const value = e.target.value;
    const elRespectiveCustomOption = elSelectCustomOpts.querySelectorAll(
      `[data-value="${value}"]`
    )[0];

    updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
  });

  // Update selectCustom value when an option is clicked or hovered
  customOptsList.forEach(function (elOption, index) {
    elOption.addEventListener("click", (e) => {
      const value = e.target.getAttribute("data-value");

      // Sync native select to have the same value
      elSelectNative.value = value;
      updateCustomSelectChecked(value, e.target.textContent);
      closeSelectCustom();
    });

    elOption.addEventListener("mouseenter", (e) => {
      updateCustomSelectHovered(index);
    });

    // TODO: Toggle these event listeners based on selectCustom visibility
  });
}

function hybridSelectInit() {
  const allSelectsInPage = document.getElementsByClassName("js-hybridSelect");
// console.log(allSelectsInPage)

  for (let i = 0; i < allSelectsInPage.length; i++) {
    hybridSoloInit(allSelectsInPage[i]);
  }
}

hybridSelectInit();





// Initialize and add the map
function initMap(selCity, selFilter) {
// function initMap(selCity) {

  // let selections = Array.from(document.querySelectorAll('.selectCustom-trigger'));
  // console.log(selections.map((each) => {
  //   return each.innerText
  // }))
  // console.log(selCity, selFilter)
  
  // Test to try to check both selectors 
  // let selected = () => {
  //   let selections = Array.from(document.querySelectorAll('.selectCustom-trigger'));
  // console.log(selections[0].innerText)

    // if(selections[0].innerText === "Jelgava") {
    //   return { lat: 56.6511, lng: 23.7214 };
    // } else if (selections[0].innerText === "Ogre") {
    //   return { lat: 56.8147, lng: 24.6045 };
    // } else {
    //   return { lat: 56.95014781446832, lng: 24.111373075886004 }; 
    // }

    
  // } 
  // console.log(selected())
  // Original just to check which city 
  let selectedCity = () => {
    if(selCity === "Jelgava") {
      return { lat: 56.6511, lng: 23.7214 };
    } else if (selCity === "Ogre") {
      return { lat: 56.8147, lng: 24.6045 };
    } else {
      return { lat: 56.95014781446832, lng: 24.111373075886004 }; 
    }
  } 

  // console.log(selectedCity())

  let orangeMarker = "../../assets/img/map\ marker\ orange.png"
  let blackMarker = "../../assets/img/map\ marker\ black.png"

  let map = new google.maps.Map(document.getElementById("map"), 
  {
    mapId: "503295174c71f663",
    // center: { lat: 56.94, lng: 24.1 },
    // center: selected(),
    center: selectedCity(),
    // center: { lat: 56.8147, lng: 24.6045 },
    zoom: 13,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  });

  
  let allMarkers = [];
  let allInfoWin = [];
  // let activeMarker = [];

  for( let i =0; i < markers.length; i++) {
    const currMarker = markers[i];

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
      // console.log(allMarkers[0].find((mark) => {
      //   mark.icon === blackMarker
      // }))
      allMarkers.map((each) => {
        each.setIcon(orangeMarker)
      })

      marker.setIcon(blackMarker)
      // activeMarker.push(marker)

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

// Dynamic Grid 
let gridContainer = document.querySelector('#video-grid')

for(i = 1; i < 100; i++) {
  let imageDiv = document.createElement('div')
  imageDiv.setAttribute('class', "eachVideo");
  gridContainer.append(imageDiv)
}

// let arr = ['a', 'b', 'c']
// for(i = 0; i < arr.length + 100; i++) {
//   i += 1;
//   console.log('yes' + i)
// }
