const fs = require('fs-extra')

const genre = (prefix) => {
  return `
REKOMENDASI ANIME!

🖼  *GENRE ANIME MENU* 🖼

pilih genre yang kalian sukai!

*◄✜┢┅ீ͜ৡৢ͜͡✦━━◇━━ீ͜ৡৢ͜͡✦┅┧✜►*

🖼 GENRE DRAMA + KESEDIHAN
◉ *${prefix}drama1*
◉ *${prefix}drama2*

🖼 GENRE PHSYCOLOG
◉ *${prefix}phsyco*

🖼 GENRE ISEKAI
◉ *${prefix}isekai*

🖼 GENRE MISTERI
◉ *${prefix}mysteri1*
◉ *${prefix}miysteri2*

◉ *${prefix}trailer*

🖼 GENRE ACTION
◉ *${prefix}action*
◉ *${prefix}samurai*
◉ *${prefix}supernatural*

🖼 GENRE ROMANCE
◉ *${prefix}gromance*
◉ *${prefix}romancesad*
◉ *${prefix}romanceshoujo*

🖼 GENRE COMEDY
◉ *${prefix}comedi*
◉ *${prefix}comedischool*

🖼 GENRE NEKOPOI
◉ *${prefix}harem*
◉ *${prefix}reverse*

🖼 GENRE SPORT
◉ *${prefix}sport*
◉ *${prefix}sport2*

🖼 GENRE HOROR
◉ *${prefix}horor*

🖼 GENRE ADVENTURE
◉ *${prefix}adventure*

🖼 GENRE LIFE
◉ *${prefix}mecha*
◉ *${prefix}schoollife*
◉ *${prefix}slicelife*

🖼 GENRE FANTASI
◉ *${prefix}fantasy*
◉ *${prefix}scifi*


`
}
exports.genre = genre
const drama1 = () => {
  return `
REKOMENDASI ANIME!

  *[ DRAMA 1 ]*

- Plastic memories
- Shigatsu wa Kimi no Uso
- Koe no Katachi
- Kokoro Connect
- Chuunibyou Demo Koi ga Shitai
- Sakurasou no Pet na Kanojo
- Nagi no Asukara (Recomended)
- Just Because
- Inuyashiki
- Clannad
- Angel Beats
- Yahari Ore no Seishuun Love Comedy Machigatteiru
- Re : LIFE
- Ano Hana
- Koi to Uso
- Kamisama Hajimemashita
- Hotarubi no Mori E
- Sanka Rea
- Kyoukai no Kanata
- Guilty Crown 
     

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
`
}
exports.drama1 = drama1
const harem = () => {
  return `
REKOMENDASI ANIME!

  *[ HAREM ]*

- To Love - ru
- Highschool DxD 
- Hentai Ouji Warawanai Neko
- Isekai wa Smartphone Tomo ni 
- Gakusen Toshi Asterisk
- Masamune - Kun Revenge
- Ladies Vs Butler
- Ore no Imouto ga Konnani Kawai Wake ga Nai
- Masou Gakuen HxH 
- Monster Musume 
- Seirei Tsukai no Blade Dance
- Seiken Tsukai no World Break
- Saijaku Muhai no Bahamut
- Musaigen no Phantom World
- Trinity Seven
- Hundred
- Dakara Boku wa H, Dekinai? 
- Kore wa Zombie Desu Ka?
- Shiomin Sample
- Shinmai Maou no Testament 
- Date A Live
- Kono Naka ni Hitori, Imouto ga Iru
- Onii - Chan Dakedo Ai Sareba Kankei Naiyone
- Ore no Nounai Sentakushi ga, Gakuen Love Comedy Zenryoku de Jama Shiteru 
- Ore no Kanojo to Osananajimi ga Shuraba Sugiru
- Kanokon
- Rokujuma no Shinryakusha
- Nisekoi
- Saenai Heroine Sodatekata
- Boku wa Tomodachi ga Sukunai
- Kami Nomi zo Shiru Sekai
- Renai Boukun
- Infinite Stratos
- Yosuga no Sora
      

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
`
}
exports.harem = harem
const comedi = () => {
  return `
REKOMENDASI ANIME!

*[ COMEDY ]*

- Gintama 
- Tanaka - kun wa Itsumo Kedaruge
- Working!!!
- Barakamon
- Blend S
- Himouto Umaru - Chan
- New Game
- Animegataris
- Gekkan Shoujo Nozaki - kun
- Gabriel DropOut
- Kobayashi - chan Chi no Maid Dragon
- Danshi Koukosei no Nichijou
      

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎ 
`
}
exports.comedi = comedi
const romance = () => {
  return `
REKOMENDASI ANIME!

*[ ROMANCE ]*

- Imouto Sae Ireba Ii
- Eromanga Sensei
- Ore no Imouto Konnani Kawaii Wake ga Nai
- Yahari Ore no Seishuun wa Love Comedy Machigatteiru
- Boku wa Tomodachi ga Sukunai
- Kamisama Hajimemashita
      

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
`
}
exports.romance = romance
const action = () => {
  return `
REKOMENDASI ANIME!

*[ ACTION ]*

- Fate/Stay Night 
- UQ Holder! Mahou Negima Sensei 2
- Absolute Duo
- Rokudenashi Majutsu Kousi no Akashic Record
- Overlord
- Kekkai Sensen
- Sword Art Online
- Guilty Crown
- Saijaku Muhai no Bahamut
- Infinite Stratos
- Stein Gate
- Toaru Kagaku no Railgun
- Black Bullet
- Inuyashiki
- One Punch Man
- Mob Psycho 100
- Gakusen Toshi Asterisk
- Shinmai Maou no Testament
- Bungou Stray Dogs
      

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
`
}
exports.action = action
const phsyco = () => {
  return `
REKOMENDASI ANIME!

*[ PHSYCOLOGICAL ]*

- Inuyashiki
- Madoka Magica
- Mirai Nikki
- Kakegurui
- K-Project
- Grisaia no Rakuen & Kajitsu
- Death Note
- Death Parade
- Deadman Wonderland
- Re : Zero Kara Hajimeru Isekai Seikatsu
- Danganronpa
- BTOOOM!
- Psycho Pass
- Kiseijuu : Sei no Kakuritsu
- Tokyo Ghoul
- NHK ni Youkoso
      

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
` 
}
exports.phsyco = phsyco
const mysteri1 = () => {
  return `
REKOMENDASI ANIME!

*[ MYSTERI ]*
- Sakurada Reset
- Hyouka
- Monogatari urutan ceritanya
1. Kizumonogatari 
2. Nekomonogatari : Kuro
3. Bakemonogatari
4. Nisemonogatari
5. Monogatari Series Second Season
6. Tsukimonogatari
7. Koyomimonogatari (Durasi 12 min)
8. Owarimonogatari S1
9. Owarimonogatari S2
10. Hanamonogatari
- Danganronpa
- Mirai Nikki
- Death Note
- Black Bullet
- Another
   

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
` 
}
exports.mysteri1 = mysteri1
const sport = () => {
  return `
REKOMENDASI ANIME!

 *[ SPORT ]*

- Yawamushi pedal
- Major
- Eyeshiled 21
- Diamond no ace
- Slam dunk
- Hajime no ippo
- Free
- Ping pong the animation
- Baby step
- Area no kishi
- Captein tsubaaa
- Air gear
- Chihafuyu
- Cross game
- Inazuma eleven
    

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
` 
}
exports.sport = sport
const romancesad = () => {
  return `
REKOMENDASI ANIME!

  *[ ROMANCE SAD ]*

- Kimikiss pure raouge
- Kamikiss
- Toradora
- Lovely complex
- Sakurasou
- White album
- Tonari no kaibutsu-kun
- 11eyes
- Angel beats
- Plastic memorie
- Akame ga kill
- Akatsuki no yona
- Berserk
- Sao
- Boku wa tomodachi wa sukunai
- Bokura wa minna kawaisou
- Btooom
- Bungaku shoujo
- C the money of soul and possibility control
- Charlotte
- Chihayafuyu
- Chuunibyou
- Clannad
- Dance in the vampire bund
- Dansai bunri no crime edge
- Darken than black
- Devils line
- Date a live
- De capi series
- Truee tears
- deadmean wonderland
- blood lad
- densetsu no yusa no densetsu
- kyoukai no kanata
- Fate/stay 
- Magi
- Gekkan shoujo
- Golden time
- Guilty crown
- Gosick
- Hentai ouji to warawanai neko
- Kiseijuu
- Kokoro connect
- Mikakunin
- Mirai niki
- Nagi no asukara
- Orelmo
- Punch line
- Rokka no yuusha
- Shigatu wa kimi no uso
- Kotonoha no miwa
- Kimi no nawa
- Kaichou wa maid sama
- Oregairu
- Ookami no koushinryou
- Zero no tsukaima
- Asterik
- Kore wa zombie desu ka
- Koe no katachi
- Kimi no tedoke
- Relife
- Tsukiga kirei
- Tamako market
- Sukitte li nayou
- Ore monogatari
- Monogatari
- Akagami no shirayuki
- Sankarea
- Amagami ss
- Issukan friend
- Ao haru ride
- Nijiro days
- Fuuka
- Ano hana
- Yosuga no sora
     

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
` 
}
exports.romancesad = romancesad
const mysteri2 = () => {
  return `
REKOMENDASI ANIME!

  *[ MYSTERI 2 ]*

- Death note
- Gosick
- Boku dake ga inai machi
- Baccano
- Durarara
- Shinsekai yori
- Bakemonogatari
- Death parade
- Darken than black
- Zatsuen no tempest
- Ef: A tale melodies
- Higurashi no naku koro ni
- Paprika
- Tiger and bunny
- Tasogare otome x amnesia
- Mirai niki
- Tokyou ghoul
- Ergo proxy 
- Another
- Yamada kun to 7 nin no majo
- Gakkou gurashi
- Kamisama no memochou
- Hamatora
- Black bullet
- Kamisama no inai nichiyoubi
- Dantalian no shoka
- Kujira no kora wa sajou ni  jam
- Subete ga f ni naru
- Gakukoku no brynhildr
- Seikimatsu occult gakuin
- Koni naka ni hitori imouto ga iru 
- Mayoiga
- Kyoto teramachi sanjou no holmes
- 18if
- ousama game the animation
- made in abyss
      

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
` 
}
exports.mysteri2 = mysteri2
const comedischool = () => {
  return `
REKOMENDASI ANIME!

  *[ COMEDY SCHOOL ]*

- Preson school
- Gekkan shoujo nozaki kun
- Beelzebub
- Shimoneta
- Aho girl
- Tanaka kun
- D frag
- Handa kun
- Tonaru no seki kun
- Ansatsu kyoushite
- Saiki kusuo
- Toradora
- Baka to test
- Sakamoto desu ga
- Great teachsr onizuka
- Nichijou
- Sket dance
- Danshi koukousei no nichijo
     

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
` 
}
exports.comedischool = comedischool
const trailer = () => {
  return `
REKOMENDASI ANIME!

  *[ TRAILER ]*

- Aho girl
- Tsuretzure childern
- Uchuu senkan tiramisu
- Mangaka san to assistant san
- Tonari no seki kun
- Danna ga itteiru ka wakaranai ken
- Fumikiri jikan
- Onee chan ga kita
- Osake fufu ninatte
      

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
` 
}
exports.trailer = trailer
const supernatural = () => {
  return `
REKOMENDASI ANIME!

  *[ SUPERNATURAL ]*

- Saiki kusuo
- Overlord
- Hataraku mao sama
- Mahouka kouka
- Blood lad
- Sao
- Nanatsu no taizai
- Ansyatsu kyouhitsu
- Code geass
- No game no life
- Mob psyco 100
- Mondaiji-tachi ga isekai kara kuru zou desu yo
      

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
` 
}
exports.supernatural = supernatural 
const romanceshouju = () => {
  return `
REKOMENDASI ANIME!

  *[ ROMANCE SHOUJU ]*
- Saeikano
- Special A
- Cocoro connect
- Kamishama hajimemashita
- Lovely complex
- Golden time
- Tonari no kaibutsu-kun
- Sikitte li na yo
- Baka to test
- Chuunibyou
- Ano natsu de matteru
- Ao haru ride
- Nijiro days
- Re zero kara
- Densetsu no yuusha no densetsu
- Danmachi
- Sukasuka
- Rakuday kishy no cavalry
- Code:Realize
- Code breaker
- zero no tsukaima
      

𝗛𝗔𝗡𝗭 𝗕𝗢𝗧シ︎
` 
}
exports.romanceshouju = romanceshouju
