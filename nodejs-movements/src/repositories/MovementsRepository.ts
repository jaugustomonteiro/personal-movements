import { EntityRepository, MongoRepository } from 'typeorm';
import Movement from '../models/Movement';

@EntityRepository(Movement)
class MovementsRepository extends MongoRepository<Movement> {}

export default MovementsRepository;
