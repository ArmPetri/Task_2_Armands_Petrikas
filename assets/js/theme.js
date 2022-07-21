

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

  // 404 Status Page Redirect 
  let statusButton = document.querySelector('.status-button')
  statusButton.addEventListener('click', () => {
    document.location = 'index.html'
  })



// Markers 
// let markers = [
//   {
//     name: 'PURCH restaurant',
//     type: 'Ēdināšana',
//     lat: '56.95984755356249',
//     long: '24.101384645927986',
//     city: 'Rīga',
//     imgUrl: '../../assets/img/map\ purch.png',
//     phone: '+371 28361686',
//     email: 'info@purch.com',
//     address: 'Dzelzavas iela 51A'
//   },
//   {
//     name: 'Kurts coffee',
//     type: 'Ēdināšana',
//     lat: '56.95063246816818',
//     long: '24.08491499333425',
//     city: 'Rīga',
//     imgUrl: '../../assets/img/map\ kurts.png',
//     phone: '+371 28361686',
//     email: 'info@kurtscoffee.lv',
//     address: 'Cēsu iela 20, Tērbatas iela 2i'
//   },
//   {
//     name: 'AUCH beauty home',
//     type: 'Skaistumkopšana',
//     lat: '56.942005337118886',
//     long: '24.130202359745546',
//     city: 'Rīga',
//     imgUrl: '../../assets/img/AUCHlogo.png',
//     phone: '+371 28361686',
//     email: 'auchbeauty@gmail.com',
//     address: 'Maskavas iela 5, Rīga'
//   },
//   {
//     name: 'Solar Beauty',
//     type: 'Skaistumkopšana',
//     lat: '56.93967305929707',
//     long: '24.09642828387112',
//     city: 'Rīga',
//     imgUrl: '../../assets/img/map\ solarium.png',
//     phone: '+371 28361686',
//     email: 'info@solarbeauty.lv',
//     address: 'Torņakalna iela 31, Rīga'
//   },
//   {
//     name: 'Yoga Centrs',
//     type: 'Fitness',
//     lat: '56.94988672066354',
//     long: '24.106254577738383',
//     city: 'Rīga',
//     imgUrl: '../../assets/img/map\ warming.png',
//     phone: '+371 28361686',
//     email: 'info@yogacentrs.lv',
//     address: 'Staļļu iela 13, Rīga'
//   },
//   {
//     name: 'Spa Town',
//     type: 'Skaistumkopšana',
//     lat: '56.64126222089826',
//     long: '23.689934721867015',
//     city: 'Jelgava',
//     imgUrl: '../../assets/img/map\ spa.png',
//     phone: '+371 28361686',
//     email: 'info@spatown.com',
//     address: 'Liepas iela 2, Jelgava'
//   },
//   {
//     name: 'Eco Fast Food',
//     type: 'Ēdināšana',
//     lat: '56.65934625045924',
//     long: '23.737695953305572',
//     city: 'Jelgava',
//     imgUrl: '../../assets/img/map\ eco.png',
//     phone: '+371 28361686',
//     email: 'info@eff.lv',
//     address: 'Brīvības iela 2, Jelgava'
//   },
//   {
//     name: 'Muscle Fit',
//     type: 'Fitness',
//     lat: '56.650826970875634',
//     long: '23.74117524831103',
//     city: 'Jelgava',
//     imgUrl: '../../assets/img/map\ weights.png',
//     phone: '+371 28361686',
//     email: 'info@musclefit.lv',
//     address: 'Baložu iela 10, Jelgava'
//   },
//   {
//     name: 'Hawai Pizza',
//     type: 'Ēdināšana',
//     lat: '56.819401307430965',
//     long: '24.594447799932812',
//     city: 'Ogre',
//     imgUrl: '../../assets/img/map\ pizza.png',
//     phone: '+371 28361686',
//     email: 'info@hawaipizza.lv',
//     address: 'Vidus Prospekts 43, Ogre'
//   },
//   {
//     name: 'Fine Dine',
//     type: 'Ēdināšana',
//     lat: '56.81075720383894',
//     long: '24.609725661980164',
//     city: 'Ogre',
//     imgUrl: '../../assets/img/map\ tray.png',
//     phone: '+371 28361686',
//     email: 'info@finedine.lv',
//     address: 'Dārza iela 25, Ogre'
//   },
//   {
//     name: 'Sporta stunda',
//     type: 'Fitness',
//     lat: '56.8146226105645',
//     long: '24.616626632531126',
//     city: 'Ogre',
//     imgUrl: '../../assets/img/map\ dumbbell.png',
//     phone: '+371 28361686',
//     email: 'info@sportastunda.lv',
//     address: 'Jāņa Čakstes iela 31, Ogre'
//   } 
// ]



