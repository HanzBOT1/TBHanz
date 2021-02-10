const fs = require('fs-extra')

const help = (prefix, cts, pendaftar) => {
    return `
    「  𝗔𝗕𝗢𝗨𝗧 𝗕𝗢𝗧 」
┏━───────────────╮
├≽𝘕𝘢𝘮𝘢 𝘉𝘖𝘛 : 𝘏𝘈𝘕𝘡 𝘉𝘖𝘛
├≽𝘝𝘦𝘳𝘴𝘪𝘰𝘯 : 𝘓𝘪𝘮𝘪𝘵𝘦𝘥 𝘌𝘥𝘪𝘵𝘪𝘰𝘯
├≽𝘛𝘰𝘵𝘢𝘭 𝘙𝘦𝘨𝘪𝘴𝘵𝘦𝘳 : ${pendaftar.length}
├≽𝘉𝘰𝘵 𝘙𝘶𝘯𝘵𝘪𝘮𝘦 : ${cts}
├≽𝘗𝘳𝘦𝘧𝘪𝘹 : ${prefix}
┗━───────────────╯

      𝙁𝙤𝙡𝙡𝙤𝙬 𝙢𝙚 𝙤𝙣 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 :
      https://www.instagram.com/papypapipum_
        
_Also Owner Number: wa.me/6281226770537?text=Hai%20owner%20bot%20Hanz_
  
   𝗡𝗢𝗧𝗘 :
┏━───────────────╮
├≽⚠ 𝖲𝗉𝖺𝗆 = 𝖠𝗎𝗍𝗈 Banned + 𝖡𝗅𝗈𝖼𝗄!!
├≽⚠ 𝖡𝖾𝗋𝗂 𝗃𝖾𝖽𝖺 𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌 5𝖣𝖾𝗍𝗂𝗄
├≽⚠ 𝖡𝖴𝖦/𝖤𝖱𝖱𝖮𝖱 𝗁𝖺𝗋𝖺𝗉 𝖼𝗁𝖺𝗍 𝗈𝗐𝗇𝖾𝗋!!
├≽⚠ 𝖪𝖾𝗍𝗂𝗄 #ping 𝖴𝗇𝗍𝗎𝗄 𝗆𝖾𝗆𝖺𝗌𝗍𝗂𝗄𝖺𝗇 𝖻𝗈𝗍 𝗈𝗇𝗅𝗂𝗇𝖾
├≽⚠ 𝖦𝗎𝗇𝖺𝗄𝖺𝗇 𝖻𝗈𝗍 𝖽𝖾𝗇𝗀𝖺𝗇 𝖻𝗂𝗃𝖺𝗄!!
┗━───────────────╯

「  𝗢𝗧𝗛𝗘𝗥𝗦 𝗕𝗢𝗧 」
┏━───────────────╮
├≽   cekprefix
├≽   ${prefix}setprefix
├≽   ${prefix}daftar |nama|umur
├≽   ${prefix}unreg
├≽   ${prefix}bugreport [teks]
├≽   ${prefix}listblock
├≽   ${prefix}listbanned
├≽   ${prefix}listgroup
├≽   ${prefix}iklan
├≽   ${prefix}runtime
├≽   ${prefix}info
├≽   ${prefix}limit
├≽   ${prefix}snk
├≽   ${prefix}citacita
├≽   ${prefix}ssweb
├≽   ${prefix}bucin
├≽   ${prefix}simi2
├≽   ${prefix}santet
├≽   ${prefix}convertduit usd|200
├≽   ${prefix}matauang
├≽   ${prefix}tod
├≽   ${prefix}reffsound
├≽   ${prefix}cekprem
├≽   ${prefix}listprem
├≽   ${prefix}readme
├≽   ${prefix}donate
├≽   ${prefix}ping
├≽   ${prefix}hanzgroup
├≽   ${prefix}owner
┗━───────────────╯

「 𝗢𝗪𝗡𝗘𝗥 𝗕𝗢𝗧 」 
┏━───────────────╮
├≽   ${prefix}block 62858xxxxx
├≽   ${prefix}unblock 62858xxxxx
├≽   ${prefix}addadmin @tagmember
├≽   ${prefix}deladmin @tagmember
├≽   ${prefix}addpremium @tagmember
├≽   ${prefix}dellpremium @tagmember
├≽   ${prefix}promoteme
├≽   ${prefix}demoteme
├≽   ${prefix}restart
├≽   ${prefix}shutdown
├≽   ${prefix}ekickall
├≽   ${prefix}banchat
├≽   ${prefix}unbanchat
├≽   ${prefix}setname [teks]
├≽   ${prefix}setstatus [teks]
├≽   ${prefix}setprofilepic
├≽   ${prefix}eval [kode Java]
┗━───────────────╯

「  𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 」
┏━───────────────╮
├≽   ${prefix}mute
├≽   ${prefix}unmute
├≽   ${prefix}ban @tagmember
├≽   ${prefix}gift @tagmember jumlah
├≽   ${prefix}unban @tagmember
├≽   ${prefix}daftarulang @tagmember umur
├≽   ${prefix}spamcall [81273xxxx]
├≽   ${prefix}addbadword [text]
├≽   ${prefix}delbadword [text]
├≽   ${prefix}listbadword [text]
├≽   ${prefix}resetsticker @tagmember
├≽   ${prefix}resetbadword @tagmember
├≽   ${prefix}kickall
├≽   ${prefix}oleave
├≽   ${prefix}opromote
├≽   ${prefix}odemote
├≽   ${prefix}odelete
├≽   ${prefix}oadd 62813xxxxx
├≽   ${prefix}okickall
├≽   ${prefix}otagall
┗━───────────────╯

「 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗖𝗢𝗠𝗠𝗔𝗡𝗗」
┏━───────────────╮
├≽   ${prefix}crygif
├≽   ${prefix}classic
├≽   ${prefix}tickle
├≽   ${prefix}kuni
├≽   ${prefix}kissgif
├≽   ${prefix}ttgif
├≽   ${prefix}feetgif
├≽   ${prefix}anal
├≽   ${prefix}sologif
├≽   ${prefix}lesbian
├≽   ${prefix}trapnime
├≽   ${prefix}nekonsfw
┗━───────────────╯

「 𝗡𝗦𝗙𝗪 」
┏━───────────────╮
├≽   ${prefix}nhder [kode]
┗━───────────────╯

「  𝗣𝗥𝗔𝗬  」
┏━───────────────╮
├≽   ${prefix}quran [urutan surah]
├≽   ${prefix}infosurah [nama surah]
├≽   ${prefix}tafsir [nama surah] [ayat]
├≽   ${prefix}jadwalsholat [daerah]
├≽   ${prefix}listsurah
├≽   ${prefix}listdaerah
┗━───────────────╯

「 𝗞𝗘𝗥𝗔𝗡𝗚 」
┏━───────────────╮
├≽   ${prefix}apakah [optional]
├≽   ${prefix}rate [optional]
├≽   ${prefix}bisakah [optional]
├≽   ${prefix}kapankah [optional]
┗━───────────────╯

「  𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 」
┏━───────────────╮
├≽   ${prefix}caklontong
├≽   ${prefix}family100
├≽   ${prefix}tebakgambar
├≽   ${prefix}slot
├≽   ${prefix}teksgaming [Text]
├≽   ${prefix}logoff [Text]
├≽   ${prefix}teksml [Text]
├≽   ${prefix}goldpb [Text]
├≽   ${prefix}silverpb [Text]
├≽   ${prefix}glowtext [Text]
├≽   ${prefix}glitch [|teks1|teks2]
├≽   ${prefix}lovemessage [teks]
├≽   ${prefix}romance [Text]
├≽   ${prefix}party [Text]
├≽   ${prefix}silk [Text]
├≽   ${prefix}quoteit [Text]
├≽   ${prefix}thunder [Text]
├≽   ${prefix}blackpink [Text]
├≽   ${prefix}pornhub [|teks1|teks2]
├≽   ${prefix}magernulis1 [Text]
├≽   ${prefix}magernulis2 [Text]
├≽   ${prefix}ramalpasangan [kamu|pasangan]
├≽   ${prefix}zodiak [zodiak kamu]
├≽   ${prefix}artinama [kamu]
├≽   ${prefix}artimimpi [mimpi]
├≽   ${prefix}heroml [nama hero]
├≽   ${prefix}sandwriting [teks]
├≽   ${prefix}quotemaker [|teks|author|theme]
┗━───────────────╯

「  𝗠𝗘𝗗𝗜𝗔 」
┏━───────────────╮
├≽   ${prefix}newstickerline
├≽   ${prefix}news
├≽   ${prefix}jadwalbola [query]
├≽   ${prefix}distance [query]
├≽   ${prefix}covid [negara]
├≽   ${prefix}jadwalTv [channel]
├≽   ${prefix}cuaca [tempat]
├≽   ${prefix}resepmasakan [optional]
├≽   ${prefix}tts [kode bhs] [teks]
├≽   ${prefix}igstalk [@username]
├≽   ${prefix}tiktokstalk [@username]
├≽   ${prefix}smulestalk [@username]
├≽   ${prefix}kbbi [query]
├≽   ${prefix}wiki [query]
├≽   ${prefix}shopee [query]
├≽   ${prefix}google [query]
├≽   ${prefix}pinterest [query]
├≽   ${prefix}playstore [query]
├≽   ${prefix}googleimage [query]
├≽   ${prefix}brainlysearch [query]
├≽   ${prefix}ytsearch [query]
├≽   ${prefix}translate [bahasa] [teks]
├≽   ${prefix}brainly [pertanyaan] [.jumlah]
├≽   ${prefix}lirik [optional]
├≽   ${prefix}chord [optional]
├≽   ${prefix}qrcode [optional]
├≽   ${prefix}maps [optional]
├≽   ${prefix}textmaker [teks1|teks2]
├≽   ${prefix}checkip [ipaddress]
├≽   ${prefix}ssweb [linkWeb]
├≽   ${prefix}shorturl [linkWeb]
┗━───────────────╯

「  𝗔𝗡𝗜𝗠𝗘 」
┏━───────────────╮
├≽   ${prefix}loli
├≽   ${prefix}shota
├≽   ${prefix}waifu
├≽   ${prefix}husbu
├≽   ${prefix}randomNekoNime
├≽   ${prefix}randomTrapNime
├≽   ${prefix}randomAnime
├≽   ${prefix}quotesnime
├≽   ${prefix}wait
├≽   ${prefix}koin
├≽   ${prefix}maluser [username]
├≽   ${prefix}malanime [query]
├≽   ${prefix}malcharacter [query]
├≽   ${prefix}kusonime [query]
├≽   ${prefix}neonime [query]
├≽   ${prefix}dewabatch [query]
├≽   ${prefix}komiku [query]
├≽   ${prefix}animesearch [query]
┗━───────────────╯

「  𝗠𝗘𝗡𝗨 」
┏━───────────────╮
├≽   ${prefix}bahasa
├≽   ${prefix}sticker
├≽   ${prefix}stickergif
├≽   ${prefix}sfire
├≽   ${prefix}slightning
├≽   ${prefix}ttp [teks]
├≽   ${prefix}ttp2 [teks]
├≽   ${prefix}stickertoimg
├≽   ${prefix}neko
├≽   ${prefix}stickbokep
├≽   ${prefix}rgif
├≽   ${prefix}gpsticker
├≽   ${prefix}rstick
├≽   ${prefix}gifpatrick
├≽   ${prefix}shentai
├≽   ${prefix}pictcecan
├≽   ${prefix}pictcogan
├≽   ${prefix}aesthetic
├≽   ${prefix}nye
├≽   ${prefix}creepyfact
├≽   ${prefix}pat @tag
├≽   ${prefix}hug @tag
├≽   ${prefix}pokemon
├≽   ${prefix}inu
├≽   ${prefix}infonomor 081xxx
├≽   ${prefix}infoGempa
├≽   ${prefix}quotes
├≽   ${prefix}quotesgambar
├≽   ${prefix}ptl
├≽   ${prefix}tiktokpic
├≽   ${prefix}memeindo
├≽   ${prefix}darkjokes
├≽   ${prefix}dadu
├≽   ${prefix}koin
├≽   ${prefix}quoterandom
├≽   ${prefix}wa.me
┗━───────────────╯

「  𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 」 
┏━───────────────╮
├≽   ${prefix}gdrive [linkGDrive]
├≽   ${prefix}ytmp3 [linkYt]
├≽   ${prefix}asupan
├≽   ${prefix}ytmp4 [linkYt]
├≽   ${prefix}ig [linkIg]
├≽   ${prefix}fb [linkFb]
├≽   ${prefix}twitter [linkTwitter]
├≽   ${prefix}smule [linkSmule]
├≽   ${prefix}tiktok [linkTiktok]
├≽   ${prefix}starmaker [linkStarmaker]
├≽   ${prefix}xnxx [linkXnxx]
├≽   ${prefix}nhder [kodeNuclear]
├≽   ${prefix}joox [lagu]
├≽   ${prefix}play [lagu]
┗━───────────────╯
「 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 」
┏━───────────────╮
├≽   ${prefix}snk
├≽   ${prefix}wame
├≽   ${prefix}groupinfo
├≽   ${prefix}add 62858xxxxx
├≽   ${prefix}kick @tagmember
├≽   ${prefix}promote @tagmember
├≽   ${prefix}demote @tagadmin
├≽   ${prefix}tagall
├≽   ${prefix}edotensei
├≽   ${prefix}adminList
├≽   ${prefix}ownerGroup
├≽   ${prefix}leave
├≽   ${prefix}level
├≽   ${prefix}leveling
├≽   ${prefix}leaderboard
├≽   ${prefix}afk
├≽   ${prefix}ava
├≽   ${prefix}jadian
├≽   ${prefix}mystat
├≽   ${prefix}resend
├≽   ${prefix}profile
├≽   ${prefix}delete [replyChatBot]
├≽   ${prefix}kickAll
├≽   ${prefix}group [open|close]
├≽   ${prefix}NSFW [enable|disable]
├≽   ${prefix}left [enable|disable]
├≽   ${prefix}welcome [enable|disable]
├≽   ${prefix}simi [enable|disable]
├≽   ${prefix}antisticker [enable|disable]
├≽   ${prefix}antilink [enable|disable]
├≽   ${prefix}antibadword [enable|disable]
┗━───────────────╯
「 𝗚𝗘𝗡𝗥𝗘 𝗠𝗘𝗡𝗨 」
┏━───────────────╮
├≽  *${prefix}drama1*
├≽  *${prefix}drama2*
├≽  *${prefix}phsyco*
├≽  *${prefix}isekai*
├≽  *${prefix}mysteri1*
├≽  *${prefix}miysteri2*
├≽  *${prefix}trailer*
├≽  *${prefix}action*
├≽  *${prefix}samurai*
├≽  *${prefix}supernatural*
├≽  *${prefix}gromance*
├≽  *${prefix}romancesad*
├≽  *${prefix}romanceshoujo*
├≽  *${prefix}comedi*
├≽  *${prefix}comedischool*
├≽  *${prefix}harem*
├≽  *${prefix}reverse*
├≽  *${prefix}sport*
├≽  *${prefix}sport2*
├≽  *${prefix}horor*
├≽  *${prefix}adventure*
├≽  *${prefix}mecha*
├≽  *${prefix}schoollife*
├≽  *${prefix}slicelife*
├≽  *${prefix}fantasy*
├≽  *${prefix}scifi*
┗━───────────────╯

┏━━━━━━━━━━━━━━━━━┓
┃➥ *Owner BOT  : Rapaa*
┃➥ *WA Version : V9.00-2.20.199.14*
┗━━━━━━━━━━━━━━━━━┛

━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ 
 
     ▌│█║▌│ █║▌│█│║▌
     ▌│█║▌│ █║▌│█│║▌
     
━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━          
                              
「 *𝗛𝗮𝗻𝘇 𝗕𝗢𝗧シ︎* 」
`
}
exports.help = help
const ownercmd = (prefix) => {
    return `
╔══✪〘 OWNER 〙✪══
║
├≽*${prefix}block 62858xxxxx*
├≽*${prefix}unblock 62858xxxxx*
├≽*${prefix}addadmin @tagmember*
├≽*${prefix}deladmin @tagmember*
├≽*${prefix}restart*
├≽*${prefix}shutdown*
├≽*${prefix}ekickall*
├≽*${prefix}banchat*
├≽*${prefix}unbanchat*
├≽*${prefix}setname [teks]*
├≽*${prefix}setstatus [teks]*
├≽*${prefix}setprofilepic*
├≽*${prefix}eval [kode JavaScript]*
║
╚═〘 HANZ BOT 〙`
}
exports.ownercmd = ownercmd
const admincmd = (prefix) => {
    return `
╔══✪〘 ADMIN 〙✪══
║
├≽*${prefix}mute*
├≽*${prefix}unmute*
├≽*${prefix}ban @tagmember*
├≽*${prefix}gift @tagmember jumlah*
├≽*${prefix}unban @tagmember*
├≽*${prefix}daftarulang @tagmember umur*
├≽*${prefix}spamcall [81273xxxx]*
├≽*${prefix}addbadword [text]*
├≽*${prefix}delbadword [text]*
├≽*${prefix}listbadword [text]*
├≽*${prefix}resetsticker @tagmember*
├≽*${prefix}resetbadword @tagmember*
├≽*${prefix}kickall*
├≽*${prefix}oleave*
├≽*${prefix}opromote*
├≽*${prefix}odemote*
├≽*${prefix}odelete*
├≽*${prefix}oadd 62813xxxxx*
├≽*${prefix}okickall*
├≽*${prefix}otagall*
║
╚═〘 HANZ BOT 〙`
}
exports.admincmd = admincmd
const nsfwcmd = (prefix) => {
    return `
╔══✪〘 NSFW 〙✪══
║
├≽*${prefix}randombokep
├≽*${prefix}randomhentai*
├≽*${prefix}randomnsfwneko*
├≽*${prefix}randomtrapnime*
├≽*${prefix}nhentai [kode]*
├≽*${prefix}nhder [kode]*
├≽*${prefix}xnxx [linkXnxx]*
║
╚═〘 HANZ BOT 〙`
}
exports.nsfwcmd = nsfwcmd
const praycmd = (prefix) => {
    return `
╔══✪〘 PRAY 〙✪══
║
├≽*${prefix}quran [urutan surah]*
├≽*${prefix}infosurah [nama surah]*
├≽*${prefix}tafsir [nama surah] [ayat]*
├≽*${prefix}jadwalsholat [daerah]*
├≽*${prefix}listsurah*
├≽*${prefix}listdaerah*
║
╚═〘 HANZ BOT 〙`
}
exports.praycmd = praycmd
const kerangcmd = (prefix) => {
    return `
╔══✪〘 KERANG 〙✪══
║
├≽*${prefix}apakah [optional]*
├≽*${prefix}rate* [optional]*
├≽*${prefix}bisakah* [optional]*
├≽*${prefix}kapankah* [optional]*
║
╚═〘 HANZ BOT 〙`
}
exports.kerangcmd = kerangcmd
const funcmd = (prefix) => {
    return `
╔══✪〘 FUN 〙✪══
║
├≽*${prefix}caklontong*
├≽*${prefix}family100*
├≽*${prefix}tebakgambar*
├≽*${prefix}slot*
├≽*${prefix}cerpen*
├≽*${prefix}puisi1*
├≽*${prefix}puisi2*
├≽*${prefix}puisi3*
├≽*${prefix}glitch [|teks1|teks2]*
├≽*${prefix}lovemessage [teks]*
├≽*${prefix}romance [teks]*
├≽*${prefix}party [teks]*
├≽*${prefix}silk [teks]*
├≽*${prefix}thunder [teks]*
├≽*${prefix}blackpink [teks]*
├≽*${prefix}pornhub [|teks1|teks2]*
├≽*${prefix}magernulis1 [teks]*
├≽*${prefix}ramalpasangan [kamu|pasangan]*
├≽*${prefix}zodiak* [zodiak kamu]
├≽*${prefix}artinama [nama]*
├≽*${prefix}artinama [nama]*
├≽*${prefix}artimimpi [mimpi]*
├≽*${prefix}heroml [nama hero]*
├≽*${prefix}nulis [teks]*
├≽*${prefix}sandwriting [teks]*
├≽*${prefix}quotemaker [|teks|author|theme]*
║
╚═〘 HANZ BOT 〙
`
}
exports.funcmd = funcmd
const mediacmd = (prefix) => {
    return `
╔══✪〘 MEDIA 〙✪══
║
├≽*${prefix}newstickerline*
├≽*${prefix}news*
├≽*${prefix}jadwalbola [query]*
├≽*${prefix}distance [query]*
├≽*${prefix}covid [negara]*
├≽*${prefix}jadwalTv [channel]*
├≽*${prefix}cuaca [tempat]*
├≽*${prefix}resepmasakan [optional]*
├≽*${prefix}tts [kode bhs] [teks]*
├≽*${prefix}igstalk [@username]*
├≽*${prefix}tiktokstalk [@username]*
├≽*${prefix}smulestalk [@username]*
├≽*${prefix}kbbi [query]*
├≽*${prefix}wiki [query]*
├≽*${prefix}shopee [query]*
├≽*${prefix}google [query]*
├≽*${prefix}pinterest [query]*
├≽*${prefix}playstore [query]*
├≽*${prefix}googleimage [query]*
├≽*${prefix}brainlysearch [query]*
├≽*${prefix}ytsearch [query]*
├≽*${prefix}translate [bahasa] [teks]*
├≽*${prefix}brainly [pertanyaan] [.jumlah]*
├≽*${prefix}lirik [optional]*
├≽*${prefix}chord [optional]*
├≽*${prefix}qrcode [optional]*
├≽*${prefix}maps [optional]*
├≽*${prefix}textmaker [teks1|teks2]*
├≽*${prefix}checkip [ipaddress]*
├≽*${prefix}ssweb [linkWeb]*
├≽*${prefix}shorturl [linkWeb]*
║
╚═〘 HANZ BOT 〙`
}
exports.mediacmd = mediacmd
const animecmd = (prefix) => {
    return `
╔══✪〘 ANIME 〙✪══
║
├≽*${prefix}loli*
├≽*${prefix}shota*
├≽*${prefix}waifu*
├≽*${prefix}husbu*
├≽*${prefix}randomNekoNime*
├≽*${prefix}randomTrapNime*
├≽*${prefix}randomAnime*
├≽*${prefix}quotesnime*
├≽*${prefix}wait*
├≽*${prefix}koin*
├≽*${prefix}maluser [username]*
├≽*${prefix}malanime [query]*
├≽*${prefix}malcharacter [query]*
├≽*${prefix}kusonime [query]*
├≽*${prefix}neonime [query]*
├≽*${prefix}dewabatch [query]*
├≽*${prefix}komiku [query]*
├≽*${prefix}animesearch [query]*
║
╚═〘 HANZ BOT 〙`
}
exports.animecmd = animecmd
const othercmd = (prefix) => {
    return `
╔══✪〘 OTHER 〙✪══
║
├≽*${prefix}bahasa*
├≽*${prefix}sticker*
├≽*${prefix}stickergif*
├≽*${prefix}sfire*
├≽*${prefix}slightning*
├≽*${prefix}ttp [teks]*
├≽*${prefix}ttp2 [teks]*
├≽*${prefix}stickertoimg*
├≽*${prefix}neko*
├≽*${prefix}pokemon*
├≽*${prefix}inu*
├≽*${prefix}infoGempa*
├≽*${prefix}quotes*
├≽*${prefix}ptl*
├≽*${prefix}dadu*
├≽*${prefix}koin*
├≽*${prefix}quoterandom*
├≽*${prefix}wa.me*
║
╚═〘 HANZ BOT 〙`
}
exports.othercmd = othercmd
const downloadcmd = (prefix) => {
    return `
╔══✪〘 DOWNLOADER 〙✪══
║
├≽*${prefix}gdrive [linkGDrive]*
├≽*${prefix}ytmp3 [linkYt]*
├≽*${prefix}ytmp4 [linkYt]*
├≽*${prefix}ig [linkIg]*
├≽*${prefix}fb [linkFb]*
├≽*${prefix}twitter [linkTwitter]*
├≽*${prefix}smule [linkSmule]*
├≽*${prefix}tiktok [linkTiktok]*
├≽*${prefix}starmaker [linkStarmaker]*
├≽*${prefix}xnxx [linkXnxx]*
├≽*${prefix}nhder [kodeNuclear]*
├≽*${prefix}joox [lagu]*
├≽*${prefix}play [lagu]*
├≽*${prefix}music [lagu]*
├≽*${prefix}getmusic [IdDownload]*
├≽*${prefix}video [video]*
├≽*${prefix}getvideo [IdDownload]*
║
╚═〘 HANZ BOT 〙`
}
exports.downloadcmd = downloadcmd
const groupcmd = (prefix) => {
    return `
╔══✪〘 GROUP 〙✪══
║
├≽*${prefix}snk*
├≽*${prefix}wame*
├≽*${prefix}groupinfo*
├≽*${prefix}add 62858xxxxx*
├≽*${prefix}kick @tagmember*
├≽*${prefix}promote @tagmember*
├≽*${prefix}demote @tagadmin*
├≽*${prefix}tagall*
├≽*${prefix}edotensei*
├≽*${prefix}adminList*
├≽*${prefix}ownerGroup*
├≽*${prefix}leave*
├≽*${prefix}delete [replyChatBot]*
├≽*${prefix}kickAll*
├≽*${prefix}group [open|close]*
├≽*${prefix}NSFW [enable|disable]*
├≽*${prefix}left [enable|disable]*
├≽*${prefix}welcome [enable|disable]*
├≽*${prefix}simi [enable|disable]*
├≽*${prefix}antisticker [enable|disable]*
├≽*${prefix}antilink [enable|disable]*
├≽*${prefix}antibadword [enable|disable]*
║
╚═〘 HANZ BOT 〙`
}
exports.groupcmd = groupcmd
const readme = (prefix) => {
    return `
            *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktokstalk @hanz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}igstalk @hanz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smulestalk @hanz2k19*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : ${prefix}getmusic Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getmusic 1*
Contoh : *Jika tidak reply pesan : ${prefix}getvideo Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkXnxx]* Diisi dengan link Xnxx yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}xnxx http://www.xnxx.com/loli/stev-gay*

*[linkNekopoi]* Diisi dengan link Nekopoi yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}googlesearch siapa itu HANZ*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *${prefix}tts id Test*
Note : Max 250 huruf

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*

*[ipaddress]* Diisi dengan Ip Address yang valid, tanpa tanda “[” dan “]”.
Contoh : *${prefix}checkip 182.0.144.145*`
}
exports.readme = readme
const info = () => {
    return `
    「  ABOUT 𝗕𝗢𝗧 」

├≽ NAME : HANZ BOT
├≽ OWNER : Ketik ${prefix}owner
┗━───────────────╯

「  QUALI𝗧Y 」
 ├≽ Bot ini dilengkapi fitur:
 ┗━───────────────╯

「  SPAM 」
  ~ Jangan Chat command Bot yang sama selama 5 detik atau command BoT tidak akan berjalan
  ~ Jangan Spam BoT atau jika spam akan langsung diblokir oleh BoT

 *├≽ Toxic detector = Auto kick!*
 ┗━───────────────╯
  ~ Jangan Toxic! Sekali Toxic langsung kick.
 *├≽ GC Link detector = Auto kick!*
  ~ Jangan Kirim Link Gc Lain! Sekali kirim langsung kick.
 *├≽ Anti Spam Sticker = Auto kick!*
  ~ Jangan Spam Sticker! Spam langsung kick.

  「 _Link Group_ 」
 ├≽ - HANZ Official :
 ┗━───────────────╯
 ~ https://chat.whatsapp.com/F865lMgswzaJzQw0TCyTlE

 「  QNA 」
├≽ Bot itu apa sih? 
   - Bot adalah Sebuah Progam yang dijalankan menggunakan java script
   - Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript.
├≽ Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
   - Source code / bot tidak menyimpan data anda di server kami.
   - Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini
├≽ Apa itu Whatsapp Chatbot atau Whatsapp Bot?
   - Whatsapp Chatbot atau Whatsapp Bot adalah program software yang digunakan secara spesifik pada pesan Whatsapp yang terenkripsi
├≽ Bot ini gratis ga? 
   - Yes,Bot ini gratis..
├≽ Ingin memasukan bot dalam group?
   - Ketik *${prefix}join*

> Ada pertanyaan lain silahkan tanyakan langsung ke Owner
 - Ketik *${prefix}owner*

 「  HANZ BOT 」
`
}

