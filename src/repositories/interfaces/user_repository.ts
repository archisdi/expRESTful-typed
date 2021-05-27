import { SQLRepo } from 'zuu';
import UserModel, { UserProperties } from '../../models/user_model';

export interface UserRepository extends SQLRepo<UserModel, UserProperties> {
    getTotalUser(): Promise<number>
}

export default UserRepository;