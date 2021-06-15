export interface Contact {
  phone: string;
  id: string;
  name: string;
}

export interface Store {
  contacts: Contact[];
  newContact: Contact;
}
