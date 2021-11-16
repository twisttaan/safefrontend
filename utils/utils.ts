// Credit for idToBinary goes to discord.js , don't ask me to explain this code
// https://github.com/discordjs/discord.js/blob/5ec04e077bbbb9799f3ef135cade84b77346ef20/src/util/SnowflakeUtil.js#62

export function getTimestamp(snowflake: string) {
  const BINARY = idToBinary(snowflake).toString().padStart(64, '0');

  return parseInt(BINARY.substring(0, 42), 2) + 1_420_070_400_000;
}

export function idToBinary(num: string) {
  let bin = '';
  let high = parseInt(num.slice(0, -10)) || 0;
  let low = parseInt(num.slice(-10));
  while (low > 0 || high > 0) {
    bin = String(low & 1) + bin;
    low = Math.floor(low / 2);
    if (high > 0) {
      low += 5_000_000_000 * (high % 2);
      high = Math.floor(high / 2);
    }
  }
  return bin;
}

