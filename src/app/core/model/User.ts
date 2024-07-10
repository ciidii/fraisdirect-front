// user.model.ts
export interface Role {
  id: number;
  libelle: string;
}

export interface User {
  id?: number;
  password: string;
  nom: string;
  email: string;
  actif: boolean;
  address: string;
  role: Role;
}
