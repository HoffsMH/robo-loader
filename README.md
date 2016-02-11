## Robo-loader

A common thing seen in video games is that their parts of their mechanics can be seen as modular and a game all by itself.
A real life parallel might be that you are walking down the street while trying to go somewhere (the game as a whole), and
you have to watch your feet and avoid stepping on cracks(the mini-game).

#### So I really like World of Warcraft.
And WoW has such a mini-game.
Game balancing also really interest me too
so I tried to distill the basic mechanics of this mini-game into a javascript canvas game. so I could turn some knobs and see how they affect the way it plays.

##### The things I was interested in were:
* pacing
* difficulty
* depth

Before we get too far into the things I've learned I would help to explain the game itself. The game can be played [here](/robo-loader). Please note the game might look different now than at the time of this post but the basic mechanics will still be in place.

### Basics:
You work in a factory that has a number of horizontal Lanes(4 in this picture). Inside of each is a "conveyor belt" with a number of cells. The cells move to the right and from the left and carry whatever is on them.

![basic game](basic-game.gif)

On the left side of the screen is a "Loading Area" where we can put a certain amount of "material" down on a given Conveyor Belt.

The Above picture shows that the loading area will put down 3 cells worth of yellow "material"

![red 3](red-3-game.gif)

 Here we just put down 3 red blobs worth of material. The numbers on the left mean that the next time we put down a red material on that lane we will only put down 2 blobs worth of red material.

 Lets look at the next game mechanic...

 ![workers intro](workers-intro-game.gif)

 The white boxes represent the workers in this factory. The workers will move across the lanes to the left if they have nothing to work on. If a single worker reaches the loading area the game is over.


 By putting down material on a conveyor belt for a lane worker to work on you impede its progress towards the loading area.

You might have noticed that there are 2 sets of numbers on the left. The big number, as I mentioned before represents how many blobs of material you would place on the given conveyor belt if you were to press enter. The second smaller set of numbers is a counter that counts down till you can place the maximum amount of blobs again.

So for instance I see the number 3, and the color yellow, and I have the first lane selected. I press enter and..., 3 yellow blobs are placed on the first lane and then I see 2 and a counters starts counting down from 30 seconds. That means that after 30 seconds have passed the counter reset and I will be able to place 3 yellow blobs at a time on that lane.

We are now approaching the center of what this game is really about, managing diminishing returns. Something that has a diminishing return means I get a decreased effect from doing the same thing repeatedly. In order to keep the workers from getting to the left side of the screen I need to think about what lanes and color combinations are available to me at a given time.

For instance I might be out of yellow blobs on lane 1 but I have plenty red blobs left on that lane, and I might be out of red blobs on lane 2 but I have plenty of yellow blobs left on that lane. A few seconds later that situation may reverse and I have to keep track of that.

#### one more small thing:

Lets say that all conveyor belts have 12 cells on which we can place blobs. If I put a Yellow blob on cell 1 of lane 2 all other lanes's cell 1 are cleared of yellow blobs. If I put a yellow blob on lane 1 and imeadiately afterwards try to put a yellow blob on lane 2 the yellow blob on lane 2 will erase the yellow blob on lane 1.
