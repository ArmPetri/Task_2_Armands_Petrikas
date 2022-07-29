

function hybridSoloInit(elSelect) {
  const elSelectNative = elSelect.getElementsByClassName("js-selectNative")[0];
  const elSelectCustom = elSelect.getElementsByClassName("js-selectCustom")[0];
  const elSelectCustomBox = elSelectCustom.children[0];
  const elSelectCustomOpts = elSelectCustom.children[1];
  const customOptsList = Array.from(elSelectCustomOpts.children);
  const optionsCount = customOptsList.length;
  const defaultLabel = elSelectCustomBox.getAttribute("data-value");
  const screenWidth = window.innerWidth

  let optionChecked = "";
  let optionHoveredIndex = -1;

  console.log(elSelectCustomBox)

  // Toggle custom select visibility when clicking the box
  elSelectCustomBox.addEventListener("click", (e) => {
    const isClosed = !elSelectCustom.classList.contains("isActive");

    if (isClosed) {
      openSelectCustom();
      if(screenWidth > 768) {
        document.querySelector('.location').style.marginBottom = "130px";
      } else {
        elSelect.style.marginBottom = "130px";
      }
    } else {
      closeSelectCustom();
      if(screenWidth > 768) {
        document.querySelector('.location').style.marginBottom = "unset";
      } else {
        elSelect.style.marginBottom = "unset";
      }
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
      // document.querySelector('.location').style.marginBottom = "0";
    }

    // Add related event listeners
    document.addEventListener("click", watchClickOutside);
    // document.querySelector('.location').style.marginBottom = "0";
    // document.addEventListener("keydown", supportKeyboardNavigation);
  }

  function closeSelectCustom() {
    elSelectCustom.classList.remove("isActive");
    elSelectCustomBox.style.fontWeight = 'bolder'

    elSelectCustom.setAttribute("aria-hidden", true);

    updateCustomSelectHovered(-1);

    // Remove related event listeners
    document.removeEventListener("click", watchClickOutside);
    elSelect.style.marginBottom = "unset";
    // document.removeEventListener("keydown", supportKeyboardNavigation);
    // document.querySelector('.location').style.marginBottom = "0";
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
    // document.querySelector('.location').style.marginBottom = "20px";

    elSelectCustomBox.textContent = text;
    optionChecked = value;

    // ADD on 20th 
    initMap(optionChecked)
  }

  function watchClickOutside(e) {
    const didClickedOutside = !elSelectCustom.contains(event.target);
    if (didClickedOutside) {
      closeSelectCustom();
      // document.querySelector('.location').style.marginBottom = "20px";

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
      document.querySelector('.location').style.marginBottom = "unset";
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
}

hybridSelectInit();
