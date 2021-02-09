/*
THX BUAT YANG UDAH GUNAIN SCRIPT INI!
JANGAN LUPA JOIN GRUP WHATSAPP!
AGAR BISA MENGEMBANGKAN BOT BUKAN COPY DOANG
JANGAN LUPA CREDIT KALO COPAS!

SCRIPT INI BUKAN UNTUK DIJUAL BELIKAN!
SCRIPT INI TERBUKA UNTUK SIAPA SAJA!
JIKA KALIAN INGIN MENAMBAHKAN MENU
SILAHKAN KONTRIBUSI/PULL REQUEST

BAGI YANG NANYA2 MASANG APIKEY DIMANA??
BACA README NYA, PERCUMA W BUAT README

INGAT JANGAN JUAL SCRIPT hanz KEPADA ORANG LAIN!
INGIN PREMIUM? CHAT hanz!

HANZ BOT V3
*/
require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const moment = require('moment-timezone')
const getYouTubeID = require('get-youtube-id')
const os = require('os')
const get = require('got')
const speed = require('performance-now')
const fetch = require('node-fetch')
const { spawn, exec } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const google = require('google-it')
const translatte = require('translatte')
const { stdout } = require('process')
const translate = require('translatte')
const Math_js = require('mathjs');
const imageToBase64 = require('image-to-base64')
const bent = require('bent')
const request = require('request')

const { getStickerMaker } = require('./lib/ttp')
const quotedd = require('./lib/quote')
const color = require('./lib/color')
const urlShortener = require('./lib/shortener')
const { animesaran } = require('./lib/animesaran')
const { addFilter, isFiltered } = require('./lib/msgFilter')
const cariKasar = require('./lib/kataKotor')
const afk = JSON.parse(fs.readFileSync('./lib/data/afk.json'))
const _premium = JSON.parse(fs.readFileSync('./lib/data/premium.json'))


const {
    downloader,
    liriklagu,
    quotemaker,
    randomNimek,
    sleep,
    jadwalTv,
    processTime,
    nulis
    } = require('./lib/functions')

    const {
        genre,
        drama1,
        drama2,
        phsyco,
        isekai,
        mysteri1,
        mysteri2,
        trailer,
        action,
        samurai,
        supernatural,
        romance,
        romancesad,
        romanceshoujo,
        comedi,
        comedischool,
        harem,
        reverse,
        sport,
        sport2,
        horor,
        adventure,
        mecha,
        schoollife,
        slicelife,
        fantasy,
        scifi
        } = require('./lib/genre')
const { 
    help,
    admincmd,
    ownercmd,
    nsfwcmd,
    kerangcmd,
    mediacmd,
    animecmd,
    othercmd,
    downloadcmd,
    praycmd,
    groupcmd,
    funcmd,
    bahasalist,
    sewa,
    snk, 
    info, 
    sumbang, 
    readme, 
    listChannel,
    commandArray
    } = require('./lib/help')

const {
    instagram,
    tiktok,
    facebook,
    smule,
    starmaker,
    twitter,
    joox
    } = require('./lib/downloader')

const {
    stickerburn,
    stickerlight
    } = require('./lib/sticker')

const { 
    uploadImages, 
    custom,
    picturemis
    } = require('./lib/fetcher')

// LOAD FILE
let banned = JSON.parse(fs.readFileSync('./lib/database/banned.json'))
let nsfw_ = JSON.parse(fs.readFileSync('./lib/database/nsfwz.json'))
let simi_ = JSON.parse(fs.readFileSync('./lib/database/Simsimi.json'))
let limit = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
let welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
let left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
let muted = JSON.parse(fs.readFileSync('./lib/database/muted.json'))
let setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
let msgLimit = JSON.parse(fs.readFileSync('./lib/database/msgLimit.json'))
let adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))
let leveling = JSON.parse(fs.readFileSync('./lib/database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./lib/database/level.json'))

// PROTECT
let antilink = JSON.parse(fs.readFileSync('./lib/database/antilink.json'))
let antibadword = JSON.parse(fs.readFileSync('./lib/database/antibadword.json'))
let antisticker = JSON.parse(fs.readFileSync('./lib/database/antisticker.json'))
let msgBadword = JSON.parse(fs.readFileSync('./lib/database/msgBadword.json'))
let dbbadword = JSON.parse(fs.readFileSync('./lib/database/katakasar.json'))
let badword = JSON.parse(fs.readFileSync('./lib/database/badword.json'))
let pendaftar = JSON.parse(fs.readFileSync('./lib/database/user.json'))
let stickerspam = JSON.parse(fs.readFileSync('./lib/database/stickerspam.json'))

let { 
    limitCount,
    memberLimit, 
    groupLimit,
    banChats,
    melodickey,
    vhtearkey,
     tobzkey,
    restartState: isRestart,
    mtc: mtcState
    } = setting

let state = {
    status: () => {
        if(banChats){
            return 'Nonaktif'
        }else if(mtcState){
            return 'Nonaktif'
        }else if(!mtcState){
            return 'Aktif'
        }else{
            return 'Aktif'
        }
    }
}

prefix = '#'
var timeStart = Date.now() / 1000
moment.tz.setDefault('Asia/Jakarta').locale('id')

//FUNCTION
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./lib/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./lib/database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {id: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./lib/database/level.json', JSON.stringify(_level))
        }
        

module.exports = hanz = async (hanz, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, author, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const argx = commands.toLowerCase()
        const args =  commands.split(' ')
        const command = commands.toLowerCase().split(' ')[0] || ''

        global.prefix
        
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const botNumber = await hanz.getHostNumber()
        const blockNumber = await hanz.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupMembers = isGroupMsg ? await hanz.getGroupMembersId(groupId) : ''
        const groupAdmins = isGroupMsg ? await hanz.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const SN = GenerateSerialNumber("000000000000000000000000")
        const pengirim = sender.id
        const isPremium = _premium.includes(sender.id)
        const isBanned = banned.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const isSimi = isGroupMsg ? simi_.includes(chat.id) : false
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        const url = args.length !== 0 ? args[0] : ''

        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt')
        const isQuotedFile = quotedMsg && quotedMsg.type === 'document'

const isLevelingOn = isGroupMsg ? leveling.includes(groupId) : false
        const isBadword = badword.includes(chatId)
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const arg = body.substring(body.indexOf(' ') + 1)
        const q = args.join(' ')
        const isKasar = await cariKasar(chats)
        const GroupLinkDetector = antilink.includes(chatId)
        const AntiStickerSpam = antisticker.includes(chatId)
        const isPrivate = sender.id === chat.contact.id
        const stickermsg = message.type === 'sticker'
        const isCmd = command.startsWith(prefix)
        
        const tms = (Date.now() / 1000) - (timeStart);
        const cts = waktu(tms)

        const serial = sender.id
        const isAdmin = adminNumber.includes(sender.id)
        const ownerNumber = '6281226770537@c.us'
        const isOwner = ownerNumber.includes(sender.id)

        if (isGroupMsg && GroupLinkDetector && !isGroupAdmins && !isAdmin && !isOwner){
            if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                const check = await hanz.inviteInfo(chats);
                if (!check) {
                    return
                } else {
                    hanz.reply(from, `*「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`, id).then(() => {
                        hanz.removeParticipant(groupId, sender.id)
                    })
                }
            }
        }
     
  
        // [BETA] Avoid Spam Message
        //if (isCmd && isFiltered(from) && !isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        //if (isCmd && isFiltered(from) && isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        // AKTIFKAN APABILA TIDAK INGIN TERKENA SPAM!!
        //addFilter(from)
        if (isCmd && !isGroupMsg) {console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isCmd && isGroupMsg) {console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))}

        // FUNCTION
        function waktu(seconds) { // hanz
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);
            var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }
        // Serial Number Generator
        function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }
        
        var nmr = sender.id
        var obj = pendaftar.some((val) => {
            return val.id === nmr
        })
        var cekage = pendaftar.some((val) => {
            return val.id === nmr && val.umur >= 15
        })

        function monospace(string) {
            return '```' + string + '```'
        }


        function isReg(obj){
            if (obj === true){
                return false
            } else {     
                return hanz.reply(from, `──「 DAFTAR 」──\nHalo Kak !\nMaaf Kak Kamu belum Terdaftar Sebagai Teman Hanz Daftar Untuk Berteman Dengan Hanz bot dengan cara, \n\nCommand : ${prefix}daftar |nama|umur\nContoh : ${prefix}daftar |hanz|17\n\n──「 *HANZ BOT* 」──`, id) //if user is not registered
            }
        }

        function cekumur(obj){
            if (obj === true){
                return false
            } else {
                return hanz.reply(from, `Kamu belum cukup umur untuk menggunakan Hanz, min 16 tahun\n\nKamu bisa mendaftar ulang dengan cara donasi terlebih dahulu, bales ${prefix}donasi\nHubungi Owner : wa.me/6281226770537`, id) //if user is not registered
            }
        }

        const apakah = [
       'Ya',
       'Tidak',
      'Bisa Jadi',
      'Coba tanyakan lagi',
      'Mungkin',
      '🤐'
            ]

        const bisakah = [
      'Bisa',
      'Tidak bisa',
      'Sangat di anjurkan',
      'Coba tanyakan lagi',
      'Tidak',
      'Mungkin',
      'Jangan',
      '🤐'
            ]

        const kapankah = [
      '1 Hari lagi',
      '2 hari lagi',
      '3 hari lagi',
      '4 hari lagi',
      '5 hari lagi',
      '6 hari lagi',
      '1 minggu lagi',
      '2 minggu lagi',
      '3 minggu lagi',
      '1 bulan lagi',
      '2 bulan lagi',
      '3 hari lagi',
      '4 bulan lagi',
      '5 bulan lagi',
      '6 hari lagi',
      '7 bulan lagi',
      '8 bulan lagi',
      '9 hari lagi',
      '10 bulan lagi',
      '11 bulan lagi',
      '1 tahun lagi',
      '2 tahun lagi',
      '3 tahun lagi',
      '4 tahun lagi',
      'Tidak akan',
      'Yakin bakal terjadi ?',
      'Aku meragukan nya',
      'Lusa',
      'Akhir bulan depan',
      'Awal bulan depan',
      'Tahun depan',
      'Bulan depan',
      'Sebentar lagi',
      '🤐'
            ]
            const cegan = [
                "https://i.ibb.co/JmVx5bJ/Cogan.jpg",
                "https://i.ibb.co/JmVx5bJ/Cogan.jpghttps://i.ibb.co/3pGT2PT/Cogan-1.jpg",
                "https://i.ibb.co/mSbzWBg/Boyfriend-material-cogan.jpg",
                "https://i.ibb.co/K29d94b/download-4.jpg",
                "https://i.ibb.co/L0Fxdsb/image.jpg",
                "https://i.ibb.co/9GYpqDt/lang2-4.jpg"
            ]
            const cecan = [
                {
                lahwoi : "Bini gua yang ke 1",
                imagex : "https://i.ibb.co/VT4ggGj/Instagram.jpg",
                },
                {
                lahwoi : "Bini gua yang ke 2",
                imagex : "https://i.ibb.co/x1nD1HD/Instagram-1.jpg",
                },
                {
                lahwoi : "Bini gua yang ke 3",
                imagex : "https://i.ibb.co/ZXPPFKF/Argumentasi-Dimensi.jpg",
                },
                {
                lahwoi : "Bini gua yang ke 4",   
                imagex : "https://i.ibb.co/NpY5ZBR/image.jpg",
                },
                {
                lahwoi : "Bini gua yang ke 5",
                imagex : "https://i.ibb.co/PWsL6HF/download-1.jpg",
                },
                {
                lahwoi : "Bini gua yang ke 6",
                imagex :"https://i.ibb.co/JFkDWjB/RASANYA-ANJING-BANGET.jpg",
                },
                {
                lahwoi : "Bini gua yang ke 7",
                imagex : "https://i.ibb.co/5W2gMq6/download-2.jpg",
                },
                {
                lahwoi : "Bini gua yang ke 8",
                imagex : "https://i.ibb.co/QNWhdgC/download-3.jpg",
                },
                {
                lahwoi : "Bini gua yang terakhir",
                imagex : "https://i.ibb.co/RS1vWC3/Blur.jpg"
                }
            ]
            
            const estetek = [
                "https://i.ibb.co/Xk1kggV/Aesthetic-Wallpaper-for-Phone.jpg",
                "https://i.ibb.co/wBNyv8X/image.jpg",
                "https://i.ibb.co/hgcJbg7/Leaving-Facebook.jpg",
                "https://i.ibb.co/27TW3bT/Pinterest.jpg",
                "https://i.ibb.co/2MR16Ct/Image-about-vintage-in-ALittle-Bit-Of-This-And-That-by-Little-Nerdy-Gnome.jpg",
                "https://i.ibb.co/WfrzTWH/minteyroul-on-We-Heart-It.jpg",
                "https://i.ibb.co/dMpkfWT/1001-Kreative-Aesthetic-Wallpaper-Ideen-f-r-das-Handy.jpg",
                "https://i.ibb.co/cN3Br2J/red-grunge-wallpaper-dark-edgy-aesthetic-collage-background-trendy-cool-dark-red-iphone-wallpaper.jpg",
                "https://i.ibb.co/c8QMXZv/ee16de425985d4a1b628dddc1461b546.jpg"
            ]
    
            const addafk = (nom, time, alasan) => {
                let obj = {id: `${nom}`, time: `${time}`, alasan: `${alasan}`}
                afk.push(obj)
                fs.writeFileSync('./lib/data/afk.json', JSON.stringify(afk))
              
            }
            
            const getafk = (nom) => {
                let isafk = false
                Object.keys(afk).forEach((i) => {
                    if (afk[i].id === nom) {
                        isafk = true
                    }
                })
                return isafk
            }
            if (isGroupMsg) {
                const checking = getafk(sender.id)
                const jirafk = JSON.parse(fs.readFileSync('./lib/data/afk.json'))
            
                for (let ment of mentionedJidList) {
            
                    for(let af of jirafk){
                        if(af.id === ment){
                            let alasan = af.alasan
                            let time = af.time
            
                    if (getafk(ment)) {
                        await hanz.sendTextWithMentions(from, `◩ @${af.id.replace(/[@c.us]/g, '')} *Sedang AFK* \n╠➥    *Alasan :*  ${alasan}\n└─ ☢︎︎   *Dari :*  ${time}`, id)
                    }
                }}
            }
                if (checking) {
                    afk.splice(sender.id, 1)
                    fs.writeFileSync('./lib/data/afk.json', JSON.stringify(afk))
                    await hanz.sendTextWithMentions(from, `@${sender.id.replace(/[@c.us]/g, '')} Sudah tidak afk`, id)
                }
            }
            const isafkOn = getafk(sender.id)        
	const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',//by Fadhlur Owner of NotBot
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
                '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]

        const mess = {
            wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
            magernulissatu: 'Harap Tunggu, BOT Sedang Menulis Di Buku 1!',
            levelon: '[ON] *Leveling Telah aktif Ayo Kak Naikan Lvl Mu dengan Cara Aktif di grup ini*',
	    leveloff: '[OFF]  *Yah Leveling Telah Di NonAktifkan T_T*',
	    levelnoton: '[😢] *leveling Belum aktif Kak Chat Owner Untuk Mengaktifkanya Ketik !owner*',
	    levelnol: '*LEVEL KAKAK KOK MASIH * 0 >_<',
            error: {
                St: '[❗] Kirim gambar dengan caption *#sticker* atau tag gambar yang sudah dikirim',
                Ti: '[❗] Replay sticker dengan caption *#stickertoimg* atau tag sticker yang sudah dikirim',
                Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
                Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
                Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
                Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[❗] Bot tidak bisa mengeluarkan Admin group!',
                Sp: '[❗] Bot tidak bisa mengeluarkan Admin',
                Ow: '[❗] Bot tidak bisa mengeluarkan Owner',
                Bk: '[❗] Bot tidak bisa memblockir Owner',
                Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[❗] Link yang anda kirim tidak valid!'
            }
        }

        const tutor = 'https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg'
        const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
        const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
       
        const isMuted = (chatId) => {
          if(muted.includes(chatId)){
            return false
        }else{
            return true
            }
        }

        function banChat () {
            if(banChats == true) {
            return false
        }else{
            return true
            }
        }
        
        const levelRole = getLevelingLevel(sender.id)
        var role = 'Warrior'
        if (levelRole <= 1) {
            role = 'Elite'
        } else if (levelRole <= 3) {
            role = 'Master'
        } else if (levelRole <= 5) {
            role = 'Grand Master'
        } else if (levelRole <= 7) {
            role = 'Epic'
        } else if (levelRole <= 9) {
            role = 'Legend'
        } else if (levelRole <= 11) {
            role = 'Mitych'
        } else if (levelRole <= 13) {
            role = 'Mitychal Glory'
        } else if (levelRole <= 15) {
            role = 'Titanz  👑'
        }

       //function leveling
            if (isGroupMsg && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender.id)
            const checkId = getLevelingId(sender.id)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender.id)
                const amountXp = Math.floor(Math.random() * 10) + 150
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender.id)
                addLevelingXp(sender.id, amountXp)
                if (requiredXp <= getLevelingXp(sender.id)) {
                    addLevelingLevel(sender.id, 1)
                    bayarLimit(sender.id, 3)
                    await hanz.reply(`*「 LEVEL UP 」*\n\n➸ *Name*: ${sender.id}\n➸ *XP*: ${getLevelingXp(sender.id)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender.id)}\n\nCongrats!! 🎉🎉`, id)
                }
            } catch (err) {
                console.error(err)
            }
        }

        // FUNCTION
	// https://github.com/Gimenz/Mg-v2-WhatsApp-BOT/blob/803c5a0dc89e2a9e7bb118d1a8872fecd97d397e/msg/index.js#L76
        function isStickerMsg(id){
            if (isOwner, isAdmin) {return false;}
            let found = false;
            for (let i of stickerspam){
                if(i.id === id){
                    if (i.msg >= 12) {
                        found === true 
                        hanz.reply(from, '*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 」*\nKamu telah SPAM STICKER di grup, kamu akan di kick otomatis oleh hanz', message.id).then(() => {
                            hanz.removeParticipant(groupId, id)
                        }).then(() => {
                            const cus = id
                            var found = false
                            Object.keys(stickerspam).forEach((i) => {
                                if(stickerspam[i].id == cus){
                                    found = i
                                }
                            })
                            if (found !== false) {
                                stickerspam[found].msg = 1;
                                const resultx = 'Database telah direset!'
                                console.log(stickerspam[found])
                                fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
                                client.sendText(from, resultx)
                            } else {
                                    hanz.reply(from, `Nomor itu tidak terdaftar didalam database!`, id)
                            }
                        })
                        return true;
                    }else{
                        found === true
                        return false;
                    }   
                }
            }
            if (found === false){
                let obj = {id: `${id}`, msg:1};
                stickerspam.push(obj);
                fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
                return false;
            }  
        }
        function addStickerCount(id){
            if (isOwner, isAdmin) {return;}
            var found = false
            Object.keys(stickerspam).forEach((i) => {
                if(stickerspam[i].id == id){
                    found = i
                }
            })
            if (found !== false) {
                stickerspam[found].msg += 1;
                fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
            }
        }

        function isBadwordMsg(id){
            if (isOwner, isAdmin) {return false;}
            let kasar = false;
            for (let i of msgBadword){
                if(i.id === id){
                    let msg = i.msg
                    if (msg >= 12) { // 12x
                        kasar === true 
                        hanz.reply(from, '*「 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗𝗪𝗢𝗥𝗗 」*\nKamu telah berkata kasar di grup ini, kamu akan di kick otomatis oleh hanz!', message.id).then(() => {
                            hanz.removeParticipant(groupId, id)
                        }).then(() => {
                            const cus = id
                            var found = false
                            Object.keys(msgBadword).forEach((i) => {
                                if(msgBadword[i].id == cus){
                                    found = i
                                }
                            })
                            if (found !== false) {
                                msgBadword[found].msg = 1;
                                const resultv = 'Database telah direset'
                                console.log(msgBadword[found])
                                fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                                hanz.sendText(from, resultv)
                            } else {
                                    hanz.reply(from, `Nomor itu tidak terdaftar didalam database!`, id)
                            }
                        })
                        return true;
                    }else{
                        kasar === true
                        return false;
                    }   
                }
            }
            if (kasar === false){
                let obj = {id: `${id}`, msg:1};
                msgBadword.push(obj);
                fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                return false;
            }  
        }
        function addBadCount(id){
            if (isOwner, isAdmin) {return;}
            var kasar = false
            Object.keys(msgBadword).forEach((i) => {
                if(msgBadword[i].id == id){
                    kasar = i
                }
            })
            if (kasar !== false) {
                msgBadword[kasar].msg += 1;
                fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
            }
        }
	// https://github.com/ItzNgga/wa-bot.js/blob/d58ddcf4e27b93535dd806e4a07a6ef2fb52463d/index.js#L204
        function isMsgLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of msgLimit){
                        if(i.id === id){
                            if (i.msg >= 8) {
                                found === true 
                                hanz.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 」*\nMaaf, akun anda kami blok karena SPAM, dan tidak bisa di UNBLOK!`, id)
                                hanz.contactBlock(id)
                                banned.push(id)
                                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                                return true;
                            }else if(i.msg >= 8){
                                found === true
                                hanz.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 」*\nNomor anda terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!`, id)
                                return true
                            }else{
                                found === true
                                return false;
                            }   
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, msg:1};
                        msgLimit.push(obj);
                        fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
                        return false;
                    }  
                }
        function addMsgLimit(id){
                    if (isAdmin) {return;}
                    var found = false
                    Object.keys(msgLimit).forEach((i) => {
                        if(msgLimit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        msgLimit[found].msg += 1;
                        fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
                    }
                }
        function isLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                hanz.reply(from, `Perintah BOT anda sudah mencapai batas, coba esok hari :)`, id)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
        function limitAdd (id) {
                    if (isAdmin) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                    }
                }
        
                // END HELPER FUNCTION
        // FUNCTION DAFTAR! NEXT UPDATE
        function monospace(string) {
            return '```' + string + '```'
        }

        // Serial Number Generator
        function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }
	    
	if (isGroupMsg && AntiStickerSpam && !isGroupAdmins && !isAdmin && !isOwner){
            if(stickermsg === true){
                if(isStickerMsg(serial)) return
                addStickerCount(serial)
            }
        }

        if(!isCmd && isKasar && isGroupMsg && isBadword && !isGroupAdmins) { 
            console.log(color('[BADWORD]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${argx}`), 'from', color(pushname), 'in', color(name || formattedTitle)) 
            if(isBadwordMsg(serial)) return
                addBadCount(serial)
        }
        
                if(body === '#mute' && isMuted(chatId) == true){
                    if(isGroupMsg) {
                        if (!isAdmin) return hanz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh admin hanz!', id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        hanz.reply(from, 'Bot telah di mute pada chat ini! #unmute untuk unmute!', id)
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        reply(from, 'Bot telah di mute pada chat ini! #unmute untuk unmute!', id)
                    }
                }
                if(body === '#unmute' && isMuted(chatId) == false){
                    if(isGroupMsg) {
                        if (!isAdmin) return hanz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh admin hanz!', id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        hanz.reply(from, 'Bot telah di unmute!', id)         
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        hanz.reply(from, 'Bot telah di unmute!', id)                   
                    }
                }
                if (body === '#unbanchat') {
                    if (!isOwner) return hanz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh Owner hanz!', id)
                    if(setting.banChats === false) return
                    setting.banChats = false
                    banChats = false
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    hanz.reply('Global chat has been disable!')
                }
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner ) {
        switch(command) {

        case prefix+'banchat':
            if (setting.banChats === true) return
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner hanz!', id)
            setting.banChats = true
            banChats = true
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
            hanz.reply('Global chat has been enable!')
            break
            case prefix+'wasted':
                if (isMedia && type === 'image' || isQuotedImage) {
                    const encryptMediaWt = isQuotedImage ? quotedMsg : message
                    const dataPotoWt = await decryptMedia(encryptMediaWt, uaOverride)
                    const fotoWtNya = await uploadImages(dataPotoWt, `fotoProfilWt.${sender.id}`)
                    await hanz.reply(from, `Wait..`, id)
                    await hanz.sendFileFromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`, 'Wasted.jpg', 'Ini gambarnya..', id).then(() => hanz.sendStickerfromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`))
                    console.log('Success sending Wasted image!')
                } else {
                    await hanz.reply(from, `Error..`, id)
                }
            break
           
        case prefix+'unmute':
            console.log(`Unmuted ${name}!`)
            await hanz.sendSeen(from)
            break
        case prefix+'unbanchat':
            console.log(`Banchat ${name}!`)
            await hanz.sendSeen(from)
            break
            case prefix+'stiker':
                case prefix+'sticker':
                        hanz.reply(from, mess.wait, id)
                        if (isMedia && type === 'image') {
                            const mediaData = await decryptMedia(message, uaOverride)
                            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                            await hanz.sendImageAsSticker(from, imageBase64)
                        } else if (quotedMsg && quotedMsg.type == 'image') {
                            const mediaData = await decryptMedia(quotedMsg, uaOverride)
                            const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                            await hanz.sendImageAsSticker(from, imageBase64)
                        } else if (args.length === 2) {
                            const url = args[1]
                            if (url.match(isUrl)) {
                                await hanz.sendStickerfromUrl(from, url, { method: 'get' })
                                    .catch(err => console.log('Caught exception: ', err))
                            } else {
                                hanz.reply(from, mess.error.Iv, id)
                            }
                        } else {
                                hanz.reply(from, mess.error.St, id)
                        }
                        break
                        case prefix+'pictcogan':
                            if(isReg(obj)) return
                        const ganteng = cegan[Math.floor(Math.random() * cegan.length)]
                        await hanz.sendImage(from, ganteng)
                        .then(() => hanz.sendText(from, 'nehh pict cogann xixi'))
                        break
        
                    case prefix+'pictcecan':
                        if(isReg(obj)) return                        
                        const cantik = cecan[Math.floor(Math.random() * cecan.length)]
                        await hanz.sendImage(from, cantik.imagex, 'Cecan.jpg', cantik.lahwoi, id)
                        break
                        case prefix+'aesthetic':
                            if(isReg(obj)) return 
                            const anjayani = estetek[Math.floor(Math.random() * estetek.length)]
                            await hanz.sendImage(from,anjayani, id)
                            .then(() => hanz.sendText(from, 'nehh buat wallpaper lu'))
                            break
            case prefix+'afk':{
                if(isReg(obj)) return
                if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)

                    const nom = sender.id
                    const alasan = body.slice(5)
                    addafk(nom, time, alasan)
                    var ceki = nom
                    if(ceki){
                    var obj = afk.some((val) => {
                    return val.id === ceki
                    })
                    if (obj === true){
                    var found = false
                    Object.keys(afk).forEach((i) => {
                    if(afk[i].id == nom){
                    found = i
                    }
                    })
                    if (found !== false) {
                    afk[found].alasan = alasan;
                    const updated = afk[found]
                    const result = (`@${nom.replace(/[@c.us]/g, '')} Sekarang AFK!`)
                    console.log(afk[found])
                   fs.writeFileSync('./lib/data/afk.json',JSON.stringify(afk));
                   hanz.sendTextWithMentions(from, result)
            }
            } else {
            afk.push(afek)
            fs.writeFileSync('./lib/data/afk.json', JSON.stringify(afk))
                hanz.sendTextWithMentions(from, `@${nom.replace(/[@c.us]/g, '')} Sekarang AFK`)
            }
            }}
            break
        
            case prefix+'ttp':
                if (args.length === 1) return hanz.reply(from, 'Teksnya mana??', id)
                    hanz.reply(from, mess.wait, id)
                        try
                        {
                            const string = body.toLowerCase().includes('#ttp') ? body.slice(5) : body.slice(5)
                            if(args)
                            {
                                if(quotedMsgObj == null)
                                {
                                    const gasMake = await getStickerMaker(string)
                                    if(gasMake.status == true)
                                    {
                                        try{
                                            await hanz.sendImageAsSticker(from, gasMake.base64)
                                        }catch(err) {
                                            await hanz.reply(from, 'Gagal membuat.', id)
                                        } 
                                    }else{
                                        await hanz.reply(from, gasMake.reason, id)
                                    }
                                }else if(quotedMsgObj != null){
                                    const gasMake = await getStickerMaker(quotedMsgObj.body)
                                    if(gasMake.status == true)
                                    {
                                        try{
                                            await hanz.sendImageAsSticker(from, gasMake.base64)
                                        }catch(err) {
                                            await hanz.reply(from, 'Gagal membuat.', id)
                                        } 
                                    }else{
                                        await hanz.reply(from, gasMake.reason, id)
                                    }
                                }
                               
                            }else{
                                await hanz.reply(from, 'Tidak boleh kosong.', id)
                            }
                        }catch(error)
                        {
                            console.log(error)
                        }
                    break
        case prefix+'ttp2':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *#ttp2 [ Teks ]*, contoh *#ttp2 hanz*`, id)
            const ttp2t = body.slice(6)
            const lttp2 = ["Orange","White","Green","Black","Purple","Red","Yellow","Blue","Navy","Grey","Magenta","Brown","Gold"]
            const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
            await hanz.sendStickerfromUrl(from, `https://api.vhtear.com/textmaker?text=${ttp2t}&warna=${rttp2}&apikey=${vhtearkey}`)
            break
            case prefix+'glowtext':
                if (args.length == 0) return hanz.reply(from, `kirim perintah ${prefix}logoff [nama]`, id)
                hanz.reply(from, mess.wait, id)
                const srhdah = body.slice(10)
                hanz.sendFileFromUrl(from, `https://api.vhtear.com/glowtext?text=${srhdah}&apikey=${vhtearkey}`, `${srhdah}.jpg`, `nehh ngab`, id)
                break
               
        case prefix+'logoff':
            if (args.length == 0) return hanz.reply(from, `kirim perintah ${prefix}logoff [nama]`, id)
            hanz.reply(from, mess.wait, id)
            const jadiin = body.slice(8)
            const hero = ["alok", "alvaro", "andrew", "antonio", "caroline", "ford", "hayato", "joseph", "kelly", "lhanz", "maxim", "miguel", "misa", "moco", "nikita", "notora", "olivia", "paloma", "rafael", "shani", "steffie", "wukong"]
            let awikxs = hero[Math.floor(Math.random() * hero.length)]
            hanz.sendFileFromUrl(from, `https://api.vhtear.com/logoff?hero=${awikxs}&text=${jadiin}&apikey=${vhtearkey}`, `${jadiin}.jpg`, 'nehh ngab...', id)
            break
        case prefix+'ttg':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (quotedMsgObj == null) {
                    if (args.length === 1) return hanz.reply(from, `Kirim perintah *#ttg [ Teks ]*, contoh *#ttg aku bukan boneka*`, id)
                        await hanz.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${body.slice(5)}&apikey=${vhtearkey}`)
                        limitAdd(serial)
                } else {
                    await hanz.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${quotedMsgObj}&apikey=${vhtearkey}`)
                    limitAdd(serial)
                }
            } catch(e) {
                console.log(e)
                hanz.reply(from, 'Maaf, Server sedang Error')
            }
            break
        case prefix+'pastebin': //BY VINZ
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (args.length == 1) return hanz.reply(from, `Ketik command ${prefix}pastebin [text]|[nama]\nContoh ${prefix}pastebin ini contohnya|tolll`, id)
            await hanz.reply(from, mess.wait, id)
            var bdtrm = body.slice(10).trim().split('|')
            const pstbn = await axios.get(`https://zeksapi.herokuapp.com/api/pastebin?apikey=benbenz&text=${bdtrm[0]}&name=${bdtrm[1]}`) 
	    console.log(bdtrm[0])
	    if (pstbn.data.status == false) return hanz.reply(from, pstbn.data.message ,id)
            await hanz.reply(from, pstbn.data.result, id) 
            break
        case prefix+'magernulis1': // BY MFARELS
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (args.length === 1) return await hanz.reply(from, 'Kirim perintah *prefix+magernulis1 [teks]*', id)  // BY MFARELS
            const farel = body.slice(13)  // YOUTUBE : MFARELS CH
            await hanz.reply(from, mess.magernulissatu, id)  // INSTAGRAM : @mfarelsyahtiawan
            const zahra = farel.replace(/(\S+\s*){1,10}/g, '$&\n')  // INSTALL IMAGEMAGICK KALO WAU WORK
            const farelzahra = zahra.split('\n').slice(0, 33).join('\n')  // WAKTU INSTALL IMAGEMAGICK CENTANG KOLOM 1,2,3,5,6
            var months = ['- 1 -', '- 2 -', '- 3 -', '- 4 -', '- 5 -', '- 6 -', '- 7 -', '- 8 -', '- 9 -', '- 10 -', '- 11 -', '- 12 -'];
            var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
            var date = new Date();
            var day = date.getDate();
            var month = date.getMonth();
            var thisDay = date.getDay(),
                thisDay = myDays[thisDay];
            var yy = date.getYear();
            var year = (yy < 1000) ? yy + 1900 : yy;
            const zahrafarel = (day + ' ' + months[month] + ' ' + year)
            const farelllzahraaa = (thisDay)
            spawn('convert', [
                './mager/magernulis/magernulis1.jpg',
                '-font',
                './font/Zahraaa.ttf',
                '-size',
                '700x960',
                '-pointsize',
                '100',
                '-interline-spacing',
                '1',
                '-annotate',
                '+4100+460',
                farelllzahraaa,
                '-font',
                './font/Zahraaa.ttf',
                '-size',
                '700x960',
                '-pointsize',
                '100',
                '-interline-spacing',
                '1',
                '-annotate',
                '+4100+640',
                zahrafarel,
                '-font',
                './font/Zahraaa.ttf',
                '-size',
                '6000x8000',
                '-pointsize',
                '130',
                '-interline-spacing',
                '1',
                '-annotate',
                '+1010+1010',
                farelzahra,
                './mager/magernulis√/magernulis1√.jpg'
            ])
            .on('error', () => hanz.reply(from, 'Error Bjeer', id))
            .on('exit', () => {
                hanz.sendImage(from, './mager/magernulis√/magernulis1√.jpg', 'magernulis.jpg', '*Sukses Nulis DiBuku✓*\n\n*YouTube : MFarelS CH*\n*Instagram : @mfarelsyahtiawan*\n\n*© Powered By MFarelS | RajinNulis-BOT*', id)
            })
            break  // BY MFARELS

            case prefix+'magernulis2':
    if (args.length == 0) return hanz.reply(from, 'Kirim perintah *#magernulis2 [optional]*, contoh *#magernulis2 hanz*', id)
	hanz.sendFileFromUrl(from, `https://api.vhtear.com/write?text=${body.slice(12)}&apikey=${vhtearkey}`, 'nulis.jpg', 'Neh..', id)
	break
        case prefix+'stickertoimg':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                hanz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu!`, id)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await hanz.sendFile(from, imageBase64, 'imagesticker.jpg', 'Success Convert Sticker to Image!', id)
            } else if (!quotedMsg) return hanz.reply(from, `Mohon tag sticker yang ingin dijadikan gambar!`, id)
            break
        case prefix+'stickergif': // INSTALL FFMPEG, IF YOU WANT THIS COMMAND WORK!
        case prefix+'stikergif': // TUTORIAL IN README, PLEASE READ!
        case prefix+'sgif': // MRHRTZ
            hanz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'video' || mimetype === 'image/gif') {
                try {
                    const mediaData = await decryptMedia(message, uaOverride)
                    await hanz.sendMp4AsSticker(from, mediaData, {fps: 10, startTime: `00:00:00.0`, endTime : `00:00:05.0`,loop: 0})
                } catch (e) {
                    hanz.reply(from, `Size media terlalu besar! mohon kurangi durasi video.`)
                }
            } else if (quotedMsg && quotedMsg.type == 'video' || quotedMsg && quotedMsg.mimetype == 'image/gif') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                await hanz.sendMp4AsSticker(from, mediaData, {fps: 10, startTime: `00:00:00.0`, endTime : `00:00:05.0`,loop: 0})
            } else {
                hanz.reply(from, `Kesalahan ⚠️ Hanya bisa video/gif apabila file media berbentuk gambar ketik #stickergif`, id)
            } 
            break
        case prefix+'stickerlightning':
        case prefix+'slightning':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            hanz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await hanz.sendStickerfromUrl(from, Slight)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await hanz.sendStickerfromUrl(from, Slight)
            } else {
                await hanz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #stickerlightning`, id)
            }
            break
        case prefix+'stickerfire':
        case prefix+'sfire':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            hanz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await hanz.sendStickerfromUrl(from, Sfire)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await hanz.sendStickerfromUrl(from, Sfire)
            } else {
                await hanz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #stickerfire`, id)
            }
            break
        case prefix+'lovemessage':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *${prefix}lovemessage [ Teks ]*, contoh *${prefix}lovemessage hanz*`, id)
            hanz.reply(from, mess.wait, id)
            const lovemsg = body.slice(12)
            if (lovemsg.length > 10) return hanz.reply(from, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
            await hanz.sendFileFromUrl(from, `https://api.vhtear.com/lovemessagetext?text=${lovemsg}&apikey=${vhtearkey}`, 'lovemsg.jpg', '', id)
            break
            case prefix+'leveling':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return hanz.reply(from, 'Pilih 1 untuk aktifkan atau 0 untuk nonaktifkan!', id)
            if (args[1].toLowerCase() === '1') {
                leveling.push(chat.id)
                fs.writeFileSync('./lib/database/leveling.json', JSON.stringify(leveling))
                hanz.reply(from, 'Fitur levelling berhasil di aktifkan di group ini! ✔️', id)
            } else if (args[1].toLowerCase() === '0') {
                leveling.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/leveling.json', JSON.stringify(welkom))
                hanz.reply(from, 'Fitur levelling berhasil di nonaktifkan di group ini! ✔️', id)
            } else {
                hanz.reply(from, 'Pilih 1 untuk aktifkan atau 0 untuk nonaktifkan!', id)
            }
            break
            case prefix+'level':
		if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                if (!isLevelingOn) return hanz.reply(mess.levelnoton, id)
                const userLevel = getLevelingLevel(sender.id)
                const userXp = getLevelingXp(sender.id)
                if (userLevel === undefined && userXp === undefined) return hanz.reply(mess.levelnol ,id)
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
		resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Name : @${sender.id.replace('@c.us', '')}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel} \n┣⊱ Role : ${role}\n┗━━━━━━━━━━━━\n`
                hanz.sendTextWithMentions(from, resul, id)
               .catch(async (err) => {
                        console.error(err)
            await hanz.reply(`Error!\n${err}`)
            })
            break
            case prefix+'leaderboard':
        case prefix+'lb':
            if (!isAdmin) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin Hanz!`, id)
                const bk = fs.readFileSync('./lib/database/level.json')
                const level = JSON.parse (bk)
                level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let levl = '*「 LEADERBOARD LEVEL 」*\n'
                levl += `\n👑 *5 Top Level Tertinggi*\n`
                let nompe = 1
                     for (let i = 0; i < 5; i++){
                        levl += `\n\n──「 *𝗟𝗘𝗩𝗘𝗟* 👑 」──\n├≽ \n├≽ *${nompe}.* Id : @${level[i].id.replace(/[@c.us]/g, '')}\n├≽  XP : ${level[i].xp} \n├≽  Level : ${level[i].level}\n├≽ Role : ${role}\n├≽ \n┗━───────────────╯`
			nompe++
                    }
		    hanz.sendTextWithMentions(from, levl, id)
                    break
                    case prefix+'daftarlist':
        case prefix+'listdaftar':
            if (!isAdmin) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin Hanz!`, id)
                const bd = fs.readFileSync('./lib/database/user.json')
                const daftar = JSON.parse (bd)
                let daftr = '*「 DAFTAR USER 」*\n'
                daftr += `*Total : ${daftar.length}*\n`
                let nome = 1
                     for (let i = 0; i < daftar.length; i++){
                        daftr += `\n━ ━ ━ ━ ━ ━ ━ \n\n*${nome}.* \n➢ Id : ${daftar[i].id} \n➢ Nama : ${daftar[i].nama} \n➢ Umur : ${daftar[i].umur}`
                        nome++
                    }
                    hanz.reply(from, daftr, id) 
                    break
                    
                    case prefix+'groupinfo':{
                        if(isReg(obj)) return
                        if(cekumur(cekage)) return
                        if (!isGroupMsg) return  hanz.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id); 
                        const adminlst = groupAdmins.length
                        const memlst = chat.groupMetadata.participants
                        const timestp = chat.groupMetadata.creation
                        const date = moment(timestp * 1000).format('dddd, DD MMMM YYYY')
                        const time = moment(timestp * 1000).format('HH:mm:ss')
                        const owner = chat.groupMetadata.owner
                        const simu = simi_.includes(chat.id)
                        const grplink = antilink.includes(chat.id)
                        const bdwrd = badword.includes(chat.id)
                        const stckr = antisticker.includes(chat.id)
                        const botadmin = isBotGroupAdmins ? 'Iya' : 'Tidak'
                        const result = `
