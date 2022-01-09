import handleSarcasm from '../modules/sarcasm.js'
import handle8ball from '../modules/8ball.js'
import handleSoon from '../modules/soon.js'

export default function (client) {
  client.on("message", handle)
}

const handle = async function (message) {
  await handleSarcasm(message)
  await handle8ball(message)
  await handleSoon(message)
}