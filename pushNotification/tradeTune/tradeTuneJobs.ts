import logger from '../../loaders/logger';

import { Container } from 'typedi';
import schedule from 'node-schedule';
import tradeTuneChannel from './tradeTuneChannel';

export default () => {
  const channel = Container.get(tradeTuneChannel);
  channel.startEventListener(false);
};