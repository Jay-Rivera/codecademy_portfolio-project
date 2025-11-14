const jokeOutput = document.getElementById("joke__output");
const button = document.getElementById("generate");

const dadJokeData = {
  dadType: [
    "Your dad",
    "My dad",
    "Your dad’s dad",
    "My friend’s dad",
    "My grandpa",
    "My step-dad",
    "The dad next door",
    "The neighborhood dad",
    "The barbecue dad",
    "The tech-support dad",
    "The DIY dad",
    "The lawn care dad",
    "The classic suburban dad",
    "The weekend warrior dad",
    "The grill master",
    "The coffee-fueled dad",
    "The dad who fell asleep on the couch",
    "The cargo shorts dad",
    "The flip-flop dad",
    "The ‘back in my day’ dad",
    "The pun-obsessed dad",
    "The road trip dad",
    "The vacation-dad-with-a-map",
    "The Bluetooth earpiece dad",
    "The remote-control king",
    "The sports commentary dad",
    "The dad who says ‘let’s rock and roll’ before leaving",
    "The dad who laughs at his own jokes",
    "The dad who’s always five minutes late",
    "The dad who refuses to ask for directions",
  ],
  joke: [
    "I used to play piano by ear, but now I use my hands.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I’m reading a book about anti-gravity. It’s impossible to put down!",
    "What do you call fake spaghetti? An impasta.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "I used to be addicted to soap, but I’m clean now.",
    "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    "I don’t trust stairs — they’re always up to something.",
    "Why do bees have sticky hair? Because they use honeycombs.",
    "I only know 25 letters of the alphabet. I don’t know y.",
    "How do you organize a space party? You planet.",
    "I used to hate facial hair... but then it grew on me.",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "Why did the math book look sad? Because it had too many problems.",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "Why couldn’t the bicycle stand up by itself? It was two-tired.",
    "What’s brown and sticky? A stick.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "What do you call cheese that isn’t yours? Nacho cheese.",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "How does a penguin build its house? Igloos it together.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I used to be a baker, but I couldn’t make enough dough.",
    "I’m on a whiskey diet — I’ve lost three days already.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "How do you make holy water? You boil the hell out of it.",
    "I told my doctor I broke my arm in two places. He told me to stop going to those places.",
    "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels.",
    "I got a job at a bakery because I kneaded dough.",
    "I used to be a banker but I lost interest.",
    "Why can’t a leopard hide? Because he’s always spotted.",
    "How do you find Will Smith in the snow? You look for fresh prints.",
    "Why did the coffee file a police report? It got mugged.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "I’d tell you a construction joke, but I’m still working on it.",
    "I got hit in the head with a can of soda. Luckily, it was a soft drink.",
    "I used to be a personal trainer, but I lost my strength.",
    "What’s orange and sounds like a parrot? A carrot.",
    "Did you hear about the kidnapping at the playground? They woke up.",
    "I only drink on days that start with ‘T’ — Tuesday, Thursday, today, and tomorrow.",
    "What’s a skeleton’s least favorite room in the house? The living room.",
    "What’s Forrest Gump’s password? 1forest1.",
    "I told my boss I needed a raise. He said my salary already had a ceiling.",
    "I once got fired from a calendar factory — all I did was take a day off.",
    "I don’t play soccer because I enjoy the sport. I’m just doing it for kicks.",
    "Why did the chicken go to the seance? To talk to the other side.",
    "What do you call a belt made of watches? A waist of time.",
  ],
  outcome: [
    "and everyone groaned.",
    "and I immediately lost brain cells.",
    "and the room went silent.",
    "and my soul left my body.",
    "and everyone pretended to laugh.",
    "and I actually laughed... then hated myself for it.",
    "and my mom rolled her eyes for the 100th time.",
    "and somehow, he looked proud of himself.",
    "and we all just stared at him in disappointment.",
    "and the dog sighed audibly.",
    "and the barbecue caught fire for dramatic effect.",
    "and I walked away slowly.",
    "and now I understand why mom drinks decaf.",
    "and the neighbors clapped sarcastically.",
    "and my grandpa said, ‘That’s my boy!’",
    "and Siri asked if I needed therapy.",
    "and I think the WiFi disconnected out of embarrassment.",
    "and a tumbleweed rolled by.",
    "and he laughed for five full minutes.",
    "and my friend just said, ‘bro… no.’",
    "and even the baby facepalmed.",
    "and I started rethinking all my life choices.",
    "and everyone in a 5-mile radius groaned in sync.",
    "and then he said, ‘Get it?’ like we didn’t hear him the first time.",
    "and mom said, ‘That’s it, we’re done here.’",
    "and my phone autocorrected it to ‘cringe.’",
    "and even the Alexa said, ‘That was bad.’",
    "and he nodded, like he just dropped the funniest line ever.",
    "and somehow, he looked even more confident afterward.",
    "and that’s when I knew… I’d become him.",
  ],
};

// This function will return a random dad type for the joke
const geRandomDadType = () => {
  const randomIndex = Math.floor(Math.random() * dadJokeData.dadType.length);

  return dadJokeData.dadType[randomIndex];
};

// This function will return a random joke
const geRandomDadJoke = () => {
  const randomIndex = Math.floor(Math.random() * dadJokeData.joke.length);

  return dadJokeData.joke[randomIndex];
};

// This function will return a random outcome for the joke
const geRandomOutcome = () => {
  const randomIndex = Math.floor(Math.random() * dadJokeData.outcome.length);

  return dadJokeData.outcome[randomIndex];
};

const legendaryDadJoke = () => {
  const dad = geRandomDadType();
  const joke = geRandomDadJoke();
  const outcome = geRandomOutcome();

  return `${dad} said, "${joke}" ... ${outcome}`;
};

const outputJoke = () => {
  const finalJoke = legendaryDadJoke();
  jokeOutput.innerHTML = finalJoke;
};

button.onclick = outputJoke;
