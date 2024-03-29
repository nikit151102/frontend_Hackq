export interface DataItem {
    id: string;
    typerequest: string;
    requestnumber: string;
    statusrequest: string;
    statuspayment: string;
    discharged: string;
    reason: string;
    comment: string;
    submissiondate: string;
    completiondate: string;
    estimation: number,
    revenue: number,
    expenses: number,
    profit: number,
    employeelastname: string;
    employeefirstname: string;
    employeemiddlename: string;
    clientlastname: string;
    clientfirstname: string;
    clientmiddlename: string;
    clientphone: string;
    street: string;
    house: string;
    office: string;
    namecompany: string;
}

export interface DataItemChild {
    reason: string;
    comment: string;
    estimation: null | number;
    clientlastname: string;
    clientfirstname: string;
    clientmiddlename: string;
    clientphone: string;
    street: string;
    house: string;
    office: string;
    namecompany: string;
}

export interface TransformedDataItem {
    id: string;
    typerequest: string;
    requestnumber: string;
    discharged: null | string;
    submissiondate: string | null;
    revenue: null | number;
    expenses: null | number;
    profit: null | number;
    statuspayment: null | string;
    statusrequest: null | string;
    employeelastname: string;
    employeefirstname: string;
    employeemiddlename: string;
    child: DataItemChild[];
}