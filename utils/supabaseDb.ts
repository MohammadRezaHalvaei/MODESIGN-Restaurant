export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      blog: {
        Row: {
          desc: string;
          id: number;
          src: string;
          subTitle: string;
          title: string;
        };
        Insert: {
          desc?: string;
          id?: number;
          src?: string;
          subTitle?: string;
          title?: string;
        };
        Update: {
          desc?: string;
          id?: number;
          src?: string;
          subTitle?: string;
          title?: string;
        };
        Relationships: [];
      };
      chefs: {
        Row: {
          address: string;
          email: string;
          exp: string;
          img: string;
          name: string;
          role: string;
        };
        Insert: {
          address?: string;
          email?: string;
          exp?: string;
          img?: string;
          name?: string;
          role?: string;
        };
        Update: {
          address?: string;
          email?: string;
          exp?: string;
          img?: string;
          name?: string;
          role?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
