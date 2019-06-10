import React from 'react';

const UserContext = React.createContext({
  isLoggedIn: false,
  hikes: [],
  plannedHikes: [],
  id: "",
  firstName: "",
  email: ""
});

export default UserContext;