// 20 July 
/* Features to make the selectCustom work for mouse users.

- Toggle custom select visibility when clicking the "box"
- Update custom select value when clicking in a option
- Navigate through options when using keyboard up/down
- Pressing Enter or Space selects the current hovered option
- Close the select when clicking outside of it
- Sync both selects values when selecting a option. (native or custom)
*/

// function hybridSoloInit(elSelect) {
//   const elSelectNative = elSelect.getElementsByClassName("js-selectNative")[0];
//   const elSelectCustom = elSelect.getElementsByClassName("js-selectCustom")[0];
//   const elSelectCustomBox = elSelectCustom.children[0];
//   const elSelectCustomOpts = elSelectCustom.children[1];
//   const customOptsList = Array.from(elSelectCustomOpts.children);
//   const optionsCount = customOptsList.length;
//   const defaultLabel = elSelectCustomBox.getAttribute("data-value");

//   let optionChecked = "";
//   let optionHoveredIndex = -1;

//   // Toggle custom select visibility when clicking the box
//   elSelectCustomBox.addEventListener("click", (e) => {
//     const isClosed = !elSelectCustom.classList.contains("isActive");

//     if (isClosed) {
//       openSelectCustom();
//     } else {
//       closeSelectCustom();
//     }
//   });

//   function openSelectCustom() {
//     elSelectCustom.classList.add("isActive");
//     // Remove aria-hidden in case this was opened by a user
//     // who uses AT (e.g. Screen Reader) and a mouse at the same time.
//     elSelectCustom.setAttribute("aria-hidden", false);

//     if (optionChecked) {
//       const optionCheckedIndex = customOptsList.findIndex(
//         (el) => el.getAttribute("data-value") === optionChecked
//       );
//       updateCustomSelectHovered(optionCheckedIndex);
//     }

//     // Add related event listeners
//     document.addEventListener("click", watchClickOutside);
//     document.addEventListener("keydown", supportKeyboardNavigation);
//   }

//   function closeSelectCustom() {
//     elSelectCustom.classList.remove("isActive");

//     elSelectCustom.setAttribute("aria-hidden", true);

//     updateCustomSelectHovered(-1);

//     // Remove related event listeners
//     document.removeEventListener("click", watchClickOutside);
//     document.removeEventListener("keydown", supportKeyboardNavigation);
//   }

//   function updateCustomSelectHovered(newIndex) {
//     const prevOption = elSelectCustomOpts.children[optionHoveredIndex];
//     const option = elSelectCustomOpts.children[newIndex];

//     if (prevOption) {
//       prevOption.classList.remove("isHover");
//     }
//     if (option) {
//       option.classList.add("isHover");
//     }

//     optionHoveredIndex = newIndex;
//   }

//   function updateCustomSelectChecked(value, text) {
//     const prevValue = optionChecked;

//     const elPrevOption = elSelectCustomOpts.querySelector(
//       `[data-value="${prevValue}"`
//     );
//     const elOption = elSelectCustomOpts.querySelector(`[data-value="${value}"`);

//     if (elPrevOption) {
//       elPrevOption.classList.remove("isActive");
//     }

//     if (elOption) {
//       elOption.classList.add("isActive");
//     }

//     elSelectCustomBox.textContent = text;
//     optionChecked = value;
//   }

//   function watchClickOutside(e) {
//     const didClickedOutside = !elSelectCustom.contains(event.target);
//     if (didClickedOutside) {
//       closeSelectCustom();
//     }
//   }

