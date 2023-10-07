import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import moment from 'moment-timezone';
import PhoneNumber from 'awesome-phonenumber';

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH');
let wibm = moment.tz('Asia/Jakarta').format('mm');
let wibs = moment.tz('Asia/Jakarta').format('ss');
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`;

let d = new Date(new Date + 3600000);
let locale = 'id';
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
let week = d.toLocaleDateString(locale, { weekday: 'long' });
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

global.owner = [
 
  ['6281346214917', '𝙄𝙩𝙨𝙈𝙣𝙯𝙯', true]
];
global.mods = [];
global.prems = ['6281346214917'];
global.nomorbot = '628570442454';
global.nomorown = '6281346214917';
global.nomorown1 = '6281346214917';
global.nomorown2 = '6281346214917';
global.nomorwa = '6281346214917';

global.readMore = readMore;
global.author = '𝙄𝙩𝙨𝙈𝙣𝙯𝙯';
global.namebot = '𝙪𝙡𝙩𝙧𝙤𝙞𝙙-𝙢𝙙';
global.wm = '© 𝙪𝙡𝙩𝙧𝙤𝙞𝙙-𝙢𝙙 By 𝙈𝙣𝙯𝙯';
global.watermark = wm;
global.wm2 = '𝙈𝙣𝙯𝙯';
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`;
global.bottime = `Time: ${wktuwib}`;
global.titlebot = '𝙪𝙡𝙩𝙧𝙤𝙞𝙙-𝙢𝙙';
global.stickpack = '𝙪𝙡𝙩𝙧𝙤𝙞𝙙-𝙢𝙙 by 𝙈𝙣𝙯𝙯';
global.stickauth = '© 𝙪𝙡𝙩𝙧𝙤𝙞𝙙-𝙢𝙙';
global.week = `${week} ${date}`;
global.wibb = `${wktuwib}`;
global.nameown1 = '𝙈𝙣𝙯𝙯';
global.nameown2 = 'Aliga';
global.Linkgc = 'Bentar';
global.lynk = '-';
//Link Social Media Ganti Aja Kalau Ga Punya Biarin Aja
global.sig = 'https://www.instagram.com/-'; //instagram
global.sgh = 'https://github.com/SlavMnzz'; //github
global.sgc = 'https://chat.whatsapp.com/EFglAMLeHhN1pQ7ASp5LsB'; //group whatsapp
global.sdc = '-'; //discord
global.snh = 'https://youtube.com/'; //youtube
//Donasi/Payment
global.pdana = '-'; // dana
global.povo = '-';
global.pgopay = '-'; // gopay
global.plinkaja = '-'; //link aja
global.ppulsa = '-'; // pulsa
global.ppulsa2 = '-'; //pulsa 2
global.ListHargaSewa = '├ 5 Hari IDR 3.000\n├ 7 Hari IDR 5.000\n├ 15+5 Hari IDR 10.000\n├ 30 Hari IDR 15.000';

// wait proses
global.stiker_wait = '_Sedang Di Proses, Mohon Tunggu_.....';
global.wait = '_Sedang Di Proses, Mohon Tunggu_....';
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!';
global.multiplier = 69; // The higher, The harder levelup
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TAMPILAN ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.LyAtas1 = '•⟅━━━ ❨'
global.LyAtas2 = '❩'
global.Ly = '┃'
global.lybwh = '┗━━┈┈ ⳻⳻'
global.sym = '◈▻'
global.sym2 = '➭'
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '❏ *DASHBOARD* ❏'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✦'
global.htki = '『' // Hiasan Titile (KIRI)
global.htka = '』' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '✦'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']



global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
  let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
};

global.uptime = 'u2325729-e9abf6a33aa8198e3849730c'; // Masukin APIKEY uptimerobot kamu disini ===== https://uptimerobot.com/dashboard?ref=website-header#mySettings
global.openai = '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';  //api key bisa didapatkan dari https://openai.com/api/
global.org = 'org-QsgBN72min2eMn6yTmK9qsQD';  //openAI Organization name
global.deepai = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'; // https://deepai.org
global.zenzkey = 'zenzkey_59162e374319';
global.lolkey = 'SGWN';
global.rose = '7bbbf7df4aaae5c9f807b347';
global.xzn = 'YOUR_APIKEY_HERE'; //ganti dengan apikey yang kamu dapat dari https://xzn.wtf
global.APIs = {
  lol: 'https://api.lolhuman.xyz',
  rose: 'https://api.itsrose.site',
  xzn: 'https://xzn.wtf',
  zeltoria: 'https://api.zeltoria.my.id'
};

global.APIKeys = { 
  'https://api.lolhuman.xyz': 'SGWN',
  'https://api.itsrose.site': 'Rs-Danil_Elistz'
};

global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
global.dpdf = 'application/pdf';
global.drtf = 'text/rtf';
global.optsnsfw = true;
global.premnsfw = true;
// foto/image bot
//ganti aja kalau ga tau cara gantinya buka telegra.ph upload
//foto nya di situ terus salin link nya kesini

global.fsizedoc = '999';
global.fpagedoc = '999';

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
