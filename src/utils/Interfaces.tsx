export interface teamInterface {
    id: number;
    name: string;
    slogan: string;
}

export interface playerInterface {
    id: number;
    name: string;
    age: number;
    position: string;
    team_id?: number;
}