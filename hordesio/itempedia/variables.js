window.equipment = {
    sword: {
        description: "Sword",
        name: ["Wooden Sword", "Rusty Ironsword", "Troll Blade", "Broadsword ", "Longsword", "Carved Bonesword", "Greatsword", "Ghastly Scimitar", "Nullfire Sword", "Knight's Greatsword", "King's Glaive", "Void Blade", "Zerstörer", "Hearteater", "Demonedge", "Excalibur", "Harbinger"],
        lvl: [1, 3, 9, 15, 21, 28, 34, 40, 46, 52, 58, 64, 70, 76, 82, 88, 94],
        class: ["Warrior"],
        rotated: true,
        stats: {
            mindmg: {
                base: 3,
                multi: .7,
                low: .6,
                high: .9
            },
            maxdmg: {
                base: 5,
                multi: .8,
                low: 1.1,
                high: 1.2
            },
            crit: {
                base: 2,
                multi: .12,
                low: .8,
                high: 1,
                float: !0
            }
        }
    },
    staff: {
        description: "Staff",
        name: ["Broken Twig", "Cracked Stick", "Gnarled Broomstick", "Oak Stave", "Mystic Wand", "Bone Stave", "Encrusted Rod", "Imbued Staff", "Emerald Staff", "Sapphire Staff", "Frozen Greatstaff", "Infernal Staff", "Hellfire Greatstaff", "Staff of Angelness ", "Crystal Core", "Witch's Heart", "Deathweaver"],
        class: ["Mage"],
        lvl: [1, 4, 10, 16, 22, 29, 35, 41, 47, 53, 59, 65, 71, 77, 83, 89, 95],
        rotated: true,
        stats: {
            mindmg: {
                base: 2,
                multi: .9,
                low: .6,
                high: .9
            },
            maxdmg: {
                base: 3,
                multi: 1.1,
                low: 1.1,
                high: 1.2
            },
            crit: {
                base: 2,
                multi: .1,
                low: .8,
                high: 1,
                float: !0
            },
            mp: {
                base: 5,
                multi: .8,
                low: .8,
                high: 1
            },
            mpreg: {
                base: .5,
                multi: .05,
                low: .8,
                high: 1,
                float: !0
            }
        }
    },
    hammer: {
        description: "Hammer",
        name: ["Splintered Club", "Wooden Mallet", "Rusty Flail", "Orcish Bludgeon", "Heavy Mace", "Iron Basher", "Darkmetal Maul", "Divine Gavel", "Hallowed Hammer", "Dwarfen Maul", "Coldforged Gavel", "Amboss", "Skullshatterer", "Benevolence ", "Hammer of Gaia", "Worldender", "Nightmare"],
        class: ["Shaman"],
        lvl: [1, 5, 11, 17, 23, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96],
        rotated: true,
        stats: {
            mindmg: {
                base: 1,
                multi: .6,
                low: .6,
                high: 1
            },
            maxdmg: {
                base: 4,
                multi: .8,
                low: .7,
                high: 1
            },
            mpreg: {
                base: 1,
                multi: .05,
                low: .8,
                high: 1,
                float: !0
            }
        }
    },
    bow: {
        description: "Bow",
        name: ["Driftwood Shortbow", "Novice Shortbow", "Curved Shortbow", "Adventurer's Shortbow", "Long Bow", "Bone Bow", "Elven Bow", "Ancient Bow", "Iron Piercer", "Silver Recurve", "Assassin's Bow", "Skyfire Warbow", "Hellfire Warbow", "Widowmaker", "Stormsong", "Scarebow", "Fury"],
        class: ["Archer"],
        lvl: [1, 6, 12, 18, 24, 31, 37, 43, 49, 55, 61, 67, 73, 79, 85, 91, 97],
        rotated: true,
        stats: {
            mindmg: {
                base: 1,
                multi: .7,
                low: .7,
                high: 1
                
            },
            maxdmg: {
                base: 3,
                multi: .9,
                low: 1,
                high: 1.1
            },
            crit: {
                base: 3,
                multi: .15,
                low: .6,
                high: 1,
                float: !0
            }
        }
    },
    "chest armor": {
        description: "Chest armor",
        name: ["Potato Sack", "Faded Garment", "Adventurer's Tunic", "Quilted Leather", "Scaled Chestguard", "Sky Cloak", "Shadow Cloak", "Obsidian Cloak", "Hellfire Cloak", "Soulkeeper", "Deathless"],
        lvl: [1, 9, 18, 27, 36, 45, 56, 65, 74, 83],
        url:"armor",
        stats: {
            def: {
                base: 5,
                multi: .9,
                low: .6,
                high: 1
            },
            hp: {
                base: 10,
                multi: 1.2,
                low: .6,
                high: 1
            },
            hpreg: {
                base: .5,
                multi: .05,
                low: .3,
                high: 1,
                float: !0
            }
        }
    },
    gloves: {
        description: "Gloves",
        name: ["Hand Wraps", "Cloth Mitts", "Leather Gloves", "Bone Grips", "Iron Gauntlets", "Imbued Gloves", "Wartorn Mitts", "Fiery Handguards", "Gloves of Empowerment ", "Coldforged Fists", "Eternal Gauntlets", "Gloves of Midas", "Titan's Mitts"],
        lvl: [1, 8, 17, 26, 35, 44, 55, 64, 73, 82],
        url:"glove",
        stats: {
            crit: {
                base: .2,
                multi: .05,
                low: .2,
                high: 1,
                float: !0
            },
            def: {
                base: 2,
                multi: .3,
                low: .5,
                high: 1
            },
            hp: {
                base: 3,
                multi: .4,
                low: .5,
                high: 1
            }
        }
    },
    armlet: {
        description: "Armlet",
        name: ["Simple Bracelet", "Makeshift Brace", "Leather Armlet", "Ivory Bracelet", "Iron Vambrace", "Imbued Bracers", "Ember Cuffs", "Mirrored Armlet", "Golem Fragment", "Coldforged Bracer", "Blackstar Gem", "Eternal Vambraces", "Lost Guardian"],
        lvl: [1, 7, 16, 25, 34, 43, 54, 63, 72, 81],
        stats: {
            def: {
                base: 2,
                multi: .4,
                low: .5,
                high: 1
            },
            hp: {
                base: 3,
                multi: .3,
                low: .5,
                high: 1
            },
            mp: {
                base: 5,
                multi: 1,
                low: .5,
                high: 1
            },
            mpreg: {
                base: .2,
                multi: .05,
                low: .5,
                high: 1,
                float: !0
            }
        }
    },
    boots: {
        description: "Boots",
        name: ["Sandals", "Cloth Footpads", "Leather Boots", "Bone Greaves", "Scaled Treads", "Patterned Greaves", "Wartorn Boots", "Imbued Treads", "Skyswift Boots", "Coldforged Greaves", "Cloudrunner Treads", "Boots of Hermes", "Starshard Greaves"],
        lvl: [1, 6, 15, 24, 33, 42, 53, 62, 71, 80],
        url:"boot",
        stats: {
            def: {
                base: 2,
                multi: .3,
                low: .5,
                high: 1
            },
            hp: {
                base: 3,
                multi: .3,
                low: .5,
                high: 1
            },
            move: {
                base: .1,
                multi: .02,
                low: .5,
                high: 1,
                float: !0
            }
        }
    },
    ring: {
        description: "Ring",
        name: ["Woven Band", "Ironbark Circlet", "Brass Ringlet", "Hollowed Bone", "Elven Band", "Imbued Circlet", "Arcane Ring", "Emerald Band", "Infernal Ring", "Ancient Talisman"],
        lvl: [1, 5, 14, 23, 32, 41, 52, 61, 70, 79],
        stats: {
            hpreg: {
                base: .1,
                multi: .05,
                low: .2,
                high: 1,
                float: !0
            },
            mpreg: {
                base: .1,
                multi: .05,
                low: .2,
                high: 1,
                float: !0
            }
        }
    },
    bag: {
        description: "Bag",
        name: ["Linen Pouch", "Adventurer's Rucksack", "Purpur Duffel", "Elven Saddlebag", "Moss Enigma"],
        lvl: [15, 31, 46, 61, 82],
        stats: {
            slots: {
                multi: .5,
                low: .8,
                high: 1
            }
        }
    },
    quiver: {
        description: "Quiver",
        name: ["Linen Quiver", "Reinforced Quiver", "Last Reserves", "Lotharien", "Snake Quiver"],
        class: ["Archer"],
        lvl: [5, 25, 45, 65, 85],
        stats: {
            crit: {
                base: .5,
                multi: .08,
                low: .5,
                high: 1,
                float: !0
            },
            move: {
                base: .1,
                multi: .03,
                low: .5,
                high: 1,
                float: !0
            }
        }
    },
    shield: {
        description: "Shield",
        name: ["Wooden Shield", "Buckler", "Old Bulwark", "Metal Guard", "Protecteron"],
        class: ["Shaman", "Warrior"],
        lvl: [2, 13, 33, 63, 88],
        stats: {
            def: {
                base: 15,
                multi: 1.2,
                low: .5,
                high: 1
            },
            hp: {
                base: 8,
                multi: .4,
                low: .5,
                high: 1
            },
            hpreg: {
                base: .1,
                multi: .05,
                low: .5,
                high: 1,
                float: !0
            }
        }
    },
    talisman: {
        description: "Talisman",
        name: ["Smelly Talisman", "Guided Talisman", "Ocean Talisman", "Qui'ton", "Dimension Talisman"],
        class: ["Mage"],
        lvl: [7, 27, 47, 67, 87],
        stats: {
            mp: {
                base: 3,
                multi: 1.2,
                low: .5,
                high: 1
            },
            mpreg: {
                base: .1,
                multi: .1,
                low: .5,
                high: 1,
                float: !0
            }
        }
    }
}
