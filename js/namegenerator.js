let maleFirstNames = [
    "James", "John", "Robert", "Michael", "William",
    "David", "Richard", "Joseph", "Charles", "Thomas",
    "Christopher", "Daniel", "Matthew", "Anthony", "Mark",
    "Paul", "Steven", "Andrew", "Kenneth", "George",
    "Joshua", "Edward", "Brian", "Kevin", "Ronald",
    "Timothy", "Jason", "Jeffrey", "Ryan", "Jacob",
    "Nicholas", "Eric", "Jonathan", "Stephen", "Larry",
    "Justin", "Scott", "Brandon", "Benjamin", "Samuel",
    "Gregory", "Frank", "Alexander", "Raymond", "Patrick",
    "Jack", "Dennis", "Jerry", "Tyler", "Aaron",
    "Jose", "Henry", "Adam", "Douglas", "Nathan",
    "Peter", "Zachary", "Kyle", "Walter", "Harold",
    "Jeremy", "Ethan", "Carl", "Keith", "Roger",
    "Gerald", "Christian", "Terry", "Sean", "Arthur",
    "Austin", "Noah", "Jesse", "Joe", "Bryan",
    "Billy", "Jordan", "Albert", "Dylan", "Bruce",
    "Willie", "Gabriel", "Alan", "Juan", "Logan",
    "Wayne", "Ralph", "Roy", "Eugene", "Randy",
    "Vincent", "Russell", "Louis", "Philip", "Bobby",
    "Johnny", "Bradley", "Nathaniel", "Craig", "Tony",
    "Mason", "Curtis", "Victor", "Martin", "Manuel",
    "Oliver", "Theodore", "Earl", "Leonard", "Clarence",
    "Rodney", "Wesley", "Micheal", "Lucas", "Jamie"
];

const femaleFirstNames = [
    "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth",
    "Barbara", "Susan", "Jessica", "Sarah", "Karen",
    "Nancy", "Lisa", "Betty", "Margaret", "Sandra",
    "Ashley", "Dorothy", "Kimberly", "Emily", "Donna",
    "Michelle", "Carol", "Amanda", "Melissa", "Deborah",
    "Stephanie", "Rebecca", "Laura", "Sharon", "Cynthia",
    "Angela", "Helen", "Anna", "Brenda", "Pamela",
    "Nicole", "Samantha", "Katherine", "Christine", "Janet",
    "Catherine", "Maria", "Heather", "Diane", "Julie",
    "Joyce", "Evelyn", "Joan", "Victoria", "Kelly",
    "Christina", "Lauren", "Martha", "Judith", "Cheryl",
    "Megan", "Andrea", "Ann", "Alice", "Jean",
    "Doris", "Jacqueline", "Kathryn", "Hannah", "Olivia",
    "Gloria", "Marie", "Teresa", "Sara", "Janice",
    "Julia", "Grace", "Judy", "Theresa", "Rose",
    "Beverly", "Denise", "Marilyn", "Amber", "Madison",
    "Danielle", "Brittany", "Diana", "Abigail", "Jane",
    "Natalie", "Lori", "Tiffany", "Alexis", "Kayla",
    "Charlotte", "Sandy", "Molly", "Leah", "Melanie",
    "Veronica", "Jill", "Wanda", "Connie", "Carrie",
    "Rachel", "Lynn", "Ruth", "Carla", "Bonnie"
];

const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones",
    "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
    "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris",
    "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
    "Walker", "Young", "Allen", "King", "Wright",
    "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall",
    "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
    "Gomez", "Phillips", "Evans", "Turner", "Diaz",
    "Parker", "Cruz", "Edwards", "Collins", "Reyes",
    "Stewart", "Morris", "Morales", "Murphy", "Cook",
    "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
    "Peterson", "Bailey", "Reed", "Kelly", "Howard",
    "Ramos", "Kim", "Cox", "Ward", "Richardson",
    "Watson", "Brooks", "Chavez", "Wood", "James",
    "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
    "Price", "Alvarez", "Castillo", "Sanders", "Patel",
    "Myers", "Long", "Ross", "Foster", "Jimenez",
    "Powell", "Jenkins", "Perry", "Russell", "Sullivan"
];

const maleMiddleNames = [
    "Lee", "Alexander", "David", "Michael", "Thomas",
    "Joseph", "Daniel", "Matthew", "Anthony", "William",
    "Christopher", "James", "John", "Robert", "Brian",
    "Eric", "Nicholas", "Jeffrey", "Scott", "Kenneth",
    "Edward", "Samuel", "George", "Patrick", "Andrew",
    "Joshua", "Peter", "Ryan", "Benjamin", "Stephen",
    "Timothy", "Paul", "Charles", "Richard", "Gregory",
    "Sean", "Henry", "Donald", "Raymond", "Phillip",
    "Douglas", "Frank", "Adam", "Nathan", "Harold",
    "Keith", "Albert", "Arthur", "Wayne", "Howard",
    "Louis", "Jeremy", "Bradley", "Eugene", "Christian",
    "Dylan", "Caleb", "Ethan", "Gabriel", "Isaac",
    "Logan", "Mason", "Hunter", "Connor", "Cameron",
    "Bryan", "Aaron", "Austin", "Blake", "Carter",
    "Cole", "Dean", "Evan", "Finn", "Grant",
    "Harrison", "Ian", "Jack", "Joel", "Kyle",
    "Liam", "Max", "Miles", "Nolan", "Owen",
    "Parker", "Reed", "Shane", "Spencer", "Troy",
    "Tyler", "Victor", "Wesley", "Zachary", "Gavin",
    "Hayden", "Jared", "Julian", "Kirk", "Marshall"
];

