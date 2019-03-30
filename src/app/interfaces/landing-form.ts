export interface LandingForm {
  key: string;
  placeholder: string;
  type: string;
  required?: boolean;
  length?: number;
  email?: boolean;
  errorMessages: {
    requiredMessage?: string;
    lengthMessage?: string;
    emailMessage?: string;
  };
}
