export interface DataItem {
    id_application: string;
    number_application: string;
    discharged: null | string;
    content_application: string;
    comment_application: string;
    datas: string;
    estimation: null | number;
    expenses: null | number;
    revenue: null | number;
    profit: null | number;
    payment_content: null | string;
    status_content: null | string;
    employee_fullname: null | string;
    client_fullname: string;
    client_phone: string;
    name_company: string;
    street: string;
    house: number | null;
    office: number | null;
}

export interface DataItemChild {
    content_application: string;
    comment_application: string;
    estimation: null | number;
    client_fullname: string;
    client_phone: string;
    name_company: string;
    street: string;
    house: number | null;
    office: number | null;
}

export interface TransformedDataItem {
    id_application: string;
    number_application: string;
    discharged: null | string;
    datas: string | null;
    expenses: null | number;
    revenue: null | number;
    profit: null | number;
    payment_content: null | string;
    status_content: null | string;
    employee_fullname: null | string;
    child: DataItemChild[];
}