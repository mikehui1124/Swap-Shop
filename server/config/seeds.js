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

  await User.deleteMany();

  const users = await User.insertMany([
      {
        name: "Pamela Washington",
        email: "pamela@testmail.com",
        password: "password12345"     
      }, 
      {
      name: "Elijah Holt",
      email: "eholt@testmail.com",
      password: "password12345",
      },
      {
        name: "Bruce Lee",
        email: "bruce@testmail.com",
        password: "password12345",
      }
    ]);

  // await User.create({
  //   name: "Pamela Washington",
  //   email: "pamela@testmail.com",
  //   password: "password12345",
  //   // items: [items[0]._id],
  //   items: items.map(function (element, index, array) {
  //     items[index]._id;
  //   }),
  // });

  // await User.create({
  //   name: "Elijah Holt",
  //   email: "eholt@testmail.com",
  //   password: "password12345",
  // });

  console.log("users seeded");

  await Item.deleteMany();

  const items = await Item.insertMany([
    {
      name: "Air Fryer",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "air-fryer.jpg",
      owner: users[0]._id,
      category: categories[0]._id
      
    },
    {
      name: "Bag of Vegetables",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "bag-of-veg.jpg",
      owner: users[1]._id,
      category: categories[0]._id
      
    },
    {
      name: "Bedding sheets",
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image: "bedding-sheets.jpg",
      owner: users[2]._id,
      category: categories[0]._id,
      
    },
    {
      name: "Bench",
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "bench.jpg",
      owner: users[0]._id,
      category: categories[0]._id
      
    },
    {
      name: "Electric Generator",
      description:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      image: "electric-generator.jpg",
      owner: users[1]._id,
      category: categories[2]._id,      
    },
    {
      name: "Electrical test equipment",
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "electrical-test-equipment.jpg",
      owner: users[2]._id,
      category: categories[2]._id
      
    },
    {
      name: "Headphones",
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "headphones.jpg",
      owner: users[0]._id,
      category: categories[1]._id,      
    },
    {
      name: "Kettle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "kettle.jpg",
      owner: users[1]._id,
      category: categories[0]._id,      
    },
    {
      name: "Microwave",
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "microwave.jpg",
      owner: users[2]._id,
      category: categories[0]._id
    },
    {
      name: "Kitchen Mixer",
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "kitchen-mixer.jpg",
      owner: users[0]._id,
      category: categories[0]._id
    },
    {
      name: "Mobile phone",
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "mobile-phone.jpg",
      owner: users[1]._id,
      category: categories[1]._id
    },
    {
      name: "Mug and coaster",
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "mug-and-coaster.jpg",
      owner: users[2]._id,
      category: categories[0]._id
    },
    {
      name: "Office desk",
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "office-desk.jpg",
      owner: users[0]._id,
      category: categories[0]._id
    },
    {
      name: "Power strip",
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "power-strip.jpg",
      owner: users[1]._id,
      category: categories[2]._id
    },
    {
      name: "Sofa",
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "sofa.jpg",
      owner: users[2]._id,
      category: categories[0]._id      
    },
    {
      name: "Table and chairs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "table-and-chairs.jpg",
      owner: users[0]._id,
      category: categories[0]._id
    },
    {
      name: "Tablet and mobile",
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "tablet-and-mobile.jpg",
      owner: users[1]._id,
      category: categories[1]._id
    },
    {
      name: "Usb stick",
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "usb-stick.jpg",
      owner: users[2]._id,
      category: categories[1]._id
    },
    {
      name: "White microwave",
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "white-microwave.jpg",
      owner: users[0]._id,
      category: categories[2]._id
    },
    {
      name: "Wireless mouse",
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "wireless-mouse.jpg",
      owner: users[1]._id,
      category: categories[2]._id
    },
  ]);

  console.log("items seeded");



  process.exit();
});
