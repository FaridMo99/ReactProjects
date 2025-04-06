# React-Shopping-Cart

4.On the shopping cart page, you should have the same navigation bar that displays the number of items currently in the cart. You should also have a button next to it where you can go to the cart to checkout and pay (however we are not going to implement this logic here).

5.Build individual card elements for each of your products. Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an “Add To Cart” button.

6.Fetch your shop items from FakeStore API or something similar.

7.Once a user has submitted their order, the amount on the cart itself should adjust accordingly.

11.Lastly, it’s time to deploy it! Depending on what hosting solution you’re using, you may need some additional configuration so that your routing is handled correctly as a single page application (SPA).

        //Netlify: You need to add a _redirects file to the public/ directory of your project. Copy the following to redirect all routes to the index page and let react-router-dom handle the rest. You can read more about this at the Netlify documentation on redirects.
                //      /* /index.html 200
