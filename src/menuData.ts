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
            title: "Aperitivi - sotto il sole delle XIX",
            image: null,
            items: [
              { name: "Free-Trittico (mix di frittini)", description: "", price: "€10.00", allergens: ["🌾", "🥚", "🥛"] },
              { name: "Pittule (classica, pizzaiola)", description: "", price: "€4.00", allergens: ["🌾"] },
              { name: "Crocchette di patate", description: "", price: "€4.50", allergens: ["🌾", "🥚", "🥛"] },
              { name: "Polpette di melanzane", description: "", price: "€5.00", allergens: ["🌾", "🥚", "🥛"] },
              { name: "Bocconcini di pollo", description: "", price: "€5.00", allergens: ["🌾"] },
              { name: "Anelli di cipolla", description: "", price: "€5.00", allergens: ["🌾"] },
              { name: "Patatira", description: "Mix di patate", price: "€7.00", allergens: ["🌾"] },
              { name: "Patatine fritte", description: "", price: "€4.00", allergens: [] },
              { name: "Patatine Cacio e Pepe", description: "", price: "€6.00", allergens: ["🥛"] },
              { name: "Tagliere Zenit", description: "Mix di salumi e formaggi", price: "€12.00", allergens: ["🥛"] },
              { name: "Aperitivo Zenit", description: "Mix di salumi, formaggi e rosticceria", price: "€20.00", allergens: ["🌾", "🥛"] },
              { name: "Tris Zenit", description: "Mix di salumi e formaggi", price: "€1.00", allergens: ["🥛"] },
              { name: "Rosticceria", description: "", price: "€2.00 / 4.00", allergens: ["🌾", "🥚", "🥛"] },
            ]
          },
          {
            title: "Le nostre Pizze",
            image: null,
            items: [
              { name: "Margherita", description: "Mozzarella fior di latte, salsa di pomodoro", price: "€5.50", allergens: ["🌾", "🥛"] },
              { name: "Chips", description: "Salsa di pomodoro, mozzarella fior di latte, patatine fritte", price: "€6.00", allergens: ["🌾", "🥛"] },
              { name: "Napoli", description: "Salsa di pomodoro, mozzarella fior di latte, capperi, acciughe", price: "€6.50", allergens: ["🌾", "🐟", "🥛"] },
              { name: "Americana", description: "Salsa di pomodoro, mozzarella fior di latte, patatine fritte, würstel", price: "€6.50", allergens: ["🌾", "🥛"] },
              { name: "Diavola", description: "Salsa di pomodoro, mozzarella fior di latte, salame piccante", price: "€7.00", allergens: ["🌾", "🥛"] },
              { name: "Tonno e Cipolla", description: "Salsa di pomodoro, mozzarella fior di latte, tonno, cipolla", price: "€7.00", allergens: ["🌾", "🐟", "🥛"] },
              { name: "Fumé", description: "Salsa di pomodoro, mozzarella fior di latte, scamorza affumicata, pancetta", price: "€7.00", allergens: ["🌾", "🥛"] },
              { name: "Cotto e Funghi", description: "Salsa di pomodoro, mozzarella fior di latte, prosciutto cotto, funghi", price: "€7.00", allergens: ["🌾", "🥛"] },
              { name: "Bufala", description: "Salsa di pomodoro, mozzarella di bufala, basilico", price: "€7.50", allergens: ["🌾", "🥛"] },
              { name: "Contadina", description: "Salsa di pomodoro, mozzarella fior di latte, melanzane, zucchine, peperoni", price: "€8.00", allergens: ["🌾", "🥛"] },
              { name: "Calabrese", description: "Salsa di pomodoro, mozzarella fior di latte, spianata, 'nduja", price: "€8.00", allergens: ["🌾", "🥛"] },
              { name: "Crudaiola", description: "Mozzarella fior di latte, pomodori freschi, prosciutto crudo, rucola, grana", price: "€8.00", allergens: ["🌾", "🥛"] },
              { name: "4 Stagioni", description: "Salsa di pomodoro, mozzarella fior di latte, prosciutto cotto, funghi, carciofi, olive", price: "€8.00", allergens: ["🌾", "🥛"] },
              { name: "4 Formaggi", description: "Salsa di pomodoro, mozzarella fior di latte, grana, gorgonzola, scamorza", price: "€8.00", allergens: ["🌾", "🥛"] },
              { name: "Capricciosa", description: "Salsa di pomodoro, mozzarella fior di latte, prosciutto cotto, funghi, carciofi, capperi, olive", price: "€8.00", allergens: ["🌾", "🥛"] },
              { name: "Mortazza", description: "Mozzarella fior di latte, mortadella, stracciatella, granella di pistacchio", price: "€9.00", allergens: ["🌾", "🥛", "🌰"] },
              { name: "Coppa Special", description: "Salsa di pomodoro, mozzarella fior di latte, coppa, stracciatella, tarallo sbriciolato", price: "€10.00", allergens: ["🌾", "🥛"] }
            ]
          },
          {
            title: "Pinsa",
            image: null,
            items: [
              { name: "Classica", description: "Salsa di pomodoro, fior di latte", price: "€6.50", allergens: ["🌾", "🥛"] },
              { name: "Vegetariana", description: "Zucchine, melanzane, pomodorini, fior di latte", price: "€7.50", allergens: ["🌾", "🥛"] },
              { name: "LMT – La Mortazza Tua", description: "Mortadella, stracciatella, pistacchio", price: "€10.00", allergens: ["🌾", "🥛", "🌰"] },
              { name: "Tonno e Cipolla", description: "Salsa di pomodoro, fior di latte, tonno, cipolla", price: "€7.50", allergens: ["🌾", "🐟", "🥛"] },
              { name: "El Diablo", description: "Salsa di pomodoro, fior di latte, salame piccante, nduja", price: "€9.00", allergens: ["🌾", "🥛"] },
              { name: "Crudo, Grana e Rucola", description: "Salsa di pomodoro, fior di latte, crudo, grana e rucola", price: "€8.50", allergens: ["🌾", "🥛"] },
              { name: "Coppa Special", description: "Salsa di pomodoro, fior di latte, coppa, stracciatella, tarallo sbriciolato", price: "€9.00", allergens: ["🌾", "🥛"] },
              { name: "ZeNut", description: "Pinsa alla Nutella", price: "€7.50", allergens: ["🌾", "🫘", "🥛", "🌰"] }
            ]
          },
          {
            title: "Puccia",
            image: null,
            items: [
              { name: "Veggy", description: "Zucchine grigliate, melanzane grigliate, pomodori, rucola, salsa guacamole", price: "€6.00", allergens: ["🌾"] },
              { name: "L’Affettata", description: "Affettato, mozzarella, insalata, pomodori", price: "€7.50", allergens: ["🌾", "🥛"] },
              { name: "Inferno del Sud", description: "Salame piccante, nduja, pomodori, scamorza, insalata, maionese", price: "€8.50", allergens: ["🌾", "🥚", "🥛"] },
              { name: "Zenit", description: "Tonno, scamorza, pomodori, insalata, salsa Zenit", price: "€8.00", allergens: ["🌾", "🥚", "🐟", "🥛"] },
              { name: "Cotto e piastrato", description: "Cotto, insalata, pomodori secchi, emmental, maionese", price: "€8.00", allergens: ["🌾", "🥚", "🥛"] }
            ]
          },
          {
            title: "Insalatone",
            image: null,
            items: [
              { name: "Ever Green", description: "Insalata, zucchine grigliate, olive, cetrioli, rucola, semi misti, salsa guacamole", price: "€6.00", allergens: ["🌱"] },
              { name: "Mediterranea", description: "Insalata, rucola, pomodorini, mozzarella di bufala, tonno, crostini di pane,salsa guacamole", price: "€8.00", allergens: ["🌾", "🐟", "🥛"] },
              { name: "Fit Salad", description: "Insalata, pollo grigliato, scaglie di formaggio, pomodorini, yogurt greco", price: "€7.00", allergens: ["🥛"] },
              { name: "Zenit Salad", description: "Insalata, pollo grigliato, rucola, cetrioli, olive, cipolla, pomodorini, scaglie di formaggio, crostini di pane, salsa zenit", price: "€9.00", allergens: ["🌾", "🥚", "🥛"] }
            ]
          }
        ]
      },
      allergens: {
        title: "Lista Allergeni",
        disclaimer: "Negli alimenti serviti in questo esercizio e nei loro condimenti si riscontra la presenza di tracce di ingredienti che vengono classificati come “allergeni” e possono provocare allergie o intolleranze in alcune persone e possono costituire un pericolo per la salute. Si invitano, quindi, i consumatori, in particolare quelli che soffrono di allergie o intolleranze alimentari, ad effettuare scelte consapevoli per la loro sicurezza. Chiedete al Nostro personale in sala per qualsiasi domanda o informazione in merito.",
        items: [
          "🌾 Cereali contenenti glutine (grano, farro, grano khorasan, segale, orzo, avena)",
          "🦀 Crostacei",
          "🥚 Uova",
          "🐟 Pesce",
          "🥜 Arachidi",
          "🫘 Soia",
          "🥛 Latte e prodotti a base di latte (incluso lattosio)",
          "🌰 Frutta a guscio (mandorle, nocciole, noci, anacardi, noci pecan, noci del Brasile, pistacchi, noci macadamia)",
          "🌿 Sedano",
          "🟡 Senape",
          "🌱 Semi di sesamo",
          "🍷 Anidride solforosa e solfiti (in concentrazioni superiori a 10 mg/kg o 10 mg/litro)",
          "🌼 Lupini",
          "🐚 Molluschi"
        ]
      },
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
            title: "Aperitifs – Under the Sun of XIX",
            image: null,
            items: [
              { name: "Free Trittico (Mixed Fried Bites)", description: "", price: "€10.00", allergens: ["🌾", "🥚", "🥛"] },
              { name: "Pittule (Classic, Pizzaiola)", description: "Traditional fried dough balls", price: "€4.00", allergens: ["🌾"] },
              { name: "Potato Croquettes", description: "", price: "€4.50", allergens: ["🌾", "🥚", "🥛"] },
              { name: "Eggplant Meatballs", description: "", price: "€5.00", allergens: ["🌾", "🥚", "🥛"] },
              { name: "Chicken Bites", description: "", price: "€5.00", allergens: ["🌾"] },
              { name: "Onion Rings", description: "", price: "€5.00", allergens: ["🌾"] },
              { name: "Patatira", description: "Mixed potatoes", price: "€7.00", allergens: ["🌾"] },
              { name: "French Fries", description: "", price: "€4.00", allergens: [] },
              { name: "Cacio e Pepe Fries", description: "Cheese & black pepper", price: "€6.00", allergens: ["🥛"] },
              { name: "Zenit Platter", description: "Selection of cured meats and cheeses", price: "€12.00", allergens: ["🥛"] },
              { name: "Zenit Aperitif", description: "Selection of cured meats, cheeses and fried snacks", price: "€20.00", allergens: ["🌾", "🥛"] },
              { name: "Zenit Trio", description: "Selection of cured meats and cheeses", price: "€1.00", allergens: ["🥛"] },
              { name: "Savory Snacks", description: "", price: "€2.00 / 4.00", allergens: ["🌾", "🥚", "🥛"] }
            ]
          },   
          {
            title: "Our Pizzas",
            image: null,
            items: [
              { name: "Margherita", description: "Mozzarella, tomato sauce", price: "€5.50", allergens: ["🌾", "🥛"] },
              { name: "Chips", description: "Tomato sauce, mozzarella, French fries", price: "€6.00", allergens: ["🌾", "🥛"] },
              { name: "Napoli", description: "Tomato sauce, mozzarella, cappers, anchovies", price: "€6.50", allergens: ["🌾", "🐟", "🥛"] },
              { name: "Americana", description: "Tomato sauce, mozzarella, French fries, hot dog", price: "€6.50", allergens: ["🌾", "🥛"] },
              { name: "Diavola", description: "Tomato sauce, mozzarella, spicy salami", price: "€7.00", allergens: ["🌾", "🥛"] },
              { name: "Tuna & Onion", description: "Tomato sauce, mozzarella, tuna, onion", price: "€7.00", allergens: ["🌾", "🐟", "🥛"] },
              { name: "Fumé", description: "Tomato sauce, mozzarella, smoked scamorza cheese, bacon", price: "€7.00", allergens: ["🌾", "🥛"] },
              { name: "Ham & Mushroom", description: "Tomato sauce, mozzarella, cooked ham, mushrooms", price: "€7.00", allergens: ["🌾", "🥛"] },
              { name: "Bufala", description: "Tomato sauce, buffalo mozzarella, basil", price: "€7.50", allergens: ["🌾", "🥛"] },
              { name: "Contadina", description: "Tomato sauce, mozzarella, eggplant, zucchini, peppers", price: "€8.00", allergens: ["🌾", "🥛"] },
              { name: "Calabrese", description: "Tomato sauce, mozzarella, spianata spicy salami, 'nduja", price: "€8.00", allergens: ["🌾", "🥛"] },
              { name: "Crudaiola", description: "Mozzarella, fresh tomatoes, cured ham, rocket, Grana cheese", price: "€8.00", allergens: ["🌾", "🥛"] },
              { name: "4 Stagioni", description: "Tomato sauce, mozzarella, cooked ham, mushrooms, artichokes, olives", price: "€8.00", allergens: ["🌾", "🥛"] },
              { name: "4 Formaggi", description: "Tomato sauce, mozzarella, Grana, gorgonzola, scamorza", price: "€8.00", allergens: ["🌾", "🥛"] },
              { name: "Capricciosa", description: "Tomato sauce, mozzarella, cooked ham, mushrooms, artichokes, cappers, olives", price: "€8.00", allergens: ["🌾", "🥛"] },
              { name: "Mortazza", description: "Mozzarella, mortadella, stracciatella cheese, crushed pistachios", price: "€9.00", allergens: ["🌾", "🥛", "🌰"] },
              { name: "Coppa Special", description: "Tomato sauce, mozzarella, coppa, stracciatella cheese, crushed tarallo", price: "€10.00", allergens: ["🌾", "🥛"] }
            ]
          },
          {
            title: "Pinsa",
            image: null,
            items: [
              { name: "Classic", description: "Tomato sauce, mozzarella", price: "€6.50", allergens: ["🌾", "🥛"] },
              { name: "Vegetarian", description: "Zucchini, eggplant, cherry tomatoes, mozzarella", price: "€7.50", allergens: ["🌾", "🥛"] },
              { name: "LMT – La Mortazza Tua", description: "Mortadella, stracciatella cheese, pistachio", price: "€10.00", allergens: ["🌾", "🥛", "🌰"] },
              { name: "Tuna & Onion", description: "Tomato sauce, mozzarella, tuna, onion", price: "€7.50", allergens: ["🌾", "🐟", "🥛"] },
              { name: "El Diablo", description: "Tomato sauce, mozzarella, spicy salami, nduja", price: "€9.00", allergens: ["🌾", "🥛"] },
              { name: "Cured Ham, Grana & Rocket", description: "Tomato sauce, mozzarella, cured ham, Grana Padano, rocket", price: "€8.50", allergens: ["🌾", "🥛"] },
              { name: "Coppa Special", description: "Tomato sauce, mozzarella, coppa, stracciatella, crushed tarallo", price: "€9.00", allergens: ["🌾", "🥛"] },
              { name: "ZeNut", description: "Pinsa with Nutella", price: "€7.50", allergens: ["🌾", "🥛", "🌰", "🫘"] }
            ]
          },
          {
            title: "Puccia Sandwiches",
            image: null,
            items: [
              { name: "Veggy", description: "Grilled zucchini, eggplant, tomatoes, rocket, guacamole sauce", price: "€6.00", allergens: ["🌾"] },
              { name: "The Cold Cuts", description: "Cold cuts, mozzarella, salad, tomatoes", price: "€7.50", allergens: ["🌾", "🥛"] },
              { name: "Southern Inferno", description: "Spicy salami, nduja, tomatoes, scamorza, salad, mayonnaise", price: "€8.50", allergens: ["🌾", "🥚", "🥛"] },
              { name: "Zenit", description: "Tuna, scamorza, tomatoes, salad, Zenit sauce", price: "€8.00", allergens: ["🌾", "🥚", "🐟", "🥛"] },
              { name: "Grilled Ham & Cheese", description: "Cooked ham, salad, sun-dried tomatoes, Emmental, mayonnaise", price: "€8.00", allergens: ["🌾", "🥚", "🥛"] }
            ]
          },
          {
            title: "Big Salads",
            image: null,
            items: [
              { name: "Ever Green", description: "Salad, grilled zucchini, olives, cucumber, rocket, mixed seeds, guacamole sauce", price: "€6.00", allergens: ["🌱"] },
              { name: "Mediterranean", description: "Salad, rocket, cherry tomatoes, buffalo mozzarella, tuna, croutons, guacamole sauce", price: "€8.00", allergens: ["🌾", "🐟", "🥛"] },
              { name: "Fit Salad", description: "Salad, grilled chicken, cheese flakes, cherry tomatoes, Greek yogurt", price: "€7.00", allergens: ["🥛"] },
              { name: "Zenit Salad", description: "Salad, grilled chicken, rocket, cucumber, olives, onion, cherry tomatoes, cheese flakes, croutons, Zenit sauce", price: "€9.00", allergens: ["🌾", "🥚", "🥛"] }
            ]
          },
        ]
      },
      allergens: {
        title: "Allergen List",
        disclaimer: "The foods served in this establishment and their condiments may contain traces of ingredients classified as 'allergens,' which can cause allergies or intolerances in some individuals and may pose a health risk. Consumers, particularly those with food allergies or intolerances, are encouraged to make informed choices for their safety. Please ask our staff for any questions or further information.",
        items: [
          "🌾 Cereals containing gluten (wheat, spelt, khorasan wheat, rye, barley, oats)",
          "🦀 Crustaceans",
          "🥚 Eggs",
          "🐟 Fish",
          "🥜 Peanuts",
          "🫘 Soybeans",
          "🥛 Milk and dairy products (including lactose)",
          "🌰 Nuts (almonds, hazelnuts, walnuts, cashews, pecans, Brazil nuts, pistachios, macadamia nuts)",
          "🌿 Celery",
          "🟡 Mustard",
          "🌱 Sesame seeds",
          "🍷 Sulphur dioxide and sulphites (in concentrations above 10 mg/kg or 10 mg/liter)",
          "🌼 Lupin",
          "🐚 Molluscs"
        ]
      }
    }
};
  