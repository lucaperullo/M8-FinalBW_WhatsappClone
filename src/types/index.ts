export interface Contact {
  contactsNumber: string
  name?: string
  profileImg?: string
  about?: string
}

export type Message = {
  sender: string
  text: string
}

export interface Group {
  creator: string
  members?: string[]
  messages?: Message[]
}
