export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export interface Address {
  id: number;
  name: string;
  address: string;
}

export interface Profile {
  id: string;
  name: string;
  description: string;
  avatarURL: string;
  addresses: Address[];
  userId: string;
}
