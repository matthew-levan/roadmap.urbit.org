import '../styles/urbit-sans.css';
import "@urbit/foundation-design-system/styles/markdown.css";
import "@urbit/foundation-design-system/styles/globals.css";
import '../styles/globals.css';
import { configure, GlobalHotKeys } from "react-hotkeys";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import { init } from "@socialgouv/matomo-next";

const MATOMO_URL = process?.env?.NEXT_PUBLIC_MATOMO_URL || "";
const MATOMO_SITE_ID = process?.env?.NEXT_PUBLIC_MATOMO_SITE_ID || "";

function MyApp({ Component, pageProps }) {
  const [showSearch, setSearch] = useState(false);
  useEffect(() => {
    init({
      url: MATOMO_URL,
      siteId: MATOMO_SITE_ID,
    });
  });


  const closeSearch = (event) => {
    if (event?.preventDefault) {
      event.preventDefault();
    }
    setSearch(false);
  };

  const openSearch = (event) => {
    if (event?.preventDefault) {
      event.preventDefault();
    }
    setSearch(true);
  };

  const toggleSearch = (event) => {
    if (event?.preventDefault) {
      event.preventDefault();
    }
    setSearch((state) => !state);
  };

  const keyMap = {
    closeSearch: ["esc"],
    toggleSearch: ["command+k", "ctrl+k"],
  };

  const handlers = {
    closeSearch: (event) => closeSearch(event),
    openSearch: (event) => openSearch(event),
    toggleSearch: (event) => toggleSearch(event),
  };

  configure({
    // ignoreTags: [],
    ignoreTags: ["input", "select", "textarea"],
    ignoreEventsCondition: function () { },
  });

  return <>
    <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
    <Search
      showSearch={showSearch}
      toggleSearch={toggleSearch}
      closeSearch={closeSearch}
      openSearch={openSearch}
    />

    <Component
      {...pageProps}
      search={{
        toggleSearch: toggleSearch,
        closeSearch: closeSearch,
        openSearch: openSearch,
      }}
    />
  </>
}

export default MyApp
