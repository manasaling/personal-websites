import { createContext, useContext } from "react";

const AppContext = createContext({
  project: {
    title: "default title",
    description: "default description",
    image: "https://miro.medium.com/max/4800/0*MGwhgis8-7h-M0M0",
  },
});

type AppWrapperTypes = {
  children: any; // too lazy to figure out what it actually is. Probably func?
};

export function AppWrapper({ children }: AppWrapperTypes) {
  let sharedState = {
    /* whatever you want */
    project: {
      title: "default title",
      description: "default description",
      image: "https://miro.medium.com/max/4800/0*MGwhgis8-7h-M0M0",
    },
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
