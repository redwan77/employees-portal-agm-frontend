export class EmployeeAddDTO {
    id: number;
    name: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    adress: string;
    isRemote: boolean;
    // by default a new employee cannot be in  holiday
    isHoliday = false ;
}