# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This project is a product list page with a shopping cart functionality. It allows users to browse through products, add items to the cart, and adjust the quantity of each product. The design adapts to different screen sizes, ensuring a smooth user experience on mobile, tablet, and desktop devices. The cart interface updates dynamically as users interact with it, and a confirmation modal allows them to review their order before placing it.

The solution was built using React and Ant Design for fast and responsive development, while maintaining a clean and modern UI.

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![https://postimg.cc/SXKLhvzv](https://postimg.cc/SXKLhvzv)

### Links

- Solution URL: [https://github.com/valeriandwi/product-list-frontend-mentor](https://github.com/valeriandwi/product-list-frontend-mentor)
- Live Site URL: [https://product-list-frontend-mentor.vercel.app/](https://product-list-frontend-mentor.vercel.app/)

### My process

### Built with

- TailwindCSS
- ReactJS
- Zustand
- react-modern-drawer

### What I Learned

During this project, I improved my skills in managing the state of a shopping cart, using any custom components using TailwindCSS effectively, and enhancing responsiveness. I also practiced handling user interactions, such as adding/removing items, adjusting quantities, and confirming orders, while ensuring a seamless user experience.

Here's an example of a cart update function I implemented:

```js
const handleUpdateCart = (item, action) => {
  setCart((prevCart) => {
    const updatedCart = [...prevCart];
    // logic for adding, removing, or adjusting item quantities
    return updatedCart;
  });
};
```

### Continued development

I plan to explore more about Next.js server-side rendering.

### Useful resources

- [TailwindCSS Modal](https://flowbite.com/docs/components/modal/) - This helped to built a custom modal

## Author

- Website - [Valerian Dwi Purnomo](https://valeriandwi.my.id/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Github - [@valeriandwi](https://github.com/valeriandwi)

## Acknowledgments

Thanks to the Frontend Mentor community for providing such challenging and insightful projects.
