//Images
import ghost from "../img/events/ghost-bride.png";
import werewolf from "../img/events/werewolf.jpg";
import zombie from "../img/events/zombie-option-1.jpg";
import clownPuppet from "../img/events/puppet-clown.jpg";
import chainsawMurderer from "../img/events/Chainsaw_Madman.jpg";
import skittles from "../img/events/skittles.jpg";
import talkingHeads from "../img/events/talking-heads.jpg";
import alien from "../img/events/alien.jpg";

const eventData = [
    {
        name: "Ghost",
        description: "A ghost bride aimlessly floats into the room.  As you step into the room, she takes notice of you.  Her face contorts in rage that you’ve disturbed her mourning her lost love.",
        image: ghost,
        actions: 
        [
            { 
            type: "pass",
            action: "Offer your sincerest apologies.", 
            response: "She accepts your apology and you can continue your search for the silver key.",
            },
            { 
            type: "fail",
            action: "Tell her a joke to lighten the mood in the room.", 
            response: "She’s not amused and locks you in the room so you can mourn with her forever.",
            },
            { 
            type: "redo",
            action: "Give her a blank stare.", 
            response: "You end up in a staring contest. Choose again."
            }
        ]
    },
    //alternate response
    {
      name: "Ghost",
      description: "A ghost bride aimlessly floats into the room.  As you step into the room, she takes notice of you.  Her face contorts in rage that you’ve disturbed her mourning her lost love.",
      image: ghost,
      actions: 
      [
          { 
          type: "pass",
          action: "Offer your sincerest apologies.", 
          response: "She accepts your apology and you can continue your search for the silver key.",
          },
          { 
          type: "pass",
          action: "Tell her a joke to lighten the mood in the room.", 
          response: `"The ghost laughs at the joke and lets you go, but before you exit the room she chuckles "Talk to the Heads, they will help you escape."`,
          },
          { 
          type: "redo",
          action: "Give her a blank stare.", 
          response: "You end up in a staring contest. Choose again."
          }
      ]
  },
    {
      name: "Werewolf",
      description:
        "A snarling and ravenous werewolf attacks you from behind. You barely evade it. Just out of your reach, you spot a gun, a haymaker, and a candlestick. You only have time to get to one.",
      image: werewolf,
      actions: [
        {
          type: "pass",
          action: "Candlestick",
          response:
            "You barely connect with the candlestick, but luckily it is made out of silver.  The werewolf is severely wounded and loses consciousness.  You escape unscathed and can continue your search for the key.",
        },
        {
          type: "fail",
          action: "Gun",
          response:
            "Unfortunately, the gun did not contain a silver bullet.  The wound further enrages the werewolf and it bites you before you can escape.  You turn into a werewolf and run off into the night, howling at the moon, doomed to the cycle of transformation for all time.",
        },
        {
          type: "redo",
          action: "Haymaker",
          response:
            "Your old boxing lessons paid off and the werewolf is temporarily stunned.  Choose one of the other two options while he’s discombobulated.",
        },
        ],
      },
  //Alternate Response werewolf
  {
    name: "Werewolf",
    description:
      "A snarling and ravenous werewolf attacks you from behind. You barely evade it. Just out your reach, you spot a gun, a haymaker, and a candlestick. You only have time to get to one.",
    image: werewolf,
    actions: [
      {
        type: "pass",
        action: "Candlestick",
        response:
          "You barely connect with the candlestick, but luckily it is made out of silver.  The werewolf is severely wounded and loses consciousness.  You escape unscathed.",
      },
      {
        type: "pass",
        action: "Gun",
        response:
          "The gun contains a silver bullet. As you pull the trigger, the gun recoils and a shot echos through the dusty space.  The werewolf falls to the floor in a large heap of fur.  Your are free.",
      },
      {
        type: "redo",
        action: "Haymaker",
        response:
          "Your old boxing lessons paid off and the werewolf is temporarily stunned.  Choose one of the other two options while he’s discombobulated.",
      },
      ],
    },
  {
    name: "Zombie",
    description:
      "A foul, grimy, diseased zombie in blood-stained, tattered clothing approaches you.",
    image: zombie,
    actions: [
      {
        type: "pass",
        action: "Dodge",
        response:
          "You dodge the zombie, and in the chaos, it stumbles and smashes it’s head open. You escape the zombie before he made your brains his dinner.",
      },
      {
        type: "fail",
        action: "Attack",
        response:
          "You try to attack the zombie, but you underestimate its strength.  It overpowers you and bites you.",
      },
      {
        type: "redo",
        action: "Push",
        response:
          "Pushing the zombie causes it to stumble, but regains its footing, and positions itself to attack. Choose another way to try to overcome the zombie.",
      },
    ],
  },
  // zombie alternate response
  {
    name: "Zombie",
    description:
      "A foul, grimy, diseased zombie in blood-stained, tattered clothing approaches you, mouth agape.  The stench of death and decay hits you and...",
    image: zombie,
    actions: [
      {
        type: "fail",
        action: "Dodge",
        response: "You dodge the zombie, but in the meelee you stumble and fall to the ground.  The zombie takes its opportunity to attack, making your brains its dinner."
      },
      {
        type: "pass",
        action: "Attack",
        response:
          "The zombie lumbers towards you, as he looms over you, you manage to reach out and push him away, overpowering the zombie in a test of strength."
      },
      {
        type: "redo",
        action: "Push",
        response:
          "Pushing the zombie causes it to stumble, but regains its footing, and positions itself to attack. Choose another way to try to overcome the zombie.",
      },
    ],
  },
  {
    name: "Clown Puppet",
    description:
      "A puppet sits on the shelf has its head backwards. As you enter the room, the head slowly begins to spin around.",
    image: clownPuppet,
    actions: [
      {
        type: "pass",
        action: "Attack the Puppet",
        response:
          "You throw the clown puppet on the ground and smash it!  You can now leave the room to continue your search for the silver key.",
      },
      {
        type: "fail",
        action: "Wait and see what happens.",
        response:
          "As the clown head turns to face you, its mouth opens and out comes a spout adorned with a fake flower. The clown squirts you with a liquid. You believe to be water, but as the liquid touches your skin it begins to burn. You realize its acid and it starts to disintegrate your body.",
      },
      {
        type: "redo",
        action: "Take a closer look.",
        response:
          "As the clown head finishes turning, you look down at its hand and you notice a small object.  You lunge to attack the clown puppet, and as you do it drops the object and smoke fills the room, allowing you an opportunity to choose another way to overcome the Clown Puppet.",
      },
    ],
  },
  {
    name: "Chainsaw Murderer",
    description:
      "A revving of a motor fires up behind you.  As you turn, you see a madman with a chainsaw revving in his hands. The madman lifts the chainsaw over you, you decide to...",
    image: chainsawMurderer,
    actions: [
      {
        type: "pass",
        action: "Duck!",
        response:
          "The madman misses! He loses his grip on the chainsaw in one hand, and as he continues to swing downward, the chainsaw accidentally connects and saws his own legs off.  You escape and continue to search for the silver key.",
      },
      {
        type: "fail",
        action: "Try to get the chainsaw from him.",
        response:
          "The madman overpowers you.  As you look up, the last thing you see is the saw connecting with your lower half.  You pass out from the pain.",
      },
      {
        type: "redo",
        action: "Kick him!",
        response:
          "The kick connects with the madman’s chest.  He is stunned, but he quickly recovers, giving you enough time to try again.",
      },
    ],
  },
  {
    name: "Bowl of Skittles",
    description:
      "You spot a  glowing candy dish full of Skittles sitting on a pedestal in the middle of the room with a sign that says “Eat me if you dare…”.",
    image: skittles,
    actions: [
      {
        type: "pass",
        action: "Eat a handful of Skittles.",
        response:
          "Yess! These are delicious! You're able to walk away and keep looking for the silver key.",
      },
      {
        type: "fail",
        action: "Eat 13 skittles.",
        response:
          "Oh no! You’re allergic to Skittles and you get food poisoning.",
      },
      {
        type: "redo",
        action: "Eat the skittles, but only the red ones.",
        response:
          "Oh no!  You need to eat one at least one of every color! Choose again. ",
      },
    ],
  },
  {
    name: "The Talking Heads",
    description:
      "Answer this riddle: “The person who built it sold it.  The person who bought it never used it.  The person who used it never saw it...what is it?”",
    image: talkingHeads,
    actions: [
      {
        type: "pass",
        action: "A coffin",
        response:
          "“You are wise enough to escape.  Wisdom is the key to survival”  An illuminated silver key appears before the team and the door they entered through opens.",
      },
      {
        type: "redo",
        action: "A meal",
        response: "“You are incorrect.  Take a moment to check your logic and choose again!” .",
      },
      {
        type: "redo",
        action: "A table",
        response: "“You are incorrect.  Take a moment to check your logic and choose again!”",
      },
    ],
  },
  {
    name: "Alien",
    description:
      "A figure scurries across the floor and up to the team. “Here’s the key, now you’re free!”  The figure holds out a gold key.",
    image: alien,
    actions: [
      {
        type: "pass",
        action: "“Turn the key down and keep looking.",
        response: "“I was mistaken, try again.”",
      },
      {
        type: "redo",
        action: "Believe the weird little alien, take the key.",
        response:
          "The alien hands you a gold key.",
      },
    ],
  },
];

export default eventData;
