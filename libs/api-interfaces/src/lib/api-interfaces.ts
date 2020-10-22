export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
}

export interface ISkill {
  id: number;
  skillType: string;
  skillName: string;
  experienceYears: number;
  skillLevel: number;
}
