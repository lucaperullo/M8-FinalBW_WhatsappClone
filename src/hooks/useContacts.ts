import { useQuery } from "react-query"
import { backend } from "../config"
import { Contact } from "../types/"

export function useContacts() {
  return useQuery<Contact, Error>("contacts", async () => {
    const { data } = await backend.get("/api/contacts/07367329294")
    return data
  })
}
