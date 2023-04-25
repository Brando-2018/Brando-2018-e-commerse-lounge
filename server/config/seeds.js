const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Cigars' },
    { name: 'Humidors' },
    { name: 'Hookahs' },
    { name: 'Lighters' },
    { name: 'Cutters' },
    { name: 'Cases' },
    { name: 'Ashtrays' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Arturo Fuente Rothschild',
      description:
        'Arturo Fuente Rothschild is dark and hefty - just like its flavor. This premium stick is loaded with top-quality notes of rich and spicy cedar, cream, and earth. This cigar certainly looks like a powerhouse so I was shocked at how smooth and mellow the draw was--but I couldn’t be more satisfied!',
      image: 'afrothchild.png',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Arturo Fuente Curly Head Deluxe',
      description:
        'All any seasoned aficionado needs to hear is “Arturo Fuente” and they know they’re about to smoke a top-notch cigar. This especially rings true for the Curly Head Deluxe--a nutty and peppery Lonsdale that draws like a dream. Curly Head exhibits some of the best flavor and construction on the market today.',
      image: 'afcurlyheaddeluxe.png',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Arturo Fuente Churchill',
      category: categories[0]._id,
      description:
        'Arturo Fuente is a luxurious premium blend, and it’s kicked up a notch in this maduro Churchill. The seamless wrapper definitely adds an element of spice that its easier going cousins don’t have. Same impeccable construction, same slow, even burn--just with a twist. This one is a must-have!',
      image: 'afchurchill.png',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Ashton 8-9-8',
      category: categories[0]._id,
      description:
        'The silky, golden Connecticut shade wrapper on the premium handmade Ashton 8-9-8 cigar was the perfect representation of the exquisite flavor to come! Creamy, nutty, and a hint of earthy, the aged Dominican 8-9-8 blend isn’t just a must-have from Ashton, but it’s a must-have in your humidor!',
      image: 'ashtoneightnineeight.png',
      price: 276.25,
      quantity: 25
    },
    {
      name: 'Ashton Senoritas',
      category: categories[0]._id,
      description:
        'The Ashton artisans are known to be innovators, and the premium snack-sized Señoritas cigars are yet another testament to that. Small enough to fit in your pocket but boasting a flavor profile full enough to satisfy those midday cravings, these are top-quality cigars that any aficionado is sure to marvel over. Señoritas are handmade with aged Dominican fillers, a stunning Cameroon wrapper, and all of the meticulous care of their full-size cousins. This is a must-have for cigar fans.',
      image: 'ashtonsenoritas.png',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Black Label Trading Co. Last Rite Petit Lancero',
      category: categories[0]._id,
      description:
        'Last Rites Petit Lancero cigars come with the premium quality and outstanding flavor that I have come to expect from a Black Label Trading Company blend. For a skinny stick, this one is a real slow burner with thick clouds of smoke, a fabulous aroma, and full-bodied notes of chocolate, cedar, caramel, and an underlying creaminess that leaves a lovely taste on the tongue.',
      image: 'bltclastritepl.png',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Black Label Trading Co. Last Rites Viaticum BP Lancero Limited Edition',
      category: categories[0]._id,
      description:
        'The Black Label Trading Co. has become a famous boutique brand known for their top-rated limited releases, so I just had to get my hands on BLTC Last Rites Viaticum BP Lancero Limited Edition premium cigars. These long and thin box-pressed beauties are rolled by hand in a 6.75x40 size, boasting a core of finely aged Nicaraguan and Honduran long fillers bundled within a hearty Honduran Habano binder and completed by a top-shelf Ecuadorian Habano maduro wrapper that presents a lusciously dark hue. Once I started puffing away on one of these luxury treats, I was taken aback by both the complexity and balance, delivering a tapestry of sweet earth and dark fruit flavors backed by plenty of spice and some floral undertones. Available in boxes of 20, and with only 800 boxes being made, act fast if you want them in your humidor.',
      image: 'bltclastritesviaticumle.png',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Cohiba Macassar Double Corona',
      category: categories[0]._id,
      description:
        'Cohiba Macassar Double Corona features a unique and very dark Connecticut Havano wrapper that was chosen exclusively for this blend a Connecticut broadleaf binder, and a combination of Dominican and Nicaraguan fillers that have been aged four years, are then further aged in fragrant rum barrels. The result is a highly complex, medium bodied smoke with notes of earth, white pepper, cedar, and vanilla. The flawlessly handcrafted 7.25 x 54 Double Corona has become my go-to smoke after a hearty dinner and paired with my favorite Rum or cognac.',
      image: 'cmacassardc.png',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Cohiba Royale Toro Royale',
      category: categories[0]._id,
      description:
        'Cohiba Royale Toro Royale cigars are the pinnacle of luxury. Packaged in stylish boxes of 10, these cigars, Cohiba’s first blend ever hailing from Honduras, are perfectly constructed with Dominican, Honduran, and Nicaraguan long-filler leaves, a Dominican binder, and finished with a dark and oily Nicaraguan Broadleaf wrapper. This royal cigar will treat the discerning smoker with top-notch flavors of spice, black pepper, cinnamon, and sweet tobacco.',
      image: 'croyaletoror.png',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Cohiba Red Dot Lonsdale Grande',
      category: categories[0]._id,
      description:
        'With the Lonsdale Grande, there’s no waiting for that sweet spot in the Cohiba Dominican blend. This slender skyscraper burns a bit quicker than its cousins, opening up into a bouquet of creamy and savory flavor notes right away that lasts right down to the nub.',
      image: 'creddotlonsdaleg.png',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'La Aurora 107 Nicaragua Robusto',
      category: categories[0]._id,
      description:
        'When I picked up a box of La Aurora 107 Nicaragua Robusto cigars and sparked one up, they quickly became my go-to premium smoke. The blend consists of aged Nicaraguan long filler and binder tobaccos that are swathed in a rich and oily top-quality Nicaraguan wrapper, all rolled into a popular 5 x 50 size. The first Nicaraguan puro blend in the La Aurora lineup, these top-shelf smokes are medium-full bodied and provide decadently smooth notes of nuts, earth, pepper, coffee, and leather that dance on the palate with every puff, and top-notch construction makes the smoking experience effortless.',
      image: 'lanicaragua.png',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'La Aurora Preferidos',
      category: categories[0]._id,
      description:
        'Bound and filled with vintage tobacco from the Dominican Republic and wrapped in a handsome Ecuadorian Connecticut wrapper, La Aurora Preferidos Emerald cigars have all the makings of a fine vitola. In addition to their wonderful construction consisting of a smooth draw and even burn, these babies also have a delicious flavor profile.',
      image: 'lapreferidos.png',
      price: 187.00,
      quantity: 30
    },
    {
      name: 'Prestige Cigar Humidors - The Hampton Black Finish',
      category: categories[1]._id,
      description:
        'The Prestige Hampton Black Finish Cigar Humidor features a diamond pattern bonded leather top and sides with red accent stitching to add a luxury look to any surroundings. Lined with the best Spanish cedar, a dynamic hinged upper tray raises above the Interior when the lid is opened and lowers when closed. A 3- piece divider set attaches to the interior magnetically, allowing you to separate your brands. It also boasts a top-quality polished silver humidifier, an ultra-wide digital silver bezel hygrometer with calibration feature and has a capacity to house up to 200 of your favorite premium cigars. ',
      image: 'pchhamptonblack.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Prestige Cigar Humidors - Sovereign',
      category: categories[1]._id,
      description:
        'Featuring two different colored woods and a stunning glass top so I can lovingly gaze upon my top-rated sticks, this gorgeous cigar humidor fits into just about any room’s décor. The Sovereign has the capacity to comfortably hold up to 50 premium cigars, providing enough space for my collection to grow. This striking storage unit also comes with a built-in humidifier as well as an analog hygrometer, so the conditions inside will never be a mystery and my smokes will always be top-quality.',
      image: 'pchsovereign.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Prestige Cigar Humidors - Baccus Two Tone',
      category: categories[1]._id,
      description:
        'This surprisingly affordable wood humidor features Spanish cedar lining and a two-tone, high-gloss finish, accented with gold pull handles to open the three drawers. It also came with a lock and key set, and a humidifier and hygrometer. Best of all, this gorgeous, airtight piece of furniture does an amazing job of keeping up to 200 of my favorite premium cigars fresh.',
      image: 'pchbaccustt.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Old Glory',
      category: categories[1]._id,
      description:
        'For the patriotic aficionado, proudly display the heritage and prestige of the USA with this devoted Old Glory cigar humidor. “Old Glory” herself is distinctly displayed in rustic, weathered fashion, across this partisan box’s polished exterior. Able to accommodate up to 25, probably non-American smokes (it’s ok, we won’t tell) with beautiful, adjustable cedar-lined storage, and even includes its own, top-quality humidifier and glass analog hygrometer.',
      image: 'oldglory.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Azteca 75ct',
      category: categories[1]._id,
      description:
        'This mesmerizing- geometric pattern design inspired by the ancient Aztec culture, the Azteca cigar humidor offers a luxury stylish way to store up to 75 of your handmade premium cigars. Lined with perfectly aged kiln-dried Spanish cedar, the best humidifier and hygrometer, the Azteca provides the perfect airtight sealant to keep your favorite cigars in pristine smoking condition.',
      image: 'azteca.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Solana Rosewood 100ct',
      category: categories[1]._id,
      description:
        'Preserve the impeccable craftsmanship and premium tobacco of your collection with a cigar humidor of your own. Who wants to smoke a dry cigar? They fall apart, and lose all the savory flavor that drew you into this lavish lifestyle. These cigar humidors are masterfully engineered to ensure freshness and the top-notch, quality flavor you crave. Elie Bleu, Visol, Prestige cigar humidors and more! Available in a bevy of shapes, models and sizes, you’re sure to find the cigars humidor right for you. From decorative, table-top masterpieces of oak and glass, to convenient on-the-go humidification, this collection of premium humidors for cigars has something for everyone and every home.',
      image: 'solanarosewood.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
