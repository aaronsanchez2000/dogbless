(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

  // Common styling & options for all products
  const commonOptions = {
    product: {
      styles: {
        product: {
            "@media (min-width: 601px)": {
                "margin-bottom": "50px"
            },
            "@media (max-width: 600px)": {
                "max-width": "100%",
                "margin-left": "0",
                "margin-bottom": "2rem",
                "padding": "0rem",
                "box-sizing": "border-box"
            }
        },
        title: {
          "font-family": "Garamond, serif",
          "font-weight": "normal",
          "color": "#24384C"
        },
        button: {
          "font-family": "Garamond, serif",
          "font-size": "16px",
          "color": "#F7F3EE",
          "padding-top": "16px",
          "padding-bottom": "16px",
          "width": "100%",
          ":hover": {
            "background-color": "#ebcf84",
            "color": "#24384C"
          },
          "background-color": "#24384C",
          ":focus": {
            "background-color": "#ebcf84",
            "color": "#24384C"
          },
          "border-radius": "8px",
          "padding-left": "30px",
          "padding-right": "30px"
        },
        quantityInput: {
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px"
        },
        price: {
          "font-family": "Garamond, serif",
          "color": "#24384C"
        },
        compareAt: {
          "font-family": "Garamond, serif"
        },
        unitPrice: {
          "font-family": "Garamond, serif"
        },
        description: {
          "font-family": "Garamond, serif"
        }
      },
      buttonDestination: "modal",
      contents: {
        options: false
      },
      text: {
        button: "VIEW"
      }
    },
    productSet: {
      styles: {
        products: {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    modalProduct: {
      contents: {
        img: false,
        imgWithCarousel: true,
        button: false,
        buttonWithQuantity: true
      },
      styles: {
        product: {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        button: {
          "font-family": "Garamond, serif",
          "font-size": "16px",
          "color": "#F7F3EE",
          "padding-top": "16px",
          "padding-bottom": "16px",
          ":hover": {
            "background-color": "#ebcf84",
            "color": "#24384C"
          },
          "background-color": "#24384C",
          ":focus": {
            "background-color": "#ebcf84",
            "color": "#24384C"
          },
          "border-radius": "8px",
          "padding-left": "30px",
          "padding-right": "30px"
        },
        quantityInput: {
          "font-size": "16px",
          "padding-top": "16px",
          "padding-bottom": "16px"
        },
        title: {
          "font-family": "Garamond, serif",
          "font-weight": "normal",
          "font-size": "26px",
          "color": "#24384C"
        },
        price: {
          "font-family": "Garamond, serif",
          "font-weight": "normal",
          "font-size": "18px",
          "color": "#24384C"
        },
        compareAt: {
          "font-family": "Garamond, serif",
          "font-weight": "normal",
          "font-size": "15.3",
          "color": "#24384C"
        },
        unitPrice: {
          "font-family": "Garamond, serif",
          "font-weight": "normal",
          "font-size": "15.3",
          "color": "#24384C"
        },
        description: {
          "font-family": "Garamond, serif",
          "font-weight": "normal",
          "font-size": "14px",
          "color": "#24384C"
        }
      },
      text: {
        button: "Add to cart"
      }
    },
    option: {
      styles: {
        label: {
          "font-family": "Garamond, serif",
          "color": "#24384C",
        },
        select: {
          "font-family": "Garamond, serif",
          "color": "#24384C",
        }
      }
    },
    cart: {
      styles: {
        button: {
          "font-family": "Garamond, serif",
          "font-size": "16px",
          "color": "#F7F3EE",
          "padding-top": "16px",
          "padding-bottom": "16px",
          ":hover": {
            "background-color": "#ebcf84",
            "color": "#24384C"
          },
          "background-color": "#24384C",
          ":focus": {
            "background-color": "#ebcf84",
            "color": "#24384C"
          },
          "border-radius": "8px"
        }
      },
      text: {
        total: "Subtotal",
        notice: "",
        button: "Checkout"
      }
    },
    toggle: {
      styles: {
        toggle: {
          "font-family": "Garamond, serif",
          "background-color": "#24384C",
          "color": "#F7F3EE",
          ":hover": {
            "background-color": "#ebcf84",
            "color": "#24384C"
          },
          ":focus": {
            "background-color": "#ebcf84",
            "color": "#24384C"
          }
        },
        count: {
          "font-size": "16px"
        }
      }
    }
  };

  // List your products here with their product ID and the div ID in your HTML
  const products = [
    { id: '8475555692697', nodeId: 'product-component-1752092882511' },
    { id: '8034756231321', nodeId: 'product-component-1752093176859' },
    { id: '8021947089049', nodeId: 'product-component-1752094193761' },
    { id: '8042925686937', nodeId: 'product-component-1752095338248' },
    { id: '8021319385241', nodeId: 'product-component-1752096306839' },
    // Add new products here:
    // { id: 'NEW_PRODUCT_ID', nodeId: 'new-div-id' },
  ];

  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.head || document.body).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '1e1e93-f6.myshopify.com',
      storefrontAccessToken: '3cbe3abfff7858c458864c68b787e703',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      products.forEach(product => {
        const container = document.getElementById(product.nodeId);
        if (container) {
          ui.createComponent('product', {
            id: product.id,
            node: container,
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: commonOptions,
          });
        } else {
          console.warn(`Container with ID "${product.nodeId}" not found.`);
        }
      });
    });
  }
})();
