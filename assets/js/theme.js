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

  // Custom select 
  /* Features to make the selectCustom work for mouse users.

- Toggle custom select visibility when clicking the "box"
- Update custom select value when clicking in a option
- Navigate through options when using keyboard up/down
- Pressing Enter or Space selects the current hovered option
- Close the select when clicking outside of it
- Sync both selects values when selecting a option. (native or custom)
*/

function hybridSoloInit(elSelect) {
  const elSelectNative = elSelect.getElementsByClassName("js-selectNative")[0];
  const elSelectCustom = elSelect.getElementsByClassName("js-selectCustom")[0];
  const elSelectCustomBox = elSelectCustom.children[0];
  const elSelectCustomOpts = elSelectCustom.children[1];
  const customOptsList = Array.from(elSelectCustomOpts.children);
  const optionsCount = customOptsList.length;
  const defaultLabel = elSelectCustomBox.getAttribute("data-value");

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
    // Remove aria-hidden in case this was opened by a user
    // who uses AT (e.g. Screen Reader) and a mouse at the same time.
    elSelectCustom.setAttribute("aria-hidden", false);

    if (optionChecked) {
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
    }

    elSelectCustomBox.textContent = text;
    optionChecked = value;

    const selectedEl = document.querySelector('.selectCustom-trigger')

    if(optionChecked !== 'Izvēlies') {
      console.log('it is');
      console.log(selectedEl.parentElement.firstElementChild);
      selectedEl.parentElement.firstElementChild.classList.add('selected-bold');
      selectedEl.parentElement.firstElementChild.innerHTML = selectedEl.parentElement.firstElementChild.innerHTML+ "<div class='select-border'></div>";
    }
  }

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

  for (let i = 0; i < allSelectsInPage.length; i++) {
    hybridSoloInit(allSelectsInPage[i]);
  }
  // const selectedEl = docuemnt.getElementsByClassName('selectCustom-trigger')

  // function isSelected() {
  //   if(selectedEl.innerHTML !== 'Izvēlies') {
  //     selectedEl.style.color === 'red';
  //     // selectedEl.style.font-weight === '700';
  //   } 
  // }
}


hybridSelectInit();


}

