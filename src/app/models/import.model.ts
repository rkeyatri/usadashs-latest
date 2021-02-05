export interface Import {
    select:string;
    date: number;
    importer: string;
    supplierName: string;
    foreignport: string;
    orginCountry: string;
    hS_Code: number;
    chapter: number;
    product_Description: string;
    quanity: number;
    unitQuanity: number;
    Unit_Value_As_Per_Invoice: number;
    invoice_currency: string;
    Total_Value_in_FC: string;
    Unit_Value_USD_Exchange: string;
    Unit_Value_In_INR: string;
    INDIAN_PORT: string;
    Month: number;
    Year: number;
}