//   function supportKeyboardNavigation(e) {
//     // press down -> go next
//     if (event.keyCode === 40 && optionHoveredIndex < optionsCount - 1) {
//       let index = optionHoveredIndex;
//       e.preventDefault(); // prevent page scrolling
//       updateCustomSelectHovered(optionHoveredIndex + 1);
//     }

//     // press up -> go previous
//     if (event.keyCode === 38 && optionHoveredIndex > 0) {
//       e.preventDefault(); // prevent page scrolling
//       updateCustomSelectHovered(optionHoveredIndex - 1);
//     }

//     // press Enter or space -> select the option
//     if (event.keyCode === 13 || event.keyCode === 32) {
//       e.preventDefault();

//       const option = elSelectCustomOpts.children[optionHoveredIndex];
//       const value = option && option.getAttribute("data-value");

//       if (value) {
//         elSelectNative.value = value;
//         updateCustomSelectChecked(value, option.textContent);
//       }
//       closeSelectCustom();
//     }

//     // press ESC -> close selectCustom
//     if (event.keyCode === 27) {
//       closeSelectCustom();
//     }
//   }

//   // Update selectCustom value when selectNative is changed.
//   elSelectNative.addEventListener("change", (e) => {
//     const value = e.target.value;
//     const elRespectiveCustomOption = elSelectCustomOpts.querySelectorAll(
//       `[data-value="${value}"]`
//     )[0];

//     updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
//   });

//   // Update selectCustom value when an option is clicked or hovered
//   customOptsList.forEach(function (elOption, index) {
//     elOption.addEventListener("click", (e) => {
//       const value = e.target.getAttribute("data-value");

//       // Sync native select to have the same value
//       elSelectNative.value = value;
//       updateCustomSelectChecked(value, e.target.textContent);
//       closeSelectCustom();
//     });

//     elOption.addEventListener("mouseenter", (e) => {
//       updateCustomSelectHovered(index);
//     });

//     // TODO: Toggle these event listeners based on selectCustom visibility
//   });
// }

// function hybridSelectInit() {
//   const allSelectsInPage = document.getElementsByClassName("js-hybridSelect");

//   for (let i = 0; i < allSelectsInPage.length; i++) {
//     hybridSoloInit(allSelectsInPage[i]);
//   }
// }

// hybridSelectInit();

// 20 July End





       
// Old Selector 

// let selectedCity = 'Rīga';
// let selectedFilter = 'Izvēlies';

//   function hybridSoloInit(elSelect) {
//     // Selecting each element separately 
//   // const businessLocation = document.querySelector(".business-location").lastElementChild.firstElementChild;
//   // const businessFilter = document.querySelector(".business-filter").lastElementChild.firstElementChild;

//   // Selecting each element dynamically 
//   const businessFilter = document.querySelector(".business-filter").lastElementChild.firstElementChild;

//   // const customSelectorTwo = document.getElementsByClassName("selectCustom-options")[0];

//   // const locationOptions = businessLocation.parentElement.lastElementChild.lastElementChild
//   // const filterOptions = businessFilter.parentElement.lastElementChild.lastElementChild

//   // const elSelectNative = elSelect.getElementsByClassName("js-selectNative")[0];
//   // const elSelectCustom = elSelect.getElementsByClassName("js-selectCustom")[0];
//   // const customSelector = elSelect.getElementsByClassName("selectCustom-options")[0];

//   // Create City and bussiness type filters dynamically 
//   const cities = Array.from(new Set(markers.map((each) => {
//     return each.city
//    })))
   
//    cities.map((each) => {
//    let newOption = document.createElement("option");
//    let newDiv = document.createElement("div");

//      let optionText = document.createTextNode(each);

//      newOption.innerHTML = optionText.data
//      newOption.setAttribute('value', optionText.data);

//      newDiv.appendChild(optionText)
//      newDiv.setAttribute('class', "selectCustom-option");
//      newDiv.setAttribute("data-value", optionText.data);

//     //  businessLocation.append(newOption)
//     //  locationOptions.append(newDiv)
//      elSelectNativeTwo.append(newOption)
//      customSelector.append(newDiv)
//    })

//    const businessType = new Set(markers.map((each) => {
//     return each.type
//    }))