──「 *𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢* 」──
Informasi Group *${chat.formattedTitle || chat.name}*
    Group ini didirikan sejak *${date}* Pukul *${time}* oleh @${owner.replace('@c.us','')} 

    ● ${monospace(`Total Admin :`)} *${adminlst}*
    ● ${monospace(`Total Member :`)} *${memlst.length}*
    ● ${monospace(`Anti Link Status :`)} *${grplink ? 'On' : 'Off'}*
    ● ${monospace(`Bot Group Status :`)} *${simu ? 'Off' : 'On'}*
    ● ${monospace(`Anti Badword Status :`)} *${bdwrd ? 'On' : 'Off'}*
    ● ${monospace(`Anti Spam Sticker Status :`)} *${stckr ? 'On' : 'Off'}*
    ● ${monospace(`Bot Group Admin :`)} *${botadmin}*
    
    ● ${monospace(`Desc Group :`)}
    ${chat.groupMetadata.desc}
━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ 
    _Desc di update oleh : @${chat.groupMetadata.descOwner.replace('@c.us','')} pada *${moment(chat.groupMetadata.descTime * 1000).format('dddd, DD MMMM YYYY')}* pukul ${moment(chat.groupMetadata.descTime * 1000).format('HH:mm:ss')}_
━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ 
    _*𝗛𝗔𝗡𝗭 𝗕𝗢𝗧 𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢*_`
                         hanz.sendTextWithMentions(from, result, id)
                        limitAdd(serial)
                    }
                    break
                    case prefix+'cekprem':
                    var cek = sender.id
                    idx = _premium.findIndex(x => x === cek);
                    //console.log(prem[idx])
                    const dt = (_premium[idx])
                    if(dt === undefined){
                        return hanz.reply(from, 'Kamu belum terdaftar sebagai member premium :(\n\nuntuk menjadi member premium, kamu bisa donasi seikhlasnya terlebih dahulu, kirim !donasi untuk melihat info donasi', id) //if user is not registered
                    } else {
                        hanz.sendText(from, `──「 *CEK PREMIUM* 」──\n\nNo Wa Kamu : *${dt.replace('@c.us', '')}* ada di database, dan kamu sudah terdaftar member premium :)\n\nTerima kasih sudah donasi, semoga dengan adanya bot ini bisa membantu :)\n\n──「 *hanz BOT* 」──`)
                    }
                    break
        case prefix+'romance':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *${prefix}romance [ Teks ]*, contoh *${prefix}romance hanz*`, id)
            hanz.reply(from, mess.wait, id)
            const rmnc = body.slice(9)
            if (rmnc.length > 10) return hanz.reply(from, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
            await hanz.sendFileFromUrl(from, `https://api.vhtear.com/romancetext?text=${rmnc}&apikey=${vhtearkey}`, 'romance.jpg', '', id)
            break
        case prefix+'party':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *${prefix}party [ Teks ]*, contoh *${prefix}party hanz*`, id)
            hanz.reply(from, mess.wait, id)
            const prty = body.slice(7)
            if (prty.length > 10) return hanz.reply(from, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
            await hanz.sendFileFromUrl(from, `https://api.vhtear.com/partytext?text=${prty}&apikey=${vhtearkey}`, 'party.jpg', '', id)
            break
        case prefix+'silk':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *${prefix}silk [ Teks ]*, contoh *${prefix}silk hanz*`, id)
            hanz.reply(from, mess.wait, id)
            const slkz = body.slice(5)
            if (slkz.length > 10) return hanz.reply(from, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
            await hanz.sendFileFromUrl(from, `https://api.vhtear.com/silktext?text=${slkz}&apikey=${vhtearkey}`, 'silk.jpg', '', id)
            break
        case prefix+'blackpink':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *#blackpink [ Teks ]*, contoh *#blackpink hanz*`, id)
            hanz.reply(from, mess.wait, id)
            const blpk = body.slice(11)
            if (blpk.length > 10) return hanz.reply(from, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
            await hanz.sendFileFromUrl(from, `https://api.vhtear.com/blackpinkicon?text=${blpk}&apikey=${vhtearkey}`, 'blackpink.jpg', '', id)
            break
        case prefix+'thunder':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *#thunder [ Teks ]*, contoh *#thunder hanz*`, id)
            hanz.reply(from, mess.wait, id)
            const thndr = body.slice(9)
            if (thndr.length > 10) return hanz.reply(from, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
            await hanz.sendFileFromUrl(from, `https://api.vhtear.com/thundertext?text=${thndr}&apikey=${vhtearkey}`, 'thndr.jpg', '', id)
            break
        case prefix+'pornhub':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *#pornhub [ |Teks1|Teks2 ]*, contoh *#pornhub |hanz|Dev hanz*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                hanz.reply(from, mess.wait, id)
                const lpornhub = argz[1]
                const lpornhub2 = argz[2]
                if (lpornhub.length > 10) return hanz.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
                if (lpornhub2.length > 10) return hanz.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
                hanz.sendFileFromUrl(from, `https://api.vhtear.com/pornlogo?text1=${lpornhub}&text2=${lpornhub2}&apikey=${vhtearkey}`)
                await limitAdd(serial)
            } else {
                await hanz.reply(from, `Wrong Format!\n[❗] Kirim perintah *#pornhub [ |Teks1|Teks2 ]*, contoh *#pornhub |hanz|Dev hanz*`, id)
            }
            break
            case prefix+'pat':
                    argz = body.trim().split(' ')
                    const jartod = author.replace('@c.us', '')
                    await hanz.sendGiphyAsSticker(from, 'https://media.giphy.com/media/Z7x24IHBcmV7W/giphy.gif')
                    hanz.sendTextWithMentions(from, '@' + jartod + ' *👈 Si Mengelu-elus si👉* ' + argz[1])
                    break
            case prefix+'nye': 
                    argz = body.trim().split('')
                    const jancuk7 = author.replace('@c.us', '')
                    await hanz.sendGiphyAsSticker(from, 'https://media.giphy.com/media/cute-baka-13LunYkkBppSBa/giphy.gif')
                    hanz.sendTextWithMentions(from, '@' + jancuk7 + ' *nye nye* ' + argz[1])
                    break
            case prefix+'hug':
                    argz = body.trim().split(' ')
                    const janjing = author.replace('@c.us', '')
                    await hanz.sendGiphyAsSticker(from, 'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif')
                    hanz.sendTextWithMentions(from, '@' + janjing + ' *peyuuuk* ' + argz[1])
                    break
                    case prefix+'tod':
                        hanz.reply(from, `Sebelum bermain berjanjilah akan melaksanakan apapun perintah yang diberikan.\n\nSilahkan Pilih:\n➥ ${prefix}truth\n➥ ${prefix}dare`, id)
                        break
                        case prefix+'truth':
                        if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa digunakan didalam grup!', id)
                                fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
                                .then(res => res.text())
                                .then(body => {
                                    let truthx = body.split('\n')
                                    let truthz = truthx[Math.floor(Math.random() * truthx.length)]
                                    hanz.reply(from, truthz, id)
                                })
                                .catch(() => {
                                    hanz.reply(from, 'Hayolohhh, ada yang error!!', id)
                                })
                                break
                        case prefix+'dare':
                        if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa digunakan didalam grup!', id)
                                fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
                                .then(res => res.text())
                                .then(body => {
                                    let darex = body.split('\n')
                                    let darez = darex[Math.floor(Math.random() * darex.length)]
                                    hanz.reply(from, darez, id)
                                })
                                .catch(() => {
                                    hanz.reply(from, 'Hayolohhh, ada yang error!!', id)
                                })
                                break
        case prefix+'glitch':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *#glitch [ |Teks1|Teks2 ]*, contoh *#glitch |hanz|Dev hanz*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                hanz.reply(from, mess.wait, id)
                const glitch1 = argz[1]
                const glitch2 = argz[2]
                if (glitch1.length > 10) return hanz.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
                if (glitch2.length > 15) return hanz.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 15 huruf!_', id)
                hanz.sendFileFromUrl(from, `https://api.vhtear.com/glitchtext?text1=${glitch1}&text2=${glitch2}&apikey=${vhtearkey}`)
                await limitAdd(serial)
            } else {
                await hanz.reply(from, `Wrong Format!\n[❗] Kirim perintah *#glitch [ |Teks1|Teks2 ]*, contoh *#glitch |Rapa|Dev hanz*`, id)
            }
            break
            case prefix+'gpsticker':
                if(isReg(obj)) return
                    if(cekumur(cekage)) return 
                hanz.reply(from, mess.wait, id)
                const giph = ['http://i.imgur.com/UGw1mKB.gif','http://i.imgur.com/pqnXV9o.gif','http://25.media.tumblr.com/3001a8872eff95532084422a9e3bbb5e/tumblr_mgt8eaMwyS1r75klfo1_250.gif']
                      let giphy = giph[Math.floor(Math.random() * giph.length)]
                       hanz.sendStickerfromUrl(from, giphy)
                       break
            case prefix+'rstik':
                case prefix+'rstick': 
                if(isReg(obj)) return
                    if(cekumur(cekage)) return 
                hanz.reply(from, mess.wait, id)
                       const walnimeo = ['https://camo.githubusercontent.com/9c184e56a76795eaeb8e7584424520de07a9aa4db57323f626ef9ff7730f62b9/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f34644d3155373661415133646245366263332f67697068792e676966','https://camo.githubusercontent.com/0afcc6050ce6d1858e1f8136ad418fadea998a0188ae20364504ed6c9bbb6b2c/68747470733a2f2f696d61676573352e616c706861636f646572732e636f6d2f3931312f3931313631342e706e67','https://raw.githubusercontent.com/mhankbarbar/whatsapp-bot/master/media/img/Kaguya.png','https://images.alphacoders.com/605/thumb-350-605592.png','https://images5.alphacoders.com/481/thumb-350-481903.png','https://images7.alphacoders.com/611/thumb-350-611138.png','https://images4.alphacoders.com/476/thumb-350-47698.png','https://images2.alphacoders.com/727/thumb-350-72732.png','https://images5.alphacoders.com/314/thumb-350-314574.png','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']                    
                       let walnimeok = walnimeo[Math.floor(Math.random() * walnimeo.length)]
                       hanz.sendStickerfromUrl(from, walnimeok)
                       break
            case prefix+'shentai': 
            if(isReg(obj)) return
                if(cekumur(cekage)) return      
			     hanz.reply(from, mess.wait, id)
				 const hentayo = ['http://i4.xxxhentaigallery.com/photos/204/747-part.jpg','http://i1.xxxhentaigallery.com/photos/193/809__8.jpg','http://i2.xxxhentaigallery.com/photos/165/356_Kidmo.jpg','http://i4.xxxhentaigallery.com/photos/192/811___.jpg','http://i2.xxxhentaigallery.com/photos/179/075_.jpg','http://i1.xxxhentaigallery.com/photos/174/070_Zeroshiki.jpg','http://i1.xxxhentaigallery.com/photos/132/678__Captain_.jpg']
				 let hentayok = hentayo[Math.floor(Math.random() * hentayo.length)]
				 hanz.sendStickerfromUrl(from, hentayok, '', 'Neh...', id)
                 break
                 case prefix+'randomgif':
                    case prefix+'rgif':
                        if(isReg(obj)) return
                            if(cekumur(cekage)) return
                    hanz.reply(from, mess.wait, id)
                    const giffo = ['https://c.tenor.com/wgX4i8giG9wAAAAj/mochi-peachcat-cat.gif','https://c.tenor.com/UUhe2fIowxAAAAAj/love-mochi.gif','https://media.tenor.com/images/800a46ca3a946f908b8a5c7cd2eabe35/tenor.gif','https://media.tenor.com/images/ebb65bb0ca7bdd155c198a066ecfcb92/tenor.gif','https://media.tenor.com/images/75b3c8eca95d917c650cd574b91db7f7/tenor.gif','https://media.tenor.com/images/492a250e5ac486d298ec88e71079eeb1/tenor.gif','https://media.tenor.com/images/6321fa6690d59b2f37c25ce0d271cb6c/tenor.gif','https://media.tenor.com/images/ec85a866a451e1a47008ac6a8534d1c4/tenor.gif','https://media.tenor.com/images/73b6bc522e27fcc81fcdbf7012bdd323/tenor.gif','https://media.tenor.com/images/e411846cebbe99eb56e42a4d188cf5ca/tenor.gif','https://media.tenor.com/images/b418cde4ddb9ed4a8548500048d3bafb/tenor.gif','https://media.tenor.com/images/a13ada2790e7e128cd87958c9d166073/tenor.gif','https://media.tenor.com/images/f2f20ce49f0ecc1c3315c146e737bdc9/tenor.gif','https://media.tenor.com/images/23bfa35425bcd3794bea802adb5b9bfc/tenor.gif','https://media.tenor.com/images/eafc0f0bef6d6fd135908eaba24393ac/tenor.gif','https://media.tenor.com/images/d4173fe821ee176f5077ba98d7cdf417/tenor.gif','https://media.tenor.com/images/9164f10a0dbbf7cdb6aeb46184b16365/tenor.gif','https://media.tenor.com/images/3a9d2bd1bde9ed8ea02b2222988be6da/tenor.gif','https://media.tenor.com/images/fae2bbbba0be4db589e47dac43e266f9/tenor.gif','https://media.tenor.com/images/f599d464f0041f9899f8ec41a8e280ac/tenor.gif','https://media.tenor.com/images/8d94e004d553aa9edbb38c823454e421/tenor.gif','https://media.tenor.com/images/269250f1277adbbdafff69f2595ece0c/tenor.gif','https://media.tenor.com/images/558ebbab68370c33c69517b341c3f627/tenor.gif']
                    let giffok = giffo[Math.floor(Math.random() * giffo.length)]
                           hanz.sendStickerfromUrl(from, giffok)
                           break
                           case prefix+'stickbokep':
                            if(isReg(obj)) return
                                if(cekumur(cekage)) return
       hanz.reply(from, mess.wait, id)
	   const bokepi = ['https://i.ibb.co/8jRQ01J/IMG-20201205-223443-917.jpg','https://i.ibb.co/KKzmXzY/IMG-20201206-033352-192.jpg','https://i.ibb.co/8srYLFL/IMG-20201206-034512-690.jpg','https://i.ibb.co/B32Nq01/E0yui-GCvum-STqdm-G2-6-Os-FBJYMh2-Vd-Da4ayhip-Ub-B4-Xx-Cl-H7-Vt-Ju-j-J-s-Ri-A9kww-Q83-GFPnp-W9nl-Zva.jpg','https://i.ibb.co/9psS49T/Lvu-JQ8-Ut-AELo-AGZ0o-F9-RDQNk-W28e-QHj-CZPo-Ak-Wm2u-Rey-RAay-Ku-Ub4-f2-P-m-F6-DLdc67l-Ko-IRy-NZZIth.jpg','https://i.ibb.co/BVB8fbj/pv-NJ5-Ja4-VP1fl2-H0b4-Ad-YOzb-HOad-Tzq-JO9-Ms-Ecs-Qz-Sn7s-CMdem-SPv-QBj8qqrt5xk-GEW-o-HKAKs-NRp-GN6.jpg','https://i.ibb.co/BTFg7yT/IEsp-UDTc6-YFw-Hro-E3-Eq-VXGgo-PV8-4-Il4-HWy-Usc-Kw-JMVW4ql-WVBOSzmxjz6-W6r-Dw4-E2-GPo7cygc-HH6-XFy7.jpg','https://i.ibb.co/bsJfgz7/H3-GSk-Spdcw-Uc-E8t-Mk-A5-ZM6y-MO2-Kk-Fdp5qxr-E0ju-Y3-N-Dx-Ln-YWp-Epx2jug-DEFg-LAloq-1g5-NYr-A2tz-O4.jpg','https://i.ibb.co/KNsD0tT/pv-NJ5-Ja4-VP1fl2-H0b4-Ad-YOzb-HOad-Tzq-JO9-Ms-Ecs-Qz-Sn7s-CMdem-SPv-QBj8qqrt5xk-GEW-o-HKAKs-NRp-GN6.jpg','https://i.ibb.co/g6Fwp8S/pv-NJ5-Ja4-VP1fl2-H0b4-Ad-YOzb-HOad-Tzq-JO9-Ms-Ecs-Qz-Sn7s-CMdem-SPv-QBj8qqrt5xk-GEW-o-HKAKs-NRp-GN6.jpg','https://i.ibb.co/gPFMxr6/image.png','https://i.ibb.co/0YPwyVc/image.png','https://i.ibb.co/vCWZWQP/image.png','https://i.ibb.co/c66fNtR/image.png','https://i.ibb.co/XDB3nxX/image.png','https://i.ibb.co/s9dJRr1/image.png','https://i.ibb.co/tqXh4c7/image.png','https://i.ibb.co/ZBBxgqy/image.png','https://i.ibb.co/jWx7DHR/image.png','https://i.ibb.co/SRQ590w/image.png','https://i.ibb.co/CsL5XWy/image.png','https://i.ibb.co/zsSh5t8/image.png','https://i.ibb.co/L9M2pH4/image.png','https://i.ibb.co/q53mKTp/image.png','https://i.ibb.co/12myv6w/image.png','https://i.ibb.co/yhbnjtR/image.png']
	   let bokepio = bokepi[Math.floor(Math.random() * bokepi.length)]
		   hanz.sendStickerfromUrl(from, bokepio)
		   break
            case prefix+'patrickgif':
	case prefix+'gifpatrick':
        if(isReg(obj)) return
            if(cekumur(cekage)) return
         hanz.reply(from, mess.wait, id)
		 const patric = ['https://media.tenor.com/images/1f73d3b99fc0e8edc83d42b42ac54dd3/tenor.gif','https://media.tenor.com/images/4c22f6e140a8985084d91b1de596b84b/tenor.gif','https://media.tenor.com/images/aa5230a94e9417487ceae9ad432d66d3/tenor.gif','https://media.tenor.com/images/f6b093b763e7d716dd7d25cfa7af46bc/tenor.gif','https://media.tenor.com/images/5751fce6378d5aa8ae5f09167a4430d2/tenor.gif','https://media.tenor.com/images/38d85cb97f2438e31bb6b1f441a1b862/tenor.gif','https://media.tenor.com/images/1263f70a2fb28a9512b8dd0c9c16b3af/tenor.gif','https://media.tenor.com/images/18c974ee6d824dde7170f6c40bb14bc6/tenor.gif','https://media.tenor.com/images/ff7a1b585d019c58862afc5075338606/tenor.gif','https://media.tenor.com/images/a71554b96df82b06fbaa2510a906b847/tenor.gif','https://media.tenor.com/images/2a3cfb4899aca0b8b772490320948363/tenor.gif','https://media.tenor.com/images/89296e552a8f155726f37e5d883776e1/tenor.gif']
	     let patrick = patric[Math.floor(Math.random() * patric.length)]
	     hanz.sendStickerfromUrl(from, patrick, 'Neh..', id)
		 break
            case prefix+'creepyfact': // By Kris
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Khusus group`, id)
            await hanz.reply(from, `Searching..`, id)
            fetch('https://raw.githubusercontent.com/TheSploit/CreepyFact/main/creepy.txt')
                .then((res) => res.text())
                .then(async (body) => {
                    let creepyx = body.split('\n')
                    let creepyz = creepyx[Math.floor(Math.random() * creepyx.length)]
                    await hanz.reply(from, creepyz, id)
                })
                .catch(async (err) => {
                    console.error(err)
                    await hanz.reply(from, 'Error!', id)
                })
        break
            case prefix+'asupan':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
		  const asupa = JSON.parse(fs.readFileSync('./lib/asupan.json')) 
		  let asupan = asupa[Math.floor(Math.random() * asupa.length)]
		  hanz.sendFileFromUrl(from, asupan, 'asupan.mp4', '', id)
          break
          case prefix+'sreddit':
            if (args.length == 0) return hanz.reply(from, `Untuk mencari gambar dari sub reddit\nketik: ${prefix}sreddit [search]\ncontoh: ${prefix}sreddit naruto`, id)
	    if (!isPremium) return hanz.reply(from, `Command Premium!Chat owner buat mendaftar!`, id)
            const carireddit = body.slice(9)
            const hasilreddit = await images.sreddit(carireddit)
            await hanz.sendFileFromUrl(from, hasilreddit, '', '', id)
            .catch(() => {
                hanz.reply(from, 'Ada yang Error!', id)
            })
	    break
          case prefix+'puisi':
            hanz.reply(from, mess.wait, id)
      await hanz.sendFileFromUrl(from, `https://api.vhtear.com/puisi_image&apikey=${vhtearkey}`, 'img.jpg', '', id)
            break
            case prefix+'quotesgambar':
                hanz.reply(from, mess.wait, id)
                const aiquote = await axios.get("http://inspirobot.me/api?generate=true")
                await hanz.sendFileFromUrl(from, aiquote.data, 'quote.jpg', 'Powered By http://inspirobot.me/ With ❤️' , id )
                break
        case prefix+'daftar':  // NAMBAHIN NOMOR DI DATABASE
                argz = body.trim().split('|')
                if (argz.length >= 2) {
                const nonye = sender.id
                const namanye = argz[1]
                const umurnye = argz[2]
                    if(isNaN(umurnye)) return await hanz.reply(from, 'Umur harus berupa angka!!', id)
                    if(umurnye >= 40) return await hanz.reply(from, 'Kamu terlalu tua, kembali lagi ke masa muda untuk menggunakan hanz', id)
                    const jenenge = namanye.replace(' ','')
                    var ceknya = nonye
                        var obj = pendaftar.some((val) => {
                            return val.id === ceknya
                        })
                        if (obj === true){
                            return hanz.reply(from, 'kamu sudah terdaftar', id) // BAKAL RESPON JIKA NO UDAH ADA
                        } else {
                            const mentah = await hanz.checkNumberStatus(nonye) // PENDAFTARAN
                            const msg = monospace(`──「 𝗣𝗘𝗡𝗗𝗔𝗙𝗧𝗔𝗥 」──
Pendaftaran berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}

├≽ 「Nama」:  ${jenenge} [@${nonye.replace(/[@c.us]/g, '')}]
├≽ 「Nomor」: wa.me/${nonye.replace('@c.us', '')}
├≽ 「Umur」: ${umurnye}

Untuk menggunakan bot silahkan kirim ${prefix}menu
Total Pengguna yang telah terdaftar ${pendaftar.length}
──「 𝗛𝗔𝗡𝗭 𝗕𝗢𝗧 」──`)
                            const hasil = mentah.canReceiveMessage ? msg : false
                            if (!hasil) return hanz.reply(from, 'Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]', id) 
                            {
                            const register = ({
                                id: mentah.id._serialized,
                                nama: jenenge,
                                umur: umurnye
                            })
                            pendaftar.push(register)
                            fs.writeFileSync('./lib/database/user.json', JSON.stringify(pendaftar)) // DATABASE
                                hanz.sendTextWithMentions(from, hasil)
                            }
                        }
                    } else {
                        await hanz.reply(from, `Format yang kamu masukkan salah, kirim ${prefix}daftar |nama|umur\n\ncontoh format: ${prefix}daftar |Hanz|17\n\ncukup gunakan nama depan/panggilan saja`, id) //if user is not registered
                    }
                break
              
				case prefix+'memeindo':
				await axios.get('https://api.zeks.xyz/api/memeindo?apikey=apivinz').then(res => {
					hanz.sendFileFromUrl(from, `${res.data.result}`, 'image.jpg', 'nehh njeng', id)
					console.log('Success')
				})
				.catch((err) => {
					hanz.reply(from, err, id)
				})
				break
            case prefix+'darkjokes':
                hanz.reply(from, mess.wait, id)
                 await axios.get(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`).then(res => {
                    hanz.sendFileFromUrl(from, `${res.data.result}`, 'image.jpg', 'nehh njeng', id)
                    console.log('Success')                                              
                })
                break

                case prefix+'infonomor':
        if (args.length == 0) return hanz.reply(drom, 'Nomornya mana??', id)
        const nomro = body.slice(11)
      const nomronya = await fetch(`http://docs-jojo.herokuapp.com/api/infonomor?no=${nomro}`)
      const nmro = await nomronya.json()
      hanz.reply(from, `➸ *Nomor* : ${nmro.nomor} \n➸ *Internasional* : ${nmro.international} \n➸ *Operator* : ${nmro.op}`, id)
     break
                case prefix+'tiktokpic':
                    if (args.length == 0) return await hanz.reply(from, `Untuk mendapatkan foto dari username tiktok\nUsage : ${prefix}tiktokpic itsandani`, id)
                    const namaih = body.slice(11)
                    await hanz.reply(from, mess.wait, id)
                    try {
                        console.log(`Getting profile pic for ${namaih}`)
                        const tkt = await axios.get(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${namaih}`)
                        if (tkt.data.error) return hanz.reply(from, tkt.data.error, id)
                        await hanz.sendFileFromUrl(from, tkt.data.result, 'tiktokpic.jpg', 'Ini :D', id)
                        console.log('Success sending TikTok profile pic!')
                    } catch (err) {
                        console.error(err)
                        await hanz.reply(from, 'Error!', id)
                    }
                break
                
                                case prefix+'reverseword':
                                    if (args.length == 0) return hanz.reply(from, `Fitur untuk membalikkan huruf\nContoh : ${prefix}reverseword kok kebalik hurufnya`, id)
                                    const rev = body.slice(13)
                                    axios.get(`https://videfikri.com/api/hurufterbalik/?query=${rev}`).then(res => {
                                        console.log(rev)
                                        const balikin = `${res.data.result.kata}`
                                        hanz.reply(from, balikin, id)
                                        console.log(balikin)
                                    })
                                    break
                                
                       
            case prefix+'goldpb':
                if (args.length == 0) return hanz.reply(from, `Bot akan mengirimkan Gold Play Button dengan nama yang kalian custom sendiri\nContoh : ${prefix}goldpb Urbaee`, id)
                const yuza = body.slice(8)
                await axios.get(`https://api.zeks.xyz/api/gplaybutton?text=${yuza}&apikey=benbenz`).then(res => {
                    console.log('Getting Picture');
                    hanz.sendFileFromUrl(from, `${res.data.result}`, 'image.jpg', 'Congratsss for 1 Million Subscribers', id)
                    })
                .catch(() => {
                    hanz.reply(from, 'Error....', id)
                })
                break
            case prefix+'silverpb':
                if (args.length == 0) return hanz.reply(from, `Bot akan mengirimkan Silver Play Button dengan kata yang anda masukkan\nContoh : ${prefix}silverpb Urbaee`, id)
                const yuzu = body.slice(10)
                await axios.get(`https://api.zeks.xyz/api/splaybutton?text=${yuzu}&apikey=benbenz`).then(res => {
                    hanz.sendFileFromUrl(from, `${res.data.result}`, 'image.jpg', 'Congratss!!', id)
                    .catch(() => {
                        hanz.reply(from, 'Error ngab', id)
                    })
                })
                .catch(() => {
                    hanz.reply(from, 'Error ngab...', id)
                })
                break
                case prefix+'unreg':
            let unreg = pendaftar.indexOf(sender.id)
               pendaftar.splice(unreg, 1)
                fs.writeFileSync('./lib/database/user.json', JSON.stringify(pendaftar))
                return await hanz.reply(from, `${pushname} telah logout dari hanz BOT!`, id)
            break
            case prefix+'daftarulang':
                    if (!isAdmin) return hanz.reply(from, 'Command ini hanya dapat digunakan oleh admin hanz', id)  
                    const nomernya = args[1]
                    let textnya = nomernya.replace(/[-\s+@c.us]/g,'')
                    const cusnya = textnya + '@c.us'
                    const umurnya = args[2]
                    if(umurnya >= 40) return await hanz.reply(from, 'Umur terlalu tua kak, max 40 yaa :D', id)
                        var found = false
                        Object.keys(pendaftar).forEach((i) => {
                            if(pendaftar[i].id == cusnya){
                                found = i
                            }
                        })
                        if (found !== false) {
                            pendaftar[found].umur = umurnya;
                            const updated = pendaftar[found]
                            const result = monospace(`Update data berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
──「 *𝗣𝗘𝗡𝗗𝗔𝗙𝗧𝗔𝗥* 」──

├≽ [Nama]:
├≽  ${updated.nama} | @${updated.id.replace(/[@c.us]/g, '')}
├≽ [Nomor]:
├≽  wa.me/${updated.id.replace('@c.us', '')}
├≽ [Umur]:
├≽  ${updated.umur}

Total Pengguna yang telah terdaftar ${pendaftar.length}
──「 *𝗛𝗔𝗡𝗭 𝗕𝗢𝗧* 」──`)
                            console.log(pendaftar[found])
                            fs.writeFileSync('./lib/database/user.json',JSON.stringify(pendaftar));
                            hanz.sendTextWithMentions(from, result, id)
                        } else {
                                hanz.reply(from, `${monospace(`Di database ngga ada nomer itu kak`)}`, id)
                        }
                break
        case prefix+'groupinfo' :
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)
            isMuted(chatId) == false
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            var welgrp = welkom.includes(chat.id)
            var leftgrp = left.includes(chat.id)
            var ngrp = nsfw_.includes(chat.id)
            var antlink = antilink.includes(chat.id)
            var simu = simi_.includes(chat.id)
            var stprt = antisticker.includes(chat.id)
            var antbad = antibadword.includes(chat.id)
            var grouppic = await hanz.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await hanz.sendFileFromUrl(from, pfp, 'group.png', `
──「 *𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢* 」──
├≽ *Name : ${groupname}* 
├≽ *Members : ${totalMem}*
├≽ *Welcome : ${welgrp ? 'Aktif' : 'Tidak Aktif'}*
├≽ *Left : ${leftgrp ? 'Aktif' : 'Tidak Aktif'}*
├≽ *NSFW : ${ngrp ? 'Aktif' : 'Tidak Aktif'}*
├≽ *Simsimi : ${simu ? 'Aktif' : 'Tidak Aktif'}*
├≽ *Anti Sticker : ${stprt ? 'Aktif' : 'Tidak Aktif'}*
├≽ *Anti Link : ${antlink ? 'Aktif' : 'Tidak Aktif'}*
├≽ *Anti Badword : ${antbad ? 'Aktif' : 'Tidak Aktif'}*

──「 *𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘵𝘪𝘰𝘯* 」──
 
${desc}  

──「 *𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎* 」──`)
            break
        case prefix+'quoterandom' :
        case prefix+'quote' :
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            hanz.sendText(from, quotedd())
            break
        case prefix+'tts':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#tts [ Bahasa ] [ Teks ]*, contoh *#tts id halo semua*')
                var dataBhs = args[1]      
                const ttsHZ = require('node-gtts')(dataBhs)
                var dataText = body.slice(8)
                if (dataText === '') return hanz.reply(from, 'Masukkan teksnya', id)
                if (dataText.length > 500) return hanz.reply(from, 'Teks terlalu panjang!', id)
                var dataBhs = body.slice(5, 7)
                ttsHZ.save('./media/tts.mp3', dataText, function () {
                hanz.sendPtt(from, './media/tts.mp3', id)
                limitAdd(serial)
                })
            } catch (err){
                console.log(err)
                hanz.reply(from, bahasa_list, id)
            }
            break
        case prefix+'koin':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
              hanz.sendStickerfromUrl(from, 'https://i.ibb.co/YTWZrZV/2003-indonesia-500-rupiah-copy.png', { method: 'get' })
            } else {
              hanz.sendStickerfromUrl(from, 'https://i.ibb.co/bLsRM2P/2003-indonesia-500-rupiah-copy-1.png', { method: 'get' })
            }
            break
        case prefix+'dadu':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const dice = Math.floor(Math.random() * 6) + 1
            await hanz.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' })
            break
        case prefix+'kapankah':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const when = args.join(' ')
            const ans = kapankah[Math.floor(Math.random() * (kapankah.length))]
            if (!when) hanz.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.')
            await hanz.sendText(from, `Pertanyaan: *${when}* \n\nJawaban: ${ans}`)
            break
            case prefix+'info':
                const blockeddd = await hanz.getBlockedIds()
                hanz.sendFileFromUrl(from, 'https://i.ibb.co/qWW9qQy/info-bot.jpg' , 'profile.jpg',`*「 INFO BOT 」*\n\n• *Nama bot* : *Hanz*\n• *Author* : *Rapaa*\n• *Nomor Owner* : wa.me/6281226770537\n• *Prefix* : ${prefix}\n• *Total Pengguna :* ${pendaftar.length} User\n• *Total Block Contact* : ${blockeddd.length}\n• *The bot is active on* : ${cts}\n• *Public:* ON\n\nLebih lengkapnya, *ketik ${prefix}about*`, id)
                break
        case prefix+'nilai':
        case prefix+'rate':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const rating = args.join(' ')
            const awr = rate[Math.floor(Math.random() * (rate.length))]
            if (!rating) hanz.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.')
            await hanz.sendText(from, `Pertanyaan: *${rating}* \n\nJawaban: ${awr}`)
            break
        case prefix+'apakah':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const nanya = args.join(' ')
            const jawab = apakah[Math.floor(Math.random() * (apakah.length))]
            if (!nanya) hanz.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.')
            await hanz.sendText(from, `Pertanyaan: *${nanya}* \n\nJawaban: ${jawab}`)
            break
         case prefix+'bisakah':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const bsk = args.join(' ')
            const jbsk = bisakah[Math.floor(Math.random() * (bisakah.length))]
            if (!bsk) hanz.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.')
            await hanz.sendText(from, `Pertanyaan: *${bsk}* \n\nJawaban: ${jbsk}`)
            break
        case prefix+'owner':
        case prefix+'creator':
            hanz.sendContact(chatId, `6281226770537@c.us`)
            hanz.reply(from, 'Itu nomor Pacar ku, eh maksudnya Owner ku', id)
            break
        case prefix+'resetsticker':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isAdmin) return hanz.reply(from, `Maaf, perintah ini hanya dapat dilakukan oleh Admin hanz!`, id)
            if (!args.length === 1) return hanz.reply(from, `Masukkan nomornya, *GUNAKAN AWALAN 62*\ncontoh: #resetsticker 62852262236155 / #resetsticker @member`, id) 
            const nomebr = args[1]
            let textz = nomebr.replace(/[-\s+@c.us]/g,'')
            const cuss = textz + '@c.us'
                var found = false
                Object.keys(stickerspam).forEach((i) => {
                    if(stickerspam[i].id == cuss){
                        found = i
                    }
                })
                if (found !== false) {
                    stickerspam[found].msg = 1;
                    const result = 'DB Sticker Spam has been reset'
                    console.log(stickerspam[found])
                    fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
                    hanz.reply(from, result, from)
                    limitAdd(serial)
                } else {
                        hanz.reply(from, `Maaf, Nomor itu tidak terdaftar di database!`, id)
                }
            break
        case prefix+'resetbadword':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
                    if(isLimit(serial)) return
                    if (!isGroupAdmins) return hanz.reply(from, 'Command ini hanya dapat digunakan oleh admin grup')  
                    if (!args.length === 1) return hanz.reply(from, 'Masukkan nomornya, *GUNAKAN AWALAN 62*\ncontoh: #resetbadword 6285112554122 / #resetbadword @member') 
                    const nomer = args[1]
                    let text = nomer.replace(/[-\s+@c.us]/g,'')
                    const cus = text + '@c.us'
                        var found = false
                        Object.keys(msgBadword).forEach((i) => {
                            if(msgBadword[i].id == cus){
                                found = i
                            }
                        })
                        if (found !== false) {
                            msgBadword[found].msg = 1;
                            const result = 'DB Badword Spam has been reset'
                            console.log(msgBadword[found])
                            fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                            hanz.reply(from, result, from)
                            limitAdd(serial)
                        } else {
                                hanz.reply(from, `${monospace(`Di database ngga ada nomer itu dik`)}`, id)
                        }
                break
        // ON OFF
        case prefix+'antilink':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return hanz.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antilink.includes(chatId);
                if(cek){
                    return hanz.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Sudah Aktif`, id) //if number already exists on database
                } else {
                    antilink.push(chatId)
                    fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink))
                    hanz.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Aktif`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antilink.includes(chatId);
                if(!cek){
                    return hanz.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Sudah DiNonaktif`, id) //if number already exists on database
                } else {
                    let nixx = antilink.indexOf(chatId)
                    antilink.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink))
                    hanz.reply(from, `*「 ANTI GROUP LINK 」*\nStatus : Nonaktif`, id)
                }
            } else {
                hanz.reply(from, `Pilih enable atau disable udin!`, id)
            }
            break    
            
        case prefix+'antisticker':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return hanz.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antisticker.includes(chatId);
                if(cek){
                    return hanz.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Sudah Aktif`, id)
                 } else {
                    antisticker.push(chatId)
                    fs.writeFileSync('./lib/database/antisticker.json', JSON.stringify(antisticker))
                    hanz.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Aktif`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antisticker.includes(chatId);
                if(cek){
                    return hanz.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Sudak DiNonaktif`, id) //if number already exists on database
                } else {
                    let nixx = antisticker.indexOf(chatId)
                    antisticker.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antisticker.json', JSON.stringify(antisticker))
                    hanz.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Nonaktif`, id)
                    limitAdd(serial)
                }
            } else {
                hanz.reply(from, `Pilih enable atau disable udin!`, id)
            }
            break
        case prefix+'antibadword':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return hanz.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antibadword.includes(chatId);
                if(cek){
                    return hanz.reply(from, `*「 ANTI BADWORD 」*\nSudah diaktifkan di grup ini`, id)
                } else {
                    antibadword.push(chatId)
                    fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                    hanz.reply(from, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nHarap Jangan Toxic Di Sini Atau hanz Akan Kick!`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antibadword.includes(chatId);
                if(!cek){
                    return hanz.reply(from, `*「 ANTI BADWORD 」*\nSudah dinonaktifkan di grup ini`, id)
                } else {
                    let nixx = antibadword.indexOf(chatId)
                    antibadword.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                    hanz.reply(from, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nHarap Jangan Toxic Di Sini Atau hanz Akan Kick!`, id)
                }
            } else {
                hanz.reply(from, `Pilih enable atau disable udin!`, id)
            } 
            break   
            
        case prefix+'nsfw':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return hanz.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                var cek = nsfw_.includes(chatId);
                if(cek){
                    return hanz.reply(from, `NSFW Sudah diaktifkan di grup ini`, id)
                } else {
                nsfw_.push(chat.id)
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(nsfw_))
                hanz.reply(from, 'NSFW berhasil di aktifkan di group ini! kirim perintah *#nsfwMenu* untuk mengetahui menu', id)
                }
            } else if (args[1].toLowerCase() === 'disable') {
                var cek = nsfw_.includes(chatId);
                if(cek){
                    return hanz.reply(from, `NSFW Sudah dinonaktifkan di grup ini`, id)
                } else {
                nsfw_.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(nsfw_))
                hanz.reply(from, 'NSFW berhasil di nonaktifkan di group ini!', id)
                }
            } else {
                hanz.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case prefix+'simi':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isAdmin) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin hanz!', id) // Hanya Admin yang bisa mengaktifkan
            if (args.length === 1) return hanz.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                var cek = simi_.includes(chatId);
                if(cek){
                    return hanz.reply(from, `Simsimi Sudah diaktifkan di grup ini`, id)
                } else {
                simi_.push(chat.id)
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(simi_))
                hanz.reply(from, 'Simsimi berhasil di aktifkan di group ini! Kirim perintah *# [teks]*\nContoh : *# halo*', id)
                }
            } else if (args[1].toLowerCase() === 'disable') {
                var cek = simi_.includes(chatId);
                if(cek){
                    return hanz.reply(from, `Simsimi Sudah diaktifkan di grup ini`, id)
                } else {
                simi_.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(simi_))
                hanz.reply(from, 'Simsimi berhasil di nonaktifkan di group ini!', id)
                }
            } else {
                hanz.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case prefix+'group':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (args.length === 1) return hanz.reply(from, 'Pilih open atau close!', id)
            if (args[1].toLowerCase() === 'open') {
                hanz.setGroupToAdminsOnly(groupId, false)
                hanz.sendTextWithMentions(from, `Group telah dibuka oleh admin @${sender.id.replace('@c.us','')}\nSekarang *semua member* dapat mengirim pesan`)
            } else if (args[1].toLowerCase() === 'close') {
                hanz.setGroupToAdminsOnly(groupId, true)
                hanz.sendTextWithMentions(from, `Group telah ditutup oleh admin @${sender.id.replace('@c.us','')}\nSekarang *hanya admin* yang dapat mengirim pesan`)
            } else {
                hanz.reply(from, 'Pilih open atau disable close!', id)
            }
            break
        case prefix+'left':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return hanz.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                left.push(chat.id)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                hanz.reply(from, 'Fitur left berhasil di aktifkan di group ini!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                left.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                hanz.reply(from, 'Fitur left berhasil di nonaktifkan di group ini!', id)
            } else {
                hanz.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case prefix+'welcome':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return hanz.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                hanz.reply(from, 'Fitur welcome berhasil di aktifkan di group ini!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                welkom.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                hanz.reply(from, 'Fitur welcome berhasil di nonaktifkan di group ini!', id)
            } else {
                hanz.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        // ANIME //
        case prefix+'neonime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)

            if (args.length === 1) return hanz.reply(from, `Kirim perintah *${prefix}neonime [ Query ]*, Contoh : #neonime danmachi`)
            const nenon = body.slice(9)
            hanz.reply(from, mess.wait, id)
            try {
                const response2 = await fetch('https://hanz-api.herokuapp.com/api/neonime?q=' + nenon + '&apikey=' + tobzkey)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonserc = await response2.json()
                const { result } = await jsonserc
                let xixixi = `*「 NEONIME 」*\n\n*Hasil Pencarian : ${nenon}*\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n• *Title* : ${result[i].title}\n• *Deskripsi* : ${result[i].desc}\n• *Link* : ${result[i].link}`
                }
                await hanz.sendFileFromUrl(from, result[0].image, 'neon.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
            }
            break
        case prefix+'kusonime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#kusonime [query]*\nContoh : *#kusonime darling in the franxx*', id)
            const animeq = await axios.get('https://hanz-api.herokuapp.com/v1/kuso?q=' + body.slice(7)  + '&apikey=' +  tobzkey)
            if (animeq.data.error) return hanz.reply(from, animeq.data.error, id)
            const res_animeq = `${animeq.data.title}\n\n${animeq.data.info}\n\n${animeq.data.sinopsis}\n\n${animeq.data.link_dl}`
            hanz.sendFileFromUrl(from, animeq.data.thumb, 'kusonime.jpg', res_animeq, id)
            await limitAdd(serial)
            break
        case prefix+'dewabatch':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#dewabatch [query]*\nContoh : *#dewabatch darling in the franxx*', id)
            const animek = await axios.get('https://hanz-api.herokuapp.com/v1/dewabatch?q=' + body.slice(7)  + '&apikey=' +  tobzkey)
            if (animek.data.error) return hanz.reply(from, animek.data.error, id)
            const res_animek = `${animek.data.result}\n\n${animek.data.sinopsis}`
            hanz.sendFileFromUrl(from, animek.data.thumb, 'dewabatch.jpg', res_animek, id)
            await limitAdd(serial)
            break
        case prefix+'pinterest':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#pinterest [query]*\nContoh : *#pinterest hanz*', id)
            const ptrsq = body.slice(11)
            const ptrst = await fetch(`https://api.vhtear.com/pinterest?query=${ptrsq}&apikey=${vhtearkey}`)
            if (!ptrst.ok) throw new Error(`Error Pinterest : ${ptrst.statusText}`)
            const ptrs = await ptrst.json()
            const ptrsn = ptrs.result
            const b = JSON.parse(JSON.stringify(ptrsn))
            const ptrs2 =  b[Math.floor(Math.random() * b.length)]
            const image = await bent("buffer")(ptrs2)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            await hanz.sendImage(from, base64, 'ptrs.jpg', `*Pinterest*\n\n*Hasil Pencarian : ${ptrsq}*`)
            await limitAdd(serial)
            break
        case prefix+'nhview':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return hanz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#nhview [212121]*\nContoh : *#nhview 321421*', id)
            const nhsh = body.slice(11)
            const nhsh2 = await axios.get('https://mnazria.herokuapp.com/api/nhentai?code='+nhsh)
            for (let i = 0; i < nhsh2.length; i++) {
                await hanz.sendImage(from, nhsh2[i].data, 'thumbserc.jpg', '', id)
                }
            limitAdd(serial)
            break
        case prefix+'loli':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const loli = await axios.get(`https://api.vhtear.com/randomloli&apikey=${vhtearkey}`)
            const loly = loli.data.result
            hanz.sendFileFromUrl(from, loly.result, 'loli.jpeg', '*LOLI*', id)
            await limitAdd(serial)
            break
         
        case prefix+'shota':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const imageToBase64 = require('image-to-base64')
            var shouta = ['shota anime','anime shota'];
            var shotaa = shouta[Math.floor(Math.random() * shouta.length)];
            var urlshot = "https://api.fdci.se/rep.php?gambar=" + shotaa;
            axios.get(urlshot)
            .then((result) => {
            var sht = JSON.parse(JSON.stringify(result.data));
            var shotaak =  sht[Math.floor(Math.random() * sht.length)];
            imageToBase64(shotaak)
            .then(
                (response) => {
            let img = 'data:image/jpeg;base64,'+response
            hanz.sendFile(from, img, "shota.jpg", `*SHOTA*`, id)
            limitAdd(serial)
                    }) 
                .catch(
                    (error) => {
                        console.log(error);
                    })
            })
            break
        case prefix+'waifu':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const waifu = await axios.get('https://hanz-api.herokuapp.com/api/waifu?apikey=' +  tobzkey)
            hanz.sendFileFromUrl(from, waifu.data.image, 'Waifu.jpg', `➸ Name : ${waifu.data.name}\n➸ Description : ${waifu.data.desc}\n\n➸ Source : ${waifu.data.source}`, id)
            await limitAdd(serial)
            break
        case prefix+'husbu':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const diti = fs.readFileSync('./lib/database/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            hanz.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            await limitAdd(serial)
            break
        case prefix+'randomnekonime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const nekonime = await axios.get('https://hanz-api.herokuapp.com/api/nekonime?apikey=' +  tobzkey)
            const nekon = nekonime.data
            if (nekon.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            hanz.sendFileFromUrl(from, nekon.result, `Nekonime${ext}`, 'Nekonime!', id)
            await limitAdd(serial)
            break
            case prefix+'randomquran': // irham01          
            if(isReg(obj)) return
            if(cekumur(cekage)) return
                const ranquran = await axios.get('https://api.zeks.xyz/api/randomquran')
                const auquran = ranquran.data.result.audio
                await hanz.reply(from,(ranquran), id)
                await hanz.sendFileFromUrl(from, auquran, 'rquran.mp3', '', id)
            break
        // MFARELS
        case prefix+'bokep': // MFARELS
        if (!isAdmin) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin hanz!`, id)
        const mskkntl = fs.readFileSync('./lib/database/18+.json') // MFARELS
            const kntlnya = JSON.parse(mskkntl) // MFARELS
            const rindBkp = Math.floor(Math.random() * kntlnya.length) // MFARELS
            const rindBkep = kntlnya[rindBkp] // MFARELS
            hanz.sendFileFromUrl(from, rindBkep.image, 'hanzp.jpg', rindBkep.teks, id) // MFARELS
            break
            case prefix+'asmaulhusna': // irham01
            if (args.length !== 1) return await hanz.reply(from, `Error`, id)
            const asmaulHusna = await axios.get ('https://api-melodicxt-2.herokuapp.com/api/asmaallHusna?number=${args[0]}&apiKey=' + melodickey)
            const assna = asmaulHusna.data.result
            hanz.sendFileFromUrl(from, 'https://i2.wp.com/seruni.id/wp-content/uploads/2016/09/Allah.png?resize=696%2C696&ssl=1', 'gambar.jpg', (assna), id)
        break
        // MFARELS
        case prefix+'randomtrapnime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return hanz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const trapnime = await axios.get('https://hanz-api.herokuapp.com/api/nsfwtrap?apikey=' +  tobzkey)
            const trapn = trapnime.data.result
            if (trapn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            hanz.sendImage(from, trapn.result, `trapnime${ext}`, 'Trapnime!', id)
            await limitAdd(serial)
            break
        case prefix+'randomhentai':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return hanz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const hentai = await axios.get('https://hanz-api.herokuapp.com/api/hentai?apikey=' +  tobzkey)
            const henta = hentai.data
            if (henta.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            hanz.sendImage(from, henta.result, `RandomHentai${ext}`, 'Random Hentai!', id)
            await limitAdd(serial)
            break
        case prefix+'randomnsfwneko':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return hanz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const nsfwneko = await axios.get('https://hanz-api.herokuapp.com/api/nsfwneko?apikey=' +  tobzkey)
            const nsfwn = nsfwneko.data
            if (nsfwn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            hanz.sendImage(from, nsfwn.result, `NsfwNeko${ext}`, 'NsfwNeko!', id)
            await limitAdd(serial)
            break
        case prefix+'randomanime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const ranime = await axios.get('https://hanz-api.herokuapp.com/api/randomanime?apikey=' +  tobzkey)
            const ranimen = ranime.data
            if (ranimen.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            hanz.sendFileFromUrl(from, ranimen.result, `RandomAnime${ext}`, 'Random Anime!', id)
            await limitAdd(serial)
            break
        case prefix+'randomblowjob':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (!isNsfw) return hanz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            await limitAdd(serial)
            const sblow = await axios.get('https://hanz-api.herokuapp.com/api/nsfwblowjob?apikey=' +  tobzkey)
            const rblow = sblow.data
            hanz.sendFileFromUrl(from, rblow.result, `RandoBlow${ext}`, 'Random Blowjob!', id)
            break
        case prefix+'randomhug':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const shug = await axios.get('https://hanz-api.herokuapp.com/api/hug?apikey=' +  tobzkey)
            const rhug = shug.data
            hanz.sendFileFromUrl(from, rhug.result, `RandomHug${ext}`, 'Random Hug!', id)
            break
        case prefix+'randomcry':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const scry = await axios.get('https://hanz-api.herokuapp.com/api/cry?apikey=' +  tobzkey)
            const rcry = scry.data
            hanz.sendFileFromUrl(from, rcry.result, `RandomCry${ext}`, 'Random Cry!', id)
            await limitAdd(serial)
            break
        case prefix+'randomkiss':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const skiss = await axios.get('https://hanz-api.herokuapp.com/api/kiss?apikey=' +  tobzkey)
            const rkiss = skiss.data
            hanz.sendFileFromUrl(from, rkiss.result, `RandomKiss${ext}`, 'Random Kiss!', id)
            await limitAdd(serial)
            break
        case prefix+'subreddit':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            argz = body.trim().split(' ')
            const sr = argz[1]
            try {
            const response1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + sr + '/');
            const { postLink, title, subreddit, url, nsfw, spoiler } = response1.data
                if (nsfw == true) {
                    if ((isGroupMsg) && (isNsfw)) {
                        await hanz.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`)
                        limitAdd(serial)
                    } else if ((isGroupMsg) && (!isNsfw)) {
                        await hanz.reply(from, `Nsfw belum diaktifkan di Grup *${name}*`, id)
                    }
                } else { 
                    await hanz.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`)
                }
            } catch(err) {
                await hanz.sendFileFromUrl(from, errorurl, id) 
            }
            break
        case prefix+'nhder':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return hanz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length >=2){
                const code = args[1]
                const url = 'https://nhder.herokuapp.com/download/nhentai/'+code+'/zip'
                const short = []
                const shortener = await urlShortener(url)
                url['short'] = shortener
                short.push(url)
                const caption = `*NEKOPOI DOWNLOADER*\n\nLink: ${shortener}`
                hanz.sendText(from, caption)
                limitAdd(serial)
            } else {
                hanz.sendText(from, 'Maaf tolong masukan code nuclear')
            }
            break
        /*case prefix+'wallanime' :
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const walnime = ['https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
            let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
            hanz.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '', id)
            break*/
        case prefix+'quotesnime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const skya = await axios.get('https://hanz-api.herokuapp.com/api/quotesnime/random?apikey=' +  tobzkey)
            skya_ = skya.data
            hanz.reply(from, `➸ *Quotes* : ${skya_.quote}\n➸ *Character* : ${skya_.character}\n➸ *Anime* : ${skya_.anime}`, id)
            await limitAdd(serial)
            break
        case prefix+'memes':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomeanimemes')
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            hanz.sendFileFromUrl(from, `${url}`, 'memes.jpg', `${title}`)
            await limitAdd(serial)
            break
        case prefix+'quoteanime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                        if(args[1]){
                            if(args[1] === 'anime'){
                                const anime = body.slice(13)
                                axios.get('https://animechanapi.xyz/api/quotes?anime='+anime).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    hanz.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                    limitAdd(serial)
                                }).catch(err => {
                                    hanz.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }else{
                                const char = body.slice(12)
                                axios.get('https://animechanapi.xyz/api/quotes?char='+char).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    hanz.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                    limitAdd(serial)
                                }).catch(err => {
                                    hanz.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }
                        }else{
                            axios.get('https://animechanapi.xyz/api/quotes/random').then(({ data }) => {
                                let penyanyi = data.result[0].penyanyi 
                                let judul = data.result[0].judul
                                let linkimg = data.result[0].linkImg
                                let lagu = data.result[0].linkMp3 
                                let size = data.result[0].filesize
                                let durasi = data.result[0].duration
                                hanz.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`) 
                                limitAdd(serial)
                            }).catch(err => {
                                console.log(err)
                            })
                        }
		      	break
        case prefix+'maluser':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const username = body.slice(18)
            hanz.reply(from, mess.wait, id)
            try {
                const result = await axios.get(`https://api.jikan.moe/v3/user/${username}`)
                const jikan =  result.data
                const Data = `*「 USER - MYANIMELIST 」*

• Username: ${jikan.username}
• User ID: ${jikan.user_id}
• Gender: ${jikan.gender}
• Location: ${jikan.location}
• Joined: ${jikan.joined}
⭐️ Anime Stats ⭐️
• Days Watched: ${jikan.anime_stats.days_watched}
• Mean Score: ${jikan.anime_stats.mean_score}
• Currently Watching: ${jikan.anime_stats.watching}
• Completed: ${jikan.anime_stats.completed}
• On Hold: ${jikan.anime_stats.on_hold}
• Dropped: ${jikan.anime_stats.dropped}
• Plan to Watch: ${jikan.anime_stats.plan_to_watch}
🎯️ Manga Stats 🎯️
• Days Read: ${jikan.manga_stats.days_read}
• Mean Score: ${jikan.manga_stats.mean_score}
• Currently Reading: ${jikan.manga_stats.reading}
• Completed: ${jikan.manga_stats.completed}
• On Hold: ${jikan.manga_stats.on_hold}
• Dropped: ${jikan.manga_stats.dropped}
• Plan to Read: ${jikan.manga_stats.plan_to_read}`

                await hanz.sendFileFromUrl(from, `${jikan.image_url}`,`user.png`, Data)
                limitAdd(serial)
            } catch (err) {
                console.log(err)
                await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
            }    
            break
        case prefix+'malanime':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const keyword = message.body.replace('#malanime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Ditemukan!*
✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            hanz.sendImage(from, base64, title, content)
             await limitAdd(serial)
           } catch (err) {
             console.error(err.message)
             await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
           }
          break
        case prefix+'malcharacter':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const keywords = message.body.replace('#malcharacter', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/character?q=${keywords}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
              return null
              }
            const { name, alternative_names, url, image_url } = parsed.results[0]
            const contentt = `*Anime Ditemukan!*

✨️ *Name:* ${name}
💌️ *Alternative Names:* ${alternative_names}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            hanz.sendImage(from, base64, name, contentt)
            await limitAdd(serial)
           } catch (err) {
             console.error(err.message)
             await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
           }
          break
        // PRAY //
        case prefix+'jadwalshalat':
        case prefix+'jadwalsholat':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `[❗] Kirim perintah *#jadwalShalat [ Daerah ]*\ncontoh : *#jadwalShalat Tangerang*\nUntuk list daerah kirim perintah *#listDaerah*`)
            const daerah = body.slice(14)
            const jadwalShalat = await axios.get(`https://api.vhtear.com/jadwalsholat?query=${daerah}&apiKey=${vhtearkey}`)
            if (jadwalShalat.data.error) return hanz.reply(from, jadwalShalat.data.error, id)
            const { Shubuh, Zduhur, Ashr, Magrib, Isya, kota } = await jadwalShalat.data
            arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            tgl = new Date().getDate()
            bln = new Date().getMonth()
            thn = new Date().getFullYear()
            const resultJadwal = `「 JADWAL SHALAT 」\n\nJadwal shalat di ${kota}, ${tgl}-${arrbulan[bln]}-${thn}\n\nSubuh : ${Shubuh}\nDzuhur : ${Zduhur}\nAshar : ${Ashr}\nMaghrib : ${Magrib}\nIsya : ${Isya}`
            await limitAdd(serial)
            break
        case prefix+'quran':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah Surah Quran kamu dengan cara ketik perintah :\n*#quran* [ Urutan Surat ]\nContoh :\n*#quran 1*`, id)
            const qura = `https://api.vhtear.com/quran?no=${args[1]}&apikey=${vhtearkey}`
            const quraan = await axios.get(qura)
            const quraann = quraan.data
            let hasqu = `*「 AL-QURAN 」*\n\n*Surah : ${quraann.result.surah}*\n*Quran* : ${quraann.result.quran}*`
            await hanz.reply(from, `${hasqu}`, id).catch((e) => hanz.reply(from, `*Terdapat kesalahan saat mencari surat ${args[1]}*`, id))
            await limitAdd(serial)
            break
        case prefix+'listsurah': // hanzZ
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            try {
                axios.get('https://raw.githubusercontent.com/hanzZ/scraper-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '*「 DAFTAR SURAH 」*\n\n___________________________\n'
                    let nmr = 1
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += nmr + '. ' +  monospace(response.data.data[i].name.transliteration.id.toLowerCase()) + '\n'
                        nmr++
                            }
                        hehex += '___________________________'
                    hanz.reply(from, hehex, id)
                })
            } catch(err) {
                hanz.reply(from, err, id)
            }
            break
        case prefix+'infosurah': // hanzZ
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return hanz.reply(from, `Kirim perintah *#infosurah [ Nama Surah ]*\nContoh : *#infosurah al-fatihah*`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/hanzZ/scraper-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
                try {
                    var pesan = "*「 INFORMASI SURAH 」*\n\n___________________________\n\n"
                    pesan = pesan + "➸ *Nama* : "+ data[idx].name.transliteration.id + "\n" + "➸ *Asma* : " +data[idx].name.short+"\n"+"➸ *Arti* : "+data[idx].name.translation.id+"\n"+"➸ *Jumlah ayat* : "+data[idx].numberOfVerses+"\n"+"➸ *Nomor surah* : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"➸ *Keterangan* : "+data[idx].tafsir.id
                    pesan += '\n\n___________________________'
                    hanz.reply(from, pesan, message.id)
                    limitAdd(serial)
                }catch{
                    hanz.reply(from, 'Data tidak ditemukan, atau nama surah salah', id)
                }
            break
        case prefix+'tafsir': // hanzZ
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return hanz.reply(from, `Kirim perintah *#tafsir [ Nama Surah ] [ Ayat ]*\nContoh : *#tafsir al-fatihah 2*`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/hanzZ/scraper-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
            try{
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[2])
                    var {data} = responsih.data
                    pesan = ""
                    pesan = pesan + "*「 TAFSIR 」*\n\nTafsir Q.S. "+data.surah.name.transliteration.id+":"+args[2]+"\n\n"
                    pesan = pesan + data.text.arab + "\n\n"
                    pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                    pesan += '\n\n___________________________'
                    hanz.reply(from, pesan, message.id)
                    limitAdd(serial)
                }
            }catch{
                hanz.reply(from, 'Data tidak ditemukan, mungkin nama surah/ayat salah', id)
            }
            break
        // MEDIA //
        case prefix+'ytsearch':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *${prefix}ytsearch [ Query ]*, Contoh : #ytsearch alan walker alone`)
            const ytsher = body.slice(10)
            hanz.reply(from, mess.wait, id)
            try {
                const response2 = await fetch(`https://api.vhtear.com/youtube?query=${encodeURIComponent(ytsher)}&apikey=${vhtearkey}`)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonserc = await response2.json()
                const { result } = await jsonserc
                let xixixi = `*「 YOUTUBE SEARCH 」*\n\n*Hasil Pencarian : ${ytsher}*\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n• *Judul* : ${result[i].title}\n• *Ditonton* : ${result[i].views}\n• *Durasi* : ${result[i].duration}\n• *Channel* : ${result[i].channel}\n• *URL* : ${result[i].urlyt}\n`
                }
                await hanz.sendFileFromUrl(from, result[0].image, 'thumbserc.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                    hanz.sendText(ownerNumber, 'YT Search Error : ' + err)
            }
            break
        case prefix+'distance':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 1) return hanz.reply(from, `[❗] Kirim perintah *${prefix}distance [ Daerah1|Daerah2 ]*\ncontoh : *${prefix}distance Jakarta|Bandung*`)
                hanz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
                try {
                    const dfdc1 = arg.split('|')[0]
                    const dfdc2 = arg.split('|')[1]
                    const dfdcres = await axios.get('https://api.vhtear.com/distance?from='+dfdc1+'&to='+dfdc2+'&apikey='+vhtearkey)
                    const { result } = dfdcres.data
                    await hanz.reply(from, `*「 DRIVING-FLYING DISTANCE 」*\n\n${result.data}`, id)
                    await limitAdd(serial)
                } catch (err) {
                    console.error(err.message)
                    await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Lokasi tidak ditemukan')
                    hanz.sendText(ownerNumber, 'Distance Error : ' + err)
                }
                break
        case prefix+'shopee':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *${prefix}shopee [ Query ]*, Contoh : *${prefix}shopee HP Samsul a20*`)
            const shopek = body.slice(8)
            hanz.reply(from, mess.wait, id)
            try {
                const dataplai = await axios.get(`https://api.vhtear.com/shopee?query=${shopek}&count=5&apikey=${vhtearkey}`)
                const dataplay = dataplai.data.result
                 let shopeq = `*「 SHOPEE 」*\n\n*Hasil Pencarian : ${shopek}*\n`
                for (let i = 0; i < dataplay.items.length; i++) {
                    shopeq += `\n─────────────────\n\n• *Nama* : ${dataplay.items[i].nama}\n• Harga* : ${dataplay.items[i].harga}\n• *Terjual* : ${dataplay.items[i].terjual}\n• *Lokasi Toko* : ${dataplay.items[i].shop_location}\n• *Deskripsi* : ${dataplay.items[i].description}\n• *Link Product : ${dataplay.items[i].link_product}*\n`
                }
                await hanz.sendFileFromUrl(from, dataplay.items[0].image_cover, `shopee.jpg`, shopeq, id)
                await limitAdd(serial)
            } catch (err){
                console.log(err)
            }
            break
        case prefix+'playstore':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *${prefix}playstore [ Query ]*, Contoh : *${prefix}playstore Mobile Legends*`)
            const keywotp = body.slice(11)
            hanz.reply(from, mess.wait, id)
            try {
                const dataplai = await axios.get(`https://api.vhtear.com/playstore?query=${keywotp}&apikey=${vhtearkey}`)
                const dataplay = dataplai.data
                 let keluarplay = `*「 PLAYSTORE 」*\n\nHasil Pencarian : ${keywotp}*\n`
                for (let i = 0; i < dataplay.result.length; i++) {
                    keluarplay += `\n─────────────────\n\n• *Nama* : ${dataplay.result[i].title}\n• *Developer* : ${dataplay.result[i].developer}\n• *Deskripsi* : ${dataplay.result[i].description}\n• *Paket ID* : ${dataplay.result[i].app_id}\n• *Harga* : ${dataplay.result[i].price}\n• *Link App* : https://play.google.com${dataplay.result[i].url}\n`
                }
                await hanz.sendFileFromUrl(from, dataplay.result[0].icon, `iconapk.webp`, keluarplay, id)
                await limitAdd(serial)
            } catch (err){
                console.log(err)
            }
            break
        case prefix+'newstickerline':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            hanz.reply(from, mess.wait, id)
            try {
                const stcline = await fetch(`https://api.vhtear.com/newsticker?apikey=${vhtearkey}`)
                if (!stcline.ok) throw new Error(`unexpected response ${stcline.statusText}`)
                const stcline2 = await stcline.json()
                const { hasil } = await stcline2.result
                let xixixi = `*「 NEW STICKER LINE 」*\n\n`
                for (let i = 0; i < hasil.length; i++) {
                    xixixi += `\n─────────────────\n\n*Title* : ${hasil[i].title}\n*Url* : ${hasil[i].uri}\n`
                }
                await hanz.sendFileFromUrl(from, 'https://play-lh.googleusercontent.com/BkvRJsjYiEjb0-XKuop2AurqFKLhhu_iIP06TrCTGAq180P9Briv8Avz8ncLp7bOmCs', 'newstc.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                    hanz.sendText(ownerNumber, 'Berita Error : ' + err)
            }
            break
        case prefix+'news':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            hanz.reply(from, mess.wait, id)
            try {
                const response2 = await fetch(`https://api.vhtear.com/beritaterbaru&apikey=${vhtearkey}`)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonber = await response2.json()
                const { data } = await jsonber.result
                let xixixi = `*「 BERITA TERKINI 」*\n\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Source* : ${data[i].url}\n*Penulis* : ${data[i].author}\n*Judul* : ${data[i].title}\n*Deskripsi* : ${data[i].description}\n*Dipublikasi* : ${data[i].publishedAt}\n*Konten* : ${data[i].content}\n`
                }
                await hanz.sendFileFromUrl(from, data[0].urlToImage, 'thumbserc.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                    hanz.sendText(ownerNumber, 'Berita Error : ' + err)
            }
            break
        case prefix+'jadwalbola':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            hanz.reply(from, mess.wait, id)
            try {
                const jdbola = await fetch(`https://api.vhtear.com/jadwalbola&apikey=${vhtearkey}`)
                if (!jdbola.ok) throw new Error(`unexpected response ${jdbola.statusText}`)
                const jdbola2 = await jdbola.json()
                const { data } = await jdbola2.result
                let xixixi = `*「 JADWAL BOLA 」*\n\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Kick-Off* : ${data[i].kickoff}\n*Pertandingan* : ${data[i].pertandingan}\n*Stasiun TV* : ${data[i].stasiuntv}`
                }
                await hanz.sendText(from, xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Jadwal tidak ditemukan')
                    hanz.sendText(ownerNumber, 'Jadwal Bola Error : ' + err)
            }
            break
        case prefix+'infogempa':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const bmkg = await axios.get('http://hanz-api.herokuapp.com/api/infogempa?apikey=' +  tobzkey)
            const { potensi, koordinat, lokasi, kedalaman, magnitude, waktu, map } = bmkg.data
            const hasil = `*${waktu}*\n📍 *Lokasi* : *${lokasi}*\n〽️ *Kedalaman* : *${kedalaman}*\n💢 *Magnitude* : *${magnitude}*\n🔘 *Potensi* : *${potensi}*\n📍 *Koordinat* : *${koordinat}*`
            hanz.sendFileFromUrl(from, map, 'shakemap.jpg', hasil, id)
            await limitAdd(serial)
            break
        case prefix+'ssphone':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#ssphone [linkWeb]*\nContoh : *#ssphone https://neonime.vip*', id)
            const ssphone = body.slice(9)
            hanz.sendFileFromUrl(from, `https://api.vhtear.com/ssweb?link=${ssphone}&type=phone&apikey=${vhtearkey}`, 'ssphone.jpg', '', id)
            await limitAdd(serial)
            break
        case prefix+'sspc':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#sspc [linkWeb]*\nContoh : *#sspc https://neonime.vip*', id)
            const sspc = body.slice(6)
            hanz.sendFileFromUrl(from, `https://api.vhtear.com/ssweb?link=${sspc}&type=pc&apikey=${vhtearkey}`, 'sspc.jpg', '', id)
            await limitAdd(serial)
            break
	case prefix+'bitly':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#bitly [linkWeb]*\nContoh : *#bitly https://neonime.vip*', id)
            const shorturl1 = body.slice(7)
            const bitly1 = await axios.get('https://hanz-api.herokuapp.com/api/bitly?url=' + shorturl1 + '&apikey=' +  tobzkey)
            const bitly2 = bitly1.data
            if (bitly2.error) return hanz.reply(from, bitly2.error, id)
            const surl2 = `Link : ${shorturl1}\nShort URL : ${bitly2.result}`
            hanz.sendText(from, surl2, id)
            await limitAdd(serial)
            break
        case prefix+'tinyurl':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#shorturl [linkWeb]*\nContoh : *#shorturl https://neonime.vip*', id)
            const shorturl2 = body.slice(9)
            const tiny1 = await axios.get('https://hanz-api.herokuapp.com/api/shorturl?url=' + shorturl2 + '&apikey=' +  tobzkey)
            const tiny2 = tiny1.data
            if (tiny2.error) return hanz.reply(from, tiny2.error, id)
            const surl3 = `Link : ${shorturl2}\nShort URL : ${tiny2.result}`
            hanz.sendText(from, surl3, id)
            await limitAdd(serial)
            break
        case prefix+'cuaca':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#cuaca [tempat]*\nContoh : *#cuaca tangerang', id)
            const tempat = body.slice(7)
            const weather = await axios.get('http://melodicxt.herokuapp.com/api/cuaca?query='+ tempat +'&apiKey='+ melodickey)
            const weatherr = weather.data
            if (weatherr.error) {
                hanz.reply(from, weatherr.error, id)
            } else {
                hanz.reply(from, `➸ Tempat : ${weatherr.result.tempat}\n\n➸ Angin : ${weatherr.result.angin}\n➸ Cuaca : ${weatherr.result.cuaca}\n➸ Deskripsi : ${weatherr.result.desk}\n➸ Kelembapan : ${weatherr.result.kelembapan}\n➸ Suhu : ${weatherr.result.suhu}\n➸ Udara : ${weatherr.result.udara}`, id)
                limitAdd(serial)
            }
            break
        case prefix+'covid':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const country = await slicedArgs.join(' ')
            console.log(country)
            const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
            const { cases, todayCases, deaths, todayDeaths, active } = response2.data
            await hanz.sendText(from, '🌎️ Covid Info - ' + country + ' 🌍️\n\n✨️ Total Cases: ' + `${cases}` + '\n📆️ Today\'s Cases: ' + `${todayCases}` + '\n☣️ Total Deaths: ' + `${deaths}` + '\n☢️ Today\'s Deaths: ' + `${todayDeaths}` + '\n⛩️ Active Cases: ' + `${active}` + '.')
            await limitAdd(serial)
            break
        case prefix+'spamcall':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return hanz.reply(from, 'Perintah ini hanya untuk Owner & Admin bot', id)
            argz = body.trim().split(' ')
            console.log(...argz[0])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const spam = await slicedArgs.join(' ')
            console.log(spam)
            const call2 = await axios.get('https://hanz-api.herokuapp.com/api/spamcall?no=' + spam + '&apikey=' +  tobzkey)
            const { logs } = call2.data
                await hanz.sendText(from, `Logs : ${logs}` + '.')
            break
        	
        case prefix+'ytmp4':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isPremium) return await hanz.reply(from, `Nomor kamu belum terdaftar sebagai user premium. Hubungi owner untuk mendaftar!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *${prefix}ytmp4 [ Link Yt ]*, untuk contoh silahkan kirim perintah *${prefix}readme*`)
            let isLin = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLin) return hanz.reply(from, mess.error.Iv, id)
            try {
                hanz.reply(from, mess.wait, id)
                const ytvh = await fetch(`http://api.vhtear.com/ytdl?link=${args[1]}&apikey=${vhtearkey}`)
                if (!ytvh.ok) throw new Error(`Error YTMP4 : ${ytvh.statusText}`)
                const ytvh2 = await ytvh.json()
                 if (ytvh2.status == false) {
                    hanz.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    if (Number(ytvh2.result.size.split(' MB')[0]) > 30.00) return hanz.sendFileFromUrl(from, ytvh2.result.imgUrl, 'thumb.jpg', `*「 YOUTUBE MP4 」*\n\n• *Judul* : ${ytvh2.result.title}\n• *Filesize* : ${ytvh2.result.size}\n\n__Maaf, Durasi video melebihi 30 MB. Silahkan download video melalui link dibawah_.\n${ytvh2.result.UrlVideo}`, id)
                    const { title, UrlVideo, imgUrl, size, status, ext } = await ytvh2.result
                    console.log(`VHTEAR : ${ext}\n${size}\n${status}`)
                    hanz.sendFileFromUrl(from, imgUrl, 'thumb.jpg', `*「 YOUTUBE MP4 」*\n\n• *Judul* : ${title}\n• *Filesize* : ${size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`, id)
                    await hanz.sendFileFromUrl(from, UrlVideo, `${title}.mp4`, '', id).catch(() => hanz.reply(from, mess.error.Yt4, id))
                    await limitAdd(serial)
                }
            } catch (err) {
                hanz.sendText(ownerNumber, 'Error ytmp4 : '+ err)
                hanz.reply(from, 'Jangan download video yang sama dengan sebelumnya!', id)
            }
            break
            case prefix+'teksml':
                 if (args.length === 0) return hanz.reply(from, 'Teks nya mana??', id)
                 hanz.reply(from, mess.wait, id)
                 const textml = args[2]
                 const mlnya = `https://api.vhtear.com/logoml?hero=${args[1]}&text=${textml}&apikey=${vhtearkey}`
                 hanz.sendFileFromUrl(from, mlnya, 'emel.jpg', 'Anjay bah', id)
                 break
            case prefix+'addpremium':	
	    if (!isOwner) return await hanz.reply(from, `Perintah ini hanya bisa digunakan oleh Owner hanz`, id)
				  for (let addi of mentionedJidList) {
                    _premium.push(addi)
                    fs.writeFileSync('./LIB/DATA/premium.json', JSON.stringify(_premium))
                }
		 await hanz.reply(from, 'Success Menambahkan Premium hanz!', id)
            break
            case prefix+'dellpremium':
                
	    if (!isOwner) return await hanz.reply(from, `Perintah ini hanya bisa digunakan oleh Owner hanz`, id)
		  let unpremi = _premium.indexOf(mentionedJidList[0])
                _premium.splice(unpremi, 1)
                fs.writeFileSync('./lib/data/premium.json', JSON.stringify(_premium))
                return await hanz.reply(from, 'Success menghapus Premium hanz!', id)
            break
       
	
        case prefix+'play':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isPremium) return await hanz.reply(from, `Nomor kamu belum terdaftar sebagai user premium. Hubungi owner untuk mendaftar!`, id)
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #ceklimit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return hanz.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: #play judul lagu`, id)
            try {
                hanz.reply(from, mess.wait, id)
                const serplay = body.slice(6)
                const webplay = await fetch(`https://api.vhtear.com/ytmp3?query=${serplay}&apikey=${vhtearkey}`)
                if (!webplay.ok) throw new Error(`Error Play : ${webplay.statusText}`)
                const webplay2 = await webplay.json()
                 if (webplay2.status == false) {
                    hanz.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    if (Number(webplay2.result.size.split(' MB')[0]) >= 10.00) return hanz.reply(from, 'Maaf durasi music sudah melebihi batas maksimal 10 MB!', id)
                    const { image, mp3, size, ext, title, duration } = await webplay2.result
                    const captplay = `*「 PLAY 」*\n\n• *Judul* : ${title}\n• *Durasi* : ${duration}\n• *Filesize* : ${size}\n• *Exp* : ${ext}\n\n_*Music Sedang Dikirim*_`
                    hanz.sendFileFromUrl(from, image, `thumb.jpg`, captplay, id)
                    await hanz.sendFileFromUrl(from, mp3, `${title}.mp3`, '', id).catch(() => hanz.reply(from, mess.error.Yt4, id))
                    await limitAdd(serial)
                }
            } catch (err) {
                hanz.sendText(ownerNumber, 'Error Play : '+ err)
                hanz.reply(from, 'Jangan meminta lagu yang sama dengan sebelumnya!', id)
            }
            break  
         
        case prefix+'ytmp3':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isPremium) return await hanz.reply(from, `Nomor kamu belum terdaftar sebagai user premium. Hubungi owner untuk mendaftar!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *${prefix}ytmp3 [ Link Yt ]*, untuk contoh silahkan kirim perintah *${prefix}readme*`, id)
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return hanz.reply(from, mess.error.Iv, id)
            try {
                hanz.reply(from, mess.wait, id)
                const vhtearyt3 = await fetch(`https://api.vhtear.com/ytdl?link=${args[1]}&apikey=${vhtearkey}`)
                if (!vhtearyt3.ok) throw new Error(`Error YTMP3 : ${vhtearyt3.statusText}`)
                const vhtearyt33 = await vhtearyt3.json()
                 if (vhtearyt33.status == false) {
                    hanz.reply(from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    if(Number(vhtearyt33.result.size.split(' MB')[0]) >= 10.00) return hanz.sendFileFromUrl(from, vhtearyt33.result.imgUrl, `thumb.jpg`, `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${vhtearyt33.result.title}\n• *Filesize* : ${vhtearyt33.result.size}\n\n_Maaf, Durasi audio melebihi 10 MB. Silahkan download audio melalui link dibawah_.\n${vhtearyt33.result.UrlMp3}`, id)
                    const { title, ext, size, UrlMp3, status, imgUrl } = await vhtearyt33.result
                    console.log(`VhTear Giliran ${ext}\n${size}\n${status}`)
                    const captions = `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${title}\n• *Filesize* : ${size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                    hanz.sendFileFromUrl(from, imgUrl, `thumb.jpg`, captions, id)
                    //await hanz.sendFile(from, UrlMp3, `${title}.mp3`, '', id)
                    await hanz.sendFileFromUrl(from, UrlMp3, `${title}.mp3`, '', id).catch(() => hanz.reply(from, mess.error.Yt4, id))
                    await limitAdd(serial)
                }
            } catch (err) {
                hanz.sendText(ownerNumber, 'Error ytmp3 : '+ err)
                hanz.reply(from, 'Jangan download audio yang sama dengan sebelumnya!', id)
            }
            break
	case prefix+'moddroid':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#moddroid [query]*\nContoh : *#moddroid darling pubg*', id)
            try {
                const moddroid = await axios.get('https://hanz-api.herokuapp.com/api/moddroid?q=' + body.slice(10)  + '&apikey=' +  tobzkey)
                if (moddroid.data.error) return hanz.reply(from, moddroid.data.error, id)
                const modo = moddroid.data.result[0]
                const resmod = `• *Title* : ${modo.title}\n• *Publisher* : ${modo.publisher}\n• *Size* : ${modo.size}\n• *MOD Info* : ${modo.mod_info}\n• *Version* : ${modo.latest_version}\n• *Genre* : ${modo.genre}\n• *Link* : ${modo.link}\n• *Download* : ${modo.download}`
                hanz.sendFileFromUrl(from, modo.image, 'MODDROID.jpg', resmod, id)
                await limitAdd(serial)
            } catch (err) {
                console.log(err)
            }
            break
            case prefix+'crygif':
                if (!isPremium) return hanz.reply(from, `Command Premium, hubungi owner untuk mendaftar`, id)
                hanz.reply(from, mess.wait, id)
                axios.get(`https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA`).then(res => {
        hanz.sendFileFromUrl(from, res.data.result, 'img.jpg', '', id)
                    hanz.sendStickerfromUrl(from, res.data.result, `cry.gif`, '', id)
                })
        break
     
    case prefix+'simi2':
        if (args.length == 0) return hanz.reply(from, `Kirim perintah ${prefix}simi2 halo anjing`, id)
        const anjg = body.slice(7)
        axios.get(`https://tobz-api.herokuapp.com/api/simsimi?text=${anjg}&apikey=BotWeA`).then(res => {
            console.log(anjg)
            const babuy = `${res.data.result}`
            hanz.reply(from, babuy, id)
            console.log(babuy)
        })
        break
        case prefix+'tickle':
			if (!isPremium) return hanz.reply(from, 'Command Premium!\nChat owner Buat mendaftar!', id)
			hanz.reply(from, mess.wait, id)
			axios.get('https://nekos.life/api/v2/img/tickle').then(res => {
			hanz.sendStickerfromUrl(from, res.data.url)
			})
			break
  
    case prefix+'trapnime':
        if (!isPremium) return hanz.reply(from, 'Command Premium!\nChat owner buat mendaftar', id)
        hanz.reply(from, mess.wait, id)
        axios.get('https://nekos.life/api/v2/img/trap').then(res => {
        hanz.sendFileFromUrl(from, res.data.url, 'img.jpg', '', id)
        })
        break
        case prefix+'kissgif':
            if (!isPremium) return hanz.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
           hanz.reply(from, mess.wait, id);
           axios.get('https://nekos.life/api/v2/img/kiss').then(res => {
    const mp4 = res.data.url
               hanz.sendStickerfromUrl(from, mp4, `kiss.gif`, '', id)
           });
           break
     
           case prefix+'citacita'://Piyobot
           if (!isGroupMsg) return hanz.reply(from, menuId.textPrem())
                  fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
                  .then(res => res.text())
                  .then(body => {
                  let cita = body.split('\n')
                  let raya = cita[Math.floor(Math.random() * cita.length)]
                  hanz.sendFileFromUrl(from, raya, 'citacita.mp3', id)
                      .then(() => console.log('Success sending cita'))
                    })
                   .catch(() => {
                  hanz.reply(from, 'Ada yang Error!', id)
                   })
                   break
    case prefix+'sologif':
    if (!isPremium) return hanz.reply(from, 'Command premium\nChat owner buat mendaftar', id)
    hanz.reply(from, mess.wait, id)
    axios.get('https://nekos.life/api/v2/img/solog').then(res => {
    hanz.sendStickerfromUrl(from, res.data.url)
})
    break
    case prefix+'anal':
    if (!isPremium) return hanz.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
    hanz.reply(from, mess.wait, id)
    axios.get('https://nekos.life/api/v2/img/anal').then(res => {
    hanz.sendStickerfromUrl(from, res.data.url, id)
    })
    break
    case prefix+'feetgif':
    if (!isPremium) return hanz.reply(from, 'Command Premium\nChat Owner Bot untuk mendaftar', id)
    hanz.reply(from, mess.wait, id)
    axios.get('https://nekos.life/api/v2/img/feetg').then(res => {
    hanz.sendStickerfromUrl(from, res.data.url)
    })
    break

    case prefix+'ttgif':
    if (!isPremium) return hanz.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
    hanz.reply(from, mess.wait,id)
    axios.get('https://nekos.life/api/v2/img/boobs').then(res => {
    hanz.sendStickerfromUrl(from, res.data.url)
    })
    break
        case prefix+'nekonsfw':
            if (!isGroupMsg) return hanz.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!', id)
            if (!isPremium) return hanz.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                hanz.sendText(from, mess.wait);
                axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif').then(res => {
                    hanz.sendStickerfromUrl(from, res.data.url, 'Sange.gif', '', id);
        })
            break
    case prefix+'lesbian':
    if (!isPremium) return hanz.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
    hanz.reply(from, mess.wait, id)
    axios.get('https://nekos.life/api/v2/img/les').then(res => {
    hanz.sendStickerfromUrl(from, res.data.url)
})
    break
    case prefix+'kuni':
        if (!isPremium) return hanz.reply(from, 'Command Premium!\nChat owner buat mendaftar', id)
        hanz.reply(from, mess.wait, id)
        axios.get('https://nekos.life/api/v2/img/kuni').then(res => {
        hanz.sendStickerfromUrl(from, res.data.url)
        })
        break
        case prefix+'jadian':
            if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
            const mem = groupMembers
            const aku = mem[Math.floor(Math.random() * mem.length)];
            const kamu = mem[Math.floor(Math.random() * mem.length)];
            const sapa = `Cieee... @${aku.replace(/[@c.us]/g, '')} (💘) @${kamu.replace(/[@c.us]/g, '')} Baru jadian nih...\nBagi pj nya dong`
            await hanz.sendTextWithMentions(from, sapa)
            break    
        case prefix+'tag':
            if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
            if (!args.length >= 1) return await hanz.reply(from, 'pesan tidak boleh kosong', id) ;{
                const text = body.slice(5)
                const mem = groupMembers
                const randMem = mem[Math.floor(Math.random() * mem.length)];
                const sapa = `${text} 👉 @${randMem}`
                await hanz.sendTextWithMentions(from, sapa)
            }
            break    
        case prefix+'ava':
            if (!isGroupMsg) return hanz.reply(from, 'Fitur ini hanya bisa diugnakan di dalam grup', id)
            if (!quotedMsg) return hanz.reply(from, 'Quote/reply pesan seseorang yang akan di download fotonya!!', id)
            try {
                const dp = await hanz.getProfilePicFromServer(quotedMsgObj.sender.id)
                if (dp == undefined) {
                    var pfp = hanz.reply(from, 'Dia ini pemalu, mungkin sedang depresi tidak berani memasang foto profil', id)
                    } else {
                    var pfp = hanz.sendFileFromUrl(from, dp, 'profile.png')
                    } 
            } catch {
                hanz.reply(from, 'Tidak ada foto profil/private', id)
            }
            break
        case prefix+'mystat':{
            const userid = sender.id
            const ban = banned.includes(userid)
            const blocked = await hanz.getBlockedIds()
            const isblocked = blocked.includes(userid)
            const ct = await hanz.getContact(userid)
            const isOnline = await hanz.isChatOnline(userid) ? '✔' : '❌'
            var sts = await hanz.getStatus(userid)
            const bio = sts
            const admins = groupAdmins.includes(userid) ? 'Admin' : 'Member'
            var found = false
                Object.keys(pengirim).forEach((i) => {
                    if(pengirim[i].id == userid){
                        found = i
                    }
                })
            var adm = admins
            if (ct == null) {
                return await hanz.reply(from, 'Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]', id) 
            } else {
            const contact = ct.pushname
            const dp = await hanz.getProfilePicFromServer(userid)
            if (dp == undefined) {
                var pfp = 'https://raw.githubusercontent.com/Gimenz/line-break/master/profil.jpg'
                } else {
                var pfp = dp
                } 
            if (contact == undefined) {
                var nama = '_Dia pemalu, tidak mau menampilkan namanya_' 
                } else {
                var nama = contact
                } 
            const caption = `*Detail Member* ✨ \n\n● *Name :* ${nama}\n● *Bio :* ${bio.status}\n● *Chat link :* wa.me/${sender.id.replace('@c.us', '')}\n● *Role :* ${adm}\n● *Banned by Bot :* ${ban ? '✔' : '❌'}\n● *Blocked by Bot :* ${isblocked ? '✔' : '❌'}\n● *Chat with bot :* ${isOnline}`
            hanz.sendFileFromUrl(from, pfp, 'dp.jpg', caption)
            }
            }
        break     
        case prefix+'resend':
                if (!isGroupAdmins) return hanz.reply(from, 'Gagal, Fitur ini hanya bisa digunakan oleh Admin',id)
                if (quotedMsgObj) {
                    let encryptMedia
                    let replyOnReply = await hanz.getMessageById(quotedMsgObj.id)
                    let obj = replyOnReply.quotedMsgObj
                    if (/ptt|audio|video|image|document|sticker/.test(quotedMsgObj.type)) {
                        encryptMedia = quotedMsgObj
                        if (encryptMedia.animated) encryptMedia.mimetype = ''
                    } else if (obj && /ptt|sticker|gif|text|audio|video|image/.test(obj.type)) {
                        encryptMedia = obj
                    } else return
                    const _mimetype = encryptMedia.mimetype
                    const mediaData = await decryptMedia(encryptMedia)
                    await hanz.sendFile(from, `data:${_mimetype};base64,${mediaData.toString('base64')}`, 'file', ':)', encryptMedia.id)
                } else hanz.reply(from, 'Error', id)
                break
        case prefix+'bucin':
