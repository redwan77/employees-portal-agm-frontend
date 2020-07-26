import { User } from 'src/app/a-2-admin-layout/shared/models/user';

export class Delay {

    id: number;
    duration: number;
    start: Date;
    end: Date;
    verified: boolean;
    isSatteled: boolean;
    verification: string;
    date : Date;
    user: User ;
}