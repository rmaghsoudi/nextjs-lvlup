import axios from "axios";
import useSWR from "swr";
import { apiURL } from "../Constants.js";

const getUser = (id) => {
  axios.get(`${apiURL}/users/${id}`).then((res) => {
    return res;
  });
};

export function removeEntry(id) {
  axios.get(`${apiURL}/entries/${id}`).then((res) => {
    useUser(res.user);
  });
}

export function addEntry(entry) {
  axios.post(`${apiURL}/entries`, { entry }).then((res) => {
    useUser(res.user);
  });
}

export function editEntry(entry) {
  axios.patch(`${apiURL}/entries/${entry.id}`, { entry }).then((res) => {
    useUser(res.user);
  });
}

export default function useUser(id) {
  const { data, error, mutate } = useSWR(`${apiURL}/users/${id}`, getUser(id));

  return {
    api_user: data,
    isLoading: !error && !data,
    isError: error,
    setUser: mutate,
  };
}
