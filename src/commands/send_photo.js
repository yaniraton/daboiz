const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sendwithphoro")
    .setDescription("Sand a wanted message to wanted chanel with photo")
    .addChannelOption(option => option.setName('destination').setDescription('i send to?'))
    .addChannelOption(option => option.setName('getfrom').setDescription('i get from'))
    .addStringOption(option => option.setName('input').setDescription('the id?'))
    .addStringOption(option => option.setName('photo').setDescription('photo link')),

  async execute(interaction, client) {
    const sendembed = new EmbedBuilder()
      .setColor("#00FF00")
      .setTitle(":white_check_mark:  Done!")
      .setTimestamp();
      var channel_sand = interaction.options.getChannel('destination');
      var channel_get = interaction.options.getChannel('getfrom');
      var m_id = await channel_get.messages.fetch(interaction.options.getString('input'));
      channel_sand.send({
        files: [`${interaction.options.getString('photo')}`],
        content: String(m_id)
      });

    await interaction.reply({
      
      embeds: [sendembed],
    });
  },
};
