const db = require("./connection");
const { User, Item, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Household" },
    { name: "Electronics" },
    { name: "Traders" },
  ]);

  console.log("categories seeded");

  await Item.deleteMany();

  const items = await Item.insertMany([
    {
      name: "Air Fryer",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "air-fryer.jpg",
      category: categories[0]._id,
      quantity: 500,
    },
    {
      name: "Bag of Vegetables",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "bag-of-veg.jpg",
      category: categories[0]._id,
      quantity: 200,
    },
    {
      name: "Bedding sheets",
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image: "bedding-sheets.jpg",
      category: categories[0]._id,
      quantity: 20,
    },
    {
      name: "Bench",
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "bench.jpg",
      category: categories[0]._id,
      quantity: 50,
    },
    {
      name: "Electric Generator",
      description:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      image: "electric-generator.jpg",
      category: categories[2]._id,
      quantity: 100,
    },
    {
      name: "Electrical test equipment",
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "electrical-test-equipment.jpg",
      category: categories[2]._id,
      quantity: 30,
    },
    {
      name: "Headphones",
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "headphones.jpg",
      category: categories[1]._id,
      quantity: 30,
    },
    {
      name: "Kettle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "kettle.jpg",
      category: categories[0]._id,
      quantity: 2,
    },
    {
      name: "Microwave",
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "microwave.jpg",
      category: categories[0]._id,
      quantity: 5,
    },
    {
      name: "Kitchen Mixer",
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "kitchen-mixer.jpg",
      category: categories[0]._id,
      quantity: 19,
    },
    {
      name: "Mobile phone",
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "mobile-phone.jpg",
      category: categories[1]._id,
      quantity: 55,
    },
    {
      name: "Mug and coaster",
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "mug-and-coaster.jpg",
      category: categories[0]._id,
      quantity: 12,
    },
    {
      name: "Office desk",
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "office-desk.jpg",
      category: categories[0]._id,
      quantity: 90,
    },
    {
      name: "Power strip",
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "power-strip.jpg",
      category: categories[2]._id,
      quantity: 20,
    },
    {
      name: "Sofa",
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "sofa.jpg",
      category: categories[0]._id,
      quantity: 80,
    },
    {
      name: "Table and chairs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "table-and-chairs.jpg",
      category: categories[0]._id,
      quantity: 10,
    },
    {
      name: "Tablet and mobile",
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "tablet-and-mobile.jpg",
      category: categories[1]._id,
      quantity: 40,
    },
    {
      name: "Usb stick",
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "usb-stick.jpg",
      category: categories[1]._id,
      quantity: 100,
    },
    {
      name: "White microwave",
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "white-microwave.jpg",
      category: categories[0]._id,
      quantity: 60,
    },
    {
      name: "Wireless mouse",
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "wireless-mouse.jpg",
      category: categories[1]._id,
      quantity: 100,
    },
  ]);

  console.log("items seeded");

  await User.deleteMany();

  await User.create({
    name: "Pamela Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    // items: [items[0]._id],
    items: items.map(function (element, index, array) {
      items[index]._id;
    }),
  });

  await User.create({
    name: "Elijah Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