axios.get(`https://hanzz.herokuapp.com/api/howbucins`).then(res => {
	const ayamgrg = `*Bucin Detected*\n*Persentase* : ${res.data.persen}% \n_${res.data.desc}_ `;
	hanz.sendText(from, ayamgrg, id)
	})
    break
        case prefix+'ssweb':
            if (args.length == 0) return hanz.reply(from, `Kirim perintah *${prefix}ssweb [link website]`, id)
    const webss = body.slice(7)
    hanz.reply(from, mess.wait, id)
    axios.get(`https://api.zeks.xyz/api/ssweb?url=${webss}&apikey=apivinz`)
    .then(async(res) => {
        await hanz.sendFileFromUrl(from, res.data.result, 'img.jpg', `nihh ${pushname} ss-an ${webss} nya`, id)
})
            break
            case prefix+'classic':
                if (!isPremium) return hanz.reply(from, 'Command Premium!\nChat owner buat mendaftar', id)
                hanz.reply(from, mess.wait, id)
                axios.get('https://nekos.life/api/v2/img/classic').then(res => {
                hanz.sendStickerfromUrl(from, res.data.url)
                })
                break
            case prefix+'matauang':
                            const matung = `List Currency : btc, usd, eur, gbp, aud, cad, chf, cny, jpy, sgd, nzd, pkr, hkd, krw, mxn, nok, egp, clp, ngn, brl, rub, uah, thb, pln, inr, eth, xmr, dash, doge, ltc, str, xrp`
                            hanz.reply(from, matung, id)
                            break
            case prefix+'convertduit':
                if (args.length == 0) return hanz.reply(from, `Untuk mengkonversi uang dari negara luar menjadi IDR\nContoh : ${prefix}convertduit usd|2000\n\nDan untuk mengecek mata uang bisa gunakan ${prefix}matauang`, id)
                const duit1 = arg.split('|')[0]
                const duit2 = arg.split('|')[1]
                await axios.get('https://api.terhambar.com/currency?curr='+duit1+'&bal='+duit2).then(res => {
                    const duitnya = `Konversi mata uang ${res.data.result.currency} dari ${duit2}\n\nBalance Currency : *${res.data.result.balanceCurrency}*\n\nHasil Dirupiahkan : *${res.data.result.resultConvert}*`
                    hanz.reply(from, duitnya, id)
                })
                break
            case prefix+'wpanime' :
                const walnime = ['https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','hithuttps://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
                let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
                hanz.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '', message.id)
            break
            case prefix+'santet': //work
                    if (!isGroupMsg) return hanz.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
                    if (mentionedJidList.length === 0) return hanz.reply(from, 'Tag member yang mau disantet, contoh : #santet @wahyu | karena dia gay', id)
                    if (args.length === 1) return hanz.reply(from, 'Masukkan alasan kenapa menyantet dia!!', id)
                        const target = arg.split('|')[0]
                        const alasan = arg.split('|')[1]
                        await hanz.sendTextWithMentions(from, `Santet terkirim ke ${target}, Dengan alasan : ${alasan}`)
                            break
        case prefix+'happymod':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#happymod [query]*\nContoh : *#happymod darling pubg*', id)
            try {
                const happymod = await axios.get('https://hanz-api.herokuapp.com/api/happymod?q=' + body.slice(10)  + '&apikey=' +  tobzkey)
                if (happymod.data.error) return hanz.reply(from, happymod.data.error, id)
                const modo = happymod.data.result[0]
                const resmod = `• *Title* : ${modo.title}\n• *Purchase* : ${modo.purchase}\n• *Size* : ${modo.size}\n• *Root* : ${modo.root}\n• *Version* : ${modo.version}\n• *Price* : ${modo.price}\n• *Link* : ${modo.link}\n• *Download* : ${modo.download}`
                hanz.sendFileFromUrl(from, modo.image, 'HAPPYMOD.jpg', resmod, id)
                await limitAdd(serial)
            } catch (err) {
                console.log(err)
            }
            break
        case prefix+'google':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            hanz.reply(from, mess.wait, id)
            const googleQuery = body.slice(8)
            if(googleQuery == undefined || googleQuery == ' ') return hanz.reply(from, `*Hasil Pencarian : ${googleQuery}* tidak ditemukan`, id)
            google({ 'query': googleQuery }).then(results => {
            let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
            for (let i = 0; i < results.length; i++) {
                vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
            }
                hanz.reply(from, vars, id);
                limitAdd(serial)
            }).catch(e => {
                console.log(e)
                hanz.sendText(ownerNumber, 'Google Error : ' + e);
            })
            break
        case prefix+'translate':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if(args[1] == undefined || args[2] == undefined) return
            if(args.length >= 2){
                var codelang = args[1]
                var textai = body.slice(11+codelang.length);
                translatte(textai, {to: codelang}).then(res => {
                    hanz.sendText(from,res.text);
                    limitAdd(serial)
                }).catch(err => {
                     hanz.sendText(from,`[ERROR] Teks tidak ada, atau kode bahasa ${codelang} tidak support\n~> *${prefix}bahasa* untuk melihat list kode bahasa`);
                });
            }
            break
        case prefix+'nhentai': // SEARCH NHENTAI
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            hanz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
          break
        case prefix+'getnhentai': // DOWNLOADER NHENTAI PDF FROM #NHENTAI
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            hanz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
          break
        case prefix+'xvideos': // SEARCH VIDEO FROM XVIDEOS
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            hanz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
            break
        case prefix+'getxvideos': // DOWNLOADER VIDEO FROM #VIDEO
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            hanz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
            break
        case prefix+'video': // SEARCH VIDEO FROM YOUTUBE
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            hanz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
            break
        case prefix+'getvideo': // DOWNLOADER VIDEO FROM #VIDEO
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            hanz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
            break
        case prefix+'music': // SEARCH MUSIC FROM YOUTUBE
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            hanz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
            break
        case prefix+'getmusic': // DOWNLOADER MUSIC FROM #MUSIC
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            hanz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
            break
           
        case prefix+'gdrive':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const regex = new RegExp("\/d\/(.+)\/", 'gi')
            if (!args[1].match(regex)) { await hanz.reply(from, `Url Google Drive Yang Kamu Masukkan Salah!\nContoh : #gdrive https://drive.google.com/file/d/1Cd8KjB9-cUU_Jy8Q/view`, id) }
                const urla = args[1]
                const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                function niceBytes(x){
                    let l = 0, n = parseInt(x, 10) || 0;
                    while(n >= 1024 && ++l){
                        n = n/1024;
                    }
                    return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
                }
                const m = urla.match(regex)
                const fileid = m.toString().trimStart('/', 'd').trim('/');
                const linke = 'https://drive.google.com/file' + fileid + 'view?usp=sharing'
                fetch('https://gdbypass.host/api/?link='+linke)
                    .then((res) => {
                        status = res.status
                        return res.json()
                    })
                    .then(async(body) => {
                        const fileName = body.data.Filename
                        const size = body.data.Filesize
                        const newLink = body.data.NewUnlimitedURL
                        const ling = await urlShortener(newLink)
                            hanz.reply(from, `*「 GOOGLE DRIVE 」*\n\n• *Nama File :* ${fileName}\n*• File Size :* ${niceBytes(size)}\n*• Short Link :* ${ling}`, id)
                            limitAdd(serial)
                    })
                    .catch((err) => {
                        hanz.reply(from, `Maaf, Sepertinya Link Tidak Berhasil Di Bypass\n` + err, id)
                    })
            break
        case prefix+'xnxx':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return hanz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#xnxx [linkXnxx]*, untuk contoh silahkan kirim perintah *#readme*')
            if (!args[1].match(isUrl) && !args[1].includes('xnxx.com')) return hanz.reply(from, mess.error.Iv, id)
            try {
                hanz.reply(from, mess.wait, id)
                const resq = await axios.get('http://melodicxt.herokuapp.com/api/xnxx-downloader?url='+ args[1] +'&apiKey='+ melodickey)
                const resp = resq.data
                 if (resp.error) {
                    hanz.reply(from, ytvv.error, id)
                } else {
                    if (Number(resp.result.size.split(' MB')[0]) > 20.00) return hanz.reply(from, 'Maaf durasi video sudah melebihi batas maksimal 20 menit!', id)
                    hanz.sendFileFromUrl(from, resp.result.thumb, 'thumb.jpg', `➸ *Judul* : ${resp.result.judul}\n➸ *Deskripsi* : ${resp.result.desc}\n➸ *Filesize* : ${resp.result.size}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await hanz.sendFileFromUrl(from, resp.result.vid, `${resp.result.title}.mp4`, '', id)}
                    await limitAdd(serial)
            } catch (err) {
                console.log(err)
                await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                hanz.sendText(ownerNumber, 'Xnxx Error : ' + err)
            }
            break
        case prefix+'ramalpasangan':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#ramalpasangan [kamu|pasangan]*\nContoh : *#ramalpasangan hanz|hanz*', id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
            hanz.reply(from, mess.wait, id)
            const kamu = argz[0]
            const pacar = argz[1]
            const rpmn = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn2 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn3 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn4 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn5 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn6 = rate[Math.floor(Math.random() * (rate.length))]
            const rjh2 = `*Hasil Pengamatan!*\nPasangan dengan nama ${kamu} dan ${pacar}\n\n➸ Cinta : ${rpmn}\n➸ Jodoh : ${rpmn2}\n➸ Kemiripan : ${rpmn3}\n➸ Kesukaan : ${rpmn4}\n➸ Kesamaan : ${rpmn5}\n➸ Kebucinan ${rpmn6}`
            hanz.reply(from, rjh2, id)
            limitAdd(serial)
            } else {
            await hanz.reply(from, 'Wrong Format!', id)
            }
            break
        case prefix+'artinama':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
                if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *${prefix}artinama [ Query ]*\nContoh : *${prefix}artinama hanz*`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artinama?nama=' + body.slice(9) + '&apikey=' + vhtearkey)
            if (resp.data.error) return hanz.reply(from, resp.data.error, id)
            const anm2 = `*「 ARTI NAMA 」*\n\n• Artinama : ${resp.data.result.hasil}`
            hanz.reply(from, anm2, id)
            await limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                hanz.sendText(ownerNumber, 'Artinama Error : ' + err)
           }
            break
        case prefix+'zodiak':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#zodiak [zodiak kamu]*\nContoh : *#zodiak scorpio*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/zodiak?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return hanz.reply(from, resp.data.error, id)
            const anm2 = `➸ Zodiak : ${resp.data.result.zodiak}\n➸ Ramalan : ${resp.data.result.ramalan}\n➸ Nomor Keberuntungan : ${resp.data.result.nomorKeberuntungan}\n➸ Motivasi : ${resp.data.result.motivasi}\n➸ Inspirasi : ${resp.data.result.inspirasi}`
            hanz.reply(from, anm2, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Zodiak tidak ditemukan')
                hanz.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           break
        case prefix+'caklontong':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/funkuis&apikey=' + vhtearkey)
            if (resp.data.error) return hanz.reply(from, resp.data.error, id)
            const anm2 = `➸ Soal : ${resp.data.result.soal}\n➸ Deskripsi : ${resp.data.result.desk}\n➸ Poin : ${resp.data.result.poin}`
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            hanz.reply(from, anm2, id)
            hanz.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            hanz.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            hanz.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            hanz.reply(from, jwban, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                hanz.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           break
         case prefix+'tebakgambar':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/tebakgambar&apikey=' + vhtearkey)
            if (resp.data.error) return hanz.reply(from, resp.data.error, id)
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            hanz.sendFileFromUrl(from, resp.data.result.soalImg, 'tebakgambar.jpg', '_Silahkan Jawab Maksud Dari Gambar Ini_', id)
            hanz.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            hanz.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            hanz.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            hanz.reply(from, jwban, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                hanz.sendText(ownerNumber, 'Tebak Gambar Error : ' + err)
           }
           break
         case prefix+'family100':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/family100&apikey=' + vhtearkey)
            if (resp.data.error) return hanz.reply(from, resp.data.error, id)
            const anm2 = `➸ Soal : ${resp.data.result.soal}\n_Silahkan DiJawab_`
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            hanz.reply(from, anm2, id)
            hanz.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            hanz.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            hanz.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            hanz.reply(from, jwban, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                hanz.sendText(ownerNumber, 'Family100 Error : ' + err)
           }
           break
        case prefix+'heroml':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#heroml [nama hero]*\nContoh : *#heroml akai*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/herodetail?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return hanz.reply(from, resp.data.error, id)
            const anm2 = `➸ Title : ${resp.data.result.title}\n➸ Quotes : ${resp.data.result.quotes}\n➸ Info : ${resp.data.result.info}\n➸ Atribut : ${resp.data.result.attributes}`
            hanz.sendFileFromUrl(from, resp.data.result.pictHero, 'hero.jpg', anm2, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Hero tidak ditemukan')
                hanz.sendText(ownerNumber, 'Heroml Error : ' + err)
           }
            break
        case prefix+'nomorhoki':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#nomorhoki [no hp kamu]*\nContoh : *#nomorhoki 0895384009405*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/nomerhoki?no=' + body.slice(11) + '&apikey=' + vhtearkey)
            if (resp.data.error) return hanz.reply(from, resp.data.error, id)
            const anm2 = `➸ Hasil :\n ${resp.data.result.hasil}`
            hanz.reply(from, anm2, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Nomor Hoki tidak ditemukan')
                hanz.sendText(ownerNumber, 'Nomorhoki Error : ' + err)
           }
            break
        case prefix+'artimimpi':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#artimimpi [mimpi]*\nContoh : *#artimimpi ular*', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artimimpi?query=' + body.slice(10) + '&apikey=' + vhtearkey)
            if (resp.data.error) return hanz.reply(from, resp.data.error, id)
            const anm2 = `➸ Artimimpi : ${resp.data.result.hasil}`
            hanz.reply(from, anm2, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Mimpi tidak ditemukan')
                hanz.sendText(ownerNumber, 'Artimimpi Error : ' + err)
           }
            break
        case prefix+'wiki':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *#wiki [ Query ]*\nContoh : *#wiki asu*`, id)
            const queryz_ = body.slice(6)
            const wiki = await axios.get(`https://api.vhtear.com/wikipedia?query=${queryz_}&apikey=${vhtearkey}`)
            if (wiki.data.error) {
                hanz.reply(from, wiki.data.error, id)
            } else {
                hanz.sendFileFromUrl(from, wiki.data.result.ImgResult, '', `*「 WIKI 」*\n\n➸ *Query* : ${queryz_}\n\n➸ *Result* : ${wiki.data.result.Info}`, id)
                await limitAdd(serial)
            }
		break
        case prefix+'kbbi':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *#kbbi [ Query ]*\nContoh : *#kbbi asu*`, id)
            const kbbl = body.slice(6)
            const kbbl2 = await axios.get(`https://api.vhtear.com/kbbi?query=${kbbl}&apikey=${vhtearkey}`)

            if (kbbl2.data.error) {
                hanz.reply(from, kbbl2.data.error, id)
            } else {
                hanz.sendText(from, `*「 KBBI 」*\n\n➸ *Query* : ${kbbl}\n\n➸ *Result* : ${kbbl2.data.result.hasil}`, id)
                await limitAdd(serial)
            }
            break
        case prefix+'googleimage':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
            const qwery = argz[1]
            const jum = argz[2]
            if(!qwery) return await hanz.reply(from, `Kirim perintah *#googleimage [ |Query|Jumlah ]*, contoh = #googleimage |loli|3`, id)
            if(!jum) return await hanz.reply(from, `Jumlah gambar diperlukan, contoh = #googleimage |loli|3`, id)
            if(jum >= 5) return await hanz.reply(from, 'Jumlah terlalu banyak! Max 4', id)
            var gis = require('g-i-s');
            var opts = {
                searchTerm: qwery
                };
                gis(opts, logResults);
                    
                function logResults(error, results) {
                    if (error) {
                        hanz.reply(from, 'Maaf, Fitur Sedang Error', id)
                    } else {
                        const item = results.slice(0, jum)
                        item.forEach(async(res) => {
                        console.log(res)
                        const yurl = await urlShortener(res.url)
                        hanz.sendImage(from, res.url, null, `➸ Link : ${yurl}\n➸ Image size : ${res.height} x ${res.width}`)  
                        limitAdd(serial) 
                        })
                    }
                }
            }
            break
        case prefix+'sandwriting': 
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1)  return hanz.reply(from, 'Kirim perintah *#sandwriting [ Teks ]*\nContoh *#sandwriting hanz Cantik*', id)
            const swrt = body.slice(13)
            try {
            const swrt2 = await axios.get('https://api.vhtear.com/sand_writing?text1=' + swrt + '&apikey=' + vhtearkey)
            const { imgUrl } = swrt2.data.result
            const swrt3 = `*「 SAND WRITING 」*

*Text : ${swrt}*`
            const pictk = await bent("buffer")(imgUrl)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            hanz.sendImage(from, base64, swrt3)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             hanz.sendText(ownerNumber, 'Sand Writing Error : ' + err)
           }
          break
         case prefix+'tahta':
             if(isReg(obj)) return
             if(cekumur(cekage)) return
             if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
             const jreng = body.slice(7)
             if (!jreng) return hanz.reply(from, 'Kirim perintah *#tahta [teks]*\n\nContoh *#tahta hanz*', id)
             if (jreng.length > 7) return hanz.reply(from, 'Maksimal 7 Huruf!', id)
             hanz.sendText(from, '_Sedang diproses, mohon tunggu sebentar!..._', id)
             await hanz.sendFileFromUrl(from, `https://api.vhtear.com/hartatahta?text=${jreng}&apikey=${vhtearkey}`,`${jreng}.jpg`,`Harta Tahta ${jreng}`, id)        
             await limitAdd(serial)
             break
        case prefix+'resepmasakan':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1)  return hanz.reply(from, 'Kirim perintah *#resepmasakan [optional]*\nContoh *#resepmasakan rawon*', id)
            argz= body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const rmk = await slicedArgs.join(' ')
            console.log(rmk)
            try {
            const resp = await axios.get('https://api.vhtear.com/resepmasakan?query=' + rmk + '&apikey=' + vhtearkey)
            const { bahan, cara, image, title  } = resp.data.result
            const rmk3 = `*Resep Ditemukan!*
➸ *Judul:* ${title}
➸ *Bahan:* ${bahan}
➸ *Cara:* ${cara}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            hanz.sendImage(from, base64, title, rmk3)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Resep tidak ditemukan')
             hanz.sendText(ownerNumber, 'Resepmasakan Error : ' + err)
           }
           break
        case prefix+'twitterstalk':
        case prefix+'twtstalk':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1)  return hanz.reply(from, 'Kirim perintah *#twtstalk @username*\nContoh *#twtstalk @miakhalifah*', id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const twstalk = await slicedArgs.join(' ')
            console.log(twstalk)
            try {
            const twstalk2 = await axios.get('http://melodicxt.herokuapp.com/api/twtprofile?user=' + twstalk + '&apiKey=' + melodickey)
            const { created_at, user } = twt.result[0]
	    const twtz = `*「 TWITTER PROFILE 」*

• *Username:* @${user.screen_name}
• *Nama:* ${user.name}
• *Deskripsi:* ${user.description}
• *Pengikut:* ${user.followers_count}
• *Mengikuti*: ${user.friends_count}
• *Jumlah Favorite:* ${user.favourites_count}
• *Jumlah Status:* ${user.statuses_count}
• *Dibuat:* ${created_at}
• *Link:* https://twitter.com/${user.screen_name}`

            const pictk = await bent("buffer")(user.profile_image_url)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            hanz.sendImage(from, base64, name, twtz)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             hanz.sendText(ownerNumber, 'Twitter Error : ' + err)
           }
          break
        case prefix+'igstalk':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1)  return hanz.reply(from, 'Kirim perintah *#igstalk @username*\nContoh *#igstalk duar_amjay*', id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const istalk = await slicedArgs.join(' ')
            console.log(istalk)
            try {
            const istalk2 = await axios.get('https://api.vhtear.com/igprofile?query=' + istalk + '&apikey=' + vhtearkey)
            const { username, biography, follow, follower, full_name, picture, post_count, is_private } = istalk2.result
	    const istalk3 = `*「 INSTAGRAM PROFILE 」*

• *Username:* @${username}
• *Nama:* ${full_name}
• *Deskripsi:* ${biography}
• *Pengikut:* ${follower}
• *Mengikuti*: ${follow}
• *Jumlah Postingan:* ${post_count}
• *Private:* ${is_private}
• *Link:* https://instagram.com/${username}`
            
            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            hanz.sendImage(from, base64, username, istalk3)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             hanz.sendText(ownerNumber, 'Igstalk Error : ' + err)
           }
          break
        case prefix+'tiktokstalk':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1)  return hanz.reply(from, 'Kirim perintah *#tiktokstalk @username*\nContoh *#tiktokstalk @duar_amjay*', id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const tstalk = await slicedArgs.join(' ')
            console.log(tstalk)
            try {
            const tstalk2 = await axios.get('https://api.vhtear.com/tiktokprofile?query=' + tstalk + '&apikey=' + vhtearkey)
            const { username, bio, follow, follower, title, like_count, video_post, description, picture, url_account } = tstalk2.data.result
            const tiktod = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Judul:* ${title}
➸ *Bio:* ${bio}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *Jumlah Like*: ${like_count}
➸ *Jumlah Postingan:* ${video_post}
➸ *Deskripsi:* ${description}
➸ *Link:* ${url_account}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            hanz.sendImage(from, base64, title, tiktod)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             hanz.sendText(ownerNumber, 'Error Tiktokstalk : '+ err)
           }
          break
        case prefix+'smulestalk':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#smulestalk [@username]*\nContoh : *#smulestalk loli*', id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const sstalk = await slicedArgs.join(' ')
            console.log(sstalk)
            try {
            const sstalk2 = await axios.get('https://api.vhtear.com/smuleprofile?query=' + sstalk + '&apikey=' + vhtearkey)
            const { username, full_name, follower, follow, biography, is_vip, picture, recording } = sstalk2.data.result
            const smule = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Full Name:* ${title}
➸ *Biografi:* ${biography}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *VIP*: ${is_vip}
➸ *Total Rekaman:* ${recording}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            hanz.sendImage(from, base64, title, smule)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             hanz.sendText(ownerNumber, 'Error Smulestalk : '+ err)
            }
          break
        case prefix+'':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isSimi) return hanz.reply(from, 'command/Perintah Simi belum di aktifkan di group ini!', id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *# [teks]*\nContoh : *# halo*')
            const que = body.slice(6)
            const sigo = await axios.get(`http://simsumi.herokuapp.com/api?text=${que}&lang=id`)
            const sigot = sigo.data
            hanz.reply(from, sigot.success, id)
            console.log(sigot)
            break
        case prefix+'ig': 
        case prefix+'instagram':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *#ig [ Link Instagram ]* untuk contoh silahkan kirim perintah *#readme*`)
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return hanz.reply(from, `Maaf, link yang kamu kirim tidak valid. [Invalid Link]`, id)
            await hanz.reply(from, mess.wait, id);
            instagram(args[1]).then(async(res) => {
                for (let i = 0; i < res.result.result.length; i++) {
		    if (res.result.result[i].includes('.mp4')) {
                    	var ext = '.mp4'
                    } else {
                        var ext = '.jpg'
               	    }
		    hanz.sendFileFromUrl(from, res.result.result[i], `ig.${ext}`, `*「 INSTAGRAM 」*`, id);
                    limitAdd(serial)
                }
            }).catch((err) => {
                console.log(err);
                hanz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'fb':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *#fb [ Link Fb ]*\nContoh : *#fb https://www.facebook.com/24609282673/posts/10158628585367674/*`, id)
            hanz.reply(from, mess.wait, id)
            facebook(args[1]).then(async(res) => {
                let { VideoUrl } = await res
                const epbe2 = `*「 FACEBOOK DOWNLOADER 」*\n➸ *Aplikasi*: Facebook\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                hanz.sendFileFromUrl(from, VideoUrl, `Facebook.mp4`, epbe2, id)
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                hanz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'waktu':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            await hanz.sendText(from, `Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
            await limitAdd(serial)
            break
        case prefix+'tiktok':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#tiktok [linkTiktok]*\nContoh : *#tiktok https://vt.tiktok.com/yqyjPX/*', id)
            hanz.reply(from, mess.wait, id)
            tiktok(args[1]).then(async(res) => {
                let { video, title, image, desk, dibuat, duration } = await res
                let ttiktok = `*「 TIKTOK DOWNLOADER 」*\n\n➸ *Judul* : ${title}\n➸ Deskripsi : ${desk}\n➸ Durasi : ${duration}\n➸ Dibuat : ${dibuat}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                hanz.sendFileFromUrl(from, image, 'thumb.jpg', ttiktok, id)
                await hanz.sendFileFromUrl(from, video, `${title}.mp4`, '', id).catch(() => hanz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                hanz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'smule':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#smule [linkSmule]*\nContoh : *#smule https://www.smule.com/p/767512225_3062360163*', id)
            hanz.reply(from, mess.wait, id)
            smule(args[1]).then(async(res) => {
                let { Type, title, url, image } = await res
                let tsmule = `*「 SMULE DOWNLOADER 」*\n\n➸ *Judul* : ${title}\n➸ *Type:* ${Type}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                hanz.sendFileFromUrl(from, image, 'thumb.jpg', tsmule, id)
                await hanz.sendFileFromUrl(from, url, `${title}.mp3`, '', id).catch(() => hanz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                hanz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'starmaker':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#starmaker [linkStarmaker]* untuk contoh silahkan kirim perintah *#readme*')
            hanz.reply(from, mess.wait, id)
            starmaker(args[1]).then(async(res) => {
                let { image, desc, url, title } = await res
                let tstarmaker = `*「 STARMAKER DOWNLOADER 」*\n\n➸ *Judul* : ${title}\n➸ *Deskripsi:* ${desc}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                hanz.sendFileFromUrl(from, image, 'thumb.jpg', tstarmaker, id)
                await hanz.sendFileFromUrl(from, url, `${title}.mp3`, '', id).catch(() => hanz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                hanz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'twitter':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *#twitter [ Link Twitter ]* untuk contoh silahkan kirim perintah *#readme*`)
            hanz.reply(from, mess.wait, id)
            twitter(args[1]).then(async(res) => {
                let { desk, urlVideo } = await res
                let ttwitter = `*「 TWITTER DOWNLOADER 」*\n\n➸ *Aplikasi:* Twitter\n➸ *Deskripsi:* ${desk}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                await hanz.sendFileFromUrl(from, urlVideo, `twit.mp3`, ttwitter, id).catch(() => hanz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                hanz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'maps':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#maps [optional]*, Contoh : *#maps Jakarta*')
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const mapz = await slicedArgs.join(' ')
            console.log(mapz)
            try {
            const mapz2 = await axios.get('https://mnazria.herokuapp.com/api/maps?search=' + mapz)
            const { gambar } = mapz2.data
            const pictk = await bent("buffer")(gambar)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            hanz.sendImage(from, base64, 'maps.jpg', `*Hasil Maps : ${mapz}*`)
            limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             hanz.sendText(ownerNumber, 'Error Maps : '+ err)
           }
          break
        case prefix+'joox':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isPremium) return await hanz.reply(from, `Nomor kamu belum terdaftar sebagai user premium. Hubungi owner untuk mendaftar!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            hanz.reply(from, mess.wait, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *#joox [ Optional ]*\nContoh : *#joox Alan Walker*`, id)
            hanz.reply(from, mess.wait, id)
            joox(args[1]).then(async(res) => {
                let { penyanyi, judul, album, linkImg, linkMp3, filesize, ext, duration } = await res
                let tjoox = `*「 JOOX DOWNLOADER 」*\n\n➸ *Penyanyi:* ${penyanyi}\n➸ *Judul:* ${judul}\n➸ *Album:* ${album}\n➸ *Ext:* ${ext}\n➸ *Size:* ${filesize}\n➸ *Durasi:* ${duration}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                hanz.sendImage(from, linkImg, judul, tjoox)
                hanz.sendFileFromUrl(from, linkMp3, `${judul}.${ext}`, '', id).catch(() => hanz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                hanz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'checkip':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#checkip [ipaddress]*\nContoh : *#checkip 182.0.144.145*', id)
            hanz.reply(from, mess.wait, id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const cekip = await slicedArgs.join(' ')
            console.log(cekip)
            try {
            const cekip2 = await axios.get('https://mnazria.herokuapp.com/api/check?ip=' + cekip)
            const { city, continent_name, country_name, ip, latitude, location, longitude, region_name } = cekip2.data
            const cekip3 = `*User Ditemukan!*

➸ *Kota:* ${city}
➸ *Benua:* ${continent_name}
➸ *Negara:* ${country_name}
➸ *Ip Address:* ${ip}
➸ *Garis Lintang:* ${latitude}
➸ *Kode Telepon:* +${location.calling_code}
➸ *Ibu Kota:* +${location.capital}
➸ *Bahasa:* +${location.languages[0].name}
➸ *Garis Bujur:* ${longitude}
➸ *Wilayah:* +${region_name}`

            const pictk = await bent("buffer")(location.country_flag)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            hanz.sendImage(from, base64, city, cekip3)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await hanz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             hanz.sendText(ownerNumber, 'Error Check IP : '+ err)
           }
          break
        /*case prefix+'nhentai':
        case prefix+'nh':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return hanz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (args.length === 2) {
                const nuklir = body.split(' ')[1]
                hanz.reply(from, mess.wait, id)
                const cek = await nhentai.exists(nuklir)
                if (cek === true)  {
                    try {
                        const api = new API()
                        const pic = await api.getBook(nuklir).then(book => {
                            return api.getImageURL(book.cover)
                        })
                        const dojin = await nhentai.getDoujin(nuklir)
                        const { title, details, link } = dojin
                        const { parodies, tags, artists, groups, languages, categories } = await details
                        var teks = `*Title* : ${title}\n\n*Parodies* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artists* : ${artists.join(', ')}\n\n*Groups* : ${groups.join(', ')}\n\n*Languages* : ${languages.join(', ')}\n\n*Categories* : ${categories}\n\n*Link* : ${link}`
                        exec('nhentai --id=' + nuklir + ` -P mantap.pdf -o ./hentong/${nuklir}.pdf --format `+ `${nuklir}.pdf`, (error, stdout, stderr) => {
                            hanz.sendFileFromUrl(from, pic, 'hentod.jpg', teks, id).then(() => 
                            hanz.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id)).catch(() => 
                            hanz.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id))
                            if (error) {
                                console.log('error : '+ error.message)
                                return
                            }
                            if (stderr) {
                                console.log('stderr : '+ stderr)
                                return
                            }
                            console.log('stdout : '+ stdout)
                            })
                    } catch (err) {
                        hanz.reply(from, '[❗] Terjadi kesalahan, mungkin kode nuklir salah', id)
                    }
                } else {
                    hanz.reply(from, '[❗] Kode nuklir Salah!')
                }
            } else {
                hanz.reply(from, '[ WRONG ] Kirim perintah *#nhentai [kode]* untuk contoh kirim perintah *#readme*')
            }
            break*/
        case prefix+'brainly':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return hanz.reply(from, 'Max 10!', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                hanz.reply(from, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            hanz.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
                            limitAdd(serial)
                        } else {
                            hanz.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                            limitAdd(serial)
                        }
                    })
                })
            } else {
                hanz.reply(from, 'Usage :\n!brainly [pertanyaan] [.jumlah]\n\nEx : \n!brainly NKRI .2', id)
            }
            break
        case prefix+'math':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, '[❗] Kirim perintah *#math [ Angka ]*\nContoh : #math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /')
            const mtk = body.slice(6)
            if (typeof Math_js.evaluate(mtk) !== "number") {
            hanz.reply(from, `"${mtk}", bukan angka!\n[❗] Kirim perintah *#math [ Angka ]*\nContoh : #math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, id)
            limitAdd(serial)
        } else {
            hanz.reply(from, `*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`, id)
        }
        break
        case prefix+'wait':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                hanz.reply(from, 'Searching....', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                    if (resolt.docs && resolt.docs.length <= 0) {
                        hanz.reply(from, 'Maaf, saya tidak tau ini anime apa', id)
                    }
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                        teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    hanz.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                        hanz.reply(from, teks, id)
                        limitAdd(serial)
                    })
                })
                .catch(() => {
                    hanz.reply(from, 'Error !', id)
                })
            } else {
                hanz.sendFileFromUrl(from, tutor, 'Tutor.jpg', 'Neh contoh mhank!', id)
            }
            break
        case prefix+'textmaker':
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                argz = body.trim().split('|')
                hanz.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                if ((isMedia || isQuotedImage) && argz.length >= 2) {
                const top = argz[1]
                const bott = argz[2]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await custom(getUrl, top, bott)
                await hanz.sendFile(from, ImageBase64, 'image.png','neh...')
                await limitAdd(serial)
                } else {
                await hanz.reply(from, 'Wrong Format!', id)
                }
                break
        case prefix+'quotemaker':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            argz = body.trim().split('|')
            if (argz.length >= 4) {
                hanz.reply(from, mess.wait, id)
                const quotes = argz[1]
                const author = argz[2]
                const theme = argz[3]
                await quotemaker(quotes, author, theme).then(amsu => {
                    limitAdd(serial)
                    hanz.sendFile(from, amsu, 'quotesmaker.jpg','neh...').catch(() => {
                       hanz.reply(from, mess.error.Qm, id)
                    })
                })
            } else {
                hanz.reply(from, 'Usage: \n#quotemaker |teks|watermark|theme\n\nEx :\n#quotemaker |ini contoh|bicit|random', id)
            }
            break
        case prefix+'listchannel':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            hanz.reply(from, listChannel, id)
            break
        case prefix+'jadwaltv':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#jadwalTv [channel]*', id)
            const query = body.slice(10).toLowerCase()
            const jadwal = await jadwalTv(query)
            hanz.reply(from, jadwal, id)
            break
        case prefix+'jadwaltvnow':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            
            await limitAdd(serial)
            const jadwalNow = await axios.get('http://melodicxt.herokuapp.com/api/jadwaltvnow?apiKey='+melodickey)
            hanz.reply(from, `Jam : ${jadwalNow.data.jam}\n\nJadwalTV : ${jadwalNow.data.jadwalTV}`, id)
            break
        case prefix+'nulis':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#nulis [teks]*, contoh *#nulis aku bukan boneka*', id)
            const ngettik = body.slice(7)
            const ngetikk = await axios.get('http://melodicxt.herokuapp.com/api/joki-nulis?text='+ ngettik+'&apiKey='+ melodickey)
            if (ngetikk.data.error) return hanz.reply(from, ngetikk.data.error, id)
            hanz.sendFileFromUrl(from, ngetikk.data.result, 'nulis.jpg', '', id)
            await limitAdd(serial)
            break
        case prefix+'inu':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            hanz.sendFileFromUrl(from, kya, 'Dog.jpeg', 'Inu')
            await limitAdd(serial)
            break
        case prefix+'qrcode':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if(!args.lenght >= 2) return
            let qrcodes = body.slice(8)
            await hanz.sendFileFromUrl(from, `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrcodes}`, 'gambar.png', 'Process sukses!')
            await limitAdd(serial)
            break
        case prefix+'ptl':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg","https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg","https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg","https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg","https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg","https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg","https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg","https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg","https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg","https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg","https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg","https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg","https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg","https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg","https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg","https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg","https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg","https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg","https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg","https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg","https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg","https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg","https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg","https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg","https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg","https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg","https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg","https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg","https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
            let pep = pptl[Math.floor(Math.random() * pptl.length)]
            hanz.sendFileFromUrl(from, pep, 'pptl.jpg', 'Follow ig : https://www.instagram.com/ptl_repost untuk mendapatkan penyegar timeline lebih banyak', message.id)
            await limitAdd(serial)
            break
        case prefix+'neko':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            hanz.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
            await limitAdd(serial)
            break
        case prefix+'pokemon':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            q7 = Math.floor(Math.random() * 890) + 1;
            hanz.sendFileFromUrl(from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png','Pokemon.png',)
            await limitAdd(serial)
            break
        case prefix+'quote':
        case prefix+'quotes':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const quotez2 = await axios.get('https://hanz-api.herokuapp.com/api/randomquotes?apikey=' +  tobzkey)
            hanz.reply(from, `➸ *Quotes* : ${quotez2.data.quotes}\n➸ *Author* : ${quotez2.data.author}`, id)
            await limitAdd(serial)
            break
        case prefix+'lirik':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return hanz.reply(from, 'Kirim perintah *#lirik [optional]*, contoh *#lirik aku bukan boneka*', id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            hanz.reply(from, lirik, id)
            await limitAdd(serial)
            break
        case prefix+'chord':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return hanz.reply(from, 'Kirim perintah *#chord [query]*, contoh *#chord aku bukan boneka*', id)
            const query__ = body.slice(7)
            const chord = await axios.get('https://hanz-api.herokuapp.com/api/chord?q='+ query__+'&apikey='+ tobzkey)
            if (chord.data.error) return hanz.reply(from, chord.data.error, id)
            hanz.reply(from, chord.data.result, id)
            await limitAdd(serial)
            break
            case prefix+'quoteit':
	case prefix+'qouteit':
	if (isBanned) return await hanz.reply(from, `Maaf ${pushname}, Nomor kamu telah dibanned!`, id)
   if (args.length === 1) return hanz.reply(from, 'authornya mana??', id)
   hanz.reply(from, mess.wait, id)
   argz = body.trim().split('|')
	const tqt = body.slice(9)
	const qtny = `https://terhambar.com/aw/qts/proses.php?kata=${tqt}&author=${pushname}&tipe=random&font=./font/font4.otf&size=40`
	hanz.sendFileFromUrl(from, qtny, 'quotes.jpg', 'Neh..', id)
	break
			case prefix+'tttp':
        if (args.length === 1) return hanz.reply(from, 'Teksnya mana??', id)
			hanz.reply(from, mess.wait, id)
                try
                {
                    const string = body.toLowerCase().includes('#ttp') ? body.slice(5) : body.slice(5)
                    if(args)
                    {
                        if(quotedMsgObj == null)
                        {
                            const gasMake = await getStickerMaker(string)
                            if(gasMake.status == true)
                            {
                                try{
                                    await hanz.sendImageAsSticker(from, gasMake.base64)
                                }catch(err) {
                                    await hanz.reply(from, 'Gagal membuat.', id)
                                } 
                            }else{
                                await hanz.reply(from, gasMake.reason, id)
                            }
                        }else if(quotedMsgObj != null){
                            const gasMake = await getStickerMaker(quotedMsgObj.body)
                            if(gasMake.status == true)
                            {
                                try{
                                    await hanz.sendImageAsSticker(dari, gasMake.base64)
                                }catch(err) {
                                    await hanz.reply(from, 'Gagal membuat.', id)
                                } 
                            }else{
                                await hanz.reply(from, gasMake.reason, id)
                            }
                        }
                       
                    }else{
                        await hanz.reply(from, 'Tidak boleh kosong.', id)
                    }
                }catch(error)
                {
                    console.log(error)
                }
            break
        
            case prefix+'textgaming':
	case prefix+'teksgaming':
       if (args.length === 1) return hanz.reply(from, 'Teks nya mana??', id)
	   hanz.reply(from, mess.wait, id)
		const gamenya = body.slice(12)
		 const gaming = await fetch(`https://api-jojo.herokuapp.com/api/gaming?text=${gamenya}`)
         const gamnya = await gaming.json()
         hanz.sendFileFromUrl(from, gamnya.result, 'gaming.jpg', 'Neh..', id)
         break
         case prefix+'textwroom':
	case prefix+'tekswroom':
       if (args.length === 1) return hanz.reply(from, 'Teks nya mana??', id)
		const wroomnya = `https://hanzz.my.id/api/flamingtext/wroom?text=${body.slice(11)}`
		hanz.sendFileFromUrl(from, wroomnya, 'wroom.jpg', 'Anjay bah', id)
		break
        case prefix+'listdaerah':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const listDaerah = await axios.get('https://hanz-api.herokuapp.com/api/daerah?apikey='+ tobzkey)
            hanz.reply(from, listDaerah.data.result, id)
            await limitAdd(serial)
            break
            case prefix+'pc':
             if (args.length == 0) return hanz.reply(from, `Untuk Pribadi Chat, Silahkan ketik #pc [pesannya]`, id)
             argz = body.trim().split('|')
			  const poso = arg[1]
			  hanz.sendText(pengirim, `${poso}\n\nhanz BOT`)
			  await hanz.reply(from, 'Silahkan cek pesan Bot', id)
			  break
            case prefix+'promoteme':
                if (!isGroupMsg) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
                if (!isOwner) return await hanz.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
                if (!isBotGroupAdmins) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
                    await hanz.promoteParticipant(groupId, pengirim)
                    await hanz.sendTextWithMentions(from, `Perintah diterima, menambahkan @${pengirim} sebagai admin.`)
                    break
            case prefix+'demoteme':
                if (!isGroupMsg) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
                if (!isOwner) return await hanz.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
                if (!isBotGroupAdmins) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
                    await hanz.demoteParticipant(groupId, pengirim)
                    await hanz.sendTextWithMentions(from, `Perintah diterima, menghapus @${pengirim} sebagai admin.`)
                    break
            case prefix+'bikingrup':
                if (!isOwner) return await hanz.reply(from, `Perintah ini hanya bisa digunakan oleh super owner bot`, id)
                argz = body.trim().split('|')
                    hanz.reply(from, mess.wait, id)
                    const gcname = arg[1]
                    hanz.createGroup(gcname, ownerNumber)
                    await hanz.reply(from, 'Group Created ✨️', id)
                    break
        case prefix+'slap':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const slap = arg.split(' ')[0]
            const person = author.replace('@c.us', '')
            await hanz.sendGiphyAsSticker(from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
            hanz.sendTextWithMentions(from, '@' + person + ' *slapped* ' + slap)
            limitAdd(serial)
            break
        case prefix+'cerpen': // hanzZ
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const cerpen = await get.get('https://hanzz.herokuapp.com/api/cerpen').json()
            hanz.reply(from, `• *Cerpen*: ${cerpen.result}`, id)
            break
        case prefix+'puisi': // hanzZ
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const puisi = await get.get('https://hanzz.herokuapp.com/api/puisi1').json()
            hanz.reply(from, `• *Puisi*: ${puisi.result}`, id)
            break
        case prefix+'puisi2': // hanzZ
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const puisi2 = await get.get('https://hanzz.herokuapp.com/api/puisi2').json()
            hanz.reply(from, `• *Puisi*: ${puisi2.result}`, id)
            break
        case prefix+'puisi3': // hanzZ
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return hanz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const puisi3 = await get.get('https://hanzz.herokuapp.com/api/puisi3').json()
            hanz.reply(from, `• *Puisi*: ${puisi3.result}`, id)
            break
        // ADMIN & OWNER
        case 'cekprefix':
            hanz.sendText(from, `Prefix yang sedang digunakan *「 ${prefix} 」*`)
            break
        case prefix+'setprefix':
            if(!isOwner) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner hanz!`, id)
            if (args.length === 1) return hanz.reply(from, `Kirim perintah *${prefix}setprefix [ NEW PREFIX ]*`, id)
            prefix = args[1]
            hanz.sendText(from, `Berhasil Mengganti Prefix Ke *「* ${prefix} *」*`)
            break
        case prefix+'addbadword':
            if (!isAdmin) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin hanz!`, id)
            if (!args.length >= 1) return hanz.reply(from, `Masukkan kata kasar yang akan di blacklist `, id) 
            const word = body.slice(12)
            var cek = dbbadword.includes(word);
            if(cek){
                return hanz.reply(from, `Badword Sudah Ada Di Database`, id)
            } else { 
                dbbadword.push(word)
                fs.writeFileSync('./lib/database/katakasar.json', JSON.stringify(dbbadword))
                hanz.reply(from, `Success Menambahkan Blacklist Badword\nTotal Data Badword Sekarang : *${dbbadword.length - 1}*`, id)
            }
            break
        case prefix+'delbadword':
            if (!isOwner) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner hanz!`, id)
                const delbd = dbbadword.indexOf(body.slice(12))
                dbbadword.splice(delbd, 1)
                fs.writeFileSync('./lib/database/katakasar.json', JSON.stringify(dbbadword))
                hanz.reply(from, `Success Menghapus Badword!`, id)
            break
        case prefix+'listbadword':
            if (!isAdmin) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin hanz!`, id)
                const bad = fs.readFileSync('./lib/database/katakasar.json')
                const liste = JSON.parse(bad)
                let listz = '*「 LIST BADWORD 」*\n'
                listz += `*Total : ${liste.length}*\n`
                let nomre = 1
                     for (let i = 0; i < liste.length; i++){
                        listz += `\n*${nomre}.* ${liste[i]}`
                        nomre++
                    }
                    hanz.sendText(from, listz) 
                    break
        case prefix+'bc': // KASIH CREDIT DONG KALO COPAS
            if (!isOwner) return hanz.reply(from, `Perintah ini hanya untuk Owner hanz`, id)
                bctxt = body.slice(4)
                txtbc = `❉──────────────────❉\n       𝙃𝙖𝙣𝙯 𝘽𝙊𝙏 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏\n❉──────────────────❉\n\n${bctxt}`
                const semuagrup = await hanz.getAllChatIds();
                if(quotedMsg && quotedMsg.type == 'image'){
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    for(let grupnya of semuagrup){
                        var cekgrup = await hanz.getChatById(grupnya)
                        if(!cekgrup.isReadOnly) hanz.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
                    }
                    hanz.reply('Broadcast sukses!')
                }else{
                    for(let grupnya of semuagrup){
                        var cekgrup = await hanz.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) hanz.sendText(grupnya, txtbc)
                    }
                            hanz.reply('Broadcast Success!')
                }
                break
                case prefix+'shutdown':
                                if (!isOwner) return await hanz.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
                                return await hanz.reply(from, 'Baik Bot Segera Off', id)
                                    .then(async () => await hanz.kill())
                            break
        case prefix+'adminlist':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await hanz.sendTextWithMentions(from, mimin)
            break
        case prefix+'ownergroup':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const Owner_ = chat.groupMetadata.owner
            await hanz.sendTextWithMentions(from, `Owner Group : @${Owner_}`)
            break
        case prefix+'otagall': // FOR OWNER & ADMIN hanz
        case prefix+'omentionall':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner, !isAdmin) return hanz.reply(from, 'Perintah ini hanya untuk Owner hanz', id)
            const groupMek = await hanz.getGroupMembers(groupId)
            let heho = '╔══✪〘 Mention All 〙✪══\n'
            for (let i = 0; i < groupMek.length; i++) {
                heho += '╠➥'
                heho += ` @${groupMek[i].id.replace(/@c.us/g, '')}\n`
            }
            heho += '╚═〘 hanz BOT 〙'
            await sleep(2000)
            await hanz.sendTextWithMentions(from, heho)
            break
        case prefix+'tagall': // FOR GROUP ADMINS
        case prefix+'mentionall':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            const groupMem = await hanz.getGroupMembers(groupId)
            let hehe = '╔══✪〘 Mention All 〙✪══\n'
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '╠➥'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += '╚═〘 hanz KATO BOT 〙'
            await sleep(2000)
            await hanz.sendTextWithMentions(from, hehe)
            break
        case prefix+'ekickall':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya untuk Owner hanz', id)
            if (!isBotGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMem = await hanz.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (ownerNumber.includes(allMem[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await hanz.removeParticipant(groupId, allMem[i].id)
                }
            }
            hanz.reply(from, 'Success kick all member', id)
            break
        case prefix+'okickall':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya untuk Admin hanz', id)
            if (!isBotGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMeq = await hanz.getGroupMembers(groupId)
            for (let i = 0; i < allMeq.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMeq[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await hanz.removeParticipant(groupId, allMeq[i].id)
                }
            }
            hanz.reply(from, 'Succes kick all member', id)
            break
        case prefix+'kickall':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner group', id)
            if (!isBotGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMek = await hanz.getGroupMembers(groupId)
            for (let i = 0; i < allMek.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMek[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await hanz.removeParticipant(groupId, allMek[i].id)
                }
            }
            hanz.reply(from, 'Success kick all member', id)
            break
        case prefix+'leaveall':
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya untuk Owner hanz', id)
            const allChats = await hanz.getAllChatIds()
            const allGroups = await hanz.getAllGroups()
            for (let gclist of allGroups) {
                await hanz.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChats.length}`)
                await hanz.leaveGroup(gclist.contact.id)
            }
            hanz.reply(from, 'Succes leave all group!', id)
            break
        case prefix+'clearall':
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya untuk Owner hanz', id)
            const allChatz = await hanz.getAllChats()
            for (let dchat of allChatz) {
                await hanz.deleteChat(dchat.id)
            }
            hanz.reply(from, 'Succes clear all chat!', id)
            break
          
        case prefix+'oadd':
            const orang = args[1]
            if (!isGroupMsg) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return hanz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx', id)
            if (!isOwner, !isAdmin) return hanz.reply(from, 'Perintah ini hanya untuk Admin hanz', id)
            if (!isBotGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await hanz.addParticipant(from,`${orang}@c.us`)
            } catch {
                hanz.reply(from, mess.error.Ad, id)
            }
            break
        case prefix+'add':
            const orgh = body.slice(5)
            if (!isGroupMsg) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return hanz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx', id)
            if (!isGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await hanz.addParticipant(from,`${orgh}@c.us`)
            } catch {
                hanz.reply(from, mess.error.Ad, id)
            }
            break
        case prefix+'okick':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya untuk Owner hanz', id)
            if (!isBotGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return hanz.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *#okick* @tagmember', id)
            await hanz.sendText(from, `Perintah Owner diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, ownerNumber).includes(mentionedJidList[i])) return hanz.reply(from, mess.error.Sp, id)
                await hanz.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case prefix+'kick':
            if (!isGroupMsg) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return hanz.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *#kick* @tagmember', id)
            await hanz.sendText(from, `Perintah diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, groupAdmins).includes(mentionedJidList[i])) return hanz.reply(from, mess.error.Sp, id)
                await hanz.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case prefix+'oleave':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return hanz.reply(from, 'Perintah ini hanya untuk Admin hanz', id)
            await hanz.sendText(from,'hanz DIPERINTAHKAN KELUAR OLEH OWNER!!').then(() => hanz.leaveGroup(groupId))
            break
        case prefix+'leave':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            await hanz.sendText(from,'Sayonara').then(() => hanz.leaveGroup(groupId))
            break
        case prefix+'opromote':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return hanz.reply(from, 'Perintah ini hanya untuk Admin hanz', id)
            if (!isBotGroupAdmins) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return hanz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember', id)
            if (mentionedJidList.length >= 2) return hanz.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return hanz.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await hanz.promoteParticipant(groupId, mentionedJidList[0])
            await hanz.sendTextWithMentions(from, `Perintah Owner diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case prefix+'promote':
            if (!isGroupMsg) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return hanz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember', id)
            if (mentionedJidList.length >= 2) return hanz.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return hanz.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await hanz.promoteParticipant(groupId, mentionedJidList[0])
            await hanz.sendTextWithMentions(from, `Perintah diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case prefix+'odemote':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return hanz.reply(from, 'Perintah ini hanya untuk Admin hanz', id)
            if (!isBotGroupAdmins) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return hanz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#demote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return hanz.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return hanz.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await hanz.demoteParticipant(groupId, mentionedJidList[0])
            await hanz.sendTextWithMentions(from, `Perintah Owner diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case prefix+'demote':
            if (!isGroupMsg) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return hanz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#demote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return hanz.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return hanz.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await hanz.demoteParticipant(groupId, mentionedJidList[0])
            await hanz.sendTextWithMentions(from, `Perintah diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case prefix+'join':
            if (args.length === 1) return hanz.reply(from, 'Hanya Owner yang bisa memasukan Bot ke dalam Grup!', id)
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya untuk Owner hanz', id)
            const link = body.slice(6)
            const tGr = await hanz.getAllGroups()
            const minMem = 5
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await hanz.inviteInfo(link)
            if (!isLink) return hanz.reply(from, 'Ini link? 👊🤬', id)
            if (tGr.length > 256) return hanz.reply(from, 'Maaf jumlah group sudah maksimal!', id)
            if (check.size < minMem) return hanz.reply(from, 'Member group tidak melebihi 5, bot tidak bisa masuk', id)
            if (check.status === 200) {
                await hanz.joinGroupViaLink(link).then(() => hanz.reply(from, 'Bot akan segera masuk!'))
            } else {
                hanz.reply(from, 'Link group tidak valid!', id)
            }
            break
        case prefix+'odelete':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return hanz.reply(from, 'Perintah ini hanya untuk Admin hanz', id)
            if (!quotedMsg) return hanz.reply(from, 'Salah!!, kirim perintah *#delete [tagpesanbot]*', id)
            if (!quotedMsgObj.fromMe) return hanz.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            hanz.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case prefix+'delete':
            if (!isGroupMsg) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return hanz.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!quotedMsg) return hanz.reply(from, 'Salah!!, kirim perintah *#delete [tagpesanbot]*', id)
            if (!quotedMsgObj.fromMe) return hanz.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            hanz.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
            case prefix+'read':
                if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)                
                if (!quotedMsg) return hanz.reply(from, `Tolong Reply Pesan Bot`, id)
                if (!quotedMsgObj.fromMe) return hanz.reply(from, `Tolong Reply Pesan Bot`, id)
                try {
                    const reader = await hanz.getMessageReaders(quotedMsgObj.id)
                    let list = ''
                    for (let pembaca of reader) {
                    list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
                }
                    hanz.sendTextWithMentions(from, `Ngeread doangg lu anjg!! \n${list}`)
                } catch(err) {
                    console.log(err)
                    hanz.reply(from, `Maaf, Belum Ada Yang Membaca Pesan Bot atau Mereka Menonaktifkan Read Receipts`, id)    
                }
                break
        case prefix+'linkgroup':
            if (!isGroupMsg) return hanz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return hanz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return hanz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const namagcnye = chat.formattedTitle
            var gclink = await hanz.getGroupInviteLink(groupId)
            var linkgc  = `Link group : *${namagcnye}*\n\n ${gclink}`
            hanz.reply(from, linkgc, id)
            break
        case prefix+'resetlinkgroup':
            if (!isGroupMsg) return hanz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return hanz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return hanz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isGroupMsg) {
                await hanz.revokeGroupInviteLink(groupId);
                hanz.sendTextWithMentions(from, `Link group telah direset oleh admin @${sender.id.replace('@c.us', '')}`)
            }
            break
        case prefix+'getses':
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya untuk Owner hanz', id)            
            const sesPic = await hanz.getSnapshot()
            hanz.sendFile(from, sesPic, 'session.png', 'Nih boss', id)
            break
        case prefix+'adminhanz':
            let admn = `This is list of hanz Admin\nTotal : ${adminNumber.length}\n`
            for (let i of adminNumber) {
                admn += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await hanz.reply(from, admn, id)
            break
        case prefix+'limit':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (!isGroupMsg) return hanz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            var found = false
            const limidat = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
            for(let lmt of limidat){
                if(lmt.id === serial){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return hanz.reply(from, `Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
                    hanz.reply(from, `Sisa limit request anda tersisa : *${limitCounts}*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
                    found = true
                }
            }
            console.log(limit)
            console.log(limidat)
            if (found === false){
                let obj = {id: `${serial}`, limit:1};
                limit.push(obj);
                fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit, 1));
                hanz.reply(from, `Sisa limit request anda tersisa : *${limitCount}*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
            }
            break
        case prefix+'gift': // Hanya Admin & Owner hanz yang bisa gift Limit
            if (!isAdmin, !isOwner) return hanz.reply(from, `Maaf, perintah ini hanya dapat dilakukan oleh Admin hanz!`, id)
                    const nomerr = arg.split(' ')[0]
                    const jmla = arg.split(' ')[1]
                    if(!nomerr) return hanz.reply(from, `Masukkan nomor yang akan di gift, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift @62813118507151 15`, id)
                    let texta = nomerr.replace(/[-\s+@c.us]/g,'')
                    const cusz = texta + '@c.us'
                    if(!jmla) return hanz.reply(from, `Masukkan Jumlah gift quota, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift @62813118507151 15`, id)
                    if(jmla > 20) return await hanz.reply(from, `Maximal  20!`, id)
                        var found = false
                        Object.keys(limit).forEach((i) => {
                            if(limit[i].id == cusz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            limit[found].limit = Math.max(0, limit[found].limit);
                            if(limit[found].limit <= 20) return hanz.reply(from, `Kuota Limit pada nomor tersebut masih penuh\nUntuk gift pastikan kuota limit target sudah habis`, id)
                            if(limit[found].limit <= 0) { // JIKA LIMIT 0 MAKA BISA GIFT
                                return hanz.reply(from, `Kuota limit pada nomor tersebut sudah penuh!`, id)
                            }else{
                            limit[found].limit -= jmla
                            const updated = limit[found]
                            const result = `Gift kuota limit sukses dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
*「 GIFT KUOTA LIMIT 」*

• User : @${updated.id.replace('@c.us','')}
• Limit: ${limitCount-updated.limit}`
                            console.log(limit[found])
                            fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                            hanz.sendTextWithMentions(from, result)
                            }
                        } else {
                                hanz.reply(from, `Maaf, nomor itu tidak terdaftar di database!`, id)
                        }
                break
        case prefix+'eval':
            const q = args.join(' ')
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner hanz!', id)
            if (!q) return hanz.reply(from, 'Harap masukkan code JavaScript!', id)
            try {
                let evaled = await eval(q)
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                hanz.sendText(from, evaled)
            } catch (err) {
                hanz.reply(from, err, id)
            }
        break
        case prefix+'restart': // WORK IF YOU RUN USING PM2
            if(isOwner){
                hanz.sendText(from, '*[WARN]* Restarting ...')
                setting.restartState = true
                setting.restartId = chatId
                var obj = []
                //fs.writeFileSync('./lib/setting.json', JSON.stringify(obj, null,2));
                fs.writeFileSync('./lib/database/limit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/muted.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/msgLimit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(obj));
                const spawn = require('child_process').exec;
                function os_func() {
                    this.execCommand = function (command) {
                        return new Promise((resolve, reject)=> {
                        spawn(command, (error, stdout, stderr) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            resolve(stdout)
                        });
                    })
                }}
                var oz = new os_func();
                oz.execCommand('pm2 restart index').then(res=> {
                }).catch(err=> {
                    console.log("os >>>", err);
                })
            }
            break
        case prefix+'addadmin':
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner hanz!', id)
                for (let i = 0; i < mentionedJidList.length; i++) {
                adminNumber.push(mentionedJidList[i])
                fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                hanz.reply(from, 'Success Menambahkan Admin hanz!', id)
                }
            break             
        case prefix+'deladmin':
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner hanz!', id)
                let inq = adminNumber.indexOf(mentionedJidList[0])
                adminNumber.splice(inq, 1)
                fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                hanz.reply(from, 'Success Menghapus Admin hanz!', id)
            break
        
        case prefix+'block':
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner hanz!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await hanz.contactBlock(unblock).then((a)=>{
                    console.log(a)
                    hanz.reply(from, `Success block ${args[1]}!`, id)
                })
            }
            break
        case prefix+'unblock':
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner hanz!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await hanz.contactUnblock(unblock).then((a)=>{
                    console.log(a)
                    hanz.reply(from, `Success unblok ${args[1]}!`, id)
                })
            } 
            break
        case prefix+'setname':
            if (!isOwner) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner hanz!`, id)
                const setnem = body.slice(9)
                await hanz.setMyName(setnem)
                hanz.sendTextWithMentions(from, `Makasih Nama Barunya @${sender.id.replace('@c.us','')} 😘`)
            break
        case prefix+'setstatus':
            if (!isOwner) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner hanz!`, id)
                const setstat = body.slice(11)
                await hanz.setMyStatus(setstat)
                hanz.sendTextWithMentions(from, `Makasih Status Barunya @${sender.id.replace('@c.us','')} 😘`)
            break
        case prefix+'setprofilepic':
            if (!isOwner) return hanz.reply(from, `Perintah ini hanya bisa di gunakan oleh Owner hanz!`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await hanz.setProfilePic(imageBase64)
                hanz.sendTextWithMentions(`Makasih @${sender.id.replace('@c.us','')} Foto Profilenya 😘`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await hanz.setProfilePic(imageBase64)
                hanz.sendTextWithMentions(from, `Makasih @${sender.id.replace('@c.us','')} Foto Profilenya 😘`)
            } else {
                hanz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #setprofilepic`, id)
            }
            break
        case prefix+'getpic':
            if (!isGroupMsg) return hanz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            const texnugm = body.slice(8)
            const getnomber =  await hanz.checkNumberStatus(texnugm)
            const useriq = getnomber.id.replace('@','') + '@c.us'
                try {
                    var jnck = await hanz.getProfilePicFromServer(useriq)

                    hanz.sendFileFromUrl(from, jnck, `awok.jpg`)
                } catch {
                    hanz.reply(from, `Tidak Ada Foto Profile!`, id)
                }
            break
        case prefix+'ban':
            if (!isAdmin) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin hanz!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber).includes(mentionedJidList[i])) return hanz.reply(from,`Maaf ${pushname}, Kamu tidak bisa banned Admin hanz!`, id)
                banned.push(mentionedJidList[i])
                fs.writeFileSync('./lib/banned.json', JSON.stringify(banned))
                hanz.reply(from, `Succes ban target!`,id)
            }
            break
        case prefix+'unban':
            if (!isAdmin) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin hanz!', id)
                let inz = banned.indexOf(mentionedJidList[0])
                banned.splice(inz, 1)
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                hanz.reply(from, 'Unbanned User!', id)
            break
        case prefix+'listgroup':
                hanz.getAllGroups().then((res) => {
                let berhitung1 = 1
                let gc = `*This is list of group* :\n`
                for (let i = 0; i < res.length; i++) {
                    gc += `\n═════════════════\n\n*No : ${i+1}*\n*Nama* : ${res[i].name}\n*Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n*Tidak Spam* : ${res[i].notSpam}\n`
                }
                hanz.reply(from, gc, id)
            })
            break
        case prefix+'listbanned':
            let bened = `This is list of banned number\nTotal : ${banned.length}\n`
            for (let i of banned) {
                bened += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await hanz.reply(from, bened, id)
            break
        case prefix+'listblock':
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await hanz.reply(from, hih, id)
            break
        case prefix+'ping':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            const loadedMsg = await hanz.getAmountOfLoadedMessages()
            const botadmins = await hanz.iAmAdmin()
            const blockedd = await hanz.getBlockedIds()
            const chatIds = await hanz.getAllChatIds()
            const groups = await hanz.getAllGroups()
            const me = await hanz.getMe()
            const battery = await hanz.getBatteryLevel()
            const isCharging = await hanz.getIsPlugged()
            const timestamp = speed();
            const latensi = speed() - timestamp
            await hanz.reply(from, `*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗣𝗖 」*\nPenggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\nCPU: ${os.cpus()[0].model}\n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 」* :\n- *${loadedMsg}* Loaded Messages\n- *${chatIds.length - groups.length}* Total Chats\n  ├ *${groups.length}* Group Chats\n  └ *${chatIds.length}* Personal Chats\n- *${groups.length}* Groups Joined\n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗨𝗦𝗘𝗥 」*\n- *${pendaftar.length}* Registered User\n  ├ *${banned.length}* Banned User\n  ├ *${blockedd.length}* Blocked User\n  └ *${adminNumber.length}* Admin User\n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗗𝗘𝗩𝗜𝗖𝗘 」*\n${(`\n*Battery* : ${battery}% ${isCharging ? 'Lagi Di Cas...' : 'Ga Di Cas!'}\n${Object.keys(me.phone).map(key => `${key} : ${me.phone[key]}`).join('\n')}`.slice(1, -1))}\n\n\n*Speed:* ${latensi.toFixed(4)} _Second_`, id)
            break
        case prefix+'setgroupname':
            if (!isGroupMsg) return hanz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return hanz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return hanz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const namagrup = body.slice(14)
            let sebelum = chat.groupMetadata.formattedName
            let halaman = global.page ? global.page : await hanz.getPage()
            await halaman.evaluate((chatId, subject) =>
            Store.WapQuery.changeSubject(chatId, subject),groupId, `${namagrup}`)
            hanz.sendTextWithMentions(from, `Nama group telah diubah oleh admin @${sender.id.replace('@c.us','')}\n\n• Before: ${sebelum}\n• After: ${namagrup}`)
            break
        case prefix+'setgroupicon':
            if (!isGroupMsg) return hanz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return hanz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return hanz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await hanz.setGroupIcon(from, imageBase64)
                hanz.sendTextWithMentions(from, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await hanz.setGroupIcon(from, imageBase64)
                hanz.sendTextWithMentions(from, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else {
                hanz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #setgroupicon`, id)
            }
            break
            case prefix+'quotesen':
const qtos = await axios.get(`https://api.vhtear.com/quotes?apikey=${vhtearkey}`).then(res => {
    const fto = `Author : *${res.data.result.author}*\n\nQuotes : *${res.data.result.content}*`;
    hanz.sendText(from, fto, id)
})
break
        case prefix+'bugreport':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (args.length === 1) return hanz.reply(from, '[❗] Kirim perintah *#bugreport [teks]*\ncontoh : *#bugreport Permisi Owner, Ada bug pada command #otakudesu, Tolong diperbaiki*')
            const bug = body.slice(11)
            if(!bug) return
            if(isGroupMsg){
                hanz.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${bug}`)
                hanz.reply(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.' ,id)
            }else{
                hanz.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\n\n${bug}`)
                hanz.reply(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.', id)
            }
            break
            case prefix+'spekhp':
                    const speknya = await fetch(`https://api.vhtear.com/gsmarena?query=${body.slice(8)}&apikey=${vhtearkey}`)
                    const spek = await speknya.json()
                    hanz.sendFileFromUrl(from, spek.result.image, 'spek.jpg', `*Spekifikasi Hp* ${body.slice(8)} \n➸ *Nama HP* : ${spek.result.title} \n➸ *Spekifikasi* : ${spek.result.spec}`, id)
                    break
                    case prefix+'meme':
                        if ((isMedia || isQuotedImage) && args.length >= 2) {
                            const top = arg.split('|')[0]
                            const bottom = arg.split('|')[1]
                            const encryptMedia = isQuotedImage ? quotedMsg : message
                            const mediaData = await decryptMedia(encryptMedia, uaOverride)
                            const getUrl = await uploadImages(mediaData, false)
                            const ImageBase64 = await meme.custom(getUrl, top, bottom)
                            hanz.sendFile(from, ImageBase64, 'image.png', '', null, true)
                                .then(() => {
                                    hanz.reply(from, 'Ini makasih!',id)
                                })
                                .catch(() => {
                                    hanz.reply(from, 'Ada yang error!')
                                })
                        } else {
                            await hanz.reply(from, `Tidak ada gambar! Silahkan kirim gambar dengan caption ${prefix}meme <teks_atas> | <teks_bawah>\ncontoh: ${prefix}meme teks atas | teks bawah`, id)
                        }
                        break
         case prefix+'profile':
            if(isReg(obj)) return
            if(cekumur(cekage)) return
            if (isGroupMsg) {
                if (!quotedMsg) {
                    var block = blockNumber.includes(author)
                    var bend = banned.includes(author)
                    var sts = await hanz.getStatus(author)
                    var adm = isGroupAdmins
                    var donate = isAdmin
                    var ctt = await hanz.getContact(author)
                    const { status } = sts
                    var found = false
                    Object.keys(pendaftar).forEach((i) => {
                        if(pendaftar[i].id == author){
                            found = i
                        }
                    })
                    if (found !== false) {
                        pendaftar[found].id = author;
                        var registe = '✔'
                    } else {
                        var registe = '❌'
                    }
                    if (ctt == null) {
                    return await hanz.reply(from, `Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]`, id) 
                    } else {
                        const contact = ctt.pushname
                        const dpd = await hanz.getProfilePicFromServer(author)
                    if (dpd == undefined) {
                        var pfp = errorurl
                        } else {
                            var pfp = dpd
                        } 
                    if (contact == undefined) {
                        var namae = '*Tidak Ada Nama*' 
                    } else {
                        var namae = contact
                    } 
                        await hanz.sendContact(chatId, author)
                        hanz.sendFileFromUrl(from, pfp, 'pfp.jpg', `*「 PROFILE 」*\n\n• *Username: ${namae}*\n• *User Info: ${status}*\n*• Block : ${block}*\n*• Banned : ${bend}*\n• *Admin Group: ${adm}*\n• *Admin hanz: ${donate}*\n• *Registered User :* ${registe}`)
                    }
                } else if (quotedMsg) {
                    var qmid = quotedMsgObj.sender.id
                    var block = blockNumber.includes(qmid)
                    var bend = banned.includes(qmid)
                    var gpic = await hanz.getProfilePicFromServer(qmid)
                    var namae = quotedMsgObj.sender.name
                    var sts = await hanz.getStatus(qmid)
                    var ctt = await hanz.getContact(qmid)
                    var adm = isGroupAdmins
                    var donate = isAdmin
                    const { status } = sts
                    Object.keys(pendaftar).forEach((i) => {
                        if(pendaftar[i].id == qmid){
                            found = i
                        }
                    })
                    if (found !== false) {
                        pendaftar[found].id = qmid;
                        var registe = '✔'
                    } else {
                        var registe = '❌'
                    }
                    if (ctt == null) {
                    return await hanz.reply(from, `Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]`, id) 
                    } else {
                        const contact = ctt.pushname
                        const dpd = await hanz.getProfilePicFromServer(qmid)
                    if (dpd == undefined) {
                        var pfp = errorurl
                        } else {
                            var pfp = dpd
                        } 
                    if (contact == undefined) {
                        var namae = '*Tidak Ada Nama*' 
                    } else {
                        var namae = contact
                    } 
                    await hanz.sendContact(chatId, qmid)
                    hanz.sendFileFromUrl(from, pfp, 'pfp.jpg', `*「 PROFILE 」*\n\n• *Username: ${namae}*\n• *User Info: ${status}*\n*• Block : ${block}*\n*• Banned : ${bend}*\n• *Admin Group: ${adm}*\n• *Admin hanz: ${donate}*\n• *Registered User :* ${registe}`)
                    }
                }
            }
            break
            case 'assalamualaikum':
                case 'Assalamualaikum':
                hanz.sendPtt(from, './media/sam.mp3', id)
                break
    case prefix+'8':
                hanz.sendPtt(from, './media/ohayou.mp3', id)
                hanz.reply(from, 'Ohayo daling', id)
                break
            case 'konichiwa':
                hanz.sendPtt(from, './media/konichiwa.mp3',id)
                break
        
            case prefix+'7':
                hanz.sendPtt(from, './media/tarekses.mp3', id)
                break
            case prefix+'2':
                hanz.sendPtt(from, './media/sad.mp3', id)
                break
                case prefix+'9':
                    hanz.sendPtt(from, './media/fri.mp3', id)
                    break
                case 'goblok':
                    case 'Goblok':
                        case 'gblk':
                            case 'Gblk':
                hanz.sendPtt(from, './media/gobl.mp3', id)
                break
            case prefix+'1':
                hanz.sendPtt(from, './media/iri2.mp3', id)
                break
                case prefix+'0':
                    hanz.sendPtt(from, './media/mos.mp3', id)
                    break
                case prefix+'3':        
                hanz.sendPtt(from, './media/bangjago.mp3', id)
                break
                case prefix+'6':
                hanz.sendPtt(from, './media/pota.mp3', id)
                break
                case prefix+'4':
                hanz.sendPtt(from, './media/dj.mp3', id)
                break
                case prefix+'5':
                hanz.sendPtt(from, './media/fig.mp3', id)
                break
	// Fadhlur Owner of NotBot Bug? wa : wa.me/6281395771492
        case '#slot':
          const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
             hanz.sendText(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, id)
	    break
	//list menu
	case prefix+'listprem': {
                    if (!isOwner) return hanz.reply(from, 'Fitur ini hanya dapat digunakan oleh Owner bot')  
                    const num = fs.readFileSync('./lib/data/premium.json')
                    const liste = JSON.parse(num)
                    //const hasil = liste.replace(/@c.us/g,'')
                    let list = '💎 *Daftar Member Premium* 💎\n'
                    list += `*Total (${liste.length})*`
                    let nomre = 1
                        for (let i = 0; i < liste.length; i++){
                            list += `\n*${nomre}.* ${liste[i].replace(/[@c.us]/g,'')}`
                            nomre++
                        }
                        hanz.sendText(from, list) 
                    }
                    break   
        case prefix+'runtime':
            hanz.reply(from, `hanz telah aktif selama :\n${cts}`, id)
            break
            case prefix+'menu':
            const test0 = sender.id
            const nyoba2 = await hanz.getProfilePicFromServer(test0)
            if (nyoba2 == undefined) {
                var php2 = 'https://i.ibb.co/pbZB6z7/fc6b621c54fe.jpg'
                } else {
                var php2 = nyoba2
                }
            await hanz.sendFileFromUrl(from, php2, 'image.jpg', help(prefix, cts, pendaftar),id)
            
            break
           
        case prefix+'mggu':
        case prefix+'reffsound':
            hanz.reply(from, `
┏━───────────────╮  
╠➥𝗙𝗥𝗘 𝗗𝗝 𝗦𝗢𝗨𝗡𝗗
╠━───────────────
╠➥ ${prefix}1 = _DJ Sound irii 4menit_
╠➥ ${prefix}2 = _DJ Sound SAD :(_
╠➥ ${prefix}3 = _DJ Sound  BANG JAGO_
╠➥ ${prefix}4 = _DJ Sound ANIME_
╠➥ ${prefix}5 = _DJ Sound FIGURINHA_
╠➥ ${prefix}6 = _DJ Sound POTA_
╠➥ ${prefix}7 = _DJ Sound TARIK SIS_
╠➥ ${prefix}8 = _DJ Sound OHAYOU_
╠➥ ${prefix}9 = _DJ Sound FRYSSTEL DULU BOSS_
╠➥ ${prefix}0 = _DJ Sound Moshi_
┗━───────────────╯
` ,id)
            break
            
        case prefix+'hanzgroup':
            hanz.reply(from, `Link Group hanz : https://chat.whatsapp.com/F865lMgswzaJzQw0TCyTlEt\nJangan Lupa Join Ya Kak ${pushname}`, id)
            break
        case prefix+'groupmenu':
            hanz.sendText(from, groupcmd(prefix))
            break
        case prefix+'mediamenu':
            hanz.sendText(from, mediacmd(prefix))
            break
        case prefix+'funmenu':
            hanz.sendText(from, funcmd(prefix))
            break
        case prefix+'animemenu':
            hanz.sendText(from, animecmd(prefix))
            break
        case prefix+'kerangmenu':
            hanz.sendText(from, kerangcmd(prefix))
            break
        case prefix+'downloadmenu':
            hanz.sendText(from, downloadcmd(prefix))
            break
        case prefix+'othermenu':
            hanz.sendText(from, othercmd(prefix))
            break
        case prefix+'iklan':
            hanz.sendText(from, sewa())
            break
        case prefix+'adminmenu':
            if (!isAdmin) return hanz.reply(from, 'Perintah ini hanya untuk Admin hanz', id)
            hanz.sendText(from, admincmd(prefix))
            break
            case prefix+'animesaran':
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, animesaran(), id)
                break
            case prefix+'genreanime':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, genre(prefix), id)
                limitAdd(serial)
                break
            case prefix+'drama1':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, drama1(), id)
                limitAdd(serial)
                break
            case prefix+'drama2':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, drama2(), id)
                limitAdd(serial)
                break
            case prefix+'harem':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, harem(), id)
                limitAdd(serial)
                break 
            case prefix+'reverse':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, reverse(), id)
                limitAdd(serial)
                break
            case prefix+'isekai':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, isekai(), id)
                limitAdd(serial)
                break       
            case prefix+'comedi':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, comedi(), id)
                limitAdd(serial)
                break
            case prefix+'gromance':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, romance(), id)
                limitAdd(serial)
                break
            case prefix+'romancesad':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, romancesad(), id)
                limitAdd(serial)
                break
            case prefix+'romanceshoujo':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, romanceshoujo(), id)
                limitAdd(serial)
                break
            case prefix+'comedischool':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, comedischool(), id)
                limitAdd(serial)
                break
            case prefix+'action':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, action(), id)
                limitAdd(serial)
                break
            case prefix+'phsyco':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, phsyco(), id)
                limitAdd(serial)
                break
            case prefix+'samurai':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, samurai(), id)
                limitAdd(serial)
                break
            case prefix+'sport1':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, sport1(), id)
                limitAdd(serial)
                break
            case prefix+'sport2':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, sport2(), id)
                limitAdd(serial)
                break
            case prefix+'horor':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, horor(), id)
                limitAdd(serial)
                break
            case prefix+'mecha':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, mecha(), id)
                limitAdd(serial)
                break
            case prefix+'adventure':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, adventure(), id)
                limitAdd(serial)
                break
            case prefix+'schoollife':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, schoollife(), id)
                limitAdd(serial)
                break
            case prefix+'slicelife':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, slicelife(), id)
                limitAdd(serial)
                break
            case prefix+'fantasy':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, fantasy(), id)
                limitAdd(serial)
                break
            case prefix+'scifi':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, scifi(), id)
                limitAdd(serial)
                break
            case prefix+'trailer':
                if(isLimit(serial)) return
                if (!isGroupMsg) return hanz.reply(from, 'perintah ini hanya dapat digunakan di dalam grup', id)
                hanz.reply(from, trailer(), id)
                limitAdd(serial)
                break

        case prefix+'ownermenu':
            if (!isOwner) return hanz.reply(from, 'Perintah ini hanya untuk Owner hanz', id)
            hanz.sendText(from, ownercmd(prefix))
            break
        case prefix+'praymenu':
            hanz.sendText(from, praycmd(prefix))
            break
        case prefix+'nsfwmenu':
            if (!isGroupMsg) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return hanz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            hanz.sendText(from, nsfwcmd(prefix))
            break
        // INFORMATION
        case prefix+'donate':
            hanz.sendText(from, sumbang())
            break
        case prefix+'readme':
            hanz.sendText(from, readme(prefix))
            break
        case prefix+'info':
            hanz.sendText(from, info())
            break
            case 'ajg':
                case 'babi':
                case 'jancuk':
                case 'njim':
                case 'anying':
                case 'bgst':
                case 'bjir':
                case 'bgsd':
                case 'bangsad':
                case 'njer':
                case 'njir':
                case 'jembod':
                case 'amjink':
                case 'asw':
                case 'fuck':
                case 'fck':
                case 'bitch':
                    hanz.reply(from, `\n*「 WARNING 」*\nToxic detected\n\nMessage : ~*${chats}*~\nTo : *${pushname}*\n\n[❗] Hindari penggunaan kata toxic\n`, id)
                    break
                    case 'sayang':
        case 'sayank':
        case 'synk':
        case 'ynk':
        case 'syng':
        case 'syang':
        case 'yank':
        case 'syg':
            hanz.reply(from, `*「 JOMBLO DETECTOR 」*\n\nMessage : ~*${chats}*~\nTo : *${pushname}*\n\n[❗] tolong hargai yg jomblo\n`, id)
            break
            case prefix+'edotensei':   
            if (!isGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
                    if (!isBotGroupAdmins) return hanz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return hanz.reply(from, 'Fitur untuk menghapus member lalu menambahkan member kembali,kirim perintah #edotensei @tagmember', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return hanz.reply(from, mess.error.Ki, id)
                await hanz.removeParticipant(groupId, mentionedJidList[i])
                await sleep(3000)
                await hanz.addParticipant(from,`${mentionedJidList}`)
                hanz.sendText(from, ' *Mamposs TER-PRANK!* ')
            } 
            break 

        case prefix+'bahasa':
            hanz.sendText(from, bahasalist())
            break
            case prefix+'wa.me':
                case prefix+'wame':
                    await hanz.reply(from, `*Ini nomer wa lu tod ${pushname}*\n\n*wa.me/${sender.id.replace(/[@c.us]/g, '')}?text=Save+YA+sayang*\n\n*or*\n\n*api.whatsapp.com/send?phone=${sender.id.replace(/[@c.us]/g, '')}*`, id)
                    break
// By Gimenz
        case prefix+'about':
            hanz.reply(from, snk(), id)
            break
        default:
            //if (!isGroupMsg) return hanz.reply(from, 'Jika Ingin Menggunakan Bot Harap Masuk Ke Dalam Grup hanz, Link Ada Di Bio atau Bisa Mengetik #elainagroup!\nJika Ingin Sewa Bot atau Bikin Bot Harap Ketik *#iklan*', id)
            if (command.startsWith('#')) {
                hanz.reply(from, `Maaf ${pushname}, Command *${args[0]}* Tidak Terdaftar Di Dalam *#menu*!`, id)
            }
            await hanz.sendSeen(from) 
            }
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
        //hanz.kill().then(a => console.log(a))
    }
}

