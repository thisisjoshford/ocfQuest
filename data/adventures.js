const gear = {
    id: 'gear',
    title: 'Oh no! You forgot something!',
    image: 'gear.jpg',
    audio: 'monsters.wav',
    description: `
        Shit man.... you forgot an essential item for fair... you look in your bag and notice this is missing!
    `,
    choices: [{
        id: 'bugSpray',
        description: 'Bug Spray',
        result: `
            You get eaten alive by the mosquitoes your first night, but fortunately your friends give you some for the remaining nights and only get a little bummed... You loose a little joy and self esteem but gain some insight for next time.
        `,
        insight: 5,
        joy: -3,
        self_esteem: -5
    }, {
        id: 'tent',
        description: 'Tent',
        result: `
            No worries!  You bunk up with a crew mate and make a friend for life!
            +20 Joy
            +20 Self esteem
            +20 Insight
        `,
        insight: 5,
        joy: -3,
        self_esteem: -5
    }, {
        id: 'id',
        description: 'ID Card',
        result: `
            Shit man!  That was suuuuper important.  You get denied at registration and have to go home! 
            -20 Joy
            -20 Self Esteem
            +20 Insight
        `,
        insight: 20,
        joy: -20,
        self_esteem: -20
    }]
};

const shower = {
    id: 'shower',
    title: 'Time to take a shower!',
    image: 'shower.jpg',
    audio: 'monsters.wav',
    description: `
        You smell fairly rank!  Time to take a shower and feel better!
    `,
    choices: [{
        id: 'ritz',
        description: 'The Ritz',
        result: `
            You take a nice shower at the Ritz.... You hear an amazing naked band that serenades you and 100 other naked people. You all do a little dance and leave feeling wonderful and refreshed!
            +20 Joy
            +20 Insight
            +20 Self Esteem
        `,
        insight: 20,
        joy: 20,
        self_esteem: 20
    }, {
        id: 'misspiggy',
        description: 'Miss Piggy\'s',
        result: `
            Oh no!!! They are out of water!!!!  You leave kinda bummed and still stinky...
            -10 Joy
            -10 Self esteem
            +10 Insight
        `,
        insight: 10,
        joy: -10,
        self_esteem: -10
    }, {
        id: 'flowingNotes',
        description: 'The Flowing Notes',
        result: `
            You check out the Flowing Notes where they serve tea and cookies while you wait in line.... you end up meeting someone you really like in line and end up going out on a fair date with them!  Score!! 
            +33 Joy
            +33 Self Esteem
            +33 Insight
        `,
        insight: 33,
        joy: 33,
        self_esteem: 33
    }]

};

const wook = {
    id: 'wook',
    title: 'Encounter with a Wild Wook',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'wook.png',
    audio: 'wook.wav',
    description: `
        You see a wook... they offer you drugs... what do you do?
    `,
    choices: [{
        id: 'consume',
        description: 'spun',
        result: 'You get spun and vomit!',
        insight: -10,
        joy: -10,
        self_esteem: -10
    }, {
        id: 'reject',
        description: 'Reject!',
        result: 'Good choice!  Never take drugs from a random wook!',
        insight: 100,
        joy: 100,
        self_esteem: 300
    },]
};

const quests = [
    gear,
    shower, 
    wook,
];

export default quests;