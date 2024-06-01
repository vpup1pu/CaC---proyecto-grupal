export function displayContainer(productsArray, currentContainer) {
    currentContainer.innerHTML = "";
    productsArray.forEach(shoe => {
        const shoeDiv = document.createElement('div');
        shoeDiv.classList.add('shoeDiv');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');

        const frontImage = document.createElement('img');
        frontImage.classList.add('frontImage');
        frontImage.src = shoe.frontImage;

        const sideImage = document.createElement('img');
        sideImage.classList.add('sideImage');
        sideImage.src = shoe.sideImage;

        const lilDisplay = document.createElement('div');
        lilDisplay.classList.add('lilDisplay');

        const shoeName = document.createTextNode(shoe.name);
        const priceCont = document.createElement('div');
        priceCont.classList.add('priceCont')
        const shoePrice = document.createElement('span');
        shoePrice.innerHTML = `$${shoe.price.toLocaleString()}`;
        priceCont.appendChild(shoePrice);

        lilDisplay.appendChild(shoeName);
        lilDisplay.appendChild(document.createElement('br'));
        lilDisplay.appendChild(priceCont);
        imageContainer.appendChild(frontImage);
        imageContainer.appendChild(sideImage);

        shoeDiv.appendChild(imageContainer);
        shoeDiv.appendChild(lilDisplay);

        onSale(shoe, shoePrice, shoe.discount, priceCont, imageContainer);

        currentContainer.appendChild(shoeDiv);

        shoeDiv.addEventListener("click", () => {
            let clone_imageContainer = imageContainer.cloneNode(true);
            clone_imageContainer.classList.add('imageContainer');
            let clone_priceCont = priceCont.cloneNode(true);
            clone_priceCont.classList.add('priceCont');
            let varArray = shoe.variations;
            Display(clone_imageContainer, shoe.name, clone_priceCont, currentContainer, varArray);
        });
    });
}

