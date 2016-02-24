define(function () {
    "use strict";

    let ClientConfig = {
        FPS: 60,
        TURNS_TO_FLASH_AFTER_SPAWN: 10,
        SPAWN_FLASH_COLOR: "white",
        IO: {
            INCOMING: {
                NEW_STATE: "game update",
                NEW_PLAYER_INFO: "new player info",
                BOARD_INFO: "board info",
                NOTIFICATION: "server notification"
            },
            OUTGOING: {
                BOT_CHANGE: "bot change",
                COLOR_CHANGE: "player changed color",
                FOOD_CHANGE: "food change",
                SPEED_CHANGE: "speed change",
                START_LENGTH_CHANGE: "start length change",
                JOIN_GAME: "join game",
                SPECTATE_GAME: "spectate game",
                IMAGE_UPLOAD: "image upload",
                NEW_PLAYER: "new player",
                NAME_CHANGE: "player changed name",
                KEY_DOWN: "key down"
            }
        },
        MAX_NAME_LENGTH: 10,
        INCREMENT_CHANGE: {
            INCREASE: "increase",
            DECREASE: "decrease",
            RESET: "reset"
        }
    };

    return ClientConfig;

}); 