const maleFirstNames = [
    "James", "John", "Robert", "Michael", "William",
    "David", "Richard", "Joseph", "Charles", "Thomas",
    "Christopher", "Daniel", "Matthew", "Anthony", "Mark",
    "Paul", "Steven", "Andrew", "Kenneth", "George",
    "Joshua", "Edward", "Brian", "Kevin", "Ronald",
    "Timothy", "Jason", "Jeffrey", "Ryan", "Jacob"
];

const femaleFirstNames = [
    "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth",
    "Barbara", "Susan", "Jessica", "Sarah", "Karen",
    "Nancy", "Lisa", "Betty", "Margaret", "Sandra",
    "Ashley", "Dorothy", "Kimberly", "Emily", "Donna",
    "Michelle", "Carol", "Amanda", "Melissa", "Deborah",
    "Stephanie", "Rebecca", "Laura", "Sharon", "Cynthia"
];

const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones",
    "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
    "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris",
    "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson"
];

const maleMiddleNames = [
    "Lee", "Alexander", "David", "Michael", "Thomas",
    "Joseph", "Daniel", "Matthew", "Anthony", "William",
    "Christopher", "James", "John", "Robert", "Brian",
    "Eric", "Nicholas", "Jeffrey", "Scott", "Kenneth"
];

const femaleMiddleNames = [
    "Anne", "Marie", "Elizabeth", "Grace", "Rose",
    "Victoria", "Nicole", "Renee", "Michelle", "Jane",
    "Louise", "Marie", "Catherine", "Alice", "Emily",
    "Julia", "Ann", "May", "Eva", "Claire"
];

let generatedNames = [];

function generateName(gender) {
    const firstNameList = gender === 'male' ? maleFirstNames : femaleFirstNames;
    const middleNameList = gender === 'male' ? maleMiddleNames : femaleMiddleNames;

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