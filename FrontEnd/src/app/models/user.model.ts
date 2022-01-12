export interface User {
    id?: number;
    name: string;
    mail: string;
    phone: string;
    password: string;
    newPassword?: string;
    serviceId?: number;
    role?: string;
    active?: boolean;
    secretKey?: string;
  }

