import { bot } from '../bot';

import { playHandler } from './play';
import { queueHandler } from './queue';
import { songHandler } from './song';
import { pauseHandler } from './pause';
import { skipHandler } from './skip';

export const initHandlers = (): void => {
    bot.use(playHandler);
    bot.use(queueHandler);
    bot.use(songHandler);
    bot.use(pauseHandler);
    bot.use(skipHandler);
};
