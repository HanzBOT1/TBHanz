const { create, Client } = require('@open-wa/wa-automate')
const welcome = require('./lib/welcome')
const left = require('./lib/left')
const cron = require('node-cron')
const color = require('./lib/color')
const fs = require('fs')
// const msgHndlr = require ('./hanz')
const figlet = require('figlet')
const lolcatjs = require('lolcatjs')
const options = require('./options')

// AUTO UPDATE BY NURUTOMO
// THX FOR NURUTOMO
// Cache handler and check for file change
require('./hanz.js')
nocache('./hanz.js', module => console.log(`'${module}' Updated!`))
require('./lib/help.js')
nocache('./lib/help.js', module => console.log(`'${module}' Updated!`))
require('./lib/database/setting.json')
nocache('./lib/database/setting.json', module => console.log(`'${module}' Updated!`))

const adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))
const setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false

let { 
    limitCount,
    memberLimit, 
    groupLimit,
    mtc: mtcState,
    banChats,
    restartState: isRestart
    } = setting

function restartAwal(hanz){
    setting.restartState = false
    isRestart = false
    hanz.sendText(setting.restartId, 'Restart Succesfull!')
    setting.restartId = 'undefined'
    //fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null,2));
}

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

const start = async (hanz = new Client()) => {
        console.log('------------------------------------------------')
        lolcatjs.fromString(color(figlet.textSync('Hanz BOT', { horizontalLayout: 'full' })))
        console.log('------------------------------------------------')
        lolcatjs.fromString('[DEV] Hanz')
        lolcatjs.fromString('[SERVER] Server Hanz Started!')
        hanz.onAnyMessage((fn) => messageLog(fn.fromMe, fn.type))
        // Force it to keep the current session
        hanz.onStateChanged((state) => {
            console.log('[Client State]', state)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') hanz.forceRefocus()
        })
        // listening on message
        hanz.onMessage((async (message) => {

        hanz.getAmountOfLoadedMessages() // Cut message Cache if cache more than 3K
            .then((msg) => {
                if (msg >= 1000) {
                    console.log('[CLIENT]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    hanz.cutMsgCache()
                }
            })
        // msgHndlr(hanz, message)
        // Message Handler (Loaded from recent cache)
        require('./hanz.js')(hanz, message)
    }))
           

        hanz.onGlobalParicipantsChanged((async (heuh) => {
            await welcome(hanz, heuh) 
            left(hanz, heuh)
            }))
        
        hanz.onAddedToGroup(async (chat) => {
            if(isWhite(chat.id)) return hanz.sendText(chat.id, 'Halo aku Hanz, Ketik #menu Untuk Melihat List Command Ku...')
            if(mtcState === false){
                const groups = await hanz.getAllGroups()
                // BOT group count less than
                if(groups.length > groupLimit){
                    await hanz.sendText(chat.id, 'Maaf, Batas group yang dapat Hanz tampung sudah penuh').then(async () =>{
                        hanz.deleteChat(chat.id)
                        hanz.leaveGroup(chat.id)
                    })
                }else{
                    if(chat.groupMetadata.participants.length < memberLimit){
                        await hanz.sendText(chat.id, `Maaf, BOT keluar jika member group tidak melebihi ${memberLimit} orang`).then(async () =>{
                            hanz.deleteChat(chat.id)
                            hanz.leaveGroup(chat.id)
                        })
                    }else{
                        if(!chat.isReadOnly) hanz.sendText(chat.id, 'Halo aku Hanz, Ketik #menu Untuk Melihat List Command Ku...')
                    }
                }
            }else{
                await hanz.sendText(chat.id, 'Hanz sedang maintenance, coba lain hari').then(async () => {
                    hanz.deleteChat(chat.id)
                    hanz.leaveGroup(chat.id)
                })
            }
        })

        /*hanz.onAck((x => {
            const { from, to, ack } = x
            if (x !== 3) hanz.sendSeen(to)
        }))*/

        // listening on Incoming Call
        hanz.onIncomingCall(( async (call) => {
            await hanz.sendText(call.peerJid, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!')
            .then(() => hanz.contactBlock(call.peerJid))
        }))
    }

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

create(options(true, start))
    .then(hanz => start(hanz))
    .catch((error) => console.log(error))
