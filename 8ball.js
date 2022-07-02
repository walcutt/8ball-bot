require('dotenv').config();
const { Client, Intents } = require('discord.js');

let allIntents = new Intents();
allIntents.add(Intents.FLAGS.GUILD_MESSAGES);

const client = new Client({ intents: allIntents });

responses = [
	"It is certain.",
	"It is decidedly so.",
	"Without a doubt.",
	"Yes - definitely.",
	"You may rely on it.",
	"As I see it, yes.",
	"Most likely.",
	"Outlook good.",
	"Yes.",
	"Signs point to yes.",
	"Reply hazy, try again.",
	"Ask again later.",
	"Better not tell you now.",
	"Cannot predict now.",
	"Concentrate and ask again.",
	"Don't count on it.",
	"My reply is no.",
	"My sources say no.",
	"Outlook not so good.",
	"Very doubtful",
];

client.on('ready', () => {
	console.log('works...');
});

client.on('message', (message) => {

	console.log('message seen');

	if(message.author === client.user) {
	    return;
	}

	if(message.content.trim().startsWith(':8ball:') || message.content.trim().startsWith('🎱')) {
	    //send message
			handle_command(message);
	}
});


function handle_command(message) {
	var msg_str = message.content.trim();

	var checksum = 0;
	for(var i = 0; i < msg_str.length; i++) {
		checksum += msg_str.charCodeAt(i);
	}

	response = responses[checksum % responses.length];

	//send back message.
	message.channel.send(response)
}

const bot_token = process.env.TOKEN;

client.login(bot_token);