exports.info = info
const snk = () => {
    return `Syarat dan Ketentuan Bot *HANZ*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk
const sewa = () => {
    return `
🔮 *「  IKLAN 𝗕𝗢𝗧 」* 🔮
├≽ Ingin memasang iklan? 
├≽ Silahkan Hubungi owner
┗━───────────────╯

*「  GROUP 𝗕𝗢𝗧 」*
├≽ HANZ Bots
┗━───────────────╯
https://chat.whatsapp.com/F865lMgswzaJzQw0TCyTlE

*「 Daftar Sewa 」*
├≽ SEWA : 25K/GRUP (BULAN)
├≽ PEMBAYARAN BISA MELALUI :
├≽ PULSA +5K
┗━───────────────╯

*[ KEUNTUNGAN SEWA BOT ]*
├≽ 1. BISA MENJADI ADMIN HANZ
├≽ 2. BISA MENDAPATKAN COMMAND ADMIN
┗━───────────────╯

*「 Minat? 」* 
├≽ HARAP HUBUNGI NOMOR DIBAWAH :
├≽ wa.me/6281226770537
┗━───────────────╯

「  HANZ BOT 」
`
}
exports.sewa = sewa
const sumbang = () => {
    return `
🔮 *[ IKLAN ]* 🔮

├≽ Ingin memasang iklan? 
├≽ Silahkan Hubungi owner
┗━───────────────╯
*[ Group ]*
├≽  HANZ Bots
┗━───────────────╯
https://chat.whatsapp.com/F865lMgswzaJzQw0TCyTlE

*[ DAFTAR SEWA ]*
├≽ SEWA : 25K/GRUP (BULAN)
├≽ PEMBAYARAN BISA MELALUI :
├≽ PULSA +5K
┗━───────────────╯

*[ KEUNTUNGAN SEWA BOT ]*
├≽ 1. BISA MENJADI ADMIN HANZ
├≽ 2. BISA MENDAPATKAN COMMAND ADMIN
┗━───────────────╯

*[ MINAT ]* 
├≽ HARAP HUBUNGI NOMOR DIBAWAH :
├≽ wa.me/6281226770537
┗━───────────────╯

「  HANZ BOT 」
`
}

exports.sumbang = sumbang
const listChannel = () => {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel
const bahasalist = () => {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist
