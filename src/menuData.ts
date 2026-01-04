import { MenuData } from "./types";

export const menuData: MenuData = {
    it: {
      food: {
        title: "Cucina",
        sections: [
          {
            title: "Cornetteria",
            image: null,
            items: [
              { name: "Cornetto vuoto", description: "", price: "€1.20" },
              { name: "Cornetto farcito", description: "Crema, Albicocca, Nutella", price: "€1.50" },
              { name: "Cornetto farcito vegano", description: "", price: "€1.30" },
              { name: "Pasticciotto", description: "", price: "€1.80" },
              { name: "Sfogliato", description: "", price: "€2.00" }
            ]
          },
          {
            title: "Pinsa",
            image: null,
            items: [
              { name: "Classica", description: "Pomodoro, fiordilatte", price: "€5.00" },
              { name: "Vegetariana", description: "Zucchine, melanzane, pomodorini, fiordilatte", price: "€7.00" },
              { name: "LMT – La Mortazza Tua", description: "Mortadella, stracciatella, pistacchio", price: "€8.50" },
              { name: "Tonno e Cipolla", description: "Pomodoro, fiordilatte, tonno, cipolla", price: "€7.50" },
              { name: "El Diablo", description: "Salame piccante, nduja", price: "€9.00" },
              { name: "Crudo, Grana e Rucola", description: "", price: "€9.00" },
              { name: "Coppa Special", description: "Coppa, stracciatella, tarallo", price: "€10.00" },
              { name: "ZeNut", description: "Pinsa alla Nutella", price: "€7.50" }
            ]
          },
          {
            title: "Puccia",
            image: null,
            items: [
              { name: "Veggy", description: "Verdure grigliate, guacamole", price: "€6.00" },
              { name: "L’Affettata", description: "Affettato, mozzarella, insalata", price: "€7.50" },
              { name: "Inferno del Sud", description: "Salame piccante, nduja, scamorza", price: "€8.50" },
              { name: "Zenit", description: "Tonno, scamorza, salsa Zenit", price: "€8.00" }
            ]
          },
          {
            title: "Insalatone",
            image: null,
            items: [
              { name: "Ever Green", description: "Verdure grigliate, olive, guacamole", price: "€8.00" },
              { name: "Mediterranea", description: "Bufala, tonno, crostini", price: "€8.00" },
              { name: "Fit Salad", description: "Pollo grigliato, yogurt greco", price: "€7.00" },
              { name: "Zenit Salad", description: "Pollo, rucola, salsa Zenit", price: "€9.00" }
            ]
          }
        ]
      },
  
      drinks: {
        title: "Bevande",
        sections: [
          {
            title: "Caffetteria",
            // image: {
            //     src: "/images/cafe.png",
            //     alt: "Una tazza di caffè su un tavolo di legno",
            //     position: "rt"
            // },
            image: null,
            items: [
              { name: "Caffè", description: "", price: "€1.20" },
              { name: "Caffè corretto", description: "", price: "€1.50" },
              { name: "Cappuccino", description: "", price: "€2.00" },
              { name: "Caffè americano", description: "", price: "€2.00" },
              { name: "Ginseng", description: "", price: "€2.50" }
            ]
          },
          {
            title: "Birre",
            image: null,
            items: [
              { name: "Nastro Azzurro", description: "", price: "€3.00" },
              { name: "Beck’s", description: "", price: "€3.00" },
              { name: "Corona", description: "", price: "€3.50" },
              { name: "Ichnusa", description: "", price: "€3.00" },
              { name: "Ceres", description: "", price: "€4.00" }
            ]
          },
          {
            title: "Spritz",
            image: null,
            items: [
              { name: "Aperol Spritz", description: "Aperol, prosecco, soda", price: "€5.00" },
              { name: "Campari Spritz", description: "Campari, prosecco, soda", price: "€5.00" },
              { name: "Limoncello Spritz", description: "", price: "€6.00" },
              { name: "Hugo Spritz", description: "Fiori di sambuco", price: "€6.00" }
            ]
          },
          {
            title: "Cocktail Classici",
            image: null,
            items: [
              { name: "Negroni", description: "", price: "€7.00" },
              { name: "Mojito", description: "", price: "€7.00" },
              { name: "Margarita", description: "", price: "€7.00" },
              { name: "Espresso Martini", description: "", price: "€8.00" }
            ]
          },
          {
            title: "Sour",
            image: null,
            items: [
              { name: "Whisky Sour", description: "", price: "€7.00" },
              { name: "Gin Sour", description: "", price: "€7.00" },
              { name: "Vodka Sour", description: "", price: "€7.00" }
            ]
          }
        ]
      }
    },
  
    en: {
        food: {
          title: "Food",
          sections: [
            {
              title: "Pastries",
              image: null,
              items: [
                { name: "Plain Croissant", description: "", price: "€1.20" },
                { name: "Filled Croissant", description: "Custard, Apricot Jam, Nutella", price: "€1.50" },
                { name: "Vegan Filled Croissant", description: "", price: "€1.30" },
                { name: "Pasticciotto", description: "Traditional custard pastry", price: "€1.80" },
                { name: "Puff Pastry", description: "", price: "€2.00" }
              ]
            },
            {
              title: "Pinsa",
              image: null,
              items: [
                { name: "Classic", description: "Tomato sauce, mozzarella", price: "€5.00" },
                { name: "Vegetarian", description: "Grilled zucchini, eggplant, cherry tomatoes, mozzarella", price: "€7.00" },
                { name: "LMT – La Mortazza Tua", description: "Mortadella, stracciatella cheese, pistachio crumble", price: "€8.50" },
                { name: "Tuna & Onion", description: "Tomato sauce, mozzarella, tuna, onion", price: "€7.50" },
                { name: "El Diablo", description: "Spicy salami, nduja", price: "€9.00" },
                { name: "Cured Ham, Grana & Rocket", description: "", price: "€9.00" },
                { name: "Coppa Special", description: "Coppa, stracciatella cheese, crushed tarallo", price: "€10.00" },
                { name: "ZeNut", description: "Pinsa with Nutella", price: "€7.50" }
              ]
            },
            {
              title: "Puccia Sandwiches",
              image: null,
              items: [
                { name: "Veggy", description: "Grilled vegetables, rocket, guacamole sauce", price: "€6.00" },
                { name: "The Cold Cuts", description: "Cold cuts, mozzarella, salad, tomatoes", price: "€7.50" },
                { name: "Southern Inferno", description: "Spicy salami, nduja, scamorza cheese", price: "€8.50" },
                { name: "Zenit", description: "Tuna, scamorza cheese, salad, Zenit sauce", price: "€8.00" }
              ]
            },
            {
              title: "Big Salads",
              image: null,
              items: [
                { name: "Ever Green", description: "Salad, grilled zucchini, olives, cucumber, guacamole sauce", price: "€8.00" },
                { name: "Mediterranean", description: "Salad, rocket, cherry tomatoes, buffalo mozzarella, tuna, croutons", price: "€8.00" },
                { name: "Fit Salad", description: "Salad, grilled chicken, cheese flakes, cherry tomatoes, Greek yogurt", price: "€7.00" },
                { name: "Zenit Salad", description: "Salad, grilled chicken, rocket, olives, onion, cherry tomatoes, Zenit sauce", price: "€9.00" }
              ]
            }
          ]
        },
      
        drinks: {
          title: "Drinks",
          sections: [
            {
              title: "Coffee & Hot Drinks",
              image: {
                src: "/images/cafe.png",
                alt: "A cup of coffee on a wooden table",
                position: "rt"
              },
              items: [
                { name: "Espresso", description: "", price: "€1.20" },
                { name: "Espresso with Liquor", description: "", price: "€1.50" },
                { name: "Cappuccino", description: "", price: "€2.00" },
                { name: "Americano Coffee", description: "", price: "€2.00" },
                { name: "Ginseng Coffee", description: "", price: "€2.50" }
              ]
            },
            {
              title: "Beers",
              image: null,
              items: [
                { name: "Nastro Azzurro", description: "", price: "€3.00" },
                { name: "Beck’s", description: "", price: "€3.00" },
                { name: "Corona", description: "", price: "€3.50" },
                { name: "Ichnusa", description: "", price: "€3.00" },
                { name: "Ceres", description: "", price: "€4.00" }
              ]
            },
            {
              title: "Spritz",
              image: null,
              items: [
                { name: "Aperol Spritz", description: "Aperol, prosecco, soda", price: "€5.00" },
                { name: "Campari Spritz", description: "Campari, prosecco, soda", price: "€5.00" },
                { name: "Limoncello Spritz", description: "", price: "€6.00" },
                { name: "Hugo Spritz", description: "Elderflower liqueur, prosecco, soda", price: "€6.00" }
              ]
            },
            {
              title: "Classic Cocktails",
              image: null,
              items: [
                { name: "Negroni", description: "Vermouth, Campari, gin", price: "€7.00" },
                { name: "Mojito", description: "White rum, lime, cane sugar, mint, soda", price: "€7.00" },
                { name: "Margarita", description: "Tequila, Cointreau, lime", price: "€7.00" },
                { name: "Espresso Martini", description: "Vodka, coffee liqueur, espresso", price: "€8.00" }
              ]
            },
            {
              title: "Sour Cocktails",
              image: null,
              items: [
                { name: "Whisky Sour", description: "Whisky, sugar syrup, lime", price: "€7.00" },
                { name: "Gin Sour", description: "Gin, sugar syrup, lime", price: "€7.00" },
                { name: "Vodka Sour", description: "Vodka, sugar syrup, lime", price: "€7.00" }
              ]
            }
          ]
        }
      }
      
  };
  