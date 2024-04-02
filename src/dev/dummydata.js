export const gear = {
    "weapons": [
        {
            "name": "Colt M1911 Pistol",
            "description": "A standard-issue semi-automatic handgun with a 7-round magazine.",
            "damage": "2-harm close loud",
            "tags": ["handgun"]
        },
        {
            "name": "Sawn-off Shotgun",
            "description": "A sawn-off double-barrel shotgun for close-range encounters.",
            "damage": "3-harm close messy",
            "tags": ["shotgun"]
        },
        {
            "name": "Hunting Rifle",
            "description": "A scoped bolt-action rifle for precise long-range shots.",
            "damage": "3-harm far loud",
            "tags": ["rifle", "hunting"]
        }
    ],
    "armor": [
        {
            "name": "Leather Jacket",
            "description": "A worn leather jacket providing some protection against harm.",
            "armor_class": 1,
            "tags": ["light"]
        },
        {
            "name": "Kevlar Vest",
            "description": "A bulletproof vest offering significant protection against harm.",
            "armor_class": 2,
            "tags": ["bulletproof"]
        }
    ],
    "gear": [
        {
            "name": "First Aid Kit",
            "description": "A basic medical kit for treating injuries and wounds.",
            "tags": ["medical"]
        },
        {
            "name": "Flashlight",
            "description": "A handheld battery-powered light source.",
            "tags": ["illumination"]
        },
        {
            "name": "Holy Water",
            "description": "Blessed water effective against supernatural creatures.",
            "tags": ["holy", "supernatural"]
        }
    ]
}

export const playbookMoves = {
    "The Big Entrance": "When you make a dramatic entrance into a dangerous situation, roll +Tough. On a 10+, pick 2. On a 7-9, pick 1.\n\n- You take the attention of all the bad guys, so your allies can get into position.\n- You terrify your enemies, who are shaken, frightened, or impressed by your presence.\n- You make a perfect first impression, giving you leverage over someone present.\n\nOn a miss, you still get to pick 1, but you're left in a bad spot or lose something.",
    "Something To Prove": "When you perform a feat of strength or prowess to impress, intimidate, or frighten someone, roll +Tough. On a 10+, they do what you want or give you what you need. On a 7-9, they'll do it, but they need some concrete assurance, corroboration, or evidence first. On a miss, you failed to impress or intimidate them and they'll react badly.",
    "Every Hero Needs A Theme Song": "When you do something that totally fits your chosen's theme, mark experience. You can only mark experience this way once per scene.",
};

export const name = "Shorty"
export const moves = {
    "Kick Some Ass": "When you kick some ass, roll +Tough. On a 10+, you and whatever you're fighting inflict harm on each other. On a 7-9, you inflict harm but suffer harm as well. On a miss, you might get your ass kicked.",
    "Protect Someone": "When you protect someone, roll +Tough. \n On a 10+, you protect them okay. On a 7-9, you protect them but you'll suffer some or all of the harm they were going to get. On a miss, they're in immediate danger.",
    "Read a Bad Situation": "When you read a bad situation, roll +Sharp. On a 10+, ask the Keeper 3 questions from the list below. On a 7-9, ask 1. Either way, take +1 forward when acting on the answers.\n- What's my best way in/out/through?\n- What's the biggest threat?\n- What's most vulnerable to me?\n- What's the best way to protect the victims?",
    "Investigate a Mystery": "When you investigate a mystery, roll +Sharp. On a 10+, hold 2. On a 7-9, hold 1. Spend your hold to ask the Keeper any questions you want about the mystery, where, what, who, how and why. On a miss, you may ask one question, but you won’t like the answer.",
    "Use Magic": "When you use magic, roll +Weird. On a 10+, the magic works without issues. On a 7-9, choose one of the glitches: the effect is weakened, the effect is of short duration, you take 1-harm, or the magic draws immediate, unwelcome attention. On a miss, the Keeper will choose a glitch and decide how it manifests."
}

export const stats = {
    charm: 2,
    sharp: 3,
    tough: 2,
    cool: 1,
    weird: 2,
    luck: 1,
    experience: 3,
    harm: 3,
}
