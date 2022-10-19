const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('discord.js');
const axios = require('axios')


module.exports = {
  data: new SlashCommandBuilder()
    .setName("linkbypass")
    .setDescription("bypass linkvertise link")
    .addStringOption(option => option.setName('link').setDescription('the link')),

  async execute(interaction, client) {
    let url = `https://bypass.pm/bypass2?url=${interaction.options.getString('link')}`
    var link
    try {
      await axios.get(url).then(res => {link = res.data.destination}) 
    } catch (e) {
      link = e.message
    }
    const link_embed = new EmbedBuilder()
      .setColor("#5865f4")
      .setTitle("Done.")
      .addFields(
        {
          name: "**Link**",
          value: `> **${link}**`,
          inline: false,
        }
      )
      .setTimestamp();

      const button = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setLabel('Go to link')
          .setStyle(5)
          .setEmoji('🖨️')
          .setURL(link),
      );

    await interaction.reply({
      embeds: [link_embed],
      components: [button],
    });
  },
};
