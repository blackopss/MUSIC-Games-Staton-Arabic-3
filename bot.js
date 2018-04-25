const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const Music = require('discord.js-musicbot-addon');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
	client.user.setGame(`g!!help |Games Staton Arabic  `)
    client.user.setStatus("dnd")
});


const music = new Music(client, {
    prefix: "g!!", // Prefix for the commands.
    youtubeKey: 'AIzaSyApvbcgvYRGulf1I1Ffjfhr2K-S6TX0e9w',
    global: false,            // Non-server-specific queues.
    maxQueueSize: 50,        // Maximum queue size of 25.
    playCmd: 'p',        // Sets the name for the 'play' command.
    playAlts: ["play", 'paly'],
    volumeCmd: 'vol',     // Sets the name for the 'volume' command.
    thumbnailType: 'high',
    leaveCmd: 'stop',      // Sets the name for the 'leave' command.
    anyoneCanSkip: true,
    disableLoop: false,
    searchCmd: 'search',
    requesterName: true,
    inlineEmbeds: true,	 
    queueCmd: 'q',
    queueAlts: ['queue', 'queueue'],
    pauseCmd: 'pause',
    resumeCmd: 'resume',
    skipCmd: 's',
    skipAlts: ["skip", "skipp"],
    loopCmd: 'loop',
    enableQueueStat: true,
  });




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
