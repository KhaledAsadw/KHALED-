import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 مرحبا يا , ${conn.getName(m.sender)}!
│🤖 أتمنى أنك بخير ♥ البوت أون لاين الآن 
يمكنك إستخدامه عبر كتابة menu.
╰────────────────────
*─[ https://instagram.com/kh_sh932 ]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['infobot']
handler.command = /^(alive)$/i


export default handler
