import { useQuery } from "react-query"
import axios from "axios"

export function useContacts() {
  return useQuery("contacts", async () => {
    const { data } = await axios.get("http://localhost:5000/api/contacts/07367329294")
    return data
  })
}