//    console.log(businessFilter)
//   //  console.log(businessType)

//    businessType.map((each) => {
//     let newOption = document.createElement("option");
//     let newDiv = document.createElement("div");
 
//       let optionText = document.createTextNode(each);
 
//       newOption.innerHTML = optionText.data
//       newOption.setAttribute('value', optionText.data);
 
//       newDiv.appendChild(optionText)
//       newDiv.setAttribute('class', "selectCustom-option");
//       newDiv.setAttribute("data-value", optionText.data);
 
//       businessFilter.append(newOption)
//       filterOptions.append(newDiv)
//     })

  
//   const elSelectCustomBox = elSelectCustom.children[0];
//   const elSelectCustomOpts = elSelectCustom.children[1];
//   const customOptsList = Array.from(elSelectCustomOpts.children);
//   const optionsCount = customOptsList.length;
//   const defaultLabel = elSelectCustomBox.getAttribute("data-value");

//   // console.log(customOptsList)


//   let optionChecked = "";
//   let optionHoveredIndex = -1;


  

    


//   // Toggle custom select visibility when clicking the box
//   elSelectCustomBox.addEventListener("click", (e) => {
//     const isClosed = !elSelectCustom.classList.contains("isActive");

//     if (isClosed) {
//       openSelectCustom();
//     } else {
//       closeSelectCustom();
//     }
//   });

//   function openSelectCustom() {
//     elSelectCustom.classList.add("isActive");
//     // selectedCity = elSelectCustom
//     // console.log(elSelectCustom.innerHTML)
    
//     // Remove aria-hidden in case this was opened by a user
//     // who uses AT (e.g. Screen Reader) and a mouse at the same time.
//     elSelectCustom.setAttribute("aria-hidden", false);

//   // console.log(customOptsList)
//   let customOptions = Array.from(document.getElementsByClassName("selectCustom-option"))
//   // console.log(customOptions)



//     if (optionChecked) {
//       // const optionCheckedIndex = customOptions.findIndex(
//       const optionCheckedIndex = customOptsList.findIndex(
//         (el) => el.getAttribute("data-value") === optionChecked
//       );
//       updateCustomSelectHovered(optionCheckedIndex);
//     }

//     // Add related event listeners
//     document.addEventListener("click", watchClickOutside);
//     document.addEventListener("keydown", supportKeyboardNavigation);
//   }

//   function closeSelectCustom() {
//     elSelectCustom.classList.remove("isActive");

//     elSelectCustom.setAttribute("aria-hidden", true);

//     updateCustomSelectHovered(-1);

//     // Remove related event listeners
//     document.removeEventListener("click", watchClickOutside);
//     document.removeEventListener("keydown", supportKeyboardNavigation);
//   }

//   function updateCustomSelectHovered(newIndex) {
//     const prevOption = elSelectCustomOpts.children[optionHoveredIndex];
//     const option = elSelectCustomOpts.children[newIndex];

//     if (prevOption) {
//       prevOption.classList.remove("isHover");
//     }
//     if (option) {
//       option.classList.add("isHover");
//     }

//     optionHoveredIndex = newIndex;
//   }

//   function updateCustomSelectChecked(value, text) {
//     const prevValue = optionChecked;

//     const elPrevOption = elSelectCustomOpts.querySelector(
//       `[data-value="${prevValue}"`
//     );
//     const elOption = elSelectCustomOpts.querySelector(`[data-value="${value}"`);

//     if (elPrevOption) {
//       elPrevOption.classList.remove("isActive");
//     }

//     if (elOption) {
//       elOption.classList.add("isActive");
      
//       // selectedCity = elOption.dataset.value;
//       // setSelectedCity(elOption.dataset.value)
//       let selections = Array.from(document.querySelectorAll('.selectCustom-trigger'));
//       // async function getSelections(){
//       //   let result = await document.querySelectorAll('.selectCustom-trigger');
//       //   return Array.from(result)
//       // }

//       // console.log(getSelections())


//       // COMMENTED OUT 20 July 
//       // initMap(selections[0].innerText, selections[1].innerText)

//       // COMMENTED BEFORE 
//       // initMap(elOption.dataset.value)

      
//     }
//     // console.log(selectedCity)

