import { useQuery } from "react-query"
import { backend } from "../config"

export function useContacts() {
  return useQuery("contacts", async () => {
    const { data } = await backend.get("/api/contacts/07367329294")
    return data
  })
}