function onSale(product, priceSpan, discount, containerText, containerImg) {
    if (product.sale()) {
        const saleTag = document.createElement('span');
        saleTag.innerHTML = `${discount}% OFF`;
        saleTag.classList.add('ribbon');
        containerImg.appendChild(saleTag);
        priceSpan.classList.add('priceDisc');
        const newPrice = document.createElement('span');
        newPrice.classList.add('newPrice');
        const discountedPrice = ((100 - discount) * (product.price)) / 100;
        newPrice.innerHTML = `$${discountedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        containerText.appendChild(newPrice);
    }
}

function Display(imageContainer, name, price, currentContainer, array1) {
    const dialog = document.createElement('dialog');
    dialog.classList.add('dialog');
    currentContainer.appendChild(dialog);
    dialog.showModal();
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('closeBtn');
    closeBtn.innerHTML = 'Cerrar';
    closeBtn.addEventListener("click", () => {
        const everyBtn = document.querySelectorAll('input[type="radio"]');
        everyBtn.forEach(radio => {
            radio.checked = false;
        })
        dialog.close();
        currentContainer.removeChild(dialog);
    });

    const closeContainer = document.createElement('div');
    closeContainer.classList.add('closeContainer');
    closeContainer.appendChild(closeBtn);
    dialog.appendChild(closeContainer);

    const displayContainer = document.createElement('div');
    displayContainer.classList.add('displayContainer');

    displayContainer.appendChild(imageContainer);

    const rightContainer = document.createElement('div');
    rightContainer.classList.add('rightContainer');

    const optionContainer = document.createElement('div');
    optionContainer.classList.add('optionContainer');

    variations(array1, 'size', 'color', optionContainer, imageContainer);

    const description = document.createElement('h1');
    description.textContent = name;

    rightContainer.appendChild(optionContainer);
    rightContainer.appendChild(description);
    rightContainer.appendChild(price);

    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shoppingCart');
    const quantity = document.createElement('div');
    quantity.classList.add('quantity');
    const plusBtn = document.createElement('button');
    plusBtn.classList.add('plusBtn');
    const plusFA = document.createElement('i');
    plusFA.classList.add('fas', 'fa-plus');
    const counter = document.createElement('input');
    counter.classList.add('counter');
    counter.type = "number";
    counter.name = "name";
    counter.value = "0";
    const minusBtn = document.createElement('button');
    minusBtn.classList.add('minusBtn');
    const minusFA = document.createElement('i');
    minusFA.classList.add('fas', 'fa-minus');
    const cartBtn = document.createElement('button');
    cartBtn.classList.add('cartBtn');
    const cartFA = document.createElement('i');
    cartFA.classList.add('fas', 'fa-shopping-cart');
    cartBtn.innerHTML = ' Agregar al carrito';

    minusBtn.addEventListener("click", () => {
        if (parseInt(counter.value) > 0) {
            counter.value = parseInt(counter.value) - 1;
        }
    });
    plusBtn.addEventListener("click", () => {
        const maxValue = 101;
        if (parseInt(counter.value) < maxValue) {
            counter.value = parseInt(counter.value) + 1;
        }
    });
    cartBtn.addEventListener("click", ()=>{
        const btns = document.querySelectorAll('input[type="radio"');
        btns.forEach(radio => {
            radio.checked = false;
        })
        counter.value = 0;
        const lastRibbon = document.querySelector('.ribbonTR');
        lastRibbon.style.display = 'none';
    })

    plusBtn.appendChild(plusFA);
    minusBtn.appendChild(minusFA);
    cartBtn.appendChild(cartFA);

    quantity.appendChild(plusBtn);
    quantity.appendChild(counter);
    quantity.appendChild(minusBtn);

    shoppingCart.appendChild(quantity);
    shoppingCart.appendChild(cartBtn);

    rightContainer.appendChild(shoppingCart);

    displayContainer.appendChild(rightContainer);

    dialog.appendChild(displayContainer);
}

function filter(typeVariation, currentContainer) {
    let filteredContainer = currentContainer.slice();
    for (let i = filteredContainer.length - 1; i >= 0; i--) {
        if (filteredContainer[i].type !== typeVariation) {
            filteredContainer.splice(i, 1);
        }
    }
    return filteredContainer;
};

export function filteredBtn(arrayBtn, typeVariation, arrayCurrent, currentContainer) {
    arrayBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            const filteredArray = filter(typeVariation, arrayCurrent.slice());
            displayContainer(filteredArray, currentContainer);
        })
    })
}

function variations(array, prop1, prop2, currentContainer, imgCont) {
    const aSize = options(array, prop1);
    const divS = document.createElement('div');
    aSize.forEach(size => {
        const label = document.createElement('label');
        label.classList.add('optionLabel');
        label.htmlFor = `${size}`;
        divS.appendChild(label);
        const sizeBtn = document.createElement('input');
        sizeBtn.type = "radio";
        sizeBtn.name = "size";
        sizeBtn.value = `${size}`;
        sizeBtn.id = `${size}`;
        label.appendChild(sizeBtn);
        const value = document.createElement('span');
        value.classList.add('optionName');
        value.innerHTML = `${size}`;
        label.appendChild(value);
    });
    currentContainer.appendChild(divS);

    const aColor = options(array, prop2);
    const divC = document.createElement('div');
    aColor.forEach(color => {
        const label = document.createElement('label');
        label.classList.add('optionLabel');
        label.htmlFor = `${color}`;
        divC.appendChild(label);
        const colorBtn = document.createElement('input');
        colorBtn.type = "radio";
        colorBtn.name = "color";
        colorBtn.value = `${color}`;
        colorBtn.id = `${color}`;
        label.appendChild(colorBtn);
        const value = document.createElement('span');
        value.classList.add('optionName');
        value.innerHTML = `${color}`;
        label.appendChild(value);
    })
    currentContainer.appendChild(divC);

    const sizeRadios = divS.querySelectorAll('input[name="size"]');
    const colorRadios = divC.querySelectorAll('input[name="color"]');
    sizeRadios.forEach(radio => {
        radio.addEventListener('change', () => checkAvailability(array, imgCont));
    });
    colorRadios.forEach(radio => {
        radio.addEventListener('change', () => checkAvailability(array, imgCont));
    });
}

function options(array, property) {
    let newArr = [array[0][property]];
    for (let i = 1; i < array.length; i++) {
        if (!newArr.includes(array[i][property])) {
            newArr.push(array[i][property]);
        }
    }
    return newArr;
}

function checkAvailability(array, imgCont) {
    const sizeC = selectedChoice('size');
    const colorC = selectedChoice('color');
    let ribbonDiv = imgCont.querySelector('.ribbonTR');

    if (!ribbonDiv) {
        ribbonDiv = document.createElement('div');
        ribbonDiv.classList.add('ribbonTR');
        ribbonDiv.style.display = 'none';
        const spanOOS = document.createElement('span');
        spanOOS.innerHTML = 'Sin Stock';
        ribbonDiv.appendChild(spanOOS);
        imgCont.appendChild(ribbonDiv);
    }

    if (sizeC && colorC) {
        let found = false;
        for (let option of array) {
            if (option.size == sizeC && option.color == colorC) {
                if (option.availability == 'fuera de stock') {
                    ribbonDiv.style.display = 'block';
                } else {
                    ribbonDiv.style.display = 'none';
                }
                found = true;
                break;
            }
        }
        if (!found) {
            ribbonDiv.style.display = 'none';
        }
    }
}

function selectedChoice(prop) {
    const allRadioButtons = document.querySelectorAll(`input[name="${prop}"]:checked`);
    if (allRadioButtons.length > 0) {
        return allRadioButtons[0].value;
    }
    return null;
}