//     elSelectCustomBox.textContent = text;
//     optionChecked = value;

//     const selectedEl = document.querySelector('.selectCustom-trigger')

//     if(optionChecked !== 'Izvēlies') {
//       // console.log('it is');
//       // console.log(selectedEl.parentElement.firstElementChild);
//       selectedEl.parentElement.firstElementChild.classList.add('selected-bold');
//       selectedEl.parentElement.firstElementChild.innerHTML = selectedEl.parentElement.firstElementChild.innerHTML+ "<div class='select-border'></div>";
//     }
//     // return selectedCity
//   }

//   // console.log(selectedCity)


//   function watchClickOutside(e) {
//     const didClickedOutside = !elSelectCustom.contains(event.target);
//     if (didClickedOutside) {
//       closeSelectCustom();
//     }
//   }

//   // Keyboard Navigation 
//   // function supportKeyboardNavigation(e) {
//   //   // press down -> go next
//   //   if (event.keyCode === 40 && optionHoveredIndex < optionsCount - 1) {
//   //     let index = optionHoveredIndex;
//   //     e.preventDefault(); // prevent page scrolling
//   //     updateCustomSelectHovered(optionHoveredIndex + 1);
//   //   }

//   //   // press up -> go previous
//   //   if (event.keyCode === 38 && optionHoveredIndex > 0) {
//   //     e.preventDefault(); // prevent page scrolling
//   //     updateCustomSelectHovered(optionHoveredIndex - 1);
//   //   }

//   //   // press Enter or space -> select the option
//   //   if (event.keyCode === 13 || event.keyCode === 32) {
//   //     e.preventDefault();

//   //     const option = elSelectCustomOpts.children[optionHoveredIndex];
//   //     const value = option && option.getAttribute("data-value");

//   //     if (value) {
//   //       elSelectNative.value = value;
//   //       updateCustomSelectChecked(value, option.textContent);
//   //     }
//   //     closeSelectCustom();
//   //   }
//   //   // press ESC -> close selectCustom
//   //   if (event.keyCode === 27) {
//   //     closeSelectCustom();
//   //   }
//   // }

//   // Update selectCustom value when selectNative is changed.
//   elSelectNative.addEventListener("change", (e) => {
//     const value = e.target.value;
//     const elRespectiveCustomOption = elSelectCustomOpts.querySelectorAll(
//       `[data-value="${value}"]`
//     )[0];

//     updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
//   });

//   // Update selectCustom value when an option is clicked or hovered
//   customOptsList.forEach(function (elOption, index) {
//     elOption.addEventListener("click", (e) => {
//       const value = e.target.getAttribute("data-value");

//       // Sync native select to have the same value
//       elSelectNative.value = value;
//       updateCustomSelectChecked(value, e.target.textContent);
//       closeSelectCustom();
//     });

//     elOption.addEventListener("mouseenter", (e) => {
//       updateCustomSelectHovered(index);
//     });

//     // TODO: Toggle these event listeners based on selectCustom visibility
//   });
// }

// function hybridSelectInit() {
//   const allSelectsInPage = document.getElementsByClassName("js-hybridSelect");
// console.log(allSelectsInPage)

//   for (let i = 0; i < allSelectsInPage.length; i++) {
//     hybridSoloInit(allSelectsInPage[i]);
//   }
// }

// hybridSelectInit();


// const allSelectsInPage = document.querySelectorAll("js-hybridSelect");
// console.log(allSelectsInPage)

// Old Selector ENd




