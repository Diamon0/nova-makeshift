import { Configuration } from "./configuration.js";

export default {
  GUILD_ID: "272036959348588555",
  VOICE_CATEGORY_ID: "360677664220250113",
  TEXT_CHANNELS: {
    MODLOGS_CHANNEL_ID: "303662183558938625",
    GENERAL_CHANNEL_ID: "272036959348588555",
    LEGACY_VOICE_CHANNEL_ID: "303656898605875202",
  },
  VOICE_CHANNELS: {
    LOBBY_CHANNEL_ID: "547047269321539607",
    AFK_CHANNEL_ID: "303642031576711170",
  },
  COLORED_ROLES: {
    COLOR_TURQUOISE_ID: "381445178780811264",
    COLOR_GREEN_ID: "381463659496472586",
    COLOR_BLUE_ID: "381463690660151296",
    COLOR_PURPLE_ID: "381463717176541194",
    COLOR_PINK_ID: "381463743596331018",
    COLOR_YELLOW_ID: "381463773275488256",
    COLOR_ORANGE_ID: "381463803134607360",
    COLOR_RED_ID: "381463843773218826",
    COLOR_GREY_ID: "381463875767369728",
    COLOR_LIME_ID: "469570609798578187",
  },
  OWNER_USER_ID: "153595272465743872",
  BOT_USERS: {
    NOVA_USER_ID: "303645054805737472",
    OCTAVIA_USER_ID: "435118272510427167",
  },
  WEBHOOKS: {
    LEGACY_VOICE_WEBHOOK_ID: "",
  },
} as const as Configuration;
