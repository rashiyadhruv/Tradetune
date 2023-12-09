import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import middlewares from '../../api/middlewares';
import { celebrate, Joi } from 'celebrate';
import tradeTuneChannel from './tradeTuneChannel';

import { PushAPI } from "@pushprotocol/restapi";

import { ethers } from "ethers";

import 'dotenv/config'
require('dotenv').config()

const route = Router();

export default async (app: Router) => {
  app.use('/showrunners/bank', route);
  const provider = new ethers.providers.WebSocketProvider(process.env.ALCHEMY_WEBSOCKET);
  const signer = new ethers.Wallet(
    process.env.PRIVATE_KEY, // Arv test
      provider
  );

  route.post(
    '/investment',
    celebrate({
      body: Joi.object({
        simulate: [Joi.bool(), Joi.object()],
      }),
    }),
    middlewares.onlyLocalhost,
    async (req: Request, res: Response, next: NextFunction) => {
      const Logger: any = Container.get('logger');

      try {
        const tradeTune = Container.get(tradeTuneChannel);
        // tradeTune.investmentNotif(10, req.body.simulate); // change number here
        return res.status(201).json({ success: true });
      } catch (e) {
        Logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};