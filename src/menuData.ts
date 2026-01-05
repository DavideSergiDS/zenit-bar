import { MenuData } from "./types";

export const menuData: MenuData = {
    it: {
      bar: {
        title: "Bar",
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
              { name: "Caffè macchiato", description: "", price: "€1.20" },
              { name: "Caffè macchiato soia", description: "", price: "€1.20" },
              { name: "Caffè doppio", description: "", price: "€2.00" },
              { name: "Cappuccino", description: "", price: "€1.50" },
              { name: "Cappuccino soia", description: "", price: "€2.00" },
              { name: "Caffè americano", description: "", price: "€1.50" },
              { name: "Caffè orzo", description: "", price: "€1.50" },
              { name: "Espressino", description: "", price: "€1.30" },
              { name: "Latte macchiato", description: "", price: "€1.80" },
              { name: "Latte macchiato soia", description: "", price: "€2.00" },
              { name: "Ginseng", description: "", price: "€1.50" },
              { name: "Caffè decaffeinato", description: "", price: "€1.20" },
              { name: "Caffè ghiaccio", description: "", price: "€1.50" },
              { name: "Caffè leccese", description: "", price: "€2.00" },
              { name: "Caffè shakerato", description: "", price: "€2.00" },
              { name: "Caffè corretto shakerato", description: "", price: "€2.00" },
            ]
          },
          {
            title: "Cornetteria",
            image: null,
            items: [
              { name: "Cornetto vuoto", description: "", price: "€1.20" },
              { name: "Cornetto farcito", description: "Crema, Albicocca, Nutella", price: "€1.80" },
              { name: "Cornetto farcito vegano", description: "", price: "€1.80" },
              { name: "Pasticciotto", description: "", price: "€1.50" },
              { name: "Sfogliato", description: "", price: "€1.80" }
            ]
          },
          {
            title: "Bevande",
            image: null,
            items: [
              { name: "Acqua naturale/frizzante 0.5L", description: "", price: "€1.00" },
              { name: "Acqua naturale/frizzante 1.0L", description: "", price: "€2.00" },
              { name: "Coca Cola/Coca Cola Zero", description: "", price: "€2.50" },
              { name: "Fanta", description: "", price: "€2.50" },
              { name: "Lemon Soda", description: "", price: "€2.50" },
              { name: "Sprite", description: "", price: "€2.50" },
              { name: "Schweppes tonica/lemon", description: "", price: "€2.50" },
              { name: "Thè pesca/limone", description: "", price: "€2.50" },
              { name: "Crodino", description: "", price: "€2.50" },
              { name: "Gassosa", description: "", price: "€1.50" },
              { name: "Cocktail San Pellegrino", description: "", price: "€2.50" },
              { name: "Ginger Beer", description: "", price: "€2.50" },
              { name: "Succo", description: "", price: "€2.00" },
              { name: "Spremuta", description: "", price: "€3.00" },
              { name: "Campari Soda", description: "", price: "€3.00" },
              { name: "The/Tisane", description: "", price: "€2.50" },
              { name: "Cioccolata calda", description: "", price: "€3.50" },
            ]
          },
          {
            title: "Birra",
            image: null,
            items: [
              { name: "Nastro Azzurro", description: "", price: "€2.50" },
              { name: "Beck’s", description: "", price: "€2.50" },
              { name: "Corona", description: "", price: "€3.00" },
              { name: "Tennent's", description: "", price: "€3.50" },
              { name: "Ichnusa", description: "", price: "€3.00" },
              { name: "Raffo", description: "", price: "€3.00" },
              { name: "Heineken", description: "", price: "€2.50" },
              { name: "Ceres", description: "", price: "€3.00" }
            ]
          }
        ]
      },
  
      drinks: {
        title: "Drinks",
        sections: [
          {
            title: "Cocktail Spritz",
            image: null,
            items: [
              { name: "Aperol Spritz", description: "Aperol, prosecco, soda", price: "€5.00" },
              { name: "Campari Spritz", description: "Campari, prosecco, soda", price: "€5.00" },
              { name: "Limoncello Spritz", description: "Limoncello, prosecco, soda", price: "€5.00" },
              { name: "Hugo Spritz", description: "Fiori di sambuco, prosecco, soda", price: "€6.00" },
              { name: "Venturo Spritz", description: "Venturo, prosecco, soda", price: "€6.00" },
            ]
          },
          {
            title: "Cocktail Classici",
            image: null,
            items: [
              { name: "Negroni", description: "Vermouth rosso, campari, gin", price: "€6.00" },
              { name: "Negroni sbagliato", description: "Vermouth rosso, campari, prosecco", price: "€6.00" },
              { name: "Americano", description: "Vermouth rosso, campari, soda", price: "€6.00" },
              { name: "Mojito", description: "Rum bianco, lime, zucchero di canna, menta, soda", price: "€7.00" },
              { name: "Margarita", description: "Cointreau, tequila, lime, sale", price: "€7.00" },
              { name: "Cocktail Martini", description: "Gin, vermouth dry", price: "€7.00" },
              { name: "Espresso Martini", description: "Vodka, liquore al caffè, caffè espresso", price: "€7.00" },
              { name: "Gin Tonic/Lemon", description: "", price: "€6.00" },
              { name: "Gin Special Tonic/Lemon", description: "", price: "€8.00" },
              { name: "Moscow Mule", description: "Vodka, lime, ginger beer", price: "€7.00" },
              { name: "London Mule", description: "Gin, lime, ginger beer", price: "€7.00" },
            ]
          },
          {
            title: "Sour",
            image: null,
            items: [
              { name: "Campari Sour", description: "Campari, sciroppo di zucchero, lime", price: "€7.00" },
              { name: "Venturo Sour", description: "Venturo, sciroppo di zucchero, lime", price: "€7.00" },
              { name: "Vodka Sour", description: "Vodka, sciroppo di zucchero, lime", price: "€7.00" },
              { name: "Gin Sour", description: "Gin, sciroppo di zucchero, lime", price: "€7.00" },
              { name: "Whisky Sour", description: "Whisky, sciroppo di zucchero, lime", price: "€7.00" },
              { name: "Disaronno Sour", description: "Disaronno, sciroppo di zucchero, lime", price: "€7.00" }
            ]
          },
          {
            title: "Cocktail Analcolici",
            image: null,
            items: [
              { name: "Virgin Mojito", description: "Tonica , zucchero di canna, menta", price: "€5.00" },
              { name: "Virgin Spritz", description: "Crodino, succo d'arancia, tonica", price: "€5.00" },
              { name: "Analcolico Zenit", description: "", price: "€6.00" },
            ]
          },
          {
            title: "Distillati",
            image: null,
            items: [
              { name: "Belvedere", description: "", price: "€6.00" },
              { name: "Grey", description: "", price: "€6.00" },
              { name: "Rum Diplomatico", description: "", price: "€7.00" },
              { name: "Rum Zagapa", description: "", price: "€8.00" },
              { name: "Whisky Jack Daniels", description: "", price: "€4.00" },
              { name: "Whisky Ballantine's", description: "", price: "€4.00" },
              { name: "Brandy Vecchia Romagna", description: "", price: "€3.50" },
              { name: "Cognac Martell", description: "", price: "€6.00" },
              { name: "Brugal 1888", description: "", price: "€7.00" },
              { name: "Brugal Anejo", description: "", price: "€5.00" },
            ]
          },
          {
            title: "Bollicine",
            image: null,
            items: [
              { name: "Vino Spumante San Martino Millesimato Extra Dry", description: "", price: "€3.00 / 15.00" },
              { name: "Prosecco Biancavigna DOC Brut", description: "", price: "€4.00 / 20.00" },
              { name: "Muratori Franciacorta Brut", description: "", price: "€45.00" },
            ]
          },
          {
            title: "Vino Bianco",
            image: null,
            items: [
              { name: "Masseria Li Veli Contrade Chardonnay", description: "", price: "€3.00 / 15.00" },
              { name: "Vigneti Reale Malvasia Bianca", description: "", price: "€3.50 / 18.00" },
              { name: "Frisino Verdeca IGP", description: "", price: "€5.00 / 25.00" },
              { name: "Tiefenbrunner Merus Pinot Grigio", description: "", price: "€30.00" },
            ]
          },
          {
            title: "Vino Rosato",
            image: null,
            items: [
              { name: "Vigneti Reale Malvasia Rosato", description: "", price: "€3.50 / 18.00" },
              { name: "Funiati Morigine Susumaniello", description: "", price: "€4.00 / 20.00" },
              { name: "Tormaresca Calafuria", description: "", price: "€5.00 / 25.00" },
              { name: "Frisino Primitivo Rosato IGP", description: "", price: "€25.00" },
            ]
          },
          {
            title: "Vino Rosso",
            image: null,
            items: [
              { name: "Tormaresca Neprica Primitivo", description: "", price: "€3.50 / 18.00" },
              { name: "Masserial Li Veli Primonero", description: "", price: "€5.00 / 25.00" },
              { name: "Pastini Verso Sud", description: "", price: "€25.00" },
            ]
          },
        ]
      },

      food: {
        title: "Cucina",
        sections: [
          {
            title: "Pinsa",
            image: null,
            items: [
              { name: "Classica", description: "Salsa di pomodoro, fior di latte", price: "€6.50" },
              { name: "Vegetariana", description: "Zucchine, melanzane, pomodorini, fior di latte", price: "€7.50" },
              { name: "LMT – La Mortazza Tua", description: "Mortadella, stracciatella, pistacchio", price: "€10.00" },
              { name: "Tonno e Cipolla", description: "Salsa di pomodoro, fior di latte, tonno, cipolla", price: "€7.50" },
              { name: "El Diablo", description: "Salsa di pomodoro, fior di latte, salame piccante, nduja", price: "€9.00" },
              { name: "Crudo, Grana e Rucola", description: "Salsa di pomodoro, fior di latte, crudo, grana e rucola", price: "€8.50" },
              { name: "Coppa Special", description: "Salsa di pomodoro, fior di latte, coppa, stracciatella, tarallo sbriciolato", price: "€9.00" },
              { name: "ZeNut", description: "Pinsa alla Nutella", price: "€7.50" }
            ]
          },
          {
            title: "Puccia",
            image: null,
            items: [
              { name: "Veggy", description: "Zucchine grigliate, melanzane grigliate, pomodori, rucola, salsa guacamole", price: "€6.00" },
              { name: "L’Affettata", description: "Affettato, mozzarella, insalata, pomodori", price: "€7.50" },
              { name: "Inferno del Sud", description: "Salame piccante, nduja, pomodori, scamorza, insalata, maionese", price: "€8.50" },
              { name: "Zenit", description: "Tonno, scamorza, pomodori, insalata, salsa Zenit", price: "€8.00" },
              { name: "Cotto e piastrato", description: "Cotto, insalata, pomodori secchi, emmental, maionese", price: "€8.00" }
            ]
          },
          {
            title: "Insalatone",
            image: null,
            items: [
              { name: "Ever Green", description: "Insalata, zucchine grigliate, olive, cetrioli, rucola, semi misti, salsa guacamole", price: "€6.00" },
              { name: "Mediterranea", description: "Insalata, rucola, pomodorini, mozzarella di bufala, tonno, crostini di pane,salsa guacamole", price: "€8.00" },
              { name: "Fit Salad", description: "Insalata, pollo grigliato, scaglie di formaggio, pomodorini, yogurt greco", price: "€7.00" },
              { name: "Zenit Salad", description: "Insalata, pollo grigliato, rucola, cetrioli, olive, cipolla, pomodorini, scaglie di formaggio, crostini di pane, salsa zenit", price: "€9.00" }
            ]
          }
        ]
      }
    },
    en: {
      bar: {
        title: "Bar",
        sections: [
          {
            title: "Coffee & Hot Drinks",
            image: null,
            items: [
              { name: "Espresso", description: "", price: "€1.20" },
              { name: "Espresso with Liquor", description: "", price: "€1.50" },
              { name: "Espresso Macchiato", description: "", price: "€1.20" },
              { name: "Soy Espresso Macchiato", description: "", price: "€1.20" },
              { name: "Double Espresso", description: "", price: "€2.00" },
              { name: "Cappuccino", description: "", price: "€1.50" },
              { name: "Soy Cappuccino", description: "", price: "€2.00" },
              { name: "Americano Coffee", description: "", price: "€1.50" },
              { name: "Barley Coffee", description: "", price: "€1.50" },
              { name: "Espressino", description: "", price: "€1.30" },
              { name: "Latte Macchiato", description: "", price: "€1.80" },
              { name: "Soy Latte Macchiato", description: "", price: "€2.00" },
              { name: "Ginseng Coffee", description: "", price: "€1.50" },
              { name: "Decaffeinated Coffee", description: "", price: "€1.20" },
              { name: "Iced Coffee", description: "", price: "€1.50" },
              { name: "Leccese Coffee", description: "", price: "€2.00" },
              { name: "Shaken Coffee", description: "", price: "€2.00" },
              { name: "Shaken Coffee with Liquor", description: "", price: "€2.00" }
            ]
          },
          {
            title: "Pastries",
            image: null,
            items: [
              { name: "Plain Croissant", description: "", price: "€1.20" },
              { name: "Filled Croissant", description: "Custard, Apricot Jam, Nutella", price: "€1.80" },
              { name: "Vegan Filled Croissant", description: "", price: "€1.80" },
              { name: "Pasticciotto", description: "Traditional custard pastry", price: "€1.50" },
              { name: "Puff Pastry", description: "", price: "€1.80" }
            ]
          },
          {
            title: "Soft Drinks",
            image: null,
            items: [
              { name: "Still / Sparkling Water 0.5L", description: "", price: "€1.00" },
              { name: "Still / Sparkling Water 1.0L", description: "", price: "€2.00" },
              { name: "Coca-Cola / Coca-Cola Zero", description: "", price: "€2.50" },
              { name: "Fanta", description: "", price: "€2.50" },
              { name: "Lemon Soda", description: "", price: "€2.50" },
              { name: "Sprite", description: "", price: "€2.50" },
              { name: "Schweppes Tonic / Lemon", description: "", price: "€2.50" },
              { name: "Peach / Lemon Iced Tea", description: "", price: "€2.50" },
              { name: "Crodino", description: "", price: "€2.50" },
              { name: "Italian Soda", description: "", price: "€1.50" },
              { name: "San Pellegrino Cocktail", description: "", price: "€2.50" },
              { name: "Ginger Beer", description: "", price: "€2.50" },
              { name: "Fruit Juice", description: "", price: "€2.00" },
              { name: "Freshly Squeezed Juice", description: "", price: "€3.00" },
              { name: "Campari Soda", description: "", price: "€3.00" },
              { name: "Tea / Herbal Infusions", description: "", price: "€2.50" },
              { name: "Hot Chocolate", description: "", price: "€3.50" }
            ]
          },
          {
            title: "Beer",
            image: null,
            items: [
              { name: "Nastro Azzurro", description: "", price: "€2.50" },
              { name: "Beck’s", description: "", price: "€2.50" },
              { name: "Corona", description: "", price: "€3.00" },
              { name: "Tennent's", description: "", price: "€3.50" },
              { name: "Ichnusa", description: "", price: "€3.00" },
              { name: "Raffo", description: "", price: "€3.00" },
              { name: "Heineken", description: "", price: "€2.50" },
              { name: "Ceres", description: "", price: "€3.00" }
            ]
          }
        ]
      },
    
      drinks: {
        title: "Drinks",
        sections: [
          {
            title: "Spritz Cocktails",
            image: null,
            items: [
              { name: "Aperol Spritz", description: "Aperol, prosecco, soda", price: "€5.00" },
              { name: "Campari Spritz", description: "Campari, prosecco, soda", price: "€5.00" },
              { name: "Limoncello Spritz", description: "Limoncello, prosecco, soda", price: "€5.00" },
              { name: "Hugo Spritz", description: "Elderflower, prosecco, soda", price: "€6.00" },
              { name: "Venturo Spritz", description: "Venturo, prosecco, soda", price: "€6.00" }
            ]
          },
          {
            title: "Classic Cocktails",
            image: null,
            items: [
              { name: "Negroni", description: "Red vermouth, Campari, gin", price: "€6.00" },
              { name: "Negroni Sbagliato", description: "Red vermouth, Campari, prosecco", price: "€6.00" },
              { name: "Americano", description: "Red vermouth, Campari, soda", price: "€6.00" },
              { name: "Mojito", description: "White rum, lime, cane sugar, mint, soda", price: "€7.00" },
              { name: "Margarita", description: "Tequila, Cointreau, lime, salt", price: "€7.00" },
              { name: "Martini Cocktail", description: "Gin, dry vermouth", price: "€7.00" },
              { name: "Espresso Martini", description: "Vodka, coffee liqueur, espresso", price: "€7.00" },
              { name: "Gin & Tonic / Lemon", description: "", price: "€6.00" },
              { name: "Premium Gin & Tonic / Lemon", description: "", price: "€8.00" },
              { name: "Moscow Mule", description: "Vodka, lime, ginger beer", price: "€7.00" },
              { name: "London Mule", description: "Gin, lime, ginger beer", price: "€7.00" }
            ]
          },
          {
            title: "Sour Cocktails",
            image: null,
            items: [
              { name: "Campari Sour", description: "Campari, sugar syrup, lime", price: "€7.00" },
              { name: "Venturo Sour", description: "Venturo, sugar syrup, lime", price: "€7.00" },
              { name: "Vodka Sour", description: "Vodka, sugar syrup, lime", price: "€7.00" },
              { name: "Gin Sour", description: "Gin, sugar syrup, lime", price: "€7.00" },
              { name: "Whisky Sour", description: "Whisky, sugar syrup, lime", price: "€7.00" },
              { name: "Disaronno Sour", description: "Disaronno, sugar syrup, lime", price: "€7.00" }
            ]
          },
          {
            title: "Non-Alcoholic Cocktails",
            image: null,
            items: [
              { name: "Virgin Mojito", description: "Tonic water, cane sugar, mint", price: "€5.00" },
              { name: "Virgin Spritz", description: "Crodino, orange juice, tonic water", price: "€5.00" },
              { name: "Zenit Mocktail", description: "", price: "€6.00" }
            ]
          },
          {
            title: "Spirits",
            image: null,
            items: [
              { name: "Belvedere Vodka", description: "", price: "€6.00" },
              { name: "Grey Goose Vodka", description: "", price: "€6.00" },
              { name: "Diplomatico Rum", description: "", price: "€7.00" },
              { name: "Zacapa Rum", description: "", price: "€8.00" },
              { name: "Jack Daniel’s Whiskey", description: "", price: "€4.00" },
              { name: "Ballantine’s Whiskey", description: "", price: "€4.00" },
              { name: "Vecchia Romagna Brandy", description: "", price: "€3.50" },
              { name: "Martell Cognac", description: "", price: "€6.00" },
              { name: "Brugal 1888", description: "", price: "€7.00" },
              { name: "Brugal Añejo", description: "", price: "€5.00" }
            ]
          },
          {
            title: "Sparkling Wines",
            image: null,
            items: [
              { name: "San Martino Millesimato Extra Dry", description: "", price: "€3.00 / 15.00" },
              { name: "Prosecco Biancavigna DOC Brut", description: "", price: "€4.00 / 20.00" },
              { name: "Muratori Franciacorta Brut", description: "", price: "€45.00" }
            ]
          },
          {
            title: "White Wines",
            image: null,
            items: [
              { name: "Masseria Li Veli Contrade Chardonnay", description: "", price: "€3.00 / 15.00" },
              { name: "Vigneti Reale Malvasia Bianca", description: "", price: "€3.50 / 18.00" },
              { name: "Frisino Verdeca IGP", description: "", price: "€5.00 / 25.00" },
              { name: "Tiefenbrunner Merus Pinot Grigio", description: "", price: "€30.00" }
            ]
          },
          {
            title: "Rosé Wines",
            image: null,
            items: [
              { name: "Vigneti Reale Malvasia Rosato", description: "", price: "€3.50 / 18.00" },
              { name: "Funiati Morigine Susumaniello", description: "", price: "€4.00 / 20.00" },
              { name: "Tormaresca Calafuria", description: "", price: "€5.00 / 25.00" },
              { name: "Frisino Primitivo Rosato IGP", description: "", price: "€25.00" }
            ]
          },
          {
            title: "Red Wines",
            image: null,
            items: [
              { name: "Tormaresca Neprica Primitivo", description: "", price: "€3.50 / 18.00" },
              { name: "Masseria Li Veli Primonero", description: "", price: "€5.00 / 25.00" },
              { name: "Pastini Verso Sud", description: "", price: "€25.00" }
            ]
          }
        ]
      },
    
      food: {
        title: "Kitchen",
        sections: [
          {
            title: "Pinsa",
            image: null,
            items: [
              { name: "Classic", description: "Tomato sauce, mozzarella", price: "€6.50" },
              { name: "Vegetarian", description: "Zucchini, eggplant, cherry tomatoes, mozzarella", price: "€7.50" },
              { name: "LMT – La Mortazza Tua", description: "Mortadella, stracciatella cheese, pistachio", price: "€10.00" },
              { name: "Tuna & Onion", description: "Tomato sauce, mozzarella, tuna, onion", price: "€7.50" },
              { name: "El Diablo", description: "Tomato sauce, mozzarella, spicy salami, nduja", price: "€9.00" },
              { name: "Cured Ham, Grana & Rocket", description: "Tomato sauce, mozzarella, cured ham, Grana Padano, rocket", price: "€8.50" },
              { name: "Coppa Special", description: "Tomato sauce, mozzarella, coppa, stracciatella, crushed tarallo", price: "€9.00" },
              { name: "ZeNut", description: "Pinsa with Nutella", price: "€7.50" }
            ]
          },
          {
            title: "Puccia Sandwiches",
            image: null,
            items: [
              { name: "Veggy", description: "Grilled zucchini, eggplant, tomatoes, rocket, guacamole sauce", price: "€6.00" },
              { name: "The Cold Cuts", description: "Cold cuts, mozzarella, salad, tomatoes", price: "€7.50" },
              { name: "Southern Inferno", description: "Spicy salami, nduja, tomatoes, scamorza, salad, mayonnaise", price: "€8.50" },
              { name: "Zenit", description: "Tuna, scamorza, tomatoes, salad, Zenit sauce", price: "€8.00" },
              { name: "Grilled Ham & Cheese", description: "Cooked ham, salad, sun-dried tomatoes, Emmental, mayonnaise", price: "€8.00" }
            ]
          },
          {
            title: "Big Salads",
            image: null,
            items: [
              { name: "Ever Green", description: "Salad, grilled zucchini, olives, cucumber, rocket, mixed seeds, guacamole sauce", price: "€6.00" },
              { name: "Mediterranean", description: "Salad, rocket, cherry tomatoes, buffalo mozzarella, tuna, croutons, guacamole sauce", price: "€8.00" },
              { name: "Fit Salad", description: "Salad, grilled chicken, cheese flakes, cherry tomatoes, Greek yogurt", price: "€7.00" },
              { name: "Zenit Salad", description: "Salad, grilled chicken, rocket, cucumber, olives, onion, cherry tomatoes, cheese flakes, croutons, Zenit sauce", price: "€9.00" }
            ]
          }
        ]
      }
    }
      

      
};
  