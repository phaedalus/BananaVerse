var companies = [
    {
        name: "Sterling Dynamics",
        type: "Holding",
        founding: new Date(2020, 03, 12, 03, 12, 34),
        founder: "Maxwell Achilles Sterling",
        value: "1.06 b"
    },
    {
        name: "",
        type: "Holding",
        founding: new Date(2020, 03, 12, 03, 12, 34),
        founder: "Lost to time",
        value: "100 b"
    },
    {
        name: "Rustler.co",
        type: "Holding",
        founding: new Date(2023, 04, 04, 09, 30, 00),
        founder: "Johnathan Rustler",
        value: "25 b"
    },
    {
        name: "Ride Free Motorcycle Services",
        type: "Bike Mods",
        founding: new Date(1964, 08, 07, 12, 00, 00),
        founder: "Merle Dixon",
        value: "1.8 m"
    },
    {
        name: "Tobacco Comapany Placeholder",
        type: "Tobacco Company",
        founding: new Date(1724, 08, 07, 12, 00, 00),
        founder: "Placeholder",
        value: "900 m"
    }
];

var characters = [
    {
        fullname: "Maxwell Achilles Sterling",
        birthday: new Date(2000, 01, 29, 12, 31, 21),
        employment: companies[0],
        gender: "Male",
        networth: "985 m",
        game: "GTA",
        playedby: "Tru3",
        weight: "185",
        height: "6'4"
    },
    {
        fullname: "Tyler Michael Devereaux",
        birthday: new Date(1990, 07, 09, 12, 00, 00),
        employment: companies[1],
        gender: "Male",
        networth: "1 b",
        game: "GTA",
        playedby: "Banana",
        weight: "200",
        height: "6'2"
    },
    {
        fullname: "Mitchel Allen Grayer",
        birthday: new Date(1995, 00, 08, 12, 33, 02),
        employment: "Criminal",
        gender: "Male",
        networth: "80 m",
        game: "GTA",
        playedby: "Jules",
        weight: "210",
        height: "6'4"
    },
    {
        fullname: "Isabel Ann Jackson",
        birthday: new Date(1995, 04, 16, 09, 11, 69),
        employment: companies[0],
        gender: "Female",
        networth: "1 b",
        game: "GTA",
        playedby: "Jules",
        weight: "134",
        height: "5'6"
    },
    {
        fullname: "Michael Christopher Hall",
        birthday: new Date(1976, 02, 14, 12, 00, 00),
        employment: companies[1],
        gender: "Male",
        networth: "8.6 b",
        game: "GTA",
        playedby: "Banana",
        weight: "220",
        height: "6'3"
    },
    {
        fullname: "Johnathan Rustler",
        birthday: new Date(1992, 05, 12, 03, 15, 00),
        employment: companies[2],
        gender: "Male",
        networth: "120 b",
        game: "GTA",
        playedby: "Faze",
        weight: "190",
        height: "6'1"
    },
    {
        fullname: "Khloe Emma Monroe",
        birthday: new Date(2000, 08, 09, 01, 17, 00),
        employment: "Personal Assistant",
        gender: "Female",
        networth: "4 m",
        game: "GTA",
        playedby: "Faze",
        weight: "127",
        height: "5'5"
    },
    {
        fullname: "Colton Kenneth Black",
        birthday: new Date(1991, 10, 30, 07, 02, 45),
        employment: "Entrepreneur",
        gender: "Male",
        networth: "245 b",
        game: "GTA",
        playedby: "Colt",
        weight: "220",
        height: "6'3"
    },
    {
        fullname: "Robert Ronald Kennedy",
        birthday: new Date(1988, 06, 04, 09, 11, 69),
        employment: companies[2],
        gender: "Male",
        networth: "1.1 m",
        game: "GTA",
        playedby: "Rob",
        weight: "150",
        height: "5'10"
    },
    {
        fullname: "Sarah Lynn Moore",
        birthday: new Date(1992, 11, 08, 08, 00, 00),
        employment: "Mechanic",
        gender: "Female",
        networth: "200 m",
        game: "GTA",
        playedby: "Rob",
        weight: "100",
        height: "5'0"
    },
    {
        fullname: "Zhyxhio James Black",
        birthday: new Date(1997, 07, 26, 14, 08, 00),
        employment: "Pornstar",
        gender: "Male",
        networth: "13.7 m",
        game: "GTA",
        playedby: "Colt"
    },
    {
        fullname: "Nathan Kingston",
        birthday: new Date(1997, 00, 22, 12, 00, 00),
        employment: companies[4],
        gender: "Male",
        networth: "900 m",
        game: "GTA",
        playedby: "Banana",
        weight: "165",
        height: "5'11"
    },
    {
        fullname: "North Marie Bradshaw",
        birthday: new Date(1998, 04, 25, 22, 15, 00),
        employment: "Model",
        gender: "Female",
        networth: "400 k",
        game: "GTA",
        playedby: "Goose",
        weight: "125",
        height: "5'6"
    },
    {
        fullname: "Leo Stone Valdez",
        birthday: new Date(1997, 07, 13, 12, 00, 00),
        employment: "U.S. Military",
        gender: "Male",
        networth: "400 k",
        game: "GRB",
        playedby: "Tru3",
        weight: "200",
        height: "6'1"
    },
    {
        fullname: "Mark Devereaux",
        birthday: new Date(1990, 07, 09, 12, 00, 00),
        employment: "Private Contracter",
        gender: "Male",
        networth: "3 m",
        game: "GRB",
        playedby: "Banana",
        weight: "200",
        height: "6'2"
    },
    {
        fullname: "Grant Alexander Hilbert",
        birthday: new Date(1997, 06, 13, 12, 00, 00),
        employment: "U.S. Military",
        gender: "Male",
        networth: "2.5 m",
        game: "GRB",
        playedby: "Jules",
        weight: "210",
        height: "6'0"
    },
    {
        fullname: "Elana May Smith",
        birthday: new Date(2000, 04, 14, 12, 00, 00),
        employment: "Private Contracter",
        gender: "Female",
        networth: "1.5 m",
        game: "GRB",
        playedby: "Jules",
        weight: "168",
        height: "5'9"
    },
    {
        fullname: "Richard Thomas Rustler",
        birthday: new Date(1980, 01, 05, 12, 05, 00),
        employment: "U.S. Military",
        gender: "Male",
        networth: "1.3 m",
        game: "GRB",
        playedby: "Faze",
        weight: "200",
        height: "5'10"
    },
    {
        fullname: "Johnathan Molina Blackwood",
        birthday: new Date(1995, 03, 23, 12, 00, 00),
        employment: "Franchisee",
        gender: "Male",
        networth: "200 m",
        game: "GTA",
        playedby: "Landy",
        weight: "210",
        height: "6'4"
    },
    {
        fullname: "Victor D'Angelo",
        birthday: new Date(1962, 01, 09, 12, 00, 00),
        employment: "Retired",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Banana",
        weight: "215",
        height: "6'2"
    }
];