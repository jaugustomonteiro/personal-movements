import { parseISO } from 'date-fns';
import { Request, Response } from 'express';
import * as yup from 'yup';
import CreateMovementService from '../services/CreateMovementService';
import ShowMovementsByPeriodService from '../services/ShowMovementsByPeriodService';

import AppError from '../errors/AppError';

class MovementController {
  async index(request: Request, response: Response): Promise<Response> {
    const { date_initial, date_final } = request.query;

    const schema = yup.object().shape({
      date_initial: yup.string().required('Date initial required'),
      date_final: yup.string().required('Date final required'),
    });

    try {
      await schema.validate(request.query, { abortEarly: false });
    } catch (err) {
      throw new AppError(err.inner);
    }

    const parseInitialDate = parseISO(String(date_initial));
    const parseFinalDate = parseISO(String(date_final));

    const showMovementsByPeriod = new ShowMovementsByPeriodService();
    const movements = await showMovementsByPeriod.findByPeriod({ date_initial: parseInitialDate, date_final: parseFinalDate });
    return response.json(movements);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { type, transaction, description, value, expire_date, paid_account } = request.body;

    const schema = yup.object().shape({
      type: yup.string().required('Type required'),
      transaction: yup.string().required('Transaction required'),
      description: yup.string().required('Description required'),
      value: yup.number().moreThan(0).typeError('Value required or value should be more than 0'),
      expire_date: yup.string().required('Expire date required'),
      paid_account: yup.string().required('Paid account required'),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err.inner);
    }

    const movementService = new CreateMovementService();

    const movement = await movementService.execute({
      type,
      transaction,
      description,
      value: Number(value),
      expire_date,
      paid_account,
    });

    return response.json(movement);
  }
}

export default MovementController;
