import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; 𝙄𝙩𝙨𝙈𝙣𝙯𝙯\nNICKNAME: 𝙄𝙩𝙨𝙈𝙣𝙯𝙯\nORG: 𝙄𝙩𝙨𝙈𝙣𝙯𝙯\nTITLE:\nitem1.TEL;waid=6281346214917:+62 813 4621 4917\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://github.com/SlavMnzz?tab=repositories\nitem2.EMAIL;type=INTERNET: manzzcloudid@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Itu dia nomer ownerku, Krey`)
}
if (command == 'creator') {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; 𝙄𝙩𝙨𝙈𝙣𝙯𝙯\nNICKNAME: 𝙄𝙩𝙨𝙈𝙣𝙯𝙯\nORG: 𝙄𝙩𝙨𝙈𝙣𝙯𝙯\nTITLE:\nitem1.TEL;waid=6281346214917:+62 813 4621 4917\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://github.com/SlavMnzz?tab=repositories\nitem2.EMAIL;type=INTERNET: manzzclousid@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Tuh nomor si creator`)
}
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|owner|owner2)$/i

export default handler