// Initialize and add the map
function initMap(sel) {
// console.log(sel)

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




// (whichCity === [] && whichFilter !== [])

// console.log(whichCity)
// console.log(whichFilter)
// console.log(totalFilter)
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
    if(arr[0].innerText === "Jelgava") {
      return { lat: 56.6511, lng: 23.7214 };
    } else if (arr[0].innerText === "Ogre") {
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
    center: { lat: 56.94, lng: 24.1 },
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

  // for( let i =0; i < markers.length; i++) {
  for( let i =0; i < totalFilter.length; i++) {
    // const currMarker = markers[i];
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

let videoArray = [
{
    name: "Sofija Āboliņa",
    poster: "../../assets/img/grid-image-1.png",
    video: "https://fb.watch/ej_U_dzzg4/"
  },
{
  name: "Emīlija Balode",
  poster: "../../assets/img/grid-image-2.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Alise Bērziņa",
  poster: "../../assets/img/grid-image-3.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Anna Celmiņa",
  poster: "../../assets/img/grid-image-4.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Arta Balode",	
  poster: "../../assets/img/grid-image-5.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Marta Dambe",
  poster: "../../assets/img/grid-image-6.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Amēlija Dukure",
  poster: "../../assets/img/grid-image-7.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Paula Eglīte",
  poster: "../../assets/img/grid-image-8.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Emma Elksne",
  poster: "../../assets/img/grid-image-9.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Elizabete Gaile",
  poster: "../../assets/img/grid-image-10.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Dārta Greste",	
  poster: "../../assets/img/grid-image-11.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Estere Grūbe",	
  poster: "../../assets/img/grid-image-12.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Elza Indriksone",	
  poster: "../../assets/img/grid-image-13.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Viktorija Jaunzeme",	
  poster: "../../assets/img/grid-image-14.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Katrīna Jurjāne",	
  poster: "../../assets/img/grid-image-15.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Mia Kalna",	
  poster: "../../assets/img/grid-image-16.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
{
  name: "Marija Kalniņa",	
  poster: "../../assets/img/grid-image-17.png",
  video: "https://fb.watch/ej_U_dzzg4/"
},
]

videoArray.length = videoArray.length + 82;

for(i = 0; i < videoArray.length; i++) {
  let imageDiv = document.createElement('div')
  imageDiv.setAttribute('class', "eachVideo");
  
  let imageOverlay = document.createElement('div')
  imageOverlay.setAttribute('class', "img-overlay");

  let name = document.createElement('h3')
  let nameInVideo = document.createElement('h3')

  let num = document.createElement('h2')
  num.setAttribute('class', 'image-num')
  num.innerHTML = i +1

  let img = document.createElement('img');

  if(videoArray[i] !== undefined) {
    img.src = videoArray[i].poster
    img.setAttribute('class', 'image')

    imageDiv.append(img)
    imageDiv.append(imageOverlay)
    
    name.setAttribute('class', 'name')
    name.innerHTML = videoArray[i].name

    nameInVideo.setAttribute('class', 'name-in-video')
    nameInVideo.innerHTML = videoArray[i].name

    let videoOverlay = document.createElement('div')
    videoOverlay.setAttribute('class', 'video-overlay')

    let videoTag = document.createElement('VIDEO')
    videoTag.setAttribute('class', 'video-tag')
    videoTag.poster = "../../assets/img/video-poster.png";
    videoTag.setAttribute("width", "912");
    videoTag.setAttribute("height", "511");

    let x = document.createElement('img')
    x.setAttribute('class', "close-button")
    x.setAttribute('src', "./assets/img/x.png")

    x.addEventListener('click', () => {
      videoOverlay.remove()
      document.body.classList.remove('overlay-body')
    })


    let playButton = document.createElement('img')
    playButton.setAttribute('class', "play-button")
    playButton.setAttribute('src', "./assets/img/Vector.svg")


    imageDiv.addEventListener('click', () => {
      // videoTag.setAttribute("src", videoArray[i].video);
      // videoTag.setAttribute("src", "https://fb.watch/ej_U_dzzg4/");

      
      videoOverlay.append(x)
      videoOverlay.append(playButton)
      videoOverlay.append(videoTag)
      videoOverlay.append(nameInVideo)
      gridContainer.append(videoOverlay)
  
      document.body.classList.add('overlay-body')

    })
  } else if (videoArray[i] === undefined) {
    img.src = "../../assets/img/image-grid-background.png";
    img.setAttribute('class', 'image2')

    imageOverlay.opacity = 1;

    name.setAttribute('class', 'name2')  
    name.innerHTML = 'Jauns stāsts tiks pievienots drīzumā'
  }

  imageDiv.append(img)
  imageDiv.append(name)
  imageDiv.append(num)
  gridContainer.append(imageDiv)
}
