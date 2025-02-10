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
    "Rodney", "Wesley", "Micheal", "Lucas", "Jamie",
    "Isaiah", "Elijah", "Grayson", "Owen", "Xander",
    "Luca", "Gage", "Jaxon", "Axel", "Blake"
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
    "Rachel", "Lynn", "Ruth", "Carla", "Bonnie",
    "Scarlett", "Zoe", "Aria", "Delilah", "Savannah"
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
    "Powell", "Jenkins", "Perry", "Russell", "Sullivan",
    "Vega", "Hawkins", "Mason", "Warren", "Douglas"
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
    "Hayden", "Jared", "Julian", "Kirk", "Marshall",
    "Zane", "Caden", "Jasper", "Brody", "Landon"
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
    "Harper", "Bailey", "Rowan", "Finley", "Hayden"
];

let generatedNames = [];
let lockedParts = {
    firstName: {
        isLocked: false
    },
    middleName: {
        isLocked: false
    },
    lastName: {
        isLocked: false
    }
};

function generateName(gender) {
    let firstNameList, middleNameList;

    if (gender === 'male') {
        firstNameList = maleFirstNames;
        middleNameList = maleMiddleNames;
    } else if (gender === 'female') {
        firstNameList = femaleFirstNames;
        middleNameList = femaleMiddleNames;
    } else if (gender === 'unisex') {
        firstNameList = unisexNames;
        middleNameList = unisexNames;
    }

    let firstName = lockedParts.firstName.isLocked ? document.getElementById('firstName').textContent : firstNameList[Math.floor(Math.random() * firstNameList.length)];
    let middleName = lockedParts.middleName.isLocked ? document.getElementById('middleName').textContent : middleNameList[Math.floor(Math.random() * middleNameList.length)];
    let lastName = lockedParts.lastName.isLocked ? document.getElementById('lastName').textContent : lastNames[Math.floor(Math.random() * lastNames.length)];

    return {
        firstName,
        middleName,
        lastName
    };
}

function generateAndDisplayName() {
    const genderSelect = document.getElementById('genderSelect');
    const gender = genderSelect.options[genderSelect.selectedIndex].value;

    const nameParts = generateName(gender);

    document.getElementById('firstName').textContent = nameParts.firstName;
    document.getElementById('middleName').textContent = nameParts.middleName;
    document.getElementById('lastName').textContent = nameParts.lastName;

    updateLockIcons();
}

function unlockPart(part) {
    const genderSelect = document.getElementById('genderSelect');
    const gender = genderSelect.options[genderSelect.selectedIndex].value;

    const nameParts = generateName(gender);

    if (part === 'firstName' && !lockedParts.firstName.isLocked) {
        document.getElementById('firstName').textContent = nameParts.firstName;
    } else if (part === 'middleName' && !lockedParts.middleName.isLocked) {
        document.getElementById('middleName').textContent = nameParts.middleName;
    } else if (part === 'lastName' && !lockedParts.lastName.isLocked) {
        document.getElementById('lastName').textContent = nameParts.lastName;
    }

    updateLockIcons();
}

function toggleLock(part) {
    const lockIcon = document.getElementById(`${part}Lock`);

    if (lockedParts[part].isLocked) {
        unlockPart(part);
    }

    lockedParts[part].isLocked = !lockedParts[part].isLocked;

    updateLockIcons();
}

function updateLockIcons() {
    Object.keys(lockedParts).forEach(part => {
        const lockIcon = document.getElementById(`${part}Lock`);
        const isLocked = lockedParts[part].isLocked;

        if (isLocked) {
            lockIcon.classList.remove('fa-lock-open');
            lockIcon.classList.add('fa-lock');
        } else {
            lockIcon.classList.remove('fa-lock');
            lockIcon.classList.add('fa-lock-open');
        }
    });
}

function enableEditing(part) {
    const element = document.getElementById(part);

    element.setAttribute('contenteditable', true);
    element.focus();

    element.addEventListener('blur', () => {
        element.setAttribute('contenteditable', false);
        if (!lockedParts[part].isLocked) {
            toggleLock(part); // Automatically lock after editing
        }
    });
}

function namegenerator() {
    hidePopup();
    document.getElementById("display").innerHTML = `
        <center>
            <div class="name-generator">
                <br><br><br>
                <h2>Name Generator</h2>
                <select id="genderSelect">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unisex">Unisex</option>
                </select><br>
                <button id="generateBtn">Generate New Name</button>
                <div>
                    <h1 id="fullName">
                        <span id="firstName" class="name-part" contenteditable="true"></span>
                        <i id="firstNameLock" class="fas fa-lock-open lock-icon"></i><br>
                        <span id="middleName" class="name-part" contenteditable="true"></span>
                        <i id="middleNameLock" class="fas fa-lock-open lock-icon"></i><br>
                        <span id="lastName" class="name-part lastName" contenteditable="true"></span>
                        <i id="lastNameLock" class="fas fa-lock-open lock-icon"></i>
                    </h1>
                </div>
            </div>
        </center>
    `;

    document.getElementById('generateBtn').addEventListener('click', generateAndDisplayName);
    document.getElementById('genderSelect').addEventListener('change', generateAndDisplayName);
    document.getElementById('firstNameLock').addEventListener('click', () => toggleLock('firstName'));
    document.getElementById('middleNameLock').addEventListener('click', () => toggleLock('middleName'));
    document.getElementById('lastNameLock').addEventListener('click', () => toggleLock('lastName'));

    document.querySelectorAll('.name-part').forEach(namePart => {
        namePart.addEventListener('keydown', function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                namePart.blur();
            }
        });

        // Handle empty values on blur
        namePart.addEventListener('blur', function () {
            if (namePart.textContent.trim() === '') {
                namePart.textContent = 'Blank';
            }
        });
    });

    generateAndDisplayName();
}

const generateNameButton = document.getElementById("name-generator");
generateNameButton.addEventListener("click", namegenerator);