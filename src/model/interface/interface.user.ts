export interface user {
  name: string;
  email: string;
  phone: number;
  password: string;
  confirmPassword: string;
  isActive: boolean;
  role: string;
  isServiceTaker: boolean;
  isServiceGiver: boolean;
  rating: number;
  categoryId: string;
  otp: number;
  location: string;
  charge: number;
}
