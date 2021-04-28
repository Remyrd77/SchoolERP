export interface User {
    "firstName": string;
    "lastName": string;
    "leaveBalance": number;
    "phone": string;
    "supervisor": string;
}

export interface User1 {
    attendenceDates: Date;
    email: string;
    firstName: string;
    lastName: string;
    leaves: Leaves[];
    phone: string;
}
export interface Leaves {
    "balanceLeave": number;
    "totalDaysOff": number;
}