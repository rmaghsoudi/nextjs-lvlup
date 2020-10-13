import React, { createContext, useReducer, useState } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";
import apiURL from "../Constants.js";

const initialState = {
  api_user: {
    id: 1,
    auth_id: "google-oauth2|118319558390564095378",
    level: 1,
    xp: 500,
    xp_to_lvlup: 1515,
    entries: [
      {
        id: 1,
        name: "Test",
        description: "testing",
        completed: false,
        parent_entry: null,
        type: "task",
        difficulty: 3,
        user: 1,
        xp: 300,
      },
      {
        id: 2,
        name: "still testing",
        description: null,
        completed: true,
        parent_entry: null,
        type: "task",
        difficulty: 5,
        user: 1,
        xp: 500,
      },
      {
        id: 3,
        name: "we do be testing doe",
        description:
          "testing my amazing skills as the 'absolute' in software development",
        completed: false,
        parent_entry: null,
        type: "goal",
        difficulty: 5,
        user: 1,
        xp: 5000,
      },
      {
        id: 4,
        name: "testing doe",
        description: null,
        completed: true,
        parent_entry: 3,
        type: "pillar",
        difficulty: 3,
        user: 1,
        xp: 1500,
      },
      {
        id: 5,
        name: "we do be",
        description: null,
        completed: false,
        parent_entry: 3,
        type: "pillar",
        difficulty: 5,
        user: 1,
        xp: 2500,
      },
      {
        id: 6,
        name: "trippin doe",
        description: "yuh",
        completed: false,
        parent_entry: 5,
        type: "task",
        difficulty: 10,
        user: 1,
        xp: 1000,
      },
    ],
  },
};

// TODO: have API calls within the functions then GET the user again and send that to the reducer
// the app only needs the user because it contains all of the info, no need to store entries in state
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function getUser(id) {
    axios.get(`${apiURL}/users/${id}`).then((res) => {
      dispatch({
        type: "UPDATE_API_USER",
        payload: res,
      });
    });
  }

  function removeEntry(id) {
    axios.get(`${apiURL}/entries/${id}`).then((res) => {
      getUser(state.user.id);
    });
  }

  function addEntry(entry) {
    axios.post(`${apiURL}/entries`, { entry }).then((res) => {
      getUser(state.user.id);
    });
  }

  function editEntry(entry) {
    axios.patch(`${apiURL}/entries/${entry.id}`, { entry }).then((res) => {
      getUser(state.user.id);
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        removeEntry,
        addEntry,
        editEntry,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