const femaleMiddleNames = [
    "Anne", "Marie", "Elizabeth", "Grace", "Rose",
    "Victoria", "Nicole", "Renee", "Michelle", "Jane",
    "Louise", "Marie", "Catherine", "Alice", "Emily",
    "Julia", "Ann", "May", "Eva", "Claire",
    "Lynn", "Joy", "Hope", "Faith", "Irene",
    "Mae", "Elaine", "Paige", "Diane", "June",
    "Isabel", "Sophia", "Margaret", "Ava", "Chloe",
    "Hannah", "Isabella", "Madison", "Alyssa", "Ariana",
    "Brooke", "Charlotte", "Danielle", "Evelyn", "Gabrielle",
    "Harper", "Ivy", "Jade", "Kayla", "Lillian",
    "Madeline", "Nora", "Olivia", "Penelope", "Quinn",
    "Ruby", "Savannah", "Tessa", "Violet", "Zoe",
    "Amber", "Bianca", "Cecilia", "Delilah", "Elena",
    "Fiona", "Georgia", "Haley", "Isabelle", "Jocelyn",
    "Kaitlyn", "Leah", "Mackenzie", "Natalie", "Ophelia",
    "Piper", "Reese", "Samantha", "Trinity", "Vanessa",
    "Wendy", "Ximena", "Yasmin", "Zara", "Abigail",
    "Beatrice", "Callie", "Daisy", "Edith", "Freya",
    "Giselle", "Hailey", "Ingrid", "Jasmine", "Kylie",
    "Lena", "Melody", "Naomi", "Odette", "Phoebe"
];

const unisexNames = [
    "Alex", "Taylor", "Jordan", "Ryan", "Casey",
    "Sam", "Blake", "Dakota", "Riley", "Charlie",
    "Avery", "Peyton", "Sage", "Skyler", "Reese",
    "Phoenix", "Harper", "Bailey", "Quinn", "Rowan",
    "Finley", "Hayden", "Jaden", "Justice", "Kai",
    "Micah", "River", "Emerson", "Drew", "Tatum",
    "Parker", "Jesse", "Morgan", "Ellis", "Cameron",
    "Rory", "Spencer", "Reagan", "Terry", "Shay",
    "Jamie", "Ashton", "Ariel", "Dylan", "Taylor",
    "Alexis", "Jordan", "Sage", "Skyler", "Quinn",
    "Harper", "Bailey", "Rowan", "Finley", "Justice",
    "Kai", "Micah", "Jaden", "Phoenix", "Emerson",
    "Hayden", "Parker", "Morgan", "Drew", "Jesse",
    "Ellis", "Cameron", "Tatum", "Spencer", "Reagan",
    "Shay", "Jamie", "Ashton", "Ariel", "Taylor",
    "Jordan", "Sage", "Skyler", "Quinn", "Harper",
    "Bailey", "Rowan", "Finley", "Justice", "Kai",
    "Micah", "Jaden", "Phoenix", "Emerson", "Hayden",
    "Parker", "Morgan", "Drew", "Jesse", "Ellis",
    "Cameron", "Tatum", "Spencer", "Reagan", "Shay",
    "Jamie", "Ashton", "Ariel", "Taylor", "Jordan",
    "Sage", "Skyler", "Quinn", "Harper", "Bailey",
    "Rowan", "Finley", "Justice", "Kai", "Micah",
    "Jaden", "Phoenix", "Emerson", "Hayden", "Parker",
    "Morgan", "Drew", "Jesse", "Ellis", "Cameron",
    "Tatum", "Spencer", "Reagan", "Shay", "Jamie",
    "Ashton", "Ariel"
];

let generatedNames = [];

function generateName(gender) {
    let firstNameList, middleNameList;

    if (gender === 'male') {
        firstNameList = maleFirstNames;
        middleNameList = maleMiddleNames;
        document.getElementById("fullName").style.color = "#24cbd4";
    } else if (gender === 'female') {
        firstNameList = femaleFirstNames;
        middleNameList = femaleMiddleNames;
        document.getElementById("fullName").style.color = "#e35fc2";
    } else if (gender === 'unisex') {
        firstNameList = unisexNames;
        middleNameList = unisexNames;
        document.getElementById("fullName").style.color = "#8495CB";
    }

    let fullName = '';
    let isDuplicate = true;

    while (isDuplicate) {
        const firstName = firstNameList[Math.floor(Math.random() * firstNameList.length)];
        const middleName = middleNameList[Math.floor(Math.random() * middleNameList.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                    
        fullName = `${firstName} ${middleName} ${lastName}`;

        if (!generatedNames.includes(fullName)) {
            generatedNames.push(fullName);
            isDuplicate = false;
        }
    }

    return fullName;
}

function generateAndDisplayName() {
    const genderSelect = document.getElementById('genderSelect');
    const gender = genderSelect.options[genderSelect.selectedIndex].value;
    const fullName = generateName(gender);
    document.getElementById('fullName').textContent = fullName;
}