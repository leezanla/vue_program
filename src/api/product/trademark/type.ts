export interface trademarkSelectType {
    page?: number,
    limit?: number
}

export interface trademarkType {
    id: number;
    tmName: string;
    logoUrl: string;
}
export interface trademarkResponseDataType {
    count: number;
    limit: number;
    page: number;
    totalPage: number;
    tradeMarkList: [];
}
export interface trademarkResponseType{
    code: number;
    data: trademarkResponseDataType;
    flag: boolean;
    msg: string;
}