import { getCustomRepository } from 'typeorm';
import Movement from '../models/Movement';
import MovementsRepository from '../repositories/MovementsRepository';

interface IRequest {
  type: string;
  transaction: string;
  description: string;
  value: number;
  expire_date: Date;
  paid_account: boolean;
}

class CreateMovementService {
  public async execute({ type, transaction, description, value, expire_date, paid_account }: IRequest): Promise<Movement> {
    const movementRepository = getCustomRepository(MovementsRepository);
    const movement = movementRepository.create({
      type,
      transaction,
      description,
      value,
      expire_date,
      paid_account,
    });

    await movementRepository.save(movement);

    return movement;
  }
}

export default CreateMovementService;
