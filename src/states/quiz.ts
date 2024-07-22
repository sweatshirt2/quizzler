import { createSlice } from "@reduxjs/toolkit";

interface Question {
  answered: number,
  id: number;
  question: string;
  options: string[];
  answer: number;
}

interface QuizState {
  value: Question[];
}

interface DBType {
  [key: string]: Question[]
}

interface ActionType {
  value: string,
  payload: {
    id?: number,
    action?: number,
    subject?: String
  }
}

// fetch()
const db: DBType = {
  "Chemistry": [
    {
      "answered": 0,
      "id": 1,
      "question": "What is the atomic number of hydrogen?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 2,
      "question": "Which element has the chemical symbol 'O'?",
      "options": [
        "Oxygen",
        "Osmium",
        "Oganesson",
        "Osmium"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 3,
      "question": "What is the formula for sulfuric acid?",
      "options": [
        "SO3",
        "H2SO4",
        "H2O",
        "NH3"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 4,
      "question": "Which gas is commonly used in balloons to make them float?",
      "options": [
        "Oxygen",
        "Carbon dioxide",
        "Helium",
        "Nitrogen"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 5,
      "question": "What is the lightest element in the periodic table?",
      "options": [
        "Hydrogen",
        "Helium",
        "Lithium",
        "Carbon"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 6,
      "question": "Which element is commonly used in batteries?",
      "options": [
        "Iron",
        "Copper",
        "Lithium",
        "Silver"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 7,
      "question": "What is the chemical formula for table salt?",
      "options": [
        "H2O",
        "NaCl",
        "CO2",
        "HCl"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 8,
      "question": "What is the process of converting a liquid into vapor?",
      "options": [
        "Sublimation",
        "Condensation",
        "Evaporation",
        "Melting"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 9,
      "question": "Which gas do plants absorb during photosynthesis?",
      "options": [
        "Carbon monoxide",
        "Oxygen",
        "Nitrogen",
        "Carbon dioxide"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 10,
      "question": "What is the pH value of pure water?",
      "options": [
        "7",
        "8",
        "9",
        "10"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 11,
      "question": "What is the chemical formula for glucose?",
      "options": [
        "C6H12O6",
        "CO2",
        "H2O",
        "NaCl"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 12,
      "question": "Which gas is essential for respiration in humans?",
      "options": [
        "Nitrogen",
        "Oxygen",
        "Carbon dioxide",
        "Methane"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 13,
      "question": "What is the chemical symbol for gold?",
      "options": [
        "G",
        "Au",
        "Ag",
        "Pb"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 14,
      "question": "Which element is used in fluorescent tubes?",
      "options": [
        "Neon",
        "Argon",
        "Krypton",
        "Mercury"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 15,
      "question": "What is the chemical formula for methane?",
      "options": [
        "CH4",
        "CO2",
        "H2O",
        "C2H5OH"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 16,
      "question": "Which element is found in all organic compounds?",
      "options": [
        "Carbon",
        "Hydrogen",
        "Oxygen",
        "Nitrogen"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 17,
      "question": "What is the process of combining oxygen with a substance?",
      "options": [
        "Reduction",
        "Oxidation",
        "Fermentation",
        "Ionization"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 18,
      "question": "Which element is responsible for the green color in plants?",
      "options": [
        "Nitrogen",
        "Carbon",
        "Chlorophyll",
        "Oxygen"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 19,
      "question": "What is the chemical formula for hydrogen peroxide?",
      "options": [
        "H2O",
        "H2SO4",
        "H2O2",
        "NH3"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 20,
      "question": "Which gas is produced during the process of photosynthesis?",
      "options": [
        "Oxygen",
        "Carbon dioxide",
        "Nitrogen",
        "Hydrogen"
      ],
      "answer": 0
    }
  ],

  "History": [
    {
      "answered": 0,
      "id": 1,
      "question": "Who was the first emperor of Rome?",
      "options": [
        "Julius Caesar",
        "Augustus",
        "Nero",
        "Constantine"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 2,
      "question": "Which ancient civilization built the Great Pyramid of Giza?",
      "options": [
        "Mesopotamians",
        "Greeks",
        "Persians",
        "Ancient Egyptians"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 3,
      "question": "Who discovered America?",
      "options": [
        "Christopher Columbus",
        "Marco Polo",
        "Ferdinand Magellan",
        "Vasco da Gama"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 4,
      "question": "Which event marked the end of World War II?",
      "options": [
        "Pearl Harbor attack",
        "D-Day",
        "Atomic bombings of Hiroshima and Nagasaki",
        "Battle of Stalingrad"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 5,
      "question": "Who was the first President of the United States?",
      "options": [
        "George Washington",
        "Thomas Jefferson",
        "Abraham Lincoln",
        "John Adams"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 6,
      "question": "Which famous document begins with 'When in the course of human events...'?",
      "options": [
        "United States Constitution",
        "Declaration of Independence",
        "Magna Carta",
        "Bill of Rights"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 7,
      "question": "Who was the first female Prime Minister of the United Kingdom?",
      "options": [
        "Margaret Thatcher",
        "Angela Merkel",
        "Theresa May",
        "Indira Gandhi"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 8,
      "question": "Which famous explorer led the first expedition to circumnavigate the globe?",
      "options": [
        "Christopher Columbus",
        "Ferdinand Magellan",
        "Captain James Cook",
        "Vasco da Gama"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 9,
      "question": "Who was the longest-reigning monarch in British history?",
      "options": [
        "Queen Victoria",
        "King George III",
        "Queen Elizabeth II",
        "King Henry VIII"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 10,
      "question": "What was the name of the ship that brought the Pilgrims to America in 1620?",
      "options": [
        "Mayflower",
        "Santa Maria",
        "Nina",
        "Victoria"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 11,
      "question": "Which war is often referred to as the 'War to End All Wars'?",
      "options": [
        "World War I",
        "American Civil War",
        "Vietnam War",
        "War of 1812"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 12,
      "question": "Who was the first female astronaut to travel into space?",
      "options": [
        "Sally Ride",
        "Valentina Tereshkova",
        "Yuri Gagarin",
        "Christa McAuliffe"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 13,
      "question": "Which ancient wonder of the world was located in Babylon?",
      "options": [
        "Great Pyramid of Giza",
        "Hanging Gardens",
        "Colossus of Rhodes",
        "Lighthouse of Alexandria"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 14,
      "question": "Who wrote the 'Communist Manifesto'?",
      "options": [
        "Karl Marx",
        "Friedrich Engels",
        "Vladimir Lenin",
        "Leon Trotsky"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 15,
      "question": "Which famous civil rights leader delivered the 'I Have a Dream' speech?",
      "options": [
        "Malcolm X",
        "Martin Luther King Jr.",
        "Nelson Mandela",
        "Mahatma Gandhi"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 16,
      "question": "Who was the last Emperor of Russia?",
      "options": [
        "Peter the Great",
        "Nicholas II",
        "Vladimir Lenin",
        "Joseph Stalin"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 17,
      "question": "Which U.S. President issued the Emancipation Proclamation?",
      "options": [
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
        "Andrew Jackson"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 18,
      "question": "What was the name of the ship that sank in 1912 after hitting an iceberg?",
      "options": [
        "Lusitania",
        "Queen Mary",
        "Titanic",
        "Empress of Ireland"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 19,
      "question": "Which war was fought between North and South Korea?",
      "options": [
        "World War I",
        "Vietnam War",
        "Korean War",
        "Gulf War"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 20,
      "question": "Who was the leader of the Soviet Union during World War II?",
      "options": [
        "Joseph Stalin",
        "Vladimir Lenin",
        "Mikhail Gorbachev",
        "Leon Trotsky"
      ],
      "answer": 0
    }
  ],

  "Physics": [
    {
      "answered": 0,
      "id": 1,
      "question": "What is the SI unit of force?",
      "options": [
        "Watt",
        "Newton",
        "Joule",
        "Tesla"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 2,
      "question": "Which scientist formulated the laws of motion?",
      "options": [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Nikola Tesla"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 3,
      "question": "What is the acceleration due to gravity on Earth?",
      "options": [
        "9.8 m/s²",
        "10 m/s²",
        "8.2 m/s²",
        "11.5 m/s²"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 4,
      "question": "What is the universal gas constant?",
      "options": [
        "R = 8.314 J/(mol·K)",
        "R = 6.022 × 10²³ mol⁻¹",
        "R = 9.81 m/s²",
        "R = 3 × 10⁸ m/s"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 5,
      "question": "Which scientist is credited with the theory of relativity?",
      "options": [
        "Isaac Newton",
        "Albert Einstein",
        "Stephen Hawking",
        "Max Planck"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 6,
      "question": "What type of energy is associated with motion?",
      "options": [
        "Potential energy",
        "Kinetic energy",
        "Thermal energy",
        "Chemical energy"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 7,
      "question": "Which law of thermodynamics states that energy cannot be created or destroyed?",
      "options": [
        "First law",
        "Second law",
        "Third law",
        "Zeroth law"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 8,
      "question": "What is the formula for electric charge?",
      "options": [
        "Q = m × a",
        "Q = V × I",
        "Q = ε₀ × A/d",
        "Q = n × e"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 9,
      "question": "Which particle has a positive charge?",
      "options": [
        "Proton",
        "Electron",
        "Neutron",
        "Photon"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 10,
      "question": "What is the speed of light in a vacuum?",
      "options": [
        "299,792,458 m/s",
        "300,000,000 m/s",
        "250,000,000 m/s",
        "200,000,000 m/s"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 11,
      "question": "What law states that for every action, there is an equal and opposite reaction?",
      "options": [
        "Newton's first law",
        "Newton's second law",
        "Newton's third law",
        "Newton's law of gravitation"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 12,
      "question": "What is the unit of electrical resistance?",
      "options": [
        "Watt",
        "Ohm",
        "Ampere",
        "Joule"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 13,
      "question": "What is the principle that explains why a boat floats?",
      "options": [
        "Archimedes' principle",
        "Pascal's principle",
        "Bernoulli's principle",
        "Faraday's principle"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 14,
      "question": "Which type of radiation has the longest wavelength?",
      "options": [
        "Gamma rays",
        "X-rays",
        "Ultraviolet",
        "Radio waves"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 15,
      "question": "What is the phenomenon where a wave changes direction upon entering a new medium?",
      "options": [
        "Refraction",
        "Reflection",
        "Diffraction",
        "Interference"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 16,
      "question": "What is the SI unit of power?",
      "options": [
        "Watt",
        "Joule",
        "Volt",
        "Ampere"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 17,
      "question": "Which scientist proposed the theory of quantum mechanics?",
      "options": [
        "Niels Bohr",
        "Max Planck",
        "Erwin Schrödinger",
        "Werner Heisenberg"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 18,
      "question": "What is the unit of measurement for magnetic flux?",
      "options": [
        "Weber",
        "Tesla",
        "Gauss",
        "Newton"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 19,
      "question": "What type of lens is thicker in the middle than at the edges?",
      "options": [
        "Concave lens",
        "Convex lens",
        "Plano-convex lens",
        "Biconcave lens"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 20,
      "question": "Which law of motion states that an object at rest will stay at rest, and an object in motion will stay in motion unless acted upon by an external force?",
      "options": [
        "Newton's first law",
        "Newton's second law",
        "Newton's third law",
        "Law of inertia"
      ],
      "answer": 0
    }
  ],

  "Biology": [
    {
      "answered": 0,
      "id": 1,
      "question": "What is the powerhouse of the cell?",
      "options": [
        "Nucleus",
        "Mitochondrion",
        "Endoplasmic reticulum",
        "Ribosome"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 2,
      "question": "Which organ is responsible for pumping blood throughout the body?",
      "options": [
        "Kidney",
        "Liver",
        "Heart",
        "Lung"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 3,
      "question": "What is the largest organ in the human body?",
      "options": [
        "Brain",
        "Heart",
        "Skin",
        "Liver"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 4,
      "question": "What process do plants use to convert sunlight into energy?",
      "options": [
        "Photosynthesis",
        "Respiration",
        "Digestion",
        "Fermentation"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 5,
      "question": "What is the function of red blood cells?",
      "options": [
        "Carry oxygen",
        "Fight infections",
        "Produce hormones",
        "Digest food"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 6,
      "question": "Which gas do plants absorb from the atmosphere for photosynthesis?",
      "options": [
        "Oxygen",
        "Carbon dioxide",
        "Nitrogen",
        "Methane"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 7,
      "question": "What is the basic unit of heredity?",
      "options": [
        "Gene",
        "Chromosome",
        "DNA",
        "RNA"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 8,
      "question": "Which organ is responsible for detoxifying the blood?",
      "options": [
        "Kidney",
        "Liver",
        "Pancreas",
        "Spleen"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 9,
      "question": "What is the process by which organisms produce offspring?",
      "options": [
        "Respiration",
        "Fermentation",
        "Reproduction",
        "Excretion"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 10,
      "question": "Which system in the body is responsible for immunity?",
      "options": [
        "Nervous system",
        "Digestive system",
        "Immune system",
        "Endocrine system"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 11,
      "question": "What is the longest bone in the human body?",
      "options": [
        "Femur",
        "Tibia",
        "Humerus",
        "Radius"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 12,
      "question": "Which organelle is responsible for protein synthesis?",
      "options": [
        "Golgi apparatus",
        "Endoplasmic reticulum",
        "Lysosome",
        "Ribosome"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 13,
      "question": "What is the main function of the kidneys?",
      "options": [
        "Digestion",
        "Filtration of blood",
        "Production of hormones",
        "Respiration"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 14,
      "question": "Which type of cell division is responsible for producing gametes?",
      "options": [
        "Mitosis",
        "Meiosis",
        "Binary fission",
        "Budding"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 15,
      "question": "What is the process by which plants lose water through their leaves?",
      "options": [
        "Photosynthesis",
        "Transpiration",
        "Respiration",
        "Pollination"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 16,
      "question": "Which part of the cell is responsible for storing water, waste, and nutrients?",
      "options": [
        "Mitochondrion",
        "Lysosome",
        "Vacuole",
        "Endoplasmic reticulum"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 17,
      "question": "What is the process by which green plants make their own food?",
      "options": [
        "Respiration",
        "Digestion",
        "Fermentation",
        "Photosynthesis"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 18,
      "question": "What is the outermost layer of the skin called?",
      "options": [
        "Epidermis",
        "Dermis",
        "Hypodermis",
        "Stratum corneum"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 19,
      "question": "Which gas do humans exhale during respiration?",
      "options": [
        "Oxygen",
        "Carbon dioxide",
        "Nitrogen",
        "Hydrogen"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 20,
      "question": "What is the name of the process by which a caterpillar transforms into a butterfly?",
      "options": [
        "Metamorphosis",
        "Photosynthesis",
        "Pollination",
        "Fertilization"
      ],
      "answer": 0
    }
  ],

  "Geography": [
    {
      "answered": 0,
      "id": 1,
      "question": "What is the capital of Australia?",
      "options": [
        "Melbourne",
        "Sydney",
        "Canberra",
        "Perth"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 2,
      "question": "Which river runs through the Grand Canyon?",
      "options": [
        "Mississippi River",
        "Colorado River",
        "Nile River",
        "Amazon River"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 3,
      "question": "Which country is known as the 'Land of the Rising Sun'?",
      "options": [
        "China",
        "Japan",
        "South Korea",
        "Vietnam"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 4,
      "question": "What is the largest desert in the world?",
      "options": [
        "Gobi Desert",
        "Sahara Desert",
        "Kalahari Desert",
        "Arabian Desert"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 5,
      "question": "Which is the longest river in Europe?",
      "options": [
        "Volga River",
        "Danube River",
        "Rhine River",
        "Seine River"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 6,
      "question": "Which city is located at the mouth of the Amazon River?",
      "options": [
        "Bogotá",
        "Lima",
        "Brasília",
        "Belém"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 7,
      "question": "Where is Mount Everest located?",
      "options": [
        "Nepal",
        "India",
        "China",
        "Tibet"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 8,
      "question": "Which country is known as the 'Land of a Thousand Lakes'?",
      "options": [
        "Finland",
        "Sweden",
        "Norway",
        "Denmark"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 9,
      "question": "What is the smallest ocean in the world?",
      "options": [
        "Arctic Ocean",
        "Indian Ocean",
        "Atlantic Ocean",
        "Southern Ocean"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 10,
      "question": "Which is the largest island in the world?",
      "options": [
        "Greenland",
        "Borneo",
        "Madagascar",
        "Australia"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 11,
      "question": "Which country has the largest population in the world?",
      "options": [
        "India",
        "United States",
        "China",
        "Brazil"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 12,
      "question": "Where is the Great Barrier Reef located?",
      "options": [
        "Caribbean Sea",
        "Red Sea",
        "Coral Sea",
        "South China Sea"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 13,
      "question": "What is the largest city in South America?",
      "options": [
        "Buenos Aires",
        "Rio de Janeiro",
        "São Paulo",
        "Lima"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 14,
      "question": "Which country is known as the 'Land of Fire and Ice'?",
      "options": [
        "Norway",
        "Iceland",
        "Greenland",
        "New Zealand"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 15,
      "question": "Which continent is known as the 'Dark Continent'?",
      "options": [
        "Asia",
        "Africa",
        "Australia",
        "South America"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 16,
      "question": "Which country has the largest rainforest in the world?",
      "options": [
        "Canada",
        "Brazil",
        "Indonesia",
        "Australia"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 17,
      "question": "What is the capital of Russia?",
      "options": [
        "St. Petersburg",
        "Moscow",
        "Kiev",
        "Novosibirsk"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 18,
      "question": "Which country is known as the 'Land of the Rising Sun'?",
      "options": [
        "China",
        "Japan",
        "South Korea",
        "Vietnam"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 19,
      "question": "What is the largest country by area in the world?",
      "options": [
        "United States",
        "China",
        "Canada",
        "Russia"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 20,
      "question": "Which continent is known as the 'Land Down Under'?",
      "options": [
        "Europe",
        "Asia",
        "Africa",
        "Australia"
      ],
      "answer": 3
    }
  ],

  "Sports": [
    {
      "answered": 0,
      "id": 1,
      "question": "Which country won the FIFA World Cup in 2018?",
      "options": [
        "Brazil",
        "Germany",
        "France",
        "Spain"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 2,
      "question": "Who holds the record for the most goals scored in a single FIFA World Cup tournament?",
      "options": [
        "Pele",
        "Ronaldo",
        "Miroslav Klose",
        "Lionel Messi"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 3,
      "question": "Which tennis player has won the most Grand Slam titles (singles) in history?",
      "options": [
        "Serena Williams",
        "Roger Federer",
        "Rafael Nadal",
        "Margaret Court"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 4,
      "question": "Which athlete holds the world record for the fastest 100m sprint?",
      "options": [
        "Usain Bolt",
        "Carl Lewis",
        "Florence Griffith-Joyner",
        "Michael Johnson"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 5,
      "question": "Which country hosted the Summer Olympics in 2020?",
      "options": [
        "United States",
        "China",
        "Japan",
        "Brazil"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 6,
      "question": "Which NBA team has won the most championships?",
      "options": [
        "Chicago Bulls",
        "Los Angeles Lakers",
        "Boston Celtics",
        "Golden State Warriors"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 7,
      "question": "Who is the all-time leading goal scorer in the history of the English Premier League?",
      "options": [
        "Thierry Henry",
        "Wayne Rooney",
        "Alan Shearer",
        "Cristiano Ronaldo"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 8,
      "question": "Which golfer has won the most Masters Tournaments?",
      "options": [
        "Arnold Palmer",
        "Tiger Woods",
        "Jack Nicklaus",
        "Phil Mickelson"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 9,
      "question": "Which boxer has won world titles in the most weight divisions?",
      "options": [
        "Floyd Mayweather Jr.",
        "Manny Pacquiao",
        "Mike Tyson",
        "Muhammad Ali"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 10,
      "question": "Which country has won the most medals in the history of the Summer Olympics?",
      "options": [
        "United States",
        "China",
        "Russia",
        "Great Britain"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 11,
      "question": "Who is the only athlete to win Olympic gold in both the 100m and 200m sprints?",
      "options": [
        "Carl Lewis",
        "Usain Bolt",
        "Jesse Owens",
        "Michael Johnson"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 12,
      "question": "Which NFL team has won the most Super Bowl championships?",
      "options": [
        "Dallas Cowboys",
        "New England Patriots",
        "Pittsburgh Steelers",
        "San Francisco 49ers"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 13,
      "question": "Who was the first person to break the four-minute mile?",
      "options": [
        "Sebastian Coe",
        "Steve Ovett",
        "Roger Bannister",
        "John Walker"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 14,
      "question": "Which team won the NBA championship in the 2020-2021 season?",
      "options": [
        "Los Angeles Lakers",
        "Phoenix Suns",
        "Milwaukee Bucks",
        "Brooklyn Nets"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 15,
      "question": "Who is considered the 'GOAT' (Greatest of All Time) in women's soccer?",
      "options": [
        "Marta",
        "Abby Wambach",
        "Mia Hamm",
        "Christine Sinclair"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 16,
      "question": "Which athlete won the most gold medals in a single Olympics?",
      "options": [
        "Michael Phelps",
        "Jesse Owens",
        "Usain Bolt",
        "Nadia Comaneci"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 17,
      "question": "Which country won the most medals in the 2020 Tokyo Olympics?",
      "options": [
        "United States",
        "China",
        "Japan",
        "Great Britain"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 18,
      "question": "Who won the UEFA Euro 2020 football tournament?",
      "options": [
        "Italy",
        "England",
        "Spain",
        "Germany"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 19,
      "question": "Which tennis player is known for his rivalry with Rafael Nadal?",
      "options": [
        "Roger Federer",
        "Novak Djokovic",
        "Andy Murray",
        "Stan Wawrinka"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 20,
      "question": "Which MLB team won the World Series in 2021?",
      "options": [
        "Los Angeles Dodgers",
        "Houston Astros",
        "Atlanta Braves",
        "San Francisco Giants"
      ],
      "answer": 2
    }
  ],

  "Mathematics": [
    {
      "answered": 0,
      "id": 1,
      "question": "What is the value of π (pi) rounded to two decimal places?",
      "options": [
        "3.14",
        "3.16",
        "3.18",
        "3.20"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 2,
      "question": "What is the square root of 144?",
      "options": [
        "10",
        "12",
        "14",
        "16"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 3,
      "question": "What is the area of a rectangle with length 8 units and width 5 units?",
      "options": [
        "35 square units",
        "40 square units",
        "45 square units",
        "50 square units"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 4,
      "question": "Simplify the expression: 2x + 5x - 3x",
      "options": [
        "4x",
        "5x",
        "6x",
        "7x"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 5,
      "question": "What is the value of 5! (5 factorial)?",
      "options": [
        "120",
        "100",
        "60",
        "20"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 6,
      "question": "If a triangle has angles measuring 30° and 60°, what is the measure of the third angle?",
      "options": [
        "30°",
        "45°",
        "60°",
        "90°"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 7,
      "question": "What is the value of 2^4 (2 raised to the power of 4)?",
      "options": [
        "8",
        "12",
        "16",
        "32"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 8,
      "question": "What is the circumference of a circle with diameter 10 units, rounded to the nearest whole number?",
      "options": [
        "28 units",
        "31 units",
        "34 units",
        "38 units"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 9,
      "question": "If a square has a perimeter of 32 units, what is the length of one side?",
      "options": [
        "4 units",
        "6 units",
        "8 units",
        "10 units"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 10,
      "question": "What is the value of log₂ 16?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 11,
      "question": "Solve for x: 3x + 7 = 22",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 12,
      "question": "What is the sum of the interior angles of a hexagon?",
      "options": [
        "360°",
        "540°",
        "720°",
        "900°"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 13,
      "question": "If a = 3 and b = 4, what is the value of √(a² + b²)?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 14,
      "question": "What is the value of sin(30°)?",
      "options": [
        "0.5",
        "0.707",
        "0.866",
        "1"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 15,
      "question": "What is the value of 3² + 4²?",
      "options": [
        "5",
        "9",
        "11",
        "16"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 16,
      "question": "What is the value of tan(45°)?",
      "options": [
        "0",
        "0.5",
        "1",
        "2"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 17,
      "question": "Solve for x: 2x² - 5x + 2 = 0",
      "options": [
        "x = -1, x = -2",
        "x = 1, x = 2",
        "x = -0.5, x = 2",
        "x = 0.5, x = 2"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 18,
      "question": "What is the value of 0.2 × 0.3 × 0.4?",
      "options": [
        "0.006",
        "0.012",
        "0.024",
        "0.072"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 19,
      "question": "What is the value of 12 ÷ (4 + 2)?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 20,
      "question": "If a = 5 and b = 12, what is the value of a² - b²?",
      "options": [
        "7",
        "17",
        "19",
        "23"
      ],
      "answer": 2
    }
  ],

  "Psychology": [
    {
      "answered": 0,
      "id": 1,
      "question": "Who is known for proposing the hierarchy of needs in psychology?",
      "options": [
        "Sigmund Freud",
        "Erik Erikson",
        "Abraham Maslow",
        "Jean Piaget"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 2,
      "question": "What is the term for the phenomenon where people tend to remember the first items in a list better?",
      "options": [
        "Recency effect",
        "Primacy effect",
        "Serial position effect",
        "Spacing effect"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 3,
      "question": "What is the scientific study of behavior and mental processes called?",
      "options": [
        "Sociology",
        "Anthropology",
        "Psychology",
        "Ethnography"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 4,
      "question": "Who is considered the founder of psychoanalysis?",
      "options": [
        "Carl Jung",
        "Sigmund Freud",
        "Alfred Adler",
        "Erik Erikson"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 5,
      "question": "What type of conditioning did Ivan Pavlov study with his experiments on dogs?",
      "options": [
        "Operant conditioning",
        "Cognitive conditioning",
        "Behavioral conditioning",
        "Classical conditioning"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 6,
      "question": "Which psychologist is known for his theory of cognitive development in children?",
      "options": [
        "Erik Erikson",
        "Jean Piaget",
        "Lawrence Kohlberg",
        "Lev Vygotsky"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 7,
      "question": "What is the term for a sudden and often novel realization of the solution to a problem?",
      "options": [
        "Insight",
        "Intuition",
        "Epiphany",
        "Innovation"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 8,
      "question": "Which term describes the concept of demonstrating desirable behaviors after seeing others perform them?",
      "options": [
        "Imitation",
        "Conditioning",
        "Obedience",
        "Compliance"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 9,
      "question": "Who conducted the famous 'Little Albert' experiment demonstrating classical conditioning in humans?",
      "options": [
        "B. F. Skinner",
        "Albert Bandura",
        "John B. Watson",
        "Edward Thorndike"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 10,
      "question": "Which term describes the tendency to attribute others' behaviors to internal characteristics and underestimate situational factors?",
      "options": [
        "Fundamental attribution error",
        "Confirmation bias",
        "Cognitive dissonance",
        "Self-serving bias"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 11,
      "question": "Who proposed the theory of multiple intelligences, suggesting that intelligence is not a single entity?",
      "options": [
        "Howard Gardner",
        "Daniel Goleman",
        "Carol Dweck",
        "Edward Thorndike"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 12,
      "question": "Which term refers to a type of learning where behavior is strengthened by its consequences?",
      "options": [
        "Operant conditioning",
        "Classical conditioning",
        "Social learning",
        "Behavioral conditioning"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 13,
      "question": "Who developed the stages of psychosocial development, emphasizing the importance of social interactions throughout life?",
      "options": [
        "Erik Erikson",
        "Jean Piaget",
        "Lawrence Kohlberg",
        "B. F. Skinner"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 14,
      "question": "What is the term for a set of expectations about a social position, defining how those in the position ought to behave?",
      "options": [
        "Role",
        "Norm",
        "Status",
        "Stereotype"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 15,
      "question": "Who conducted the Stanford prison experiment, highlighting the impact of roles and situations on behavior?",
      "options": [
        "Stanley Milgram",
        "Solomon Asch",
        "Philip Zimbardo",
        "Albert Bandura"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 16,
      "question": "Which term refers to the tendency to cling to one's initial beliefs despite contrary evidence?",
      "options": [
        "Confirmation bias",
        "Cognitive dissonance",
        "Anchoring bias",
        "Belief perseverance"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 17,
      "question": "Who is known for his theory of moral development, with stages such as 'preconventional' and 'postconventional' morality?",
      "options": [
        "Jean Piaget",
        "Erik Erikson",
        "Lawrence Kohlberg",
        "Lev Vygotsky"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 18,
      "question": "Which term describes a learned association between a stimulus and a response, such as in phobias?",
      "options": [
        "Systematic desensitization",
        "Counterconditioning",
        "Behavior modification",
        "Conditioned response"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 19,
      "question": "What is the term for the process of observing and imitating others' behaviors?",
      "options": [
        "Operant conditioning",
        "Classical conditioning",
        "Social learning",
        "Behavioral conditioning"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 20,
      "question": "Which psychologist is known for his hierarchy of cognitive needs, including self-actualization?",
      "options": [
        "Erik Erikson",
        "Abraham Maslow",
        "B. F. Skinner",
        "Jean Piaget"
      ],
      "answer": 1
    }
  ],

  "IT": [
    {
      "answered": 0,
      "id": 1,
      "question": "What does 'HTML' stand for?",
      "options": [
        "Hyperlink Text Markup Language",
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinking Text Marking Language"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 2,
      "question": "Which programming language is often used for creating web pages?",
      "options": [
        "Java",
        "Python",
        "HTML",
        "JavaScript"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 3,
      "question": "What does 'HTTP' stand for?",
      "options": [
        "Hyper Text Transfer Protocol",
        "Home Tool Transfer Protocol",
        "Hyperlink Text Terminal Protocol",
        "Hyperlink Transfer Text Protocol"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 4,
      "question": "Which database language is commonly used for querying and managing databases?",
      "options": [
        "SQL",
        "XML",
        "Java",
        "HTML"
      ],
      "answer": 0
    },
    {
      "answered": 0,
      "id": 5,
      "question": "What is the purpose of CSS in web development?",
      "options": [
        "To manage server configurations",
        "To create dynamic web content",
        "To style HTML elements",
        "To handle database queries"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 6,
      "question": "What does 'LAN' stand for?",
      "options": [
        "Local Access Network",
        "Local Area Network",
        "Long Access Network",
        "Long Area Network"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 7,
      "question": "Which programming language is primarily used for statistical computing and data analysis?",
      "options": [
        "C++",
        "R",
        "Ruby",
        "Swift"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 8,
      "question": "What does 'URL' stand for?",
      "options": [
        "Universal Resource Locator",
        "Uniform Resource Locator",
        "Unified Resource Locator",
        "Uniform Retrieval Locator"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 9,
      "question": "Which type of software allows users to interact with the computer?",
      "options": [
        "System software",
        "Programming software",
        "Application software",
        "Utility software"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 10,
      "question": "What does 'CPU' stand for?",
      "options": [
        "Central Programming Unit",
        "Central Processing Unit",
        "Core Processing Unit",
        "Computer Processing Unit"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 11,
      "question": "Which technology is used to store and distribute digital content such as images and multimedia?",
      "options": [
        "FTP",
        "SMTP",
        "MIME",
        "CDN"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 12,
      "question": "What does 'API' stand for?",
      "options": [
        "Advanced Programming Interface",
        "Application Programming Interface",
        "Automated Programming Interface",
        "Algorithmic Programming Interface"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 13,
      "question": "Which type of network covers a large geographical area, often spanning cities or countries?",
      "options": [
        "LAN",
        "MAN",
        "WAN",
        "VPN"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 14,
      "question": "What is the term for a software application that replicates the functionality of a physical computer?",
      "options": [
        "Virtual machine",
        "Simulator",
        "Emulator",
        "Compiler"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 15,
      "question": "Which protocol is used for sending and receiving email?",
      "options": [
        "HTTP",
        "FTP",
        "SMTP",
        "POP"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 16,
      "question": "What is the term for a collection of servers used to distribute workload and ensure high availability?",
      "options": [
        "Firewall",
        "Proxy",
        "Cluster",
        "Router"
      ],
      "answer": 2
    },
    {
      "answered": 0,
      "id": 17,
      "question": "Which programming language is often used for developing Android applications?",
      "options": [
        "Swift",
        "Java",
        "Objective-C",
        "C#"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 18,
      "question": "What does 'DNS' stand for?",
      "options": [
        "Dynamic Network Service",
        "Domain Name System",
        "Digital Network Security",
        "Data Network Service"
      ],
      "answer": 1
    },
    {
      "answered": 0,
      "id": 19,
      "question": "Which term refers to the practice of finding and fixing security vulnerabilities in software?",
      "options": [
        "Encryption",
        "Decryption",
        "Cybersecurity",
        "Penetration testing"
      ],
      "answer": 3
    },
    {
      "answered": 0,
      "id": 20,
      "question": "Which database management system is known for its scalability and reliability, often used for large-scale applications?",
      "options": [
        "MySQL",
        "SQLite",
        "PostgreSQL",
        "MongoDB"
      ],
      "answer": 2
    }
  ]

}

function shuffleQuestions(questions: Question[]) {
  for (let i = 0; i < questions.length; i++) {
    const rand = Math.floor(Math.random() * questions.length);
    [ questions[i], questions[rand] ] = [ questions[rand], questions[i] ];
  }
  return questions;
}

function removeDone(questions: Question[], id: number) {
  const remaining_questions = questions.filter(question => {
    question.id !== id;
  });
  return remaining_questions;
}

function markPassed(questions: Question[], id: number, action: number) {
  const remaining_questions = questions.map(question => {
    if(question.id === id) {
      return {
        ...question,
        answered: action,
    };
  }
    return question;
  });
  return remaining_questions;
}

function changeQuiz(action: string) {
  return db[action]
}

const quiz_slice = createSlice({
  name: "quiz",
  initialState: { value: db.Chemistry },
  reducers: {
    passQuestion: (state, action) => {
      return {
        ...state,
        value: markPassed(state.value, action.payload.id, action.payload.action),
      }
    },
    getQuiz: (state, action) => {
      return {
        ...state,
        value: db[action.payload.subject],
      }
    }
  }
});

const titles: String[] = []
for (let title in db) {
  titles.push(title);
}

export { titles };
export type { QuizState };
export const { passQuestion, getQuiz } = quiz_slice.actions;
export default quiz_slice.reducer;