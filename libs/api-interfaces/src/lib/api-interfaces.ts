export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  birthDay: Date;
}

export interface ISkill {
  id: number;
  skillType: string;
  skillName: string;
  experienceYears: number;
  skillLevel: number;
}

export interface ILogin {
  email: string;
  password: string;
}
