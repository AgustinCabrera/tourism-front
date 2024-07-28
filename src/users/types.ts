export interface IUser{
    username: string;
    password: string;
    gold: number;
    available_time: number;
    preferred_attraction_type_id: string;
    is_admin: boolean;
}
export interface ItypeOfAtraction{
    id: number;
    name: string;
}
export interface IPromotion{
    id: number;
    promotionType:string;
    pricingStrategy: string;
    costOrDiscount: number[] | number;
    isDeleted: boolean;
}
export interface IItinerary{
    id: number;
    userId: number;
    atractionId: number;
}
export interface IatractionPromotion{
    atractionId: number;
    promotionId:number;
}
export interface Iatraction{
    id: number;
    tickets: number;
    cost: number[];
    name: string;
    time: number;
    atractionTypeId: number;
    is_deleted: boolean;
}