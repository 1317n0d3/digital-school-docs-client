interface IDocumentParent {
  name: string,
  education: string,
  birthday: string,
  passport_serial: string,
  passport_number: string,
  passport_issue_date: string,
  passport_issued_by: string,
  address: string,
  snils?: string,
  email: string,
  phone: string,
  doctype: string,
  course: string,
  date: string,
  contractNumber: string,
}

interface IDocumentChild extends IDocumentParent {
  childName: string,
}

export type DocumentType = IDocumentParent | IDocumentChild