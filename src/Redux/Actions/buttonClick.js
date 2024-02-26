// capture button click
export const signupStep = (currentab) => ({
  type: "Current_Step_Signup",
  payload: currentab,
});

export const sidebarStatus = (sidebar) => ({
  type: "Sidebar_Status",
  payload: sidebar,
});

export const sidebarToggleClick = (sidebartab) => ({
  type: "Sidebar_Tabs",
  payload: sidebartab,
});

export const authenticationStatus = (responseData) => ({
  type: "LoginResponse",
  payload: responseData,
});

export const modalComponents = (overlaydata) => ({
  type: "HandleModal",
  payload: overlaydata,
});

export const editDeviceModal = (overlaydata) => ({
  type: "HandleeditModal",
  payload: overlaydata,
});


