const dndClasses = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
    "Artificer"
];
const dndSubclasses = [
    // Barbarian
    [
        "Path of the Berserker",
        "Path of the Totem Warrior",
        "Path of the Battlerager",
        "Path of the Ancestral Guardian",
        "Path of the Storm Herald",
        "Path of the Zealot",
        "Path of the Beast",
        "Path of Wild Magic"
    ],
    // Bard
    [
        "College of Lore",
        "College of Valor",
        "College of Glamour",
        "College of Swords",
        "College of Whispers",
        "College of Eloquence",
        "College of Creation"
    ],
    // Cleric
    [
        "Knowledge Domain",
        "Life Domain",
        "Light Domain",
        "Nature Domain",
        "Tempest Domain",
        "Trickery Domain",
        "War Domain",
        "Arcana Domain",
        "Forge Domain",
        "Grave Domain",
        "Order Domain",
        "Peace Domain",
        "Twilight Domain"
    ],
    // Druid
    [
        "Circle of the Land",
        "Circle of the Moon",
        "Circle of Dreams",
        "Circle of the Shepherd",
        "Circle of Spores",
        "Circle of Stars",
        "Circle of Wildfire"
    ],
    // Fighter
    [
        "Champion",
        "Battle Master",
        "Eldritch Knight",
        "Arcane Archer",
        "Cavalier",
        "Samurai",
        "Echo Knight",
        "Psi Warrior",
        "Rune Knight"
    ],
    // Monk
    [
        "Way of the Open Hand",
        "Way of Shadow",
        "Way of the Four Elements",
        "Way of the Drunken Master",
        "Way of the Kensei",
        "Way of the Sun Soul",
        "Way of Mercy",
        "Way of the Astral Self"
    ],
    // Paladin
    [
        "Oath of Devotion",
        "Oath of the Ancients",
        "Oath of Vengeance",
        "Oath of Redemption",
        "Oath of Conquest",
        "Oath of Glory",
        "Oath of the Crown",
        "Oath of Watchers"
    ],
    // Ranger
    [
        "Hunter",
        "Beast Master",
        "Gloom Stalker",
        "Horizon Walker",
        "Monster Slayer",
        "Fey Wanderer",
        "Swarmkeeper"
    ],
    // Rogue
    [
        "Thief",
        "Assassin",
        "Arcane Trickster",
        "Mastermind",
        "Swashbuckler",
        "Inquisitive",
        "Scout",
        "Phantom",
        "Soulknife"
    ],
    // Sorcerer
    [
        "Draconic Bloodline",
        "Wild Magic",
        "Divine Soul",
        "Shadow Magic",
        "Storm Sorcery",
        "Aberrant Mind",
        "Clockwork Soul"
    ],
    // Warlock
    [
        "The Archfey",
        "The Fiend",
        "The Great Old One",
        "The Celestial",
        "The Hexblade",
        "The Fathomless",
        "The Genie"
    ],
    // Wizard
    [
        "School of Abjuration",
        "School of Conjuration",
        "School of Divination",
        "School of Enchantment",
        "School of Evocation",
        "School of Illusion",
        "School of Necromancy",
        "School of Transmutation",
        "Bladesinging",
        "War Magic",
        "Scribes"
    ],
    // Artificer
    [
        "Alchemist",
        "Artillerist",
        "Battle Smith",
        "Armorer"
    ]
];
const backgrounds = [
  // Player's Handbook
  "Acolyte",
  "Charlatan",
  "Criminal",
  "Entertainer",
  "Folk Hero",
  "Guild Artisan",
  "Hermit",
  "Noble",
  "Outlander",
  "Sage",
  "Sailor",
  "Soldier",
  "Urchin",

  // Sword Coast Adventurer's Guide
  "City Watch",
  "Clan Crafter",
  "Faction Agent",
  "Far Traveler",
  "Inheritor",
  "Knight of the Order",
  "Mercenary Veteran",
  "Urban Bounty Hunter",
  "Uthgardt Tribe Member",

  // Xanathar’s Guide to Everything
  "Cloistered Scholar",
  "Courtier",
  "Far Traveler",
  "Gladiator",
  "Mercenary Veteran",
  "Waterdhavian Noble"
];
const races = [
  // Player's Handbook
  "Dragonborn",
  "Dwarf - Hill",
  "Dwarf - Mountain",
  "Elf - High",
  "Elf - Wood",
  "Elf - Drow",
  "Gnome - Forest",
  "Gnome - Rock",
  "Half-Elf",
  "Half-Orc",
  "Halfling - Lightfoot",
  "Halfling - Stout",
  "Human",
  "Tiefling",

  // Sword Coast Adventurer's Guide
  "Aasimar",
  "Genasi - Air",
  "Genasi - Earth",
  "Genasi - Fire",
  "Genasi - Water",

  // Volo's Guide to Monsters
  "Aarakocra",
  "Bugbear",
  "Firbolg",
  "Goblin",
  "Hobgoblin",
  "Kenku",
  "Kobold",
  "Lizardfolk",
  "Orc",
  "Tabaxi",
  "Triton",
  "Yuan-ti Pureblood",

  // Mordenkainen's Tome of Foes
  "Gith-Githyanki",
  "Gith-Githzerai",
  "Duergar",
  "Eladrin",
  "Shadar-kai",

  // Other official options (Eberron: Rising from the Last War)
  "Warforged",
  "Changelings",
  "Kalashtar",
  "Shifters",

  // Explorer's Guide to Wildemount
  "Pallid Elf",
  "Lotusden Halfling"
];
const alignments = [
  "Lawful Good",
  "Neutral Good",
  "Chaotic Good",
  "Lawful Neutral",
  "True Neutral",
  "Chaotic Neutral",
  "Lawful Evil",
  "Neutral Evil",
  "Chaotic Evil"
];
const classSkills = {
  Barbarian: {
    hitDie: 12,
    startingHP: 12,
    skills: { choose: 2, options: ["Animal Handling","Athletics","Intimidation","Nature","Perception","Survival"] },
    armor: ["Light armor","Medium armor","Shields"],
    weapons: ["Simple weapons","Martial weapons"],
    tools: []
  },

  Bard: {
    hitDie: 8,
    startingHP: 8,
    skills: { choose: 3, options: ["Acrobatics","Animal Handling","Arcana","Athletics","Deception","History","Insight","Intimidation","Investigation","Medicine","Nature","Perception","Performance","Persuasion","Religion","Sleight of Hand","Stealth","Survival"] },
    armor: ["Light armor"],
    weapons: ["Simple weapons","Hand crossbows","Longswords","Rapiers","Shortswords"],
    tools: ["3 musical instruments"]
  },

  Cleric: {
    hitDie: 8,
    startingHP: 8,
    skills: { choose: 2, options: ["History","Insight","Medicine","Persuasion","Religion"] },
    armor: ["Light armor","Medium armor","Shields"],
    weapons: ["Simple weapons"],
    tools: []
  },

  Druid: {
    hitDie: 8,
    startingHP: 8,
    skills: { choose: 2, options: ["Arcana","Animal Handling","Insight","Medicine","Nature","Perception","Religion","Survival"] },
    armor: ["Light armor","Medium armor","Shields (non-metal)"],
    weapons: ["Clubs","Daggers","Darts","Javelins","Maces","Quarterstaffs","Scimitars","Sickles","Slings","Spears"],
    tools: ["Herbalism kit"]
  },

  Fighter: {
    hitDie: 10,
    startingHP: 10,
    skills: { choose: 2, options: ["Acrobatics","Animal Handling","Athletics","History","Insight","Intimidation","Perception","Survival"] },
    armor: ["All armor","Shields"],
    weapons: ["Simple weapons","Martial weapons"],
    tools: []
  },

  Monk: {
    hitDie: 8,
    startingHP: 8,
    skills: { choose: 2, options: ["Acrobatics","Athletics","History","Insight","Religion","Stealth"] },
    armor: ["None"],
    weapons: ["Simple weapons","Shortswords"],
    tools: []
  },

  Paladin: {
    hitDie: 10,
    startingHP: 10,
    skills: { choose: 2, options: ["Athletics","Insight","Intimidation","Medicine","Persuasion","Religion"] },
    armor: ["All armor","Shields"],
    weapons: ["Simple weapons","Martial weapons"],
    tools: []
  },

  Ranger: {
    hitDie: 10,
    startingHP: 10,
    skills: { choose: 3, options: ["Animal Handling","Athletics","Insight","Investigation","Nature","Perception","Stealth","Survival"] },
    armor: ["Light armor","Medium armor","Shields"],
    weapons: ["Simple weapons","Martial weapons"],
    tools: []
  },

  Rogue: {
    hitDie: 8,
    startingHP: 8,
    skills: { choose: 4, options: ["Acrobatics","Athletics","Deception","Insight","Intimidation","Investigation","Perception","Performance","Persuasion","Sleight of Hand","Stealth"] },
    armor: ["Light armor"],
    weapons: ["Simple weapons","Hand crossbows","Longswords","Rapiers","Shortswords"],
    tools: ["Thieves' tools"]
  },

  Sorcerer: {
    hitDie: 6,
    startingHP: 6,
    skills: { choose: 2, options: ["Arcana","Deception","Insight","Intimidation","Persuasion","Religion"] },
    armor: ["None"],
    weapons: ["Daggers","Darts","Slings","Quarterstaffs","Light crossbows"],
    tools: []
  },

  Warlock: {
    hitDie: 8,
    startingHP: 8,
    skills: { choose: 2, options: ["Arcana","Deception","History","Intimidation","Investigation","Nature","Religion"] },
    armor: ["Light armor"],
    weapons: ["Simple weapons"],
    tools: []
  },

  Wizard: {
    hitDie: 6,
    startingHP: 6,
    skills: { choose: 2, options: ["Arcana","History","Insight","Investigation","Medicine","Religion"] },
    armor: ["None"],
    weapons: ["Daggers","Darts","Slings","Quarterstaffs","Light crossbows"],
    tools: []
  },
  Artificer: {
    hitDie: 8,
    startingHP: 8,
    skills: { choose: 2, options: ["Arcana","History","Nature","Investigation","Medicine","Perception", "Sleight of Hand"] },
    armor: ["Light armor","Medium armor","Shields"],
    weapons: ["Simple weapons"],
    tools: ["Thieves’ tools", "tinker’s tools"]
  }
};
const backgroundProficiencies = {
  // Player's Handbook
  Acolyte: { skills: ["Insight","Religion"], tools: [], languages: 2 },
  Charlatan: { skills: ["Deception","Sleight of Hand"], tools: ["Disguise kit","Forgery kit"], languages: 0 },
  Criminal: { skills: ["Deception","Stealth"], tools: ["Thieves' tools"], languages: 0 },
  Entertainer: { skills: ["Acrobatics","Performance"], tools: ["Disguise kit","Musical instrument"], languages: 0 },
  "Folk Hero": { skills: ["Animal Handling","Survival"], tools: ["Artisan's tools"], languages: 0 },
  "Guild Artisan": { skills: ["Insight","Persuasion"], tools: ["Artisan's tools"], languages: 1 },
  Hermit: { skills: ["Medicine","Religion"], tools: ["Herbalism kit"], languages: 1 },
  Noble: { skills: ["History","Persuasion"], tools: [], languages: 1 },
  Outlander: { skills: ["Athletics","Survival"], tools: ["Musical instrument"], languages: 0 },
  Sage: { skills: ["Arcana","History"], tools: [], languages: 2 },
  Sailor: { skills: ["Athletics","Perception"], tools: ["Navigator's tools","Vehicles (water)"], languages: 0 },
  Soldier: { skills: ["Athletics","Intimidation"], tools: ["Gaming set","Vehicles (land)"], languages: 0 },
  Urchin: { skills: ["Sleight of Hand","Stealth"], tools: ["Disguise kit","Thieves' tools"], languages: 0 },

  // Sword Coast Adventurer's Guide
  "City Watch": { skills: ["Athletics","Insight"], tools: ["Gaming set"], languages: 0 },
  "Clan Crafter": { skills: ["Insight","Persuasion"], tools: ["Artisan's tools"], languages: 0 },
  "Faction Agent": { skills: ["Deception","Stealth"], tools: [], languages: 1 },
  "Far Traveler": { skills: ["Insight","Perception"], tools: ["Musical instrument"], languages: 1 },
  Inheritor: { skills: ["History","Persuasion"], tools: [], languages: 1 },
  "Knight of the Order": { skills: ["History","Persuasion"], tools: [], languages: 0 },
  "Mercenary Veteran": { skills: ["Athletics","Persuasion"], tools: ["Gaming set","Vehicles (land)"], languages: 0 },
  "Urban Bounty Hunter": { skills: ["Deception","Stealth"], tools: ["Thieves' tools"], languages: 0 },
  "Uthgardt Tribe Member": { skills: ["Animal Handling","Survival"], tools: [], languages: 0 },

  // Xanathar’s Guide to Everything
  "Cloistered Scholar": { skills: ["Arcana","History"], tools: [], languages: 2 },
  Courtier: { skills: ["Insight","Persuasion"], tools: [], languages: 0 },
  "Far Traveler": { skills: ["Insight","Perception"], tools: ["Musical instrument"], languages: 1 },
  "Gladiator": { skills: ["Acrobatics","Performance"], tools: ["Disguise kit","Gaming set"], languages: 0 },
  "Mercenary Veteran": { skills: ["Athletics","Persuasion"], tools: ["Gaming set", "Vehicles (land)"], languages: 0 },
  "Waterdhavian Noble": { skills: ["History","Persuasion"], tools: [], languages: 1 }
};
const raceLanguages = {
  // Player's Handbook
  "Dragonborn": ["Common", "Draconic"],
  "Dwarf - Hill": ["Common", "Dwarvish"],
  "Dwarf - Mountain": ["Common", "Dwarvish"],
  "Elf - High": ["Common", "Elvish", "random"],
  "Elf - Wood": ["Common", "Elvish"],
  "Elf - Drow": ["Common", "Elvish", "random"],
  "Gnome - Forest": ["Common", "Gnomish", "random"],
  "Gnome - Rock": ["Common", "Gnomish"],
  "Half-Elf": ["Common", "Elvish", "random"],
  "Half-Orc": ["Common", "Orc"],
  "Halfling - Lightfoot": ["Common", "Halfling"],
  "Halfling - Stout": ["Common", "Halfling"],
  "Human": ["Common", "random"],
  "Tiefling": ["Common", "Infernal"],

  // Sword Coast Adventurer's Guide
  "Aasimar": ["Common", "Celestial"],
  "Genasi - Air": ["Common", "Primordial"],
  "Genasi - Earth": ["Common", "Primordial"],
  "Genasi - Fire": ["Common", "Primordial"],
  "Genasi - Water": ["Common", "Primordial"],

  // Volo's Guide to Monsters
  "Aarakocra": ["Common", "Aarakocra"],
  "Bugbear": ["Common", "Goblin"],
  "Firbolg": ["Common", "Elvish", "Giant"],
  "Goblin": ["Common", "Goblin"],
  "Hobgoblin": ["Common", "Goblin"],
  "Kenku": ["Common", "Auran"],
  "Kobold": ["Common", "Draconic"],
  "Lizardfolk": ["Common", "Draconic"],
  "Orc": ["Common", "Orc"],
  "Tabaxi": ["Common", "random"],
  "Triton": ["Common", "Primordial", "random"],
  "Yuan-ti Pureblood": ["Common", "Abyssal", "random"],

  // Mordenkainen's Tome of Foes
  "Gith-Githyanki": ["Common", "Gith"],
  "Gith-Githzerai": ["Common", "Gith"],
  "Duergar": ["Common", "Dwarvish", "Undercommon"],
  "Eladrin": ["Common", "Elvish", "random"],
  "Shadar-kai": ["Common", "Elvish", "random"],

  // Eberron: Rising from the Last War
  "Warforged": ["Common", "one other"], // treat "one other" as random
  "Changelings": ["Common", "one other"],
  "Kalashtar": ["Common", "Quori"],
  "Shifters": ["Common", "one other"],

  // Explorer's Guide to Wildemount
  "Pallid Elf": ["Common", "Elvish", "random"],
  "Lotusden Halfling": ["Common", "Halfling"]
};
const dndLanguages = [
  // Standard languages
  "Common",
  "Dwarvish",
  "Elvish",
  "Giant",
  "Gnomish",
  "Goblin",
  "Halfling",
  "Orc",
  "Abyssal",
  "Celestial",
  "Draconic",
  "Deep Speech",
  "Infernal",
  "Primordial",
  "Sylvan",
  "Undercommon",

  // Other official languages from supplements
  "Aarakocra",
  "Quori",
  "Auran",
  "Terran",
  "Aquan",
  "Ignan",
  "Gith"
];
const raceFeatures = {
  "Dragonborn": [
    { name: "Draconic Ancestry", desc: "Choose a dragon type; determines your breath weapon and damage resistance." },
    { name: "Breath Weapon", desc: "Exhale destructive energy in a cone or line (damage increases with level)." },
    { name: "Damage Resistance", desc: "Resistance to the damage type of your draconic ancestry." }
  ],

  "Dwarf - Hill": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Dwarven Resilience", desc: "Advantage on saving throws vs. poison, resistance to poison damage." },
    { name: "Dwarven Combat Training", desc: "Proficiency with battleaxe, handaxe, light hammer, warhammer." },
    { name: "Tool Proficiency", desc: "Gain proficiency with one artisan’s tool of your choice." },
    { name: "Stonecunning", desc: "Double proficiency on History checks about stonework." },
    { name: "Dwarven Toughness", desc: "Your hit point maximum increases by 1 per level." }
  ],

  "Dwarf - Mountain": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Dwarven Resilience", desc: "Advantage on saving throws vs. poison, resistance to poison damage." },
    { name: "Dwarven Combat Training", desc: "Proficiency with battleaxe, handaxe, light hammer, warhammer." },
    { name: "Tool Proficiency", desc: "Gain proficiency with one artisan’s tool of your choice." },
    { name: "Stonecunning", desc: "Double proficiency on History checks about stonework." },
    { name: "Dwarven Armor Training", desc: "Proficiency with light and medium armor." }
  ],

  "Elf - High": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Keen Senses", desc: "Proficiency in the Perception skill." },
    { name: "Fey Ancestry", desc: "Advantage on saving throws vs. being charmed; immune to magical sleep." },
    { name: "Trance", desc: "Meditate 4 hours for the benefits of 8 hours of sleep." },
    { name: "Elf Weapon Training", desc: "Proficiency with longsword, shortsword, shortbow, longbow." },
    { name: "Cantrip", desc: "Learn one cantrip from the wizard spell list (Intelligence is your casting ability)." },
    { name: "Extra Language", desc: "Learn one additional language of your choice." }
  ],

  "Elf - Wood": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Keen Senses", desc: "Proficiency in the Perception skill." },
    { name: "Fey Ancestry", desc: "Advantage on saving throws vs. being charmed; immune to magical sleep." },
    { name: "Trance", desc: "Meditate 4 hours for the benefits of 8 hours of sleep." },
    { name: "Elf Weapon Training", desc: "Proficiency with longsword, shortsword, shortbow, longbow." },
    { name: "Fleet of Foot", desc: "Base walking speed increases to 35 ft." },
    { name: "Mask of the Wild", desc: "You can attempt to hide even when lightly obscured by natural phenomena." }
  ],

  "Elf - Drow": [
    { name: "Darkvision", desc: "Superior darkvision out to 120 ft." },
    { name: "Keen Senses", desc: "Proficiency in the Perception skill." },
    { name: "Fey Ancestry", desc: "Advantage on saving throws vs. being charmed; immune to magical sleep." },
    { name: "Trance", desc: "Meditate 4 hours for the benefits of 8 hours of sleep." },
    { name: "Drow Weapon Training", desc: "Proficiency with rapiers, shortswords, and hand crossbows." },
    { name: "Drow Magic", desc: "Know dancing lights; later gain faerie fire and darkness once per long rest." },
    { name: "Sunlight Sensitivity", desc: "Disadvantage on attack rolls and Perception checks relying on sight in sunlight." }
  ],

  "Gnome - Forest": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Gnome Cunning", desc: "Advantage on all Int, Wis, Cha saves against magic." },
    { name: "Natural Illusionist", desc: "You know the minor illusion cantrip (Intelligence as casting ability)." },
    { name: "Speak with Small Beasts", desc: "You can communicate simple ideas with Small or smaller beasts." }
  ],

  "Gnome - Rock": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Gnome Cunning", desc: "Advantage on all Int, Wis, Cha saves against magic." },
    { name: "Artificer’s Lore", desc: "Add double proficiency to History checks related to magic items, alchemical objects, or tech." },
    { name: "Tinker", desc: "You can craft small clockwork devices with tinker's tools." }
  ],

  "Half-Elf": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Fey Ancestry", desc: "Advantage on saving throws vs. being charmed; immune to magical sleep." },
    { name: "Skill Versatility", desc: "Proficiency in two skills of your choice." }
  ],

  "Half-Orc": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Menacing", desc: "Proficiency in the Intimidation skill." },
    { name: "Relentless Endurance", desc: "When reduced to 0 hp, drop to 1 hp instead (1/long rest)." },
    { name: "Savage Attacks", desc: "On a crit with a melee weapon, roll one extra weapon damage die." }
  ],

  "Halfling - Lightfoot": [
    { name: "Lucky", desc: "Reroll a natural 1 on attack, ability check, or saving throw (must use new roll)." },
    { name: "Brave", desc: "Advantage on saving throws vs. being frightened." },
    { name: "Halfling Nimbleness", desc: "Move through the space of any creature larger than you." },
    { name: "Naturally Stealthy", desc: "Can attempt to hide when obscured by a creature one size larger than you." }
  ],

  "Halfling - Stout": [
    { name: "Lucky", desc: "Reroll a natural 1 on attack, ability check, or saving throw (must use new roll)." },
    { name: "Brave", desc: "Advantage on saving throws vs. being frightened." },
    { name: "Halfling Nimbleness", desc: "Move through the space of any creature larger than you." },
    { name: "Stout Resilience", desc: "Advantage on saving throws vs. poison; resistance to poison damage." }
  ],

  "Human": [
    { name: "Versatile", desc: "No unique features beyond broad ability score increases and common language proficiencies." }
  ],

  "Tiefling": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Hellish Resistance", desc: "Resistance to fire damage." },
    { name: "Infernal Legacy", desc: "Know thaumaturgy; later gain hellish rebuke and darkness once per long rest." }
  ],

  "Aasimar": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Celestial Resistance", desc: "Resistance to necrotic and radiant damage." },
    { name: "Healing Hands", desc: "As an action, heal a creature HP equal to your level (1/long rest)." },
    { name: "Light Bearer", desc: "You know the light cantrip (Charisma as casting ability)." }
  ],

  "Genasi - Air": [
    { name: "Unending Breath", desc: "You can hold your breath indefinitely while not incapacitated." },
    { name: "Mingle with the Wind", desc: "You know levitate and can cast it once per long rest (Constitution as casting ability)." }
  ],

  "Genasi - Earth": [
    { name: "Earth Walk", desc: "Move across difficult terrain made of earth or stone without extra movement." },
    { name: "Merge with Stone", desc: "You know pass without trace and can cast it once per long rest (Constitution as casting ability)." }
  ],

  "Genasi - Fire": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Fire Resistance", desc: "You have resistance to fire damage." },
    { name: "Reach to the Blaze", desc: "You know produce flame; at higher levels you can cast burning hands once per long rest." }
  ],

  "Genasi - Water": [
    { name: "Acid Resistance", desc: "You have resistance to acid damage." },
    { name: "Amphibious", desc: "You can breathe air and water." },
    { name: "Swim", desc: "You have a swimming speed of 30 ft." },
    { name: "Call to the Wave", desc: "You know shape water; at higher levels you can cast create or destroy water once per long rest." }
  ],

  "Aarakocra": [
    { name: "Flight", desc: "You have a flying speed of 50 ft. while not wearing medium/heavy armor." },
    { name: "Talons", desc: "Your unarmed strikes deal 1d4 slashing damage." }
  ],

  "Bugbear": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Long-Limbed", desc: "Melee attacks reach 5 ft. further on your turn." },
    { name: "Powerful Build", desc: "Count as one size larger for carrying capacity and push/pull/lift." },
    { name: "Sneaky", desc: "Proficiency in Stealth." },
    { name: "Surprise Attack", desc: "Extra 2d6 damage on first hit against a surprised creature (once per combat)." }
  ],

  "Firbolg": [
    { name: "Firbolg Magic", desc: "You know detect magic and disguise self (Wisdom as casting ability)." },
    { name: "Hidden Step", desc: "Bonus action to turn invisible until next turn or attack/cast (1/short or long rest)." },
    { name: "Powerful Build", desc: "Count as one size larger for carrying capacity and push/pull/lift." },
    { name: "Speech of Beast and Leaf", desc: "Can communicate simple ideas with beasts and plants." }
  ],

  "Goblin": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Fury of the Small", desc: "Once per rest, add level to damage vs. larger creature." },
    { name: "Nimble Escape", desc: "You can Disengage or Hide as a bonus action." }
  ],

  "Hobgoblin": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Martial Training", desc: "Proficiency with two martial weapons and light armor." },
    { name: "Saving Face", desc: "Once per short/long rest, add +1 per ally (max +5) to a failed roll." }
  ],

  "Kenku": [
    { name: "Expert Forgery", desc: "Advantage on checks to create forgeries/duplicates of objects." },
    { name: "Kenku Training", desc: "Proficiency in two skills from Acrobatics, Deception, Stealth, Sleight of Hand." },
    { name: "Mimicry", desc: "Can mimic sounds/voices you’ve heard (Deception check contested by Insight)." }
  ],

  "Kobold": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Grovel, Cower, and Beg", desc: "As action, distract foes; allies gain advantage vs. creatures within 10 ft. of you." },
    { name: "Pack Tactics", desc: "Advantage on attack rolls if ally is within 5 ft. of target." },
    { name: "Sunlight Sensitivity", desc: "Disadvantage on attack rolls and Perception (sight) in sunlight." }
  ],

  "Lizardfolk": [
    { name: "Bite", desc: "Unarmed strike deals 1d6 + Str modifier piercing damage." },
    { name: "Cunning Artisan", desc: "Use a short rest to craft tools/weapons from slain creatures." },
    { name: "Hold Breath", desc: "Hold breath for up to 15 minutes." },
    { name: "Hunter’s Lore", desc: "Gain proficiency in two skills from Animal Handling, Nature, Perception, Stealth, Survival." },
    { name: "Natural Armor", desc: "Base AC = 13 + Dex modifier when not wearing armor." }
  ],

  "Orc": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Aggressive", desc: "Bonus action to move toward an enemy you can see." },
    { name: "Powerful Build", desc: "Count as one size larger for carrying capacity and push/pull/lift." },
    { name: "Menacing", desc: "Proficiency in Intimidation." }
  ],

  "Tabaxi": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Feline Agility", desc: "Double movement for a turn; can’t reuse until you move 0 ft. one turn." },
    { name: "Cat’s Claws", desc: "Unarmed strikes deal 1d4 slashing; you have climbing speed 20 ft." },
    { name: "Cat’s Talent", desc: "Proficiency in Perception and Stealth." }
  ],

  "Triton": [
    { name: "Amphibious", desc: "Can breathe air and water." },
    { name: "Control Air and Water", desc: "Know fog cloud; later gust of wind and wall of water (1/long rest)." },
    { name: "Emissary of the Sea", desc: "Can communicate simple ideas with aquatic beasts." },
    { name: "Guardian of the Depths", desc: "Resistance to cold damage; ignore pressure of deep water." }
  ],

  "Yuan-ti Pureblood": [
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." },
    { name: "Innate Spellcasting", desc: "Know poison spray; later animal friendship (snakes only) and suggestion (1/long rest)." },
    { name: "Magic Resistance", desc: "Advantage on saving throws against spells and magical effects." },
    { name: "Poison Immunity", desc: "Immune to poison damage and poisoned condition." }
  ],

  "Gith - Githyanki": [
    { name: "Decadent Mastery", desc: "Gain proficiency in one language, skill, or tool of your choice." },
    { name: "Martial Prodigy", desc: "Proficiency with light/mid armor and shortsword, longsword, greatsword." },
    { name: "Githyanki Psionics", desc: "Know mage hand; later jump and misty step (1/long rest)." }
  ],

  "Gith - Githzerai": [
    { name: "Mental Discipline", desc: "Advantage on saves vs. charmed and frightened." },
    { name: "Githzerai Psionics", desc: "Know mage hand; later shield and detect thoughts (1/long rest)." }
  ],

  "Duergar": [
    { name: "Superior Darkvision", desc: "See in dim light within 120 ft. as if bright light." },
    { name: "Duergar Resilience", desc: "Advantage on saves vs. illusions, charm, paralysis." },
    { name: "Duergar Magic", desc: "Can cast enlarge/reduce and invisibility (1/long rest)." },
    { name: "Sunlight Sensitivity", desc: "Disadvantage on attack rolls and Perception (sight) in sunlight." }
  ],

  "Eladrin": [
    { name: "Fey Step", desc: "Teleport up to 30 ft. once per short/long rest. Seasonal effects apply (Charm, Frighten, etc.)." }
  ],

  "Shadar-kai": [
    { name: "Blessing of the Raven Queen", desc: "Teleport 30 ft. once per long rest, gain resistance to all damage until next turn." }
  ],

  "Warforged": [
    { name: "Constructed Resilience", desc: "Advantage on saves vs. poison, resistance to poison damage, immune to disease, don’t need to eat, drink, or breathe." },
    { name: "Sentry’s Rest", desc: "Remain conscious during long rest; immobile but aware." },
    { name: "Integrated Protection", desc: "Can integrate armor into body; AC depends on armor mode." },
    { name: "Specialized Design", desc: "Gain one skill and one tool proficiency of your choice." }
  ],

  "Changelings": [
    { name: "Shapechanger", desc: "As action, change your appearance and voice." },
    { name: "Changeling Instincts", desc: "Proficiency in two skills from Deception, Intimidation, Insight, Persuasion." }
  ],

  "Kalashtar": [
    { name: "Dual Mind", desc: "Advantage on all Wisdom saves." },
    { name: "Mental Discipline", desc: "Resistance to psychic damage." },
    { name: "Mind Link", desc: "Telepathic communication within 60 ft. (Int-based)." },
    { name: "Severed from Dreams", desc: "Immune to magical sleep." }
  ],

  "Shifters": [
    { name: "Shifting", desc: "As bonus action, transform for 1 minute, gaining temporary HP and a unique trait depending on shifter subrace." }
  ],

  "Pallid Elf": [
    { name: "Blessing of the Moon Weaver", desc: "Advantage on Investigation and Insight checks." },
    { name: "Darkvision", desc: "See in dim light within 60 ft. as if bright light." }
  ],

  "Lotusden Halfling": [
    { name: "Natural Stealth", desc: "Can attempt to hide when lightly obscured." },
    { name: "Children of the Woods", desc: "You know druidcraft; can cast entangle and spike growth once per long rest." }
  ]
};
const raceSkillProficiencies = {
    "Elf - High": ["Perception"],
    "Elf - Wood": ["Perception"],
    "Elf - Drow": ["Perception"],

    "Half-Elf": { 
        choose: 2, 
        options: [
            "Acrobatics",
            "Animal Handling",
            "Arcana",
            "Athletics",
            "Deception",
            "History",
            "Insight",
            "Intimidation",
            "Investigation",
            "Medicine",
            "Nature",
            "Perception",
            "Performance",
            "Persuasion",
            "Religion",
            "Sleight of Hand",
            "Stealth",
            "Survival"
        ] 
    },

    "Half-Orc": ["Intimidation"],

    "Aarakocra": ["Perception"],

    "Bugbear": ["Stealth"],

    "Goblin": ["Stealth"],

    "Kenku": ["Deception", "Stealth"],

    "Lizardfolk": { 
    choose: 2, 
    options: ["Animal Handling", "Nature", "Perception", "Stealth", "Survival"] 
    },

    "Orc": ["Intimidation"],

    "Tabaxi": ["Perception", "Stealth"],

    "Changelings": { 
    choose: 2, 
    options: ["Deception", "Insight", "Intimidation", "Persuasion"] 
    },

    "Shifters": ["WIKI"],

    "Eladrin": ["Perception"],
    "Shadar-kai": ["Perception"],

    "Pallid Elf": ["Perception", "Insight"],

    "Lotusden Halfling": ["Stealth"]
};
const skillProficiencyList = [
    "Acrobatics",
    "Animal Handling",
    "Arcana",
    "Athletics",
    "Deception",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Sleight of Hand",
    "Stealth",
    "Survival"
] 
const statPriority = {
    "Wizard": "int",
    "Sorcerer": "cha",
    "Cleric": "wis",
    "Fighter": "str",
    "Rogue": "dex",
    "Bard": "cha",
    "Paladin": "str",
    "Ranger": "dex",
    "Druid": "wis",
    "Monk": "dex",
    "Barbarian": "str",
    "Warlock": "cha",
    "Artificer": "int"
};
const raceASI = {
  // Player's Handbook
  "Dragonborn": { str: 2, cha: 1 },
  "Dwarf - Hill": { con: 2, wis: 1 },
  "Dwarf - Mountain": { con: 2, str: 2 },
  "Elf - High": { dex: 2, int: 1 },
  "Elf - Wood": { dex: 2, wis: 1 },
  "Elf - Drow": { dex: 2, cha: 1 },
  "Gnome - Forest": { int: 2, dex: 1 },
  "Gnome - Rock": { int: 2, con: 1 },
  "Half-Elf": { cha: 2, choose: { count: 2, options: ["str","dex","con","int","wis"] } },
  "Half-Orc": { str: 2, con: 1 },
  "Halfling - Lightfoot": { dex: 2, cha: 1 },
  "Halfling - Stout": { dex: 2, con: 1 },
  "Human": { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
  "Tiefling": { int: 1, cha: 2 },

  // Sword Coast Adventurer's Guide
  "Aasimar": { cha: 2, wis: 1 },
  "Genasi - Air": { con: 2, dex: 1 },
  "Genasi - Earth": { con: 2, str: 1 },
  "Genasi - Fire": { con: 2, int: 1 },
  "Genasi - Water": { con: 2, wis: 1 },

  // Volo's Guide to Monsters
  "Aarakocra": { dex: 2, wis: 1 },
  "Bugbear": { str: 2, dex: 1 },
  "Firbolg": { wis: 2, str: 1 },
  "Goblin": { dex: 2, con: 1 },
  "Hobgoblin": { con: 2, int: 1 },
  "Kenku": { dex: 2, wis: 1 },
  "Kobold": { dex: 2, str: -2 },
  "Lizardfolk": { con: 2, wis: 1 },
  "Orc": { str: 2, con: 1, int: -2 },
  "Tabaxi": { dex: 2, cha: 1 },
  "Triton": { str: 1, con: 1, cha: 1 },
  "Yuan-ti Pureblood": { cha: 2, int: 1 },

  // Mordenkainen's Tome of Foes
  "Gith-Githyanki": { str: 2, int: 1 },
  "Gith-Githzerai": { wis: 2, dex: 1 },
  "Duergar": { con: 2, str: 1 },
  "Eladrin": { dex: 2, cha: 1 },
  "Shadar-kai": { dex: 2, con: 1 },

  // Other official options (Eberron)
  "Warforged": { con: 2, choose: { count: 1, options: ["str","dex","con","int","wis","cha"] } },
  "Changelings": { cha: 2, choose: { count: 1, options: ["dex","int","wis"] } },
  "Kalashtar": { wis: 2, cha: 1 },
  "Shifters": { dex: 1, choose: { count: 1, options: ["str","dex","con","int","wis","cha"] } },

  // Explorer's Guide to Wildemount
  "Pallid Elf": { dex: 2, wis: 1 },
  "Lotusden Halfling": { dex: 2, wis: 1 }
};

const nameSyllables = {
  // PHB Races
  Dragonborn: {
    prefix: ["Ara", "Bal", "Dra", "Ka", "Sha", "Zor", "Thra", "Vra", "Rha", "Kor", "Tar", "Jha", "Oro"],
    middle: ["th", "ak", "ir", "ar", "", "on", "ur", "ak", "an"],
    suffix: ["ax", "ir", "on", "ek", "ar", "oth", "us", "ith"]
  },

  Dwarf: {
    prefix: ["Bor", "Dur", "Hel", "Mor", "Kil", "Gim", "Thra", "Brun", "Fal", "Dain", "Tor", "Har", "Bar", "Oin", "Nori"],
    middle: ["in", "ar", "or", "ur", "", "im", "un", "an", "or", "ak"],
    suffix: ["grim", "rik", "dar", "thor", "in", "ain", "bain", "grom", "dun", "rak"]
  },

  Elf: {
    prefix: ["Ae", "Fa", "Li", "Th", "Sa", "Va", "El", "Ara", "Cael", "Eri", "Iri", "Na", "Syl", "Tha", "Vael", "Lae"],
    middle: ["el", "an", "ir", "or", "", "ith", "ar", "en", "as", "ys", "ae"],
    suffix: ["wyn", "lar", "nor", "ion", "ith", "iel", "ael", "eth", "ar", "iel"]
  },

  Gnome: {
    prefix: ["Fon", "Dim", "Bim", "Tiv", "Nim", "Wen", "Bel", "Zim", "Gil"],
    middle: ["li", "ri", "na", "ta", "", "lo", "wi", "ni"],
    suffix: ["wick", "mire", "bin", "dell", "fen", "buckle", "spark"]
  },

  "Half-Elf": {
    prefix: ["Al", "Fa", "Li", "Th", "Ka", "Va", "El", "Ara", "Cael", "Eri", "Iri", "Na", "Syl", "Tha"],
    middle: ["el", "an", "ir", "or", "", "ith", "ar", "en", "as", "ys", "ae"],
    suffix: ["wyn", "lar", "nor", "ion", "ith", "iel", "ael", "eth", "ar", "iel"]
  },

  "Half-Orc": {
    prefix: ["Gor", "Brak", "Uth", "Thok", "Rok", "Kra", "Mor", "Zar", "Drak", "Harg"],
    middle: ["ak", "um", "or", "", "ug", "ar"],
    suffix: ["th", "ok", "ar", "um", "g", "ok"]
  },

  Halfling: {
    prefix: ["Bil", "Fro", "Sam", "Mar", "Ros", "Har", "Len", "Pen", "Fin", "Gal"],
    middle: ["by", "an", "er", "", "in", "el", "or"],
    suffix: ["wise", "foot", "son", "man", "bell", "wyn", "bright"]
  },

  Human: {
    prefix: ["Al", "Mar", "El", "Jon", "Ka", "Ri", "Cor", "Va", "Da", "Lu", "Tho", "Ser", "Ben", "Gar", "Fen", "Syl"],
    middle: ["den", "mar", "lin", "vor", "ric", "", "nor", "el", "an", "ias", "or", "is", "ath", "us"],
    suffix: ["ric", "ia", "on", "eth", "ar", "us", "iel", "an", "or", "en", "as"]
  },

  Tiefling: {
    prefix: ["Az", "Ka", "Lil", "Mor", "Va", "Ze", "Ra", "Syr", "Ny", "Di", "Sha", "Xa", "Thal", "Mez", "Zar"],
    middle: ["el", "ir", "an", "or", "", "is", "ath", "ur", "es", "on", "ia", "ar"],
    suffix: ["ath", "is", "iel", "or", "us", "eth", "az", "ar", "yn", "ion", "ael"]
  },

  // SCAG Races
  Aasimar: {
    prefix: ["Cael", "Luc", "Ser", "Val", "Ari", "Eli", "Thal", "Rael"],
    middle: ["an", "el", "or", "", "is", "as", "in"],
    suffix: ["iel", "ion", "ar", "us", "eth", "ias"]
  },

  Genasi: {
    prefix: ["Ael", "Zer", "Kai", "Ner", "Fir", "Lum", "Aqu", "Terr", "Sol"],
    middle: ["an", "or", "is", "el", "", "ir", "as"],
    suffix: ["ion", "ar", "us", "eth", "iel", "or"]
  },

  // VGM Races
  Aarakocra: {
    prefix: ["Aka", "Tsu", "Kai", "Rin", "Sora", "Fae", "Iko", "Ze"],
    middle: ["li", "ra", "shi", "on", "", "ko"],
    suffix: ["tal", "rin", "sha", "ka", "lo", "ien"]
  },

  Bugbear: {
    prefix: ["Grak", "Bog", "Ruk", "Thog", "Mug", "Krag"],
    middle: ["ar", "uk", "or", "", "um"],
    suffix: ["th", "ok", "ar", "um"]
  },

  Firbolg: {
    prefix: ["Bral", "Farn", "Thal", "Gor", "Mor", "Eld"],
    middle: ["in", "or", "an", ""],
    suffix: ["grim", "dar", "th", "el"]
  },

  Goblin: {
    prefix: ["Gri", "Zak", "Bog", "Rik", "Sn"],
    middle: ["ak", "in", "or", ""],
    suffix: ["g", "ok", "ar"]
  },

  Hobgoblin: {
    prefix: ["Thar", "Kor", "Brak", "Mar"],
    middle: ["an", "or", "uk", ""],
    suffix: ["g", "th", "ok"]
  },

  Kenku: {
    prefix: ["Kai", "Shi", "Ra", "Zu", "Ni", "Ka"],
    middle: ["ri", "shi", "ku", ""],
    suffix: ["ko", "sha", "li", "n"]
  },

  Kobold: {
    prefix: ["Zik", "Rak", "Kri", "Dor", "Nik"],
    middle: ["in", "or", "ak", ""],
    suffix: ["g", "ok", "ar"]
  },

  Lizardfolk: {
    prefix: ["Ska", "Thra", "Gra", "Zar", "Kro"],
    middle: ["ith", "ak", "or", ""],
    suffix: ["th", "ak", "ir"]
  },

  Orc: {
    prefix: ["Gor", "Brak", "Uth", "Thok", "Rok", "Kra"],
    middle: ["ak", "um", "or", ""],
    suffix: ["th", "ok", "ar", "um"]
  },

  Tabaxi: {
    prefix: ["Shi", "Ka", "Ra", "Mi", "Lio", "Tig", "Va", "Na"],
    middle: ["ra", "li", "ku", "", "so", "mi"],
    suffix: ["paw", "tail", "claw", "fur", "whisk", "stripe"]
  },

  Triton: {
    prefix: ["Thal", "Ner", "Oce", "Aqua", "Mar", "Cyr", "Sal", "Pel"],
    middle: ["on", "ar", "el", "", "ir", "is"],
    suffix: ["ius", "ar", "on", "eth", "el", "ior"]
  },

  "Yuan-ti Pureblood": {
    prefix: ["Ssa", "Ka", "Va", "Zhi", "Tha", "Xi"],
    middle: ["th", "ri", "sa", ""],
    suffix: ["ss", "th", "ar", "is"]
  },

  // MTF Races
  "Gith-Githyanki": {
    prefix: ["Zar", "Vra", "Kael", "Thar", "Syth"],
    middle: ["ak", "ir", "or", ""],
    suffix: ["ion", "ar", "ek", "us"]
  },

  "Gith-Githzerai": {
    prefix: ["Zhi", "Ka", "Vr", "Thal", "Sy"],
    middle: ["an", "or", "el", ""],
    suffix: ["ar", "ek", "is", "ion"]
  },

  Duergar: {
    prefix: ["Dur", "Kra", "Grim", "Thar", "Bal"],
    middle: ["in", "or", "", "ak"],
    suffix: ["rik", "dar", "thor", "in"]
  },

  Eladrin: {
    prefix: ["Ae", "Fa", "Li", "Th", "Sa", "Va", "El", "Ara"],
    middle: ["el", "an", "ir", "or", "", "ith", "ar"],
    suffix: ["wyn", "lar", "nor", "ion", "ith", "iel"]
  },

  "Shadar-kai": {
    prefix: ["Sha", "Va", "El", "Tha", "Ka", "Zy"],
    middle: ["el", "an", "ir", "", "or", "ith"],
    suffix: ["wyn", "lar", "nor", "ion", "iel"]
  },

  // Eberron Races
  Warforged: {
    prefix: ["Ar", "Mech", "Ter", "Val", "Or"],
    middle: ["on", "ex", "ir", "", "al"],
    suffix: ["ix", "or", "us", "an"]
  },

  Changelings: {
    prefix: ["Al", "Ka", "Li", "Tha", "Va", "Ra"],
    middle: ["el", "an", "ir", "", "or"],
    suffix: ["wyn", "lar", "ion", "iel"]
  },

  Kalashtar: {
    prefix: ["Ael", "Sa", "Li", "Ra", "Tha", "Eri"],
    middle: ["el", "an", "ir", "", "or"],
    suffix: ["wyn", "lar", "ion", "iel"]
  },

  Shifters: {
    prefix: ["Bea", "Lon", "Swi", "Wil", "Tor", "Gar"],
    middle: ["ar", "en", "in", "", "or"],
    suffix: ["th", "us", "ak", "el"]
  }
};


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function rollDice(times, sides) {
    let rolls = [];
    for (let i = 0; i < times; i++) {
        rolls.push(Math.floor(Math.random() * sides) + 1);
    }
    return rolls;
}

function generateStat() {
    let rolls = rollDice(4, 6);
    rolls.sort((a, b) => a - b);
    // Drop the lowest roll
    rolls.shift();
    return rolls.reduce((sum, val) => sum + val, 0);
}

function generateStats() {
    let stats = [];
    for (let i = 0; i < 6; i++) {
        stats.push(generateStat());
    }
    return stats;
}

function pickSkills(choose, options) {
  const selected = [];
  const pool = [...options];
  for (let i = 0; i < choose; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    selected.push(pool[idx]);
    pool.splice(idx, 1);
  }
  return selected;
}

function assignStatsForClass(stats, className) {
    stats.sort((a, b) => b - a); // Sort stats descending
    const priority = statPriority[className];
    const statOrder = ["str", "dex", "con", "int", "wis", "cha"];
    // Move the priority stat to the front
    statOrder.splice(statOrder.indexOf(priority), 1);
    statOrder.unshift(priority);
    const assigned = {};
    for (let i = 0; i < statOrder.length; i++) {
        assigned[statOrder[i]] = stats[i];
    }
    return assigned;
}
function addRaceASI(stats, raceName) {
  const asi = raceASI[raceName];
  if(!asi) return stats; // No ASI for this race

  let newStats = { ...stats };
  for (const [ability, value] of Object.entries(asi)) {
    if (ability === "choose") {
      const chooseCount = value.count;
      const options = value.options.filter(opt => opt in newStats);
      const chosenStats = pickSkills(chooseCount, options);
      chosenStats.forEach(stat => {
        newStats[stat] += 1;
      });
    } else if (ability in newStats) {
      newStats[ability] += value;
    }
  }
  return newStats;
}

function calculateModifier(score) {
    return Math.floor((score - 10) / 2);
}
function calculateModifiers(stats) {
  const modifiers = {};
  for (const [ability, score] of Object.entries(stats)) {
      modifiers[ability] = calculateModifier(score);
  }
  return modifiers;
}

function getAllSkillProficiencies(backgroundName, className, raceName) {
    let availableSkills = [...skillProficiencyList];
    const backSkills = backgroundProficiencies[backgroundName].skills;
    availableSkills = [...availableSkills.filter(skill => !backSkills.includes(skill))];
    const classProf = classSkills[className];
    let avaliableClassSkills = availableSkills.filter(skill => classProf.skills.options.includes(skill));
    const _classSkills = [
        ...pickSkills(classProf.skills.choose, avaliableClassSkills)
    ]
    availableSkills = [...availableSkills.filter(skill => !_classSkills.includes(skill))];

    let raceSkills = [];

    if(!(raceName in raceSkillProficiencies)) {
        raceSkills = [];
    } else {
        const raceProf = raceSkillProficiencies[raceName];
        if(Array.isArray(raceProf)) {
            raceSkills = [...raceProf];
        } else {
            let avaliableRaceSkills = availableSkills.filter(skill => raceProf.options.includes(skill));
            raceSkills = [...pickSkills(raceProf.choose, avaliableRaceSkills)];
        }
    }
    return {
        backSkills: backSkills,
        classSkills: _classSkills,
        raceSkills: raceSkills
    };
}

function classProficiencies(className){
    const classProf = classSkills[className];
    const otherSkills = [
        ...classProf.tools.map(tool => "[TOOL] " + tool),
        ...classProf.armor.map(armor => "[ARMOR] " + armor),
        ...classProf.weapons.map(weapon => "[WEAPON] " + weapon)
    ]
    return otherSkills;
}


function getRaceLanguages(raceName) {
    const langs = raceLanguages[raceName];
    if(langs.includes("random")) {
        const avaliableLangs = dndLanguages.filter(lang => !langs.includes(lang));
        const randomLang = avaliableLangs[getRandomIndex(avaliableLangs)];
        langs[langs.indexOf("random")] = "*"+randomLang;
    }
    return langs;
}

function getBackgroundLanguages(knownLanguages,backgroundName) {
    const langCount = backgroundProficiencies[backgroundName].languages;
    const langs = [];
    const avaliableLangs = dndLanguages.filter(lang => !knownLanguages.includes(lang));
    for(let i=0; i<langCount; i++) {
        const randomLang = avaliableLangs[getRandomIndex(avaliableLangs)];
        langs.push("*"+randomLang);
        avaliableLangs.splice(avaliableLangs.indexOf(randomLang),1);
    }
    return langs;
}

function getRaceFeatures(raceName) {
    return raceFeatures[raceName] || [];
}

function raceNameGenerator(raceName){
    const race = raceName.split(" ")[0]; // Handle subraces
    if(race in nameSyllables) {
        const syllables = nameSyllables[raceName] || nameSyllables["Human"];
        const prefix = syllables.prefix[getRandomIndex(syllables.prefix)];
        const middle = syllables.middle[getRandomIndex(syllables.middle)];
        const suffix = syllables.suffix[getRandomIndex(syllables.suffix)];
        return prefix + middle + suffix;
    } else {
        return "Nameless One"; // Default name
    }
}

function createCharacter() {
    console.clear();
    closeVideo();
    document.getElementById("skill-proficiencies-container").innerHTML = "";
    document.getElementById("proficiencies-container").innerHTML = "";
    document.getElementById("features-container").innerHTML = "";
    document.getElementById("generate-btn").disabled = true;
    var character = generateCharacter();
    console.log(character);
    setTimeout(() => {
        document.getElementById("generate-btn").disabled = false;
    }, 200);
}

function closeVideo() { 
    document.getElementById("popupVideo").pause();
    document.getElementById("popupVideo").style.display = "none";
    document.getElementById("popupVideo").currentTime = 0;
    document.getElementsByClassName("box")[0].classList.remove("wizard");
}

function wizard(){
  document.getElementById("skill-proficiencies-container").innerHTML = "";
  document.getElementById("proficiencies-container").innerHTML = "";
  document.getElementById("features-container").innerHTML = "";
  generateCharacter(
    {
      class:"Wizard", 
      stats:{int:18,cha:18,con:18,str:18,wis:18,dex:18},
      race:"Gnome - Rock",
      sex:"Male",
      background:"Sage",
      name:"Gandalf the Grey",
      alignment:"Neutral Good"
    }
  );
  document.getElementsByClassName("box")[0].classList.add("wizard");
  document.getElementById("popupVideo").volume = 0.3;
  document.getElementById("popupVideo").style.display = "block";
  document.getElementById("popupVideo").play();
}

function displayCharacter(character) {
    document.getElementsByClassName("box")[0].classList.remove("wizard");
    document.getElementById("char-name").textContent = character.name;
    document.getElementById("char-class").textContent = character.class;
    document.getElementById("char-subclass").textContent = character.subclass;
    document.getElementById("char-background").textContent = character.background;
    document.getElementById("char-race").textContent = character.race;
    document.getElementById("char-alignment").textContent = character.alignment;
    document.getElementById("char-sex").textContent = character.sex;
    document.getElementById("char-health").textContent = character.health;
    document.getElementById("char-hitdie").textContent = character.hitDie;
    
    // Stats
    function formatModifier(mod) {
      return (mod >= 0 ? "+" : "") + mod; // adds + for positive, keeps - for negative
    }
    
    const _stats = ["str", "dex", "con", "int", "wis", "cha"];
    _stats.forEach(stat => {
      const el = document.getElementById(`stat-${stat}`);
      const value = character.stats[stat];
      
      el.textContent = value;
      
      el.classList.remove("stat-high", "stat-low", "stat-18","stat-20", "stat-5");
      if (value >= 15 && value < 18) {
        el.classList.add("stat-high");
      } else if (value <= 5){
        el.classList.add("stat-5");
      } else if (value <= 8) {
        el.classList.add("stat-low");
      } else if (value == 18){
        el.classList.add("stat-18");
      } else if (value > 18 && value <= 20){
        el.classList.add("stat-20");
      }
    });
    document.getElementById("stats-container").classList.remove("high-total", "low-total");
    const total = Object.values(character.stats).reduce((sum, value) => sum + value, 0);
    document.getElementById("total").textContent = total;
    if(total >= 85) {
      document.getElementById("stats-container").classList.add("high-total");
    } else if(total <= 67) {
      document.getElementById("stats-container").classList.add("low-total");
    }
    document.getElementById("stat-str").textContent = `${character.stats.str} [${formatModifier(character.modifiers.str)}]`;
    document.getElementById("stat-dex").textContent = `${character.stats.dex} [${formatModifier(character.modifiers.dex)}]`;
    document.getElementById("stat-con").textContent = `${character.stats.con} [${formatModifier(character.modifiers.con)}]`;
    document.getElementById("stat-int").textContent = `${character.stats.int} [${formatModifier(character.modifiers.int)}]`;
    document.getElementById("stat-wis").textContent = `${character.stats.wis} [${formatModifier(character.modifiers.wis)}]`;
    document.getElementById("stat-cha").textContent = `${character.stats.cha} [${formatModifier(character.modifiers.cha)}]`;
    
    // Skill proficiencies from class and background
    const skillprof = document.getElementById("skill-proficiencies-container");
    character.classSkills.forEach(skill => {
        const li = document.createElement("li");
        li.className = "class-skill skill";
        li.textContent = "[CLASS] " + skill;
        skillprof.appendChild(li);
    });
    character.backSkills.forEach(skill => {
        const li = document.createElement("li");
        li.className = "background-skill skill";
        li.textContent = "[BACKGROUND] " + skill;
        skillprof.appendChild(li);
    });
    character.raceSkills.forEach(skill => {
        const li = document.createElement("li");
        li.className = "race-skill skill";
        li.textContent = "[RACE] " + skill;
        skillprof.appendChild(li);
    });

    // All other proficiencies (tools, armor, weapons, languages)
    const otherProfs = document.getElementById("proficiencies-container");
    character.otherSkills.forEach(prof => {
        const li = document.createElement("li");
        li.className = "other-prof skill";
        li.textContent = prof;
        otherProfs.appendChild(li);
    });
    character.racelanguages.forEach(lang => {
        const li = document.createElement("li");
        li.className = "race-language skill";
        li.textContent = "[LANGUAGE] " + lang;
        otherProfs.appendChild(li);
    });
    character.backlanguages.forEach(lang => {
        const li = document.createElement("li");
        li.className = "back-language skill";
        li.textContent = "[LANGUAGE] " + lang;
        otherProfs.appendChild(li);
    });

    // Race features
    const raceFeatContainer = document.getElementById("features-container");
    character.features.forEach(feature => {
        const div = document.createElement("div");
        div.className = "feature";
        const title = document.createElement("h4");
        title.textContent = feature.name;
        const desc = document.createElement("p");
        desc.textContent = feature.desc;
        div.appendChild(title);
        div.appendChild(desc);
        raceFeatContainer.appendChild(div);
    });
}

function generateCharacter(options = {}) {
    // Pick class (lock if specified)
    const className = options.class 
        ? options.class 
        : dndClasses[getRandomIndex(dndClasses)];

    const classIndex = dndClasses.indexOf(className);

    // Pick subclass (locked to class if class is specified)
    const subclassName = dndSubclasses[classIndex][getRandomIndex(dndSubclasses[classIndex])];

    // Pick race (lock if specified)
    const race = options.race 
        ? options.race 
        : races[getRandomIndex(races)];

    // Pick background (lock if specified)
    const background = options.background 
        ? options.background 
        : backgrounds[getRandomIndex(backgrounds)];

    // Pick alignment (lock if specified)
    const alignment = options.alignment 
        ? options.alignment 
        : alignments[getRandomIndex(alignments)];

    // Roll stats
    const statRolls = generateStats();

    let stats = {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0
    };

    // Assign stats based on chosen class
    stats = assignStatsForClass(statRolls, className);

    if (options.stats) {
        for (const [key, value] of Object.entries(options.stats)) {
            if (stats.hasOwnProperty(key)) {
                stats[key] = value;
            }
        }
    }

    stats = addRaceASI(stats, race);

    const modifiers = calculateModifiers(stats);
    console.log(modifiers);

    // Skills
    const allSkills = getAllSkillProficiencies(background, className, race);
    const _classSkills = allSkills.classSkills;
    const backSkills = allSkills.backSkills;
    const raceSkills = allSkills.raceSkills;

    const otherSkills = classProficiencies(className);
    const raceLangs = getRaceLanguages(race);
    const backLangs = getBackgroundLanguages(raceLangs, background);

    const features = getRaceFeatures(race);

    const name = options.name 
        ? options.name 
        : raceNameGenerator(race);

    const sex = options.sex
        ? options.sex
        : Math.random() < 0.5 ? "Male" : "Female";

    const _hitDie = classSkills[className].hitDie;
    const health = classSkills[className].startingHP + modifiers.con;

    let character = {
        name: name,
        class: className,
        subclass: subclassName,
        race: race,
        hitDie: "1d" + _hitDie,
        health: health,
        alignment: alignment,
        stats: stats,
        modifiers: modifiers,
        classSkills: _classSkills,
        backSkills: backSkills,
        otherSkills: otherSkills,
        raceSkills: raceSkills,
        racelanguages: raceLangs,
        backlanguages: backLangs,
        features: features,
        sex: sex,
        background: background
    };
    displayCharacter(character);
    return character;
}