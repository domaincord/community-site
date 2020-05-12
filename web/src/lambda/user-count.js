import axios from 'axios'

exports.handler = async (event, context) => {
  const baseUrl = `https://discordapp.com/api`

  const guild = '488540747361026058'

  const url = `${baseUrl}/guilds/${guild}/members`

  const response = await axios({
    method: 'get',
    headers: {
      Authorization: `Bot ${process.env.BOT_TOKEN}`
    },
    url
  })

  const memberCount = response.data.filter(obj => !obj.user.bot).length
  const botCount = response.data.filter(obj => obj.user.bot).length

  return {
    statusCode: 200,
    body: JSON.stringify({
      memberCount,
      botCount,
      totalUsers: memberCount + botCount
    })
  }
}
