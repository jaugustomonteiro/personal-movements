import { endOfDay, isAfter, startOfDay } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Movement from '../models/Movement';
import MovementsRepository from '../repositories/MovementsRepository';
import AppError from '../errors/AppError';

interface Balance {
  inflow: number;
  outflow: number;
  total: number;
}

interface Request {
  movements: Movement[];
  balance: Balance;
}

interface PeriodData {
  date_initial: Date;
  date_final: Date;
}

class ShowMovementsByPeriod {
  async findByPeriod({ date_initial, date_final }: PeriodData): Promise<Request> {
    const movementRepository = getCustomRepository(MovementsRepository);

    if (isAfter(new Date(date_initial), new Date(date_final))) {
      throw new AppError('Start date cannot be greater than end date');
    }

    const movements = await movementRepository.find({
      where: {
        created_at: {
          $gte: startOfDay(date_initial),
          $lte: endOfDay(date_final),
        },
      },
    });

    const { inflow, outflow } = movements.reduce(
      (accumulator: Balance, movement: Movement) => {
        if (movement.type === 'inflow') {
          accumulator.inflow += movement.value;
        }
        if (movement.type === 'outflow') {
          accumulator.outflow += movement.value;
        }
        return accumulator;
      },
      {
        inflow: 0,
        outflow: 0,
        total: 0,
      },
    );

    const balance = {
      inflow,
      outflow,
      total: inflow - outflow,
    };

    return { movements, balance };
  }
}

export default ShowMovementsByPeriod;
