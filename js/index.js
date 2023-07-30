const appUrls = {
  captainVietnam: {
    android: "https://play.google.com/store/apps/details?id=com.ironhuy.captainVietnam",
    ios: "",
  },
  classifyChallenge: {
    android: "https://play.google.com/store/apps/details?id=com.ironhuy.classifychallenge",
    ios: "",
  },
  flappyTrader: {
    android: "https://play.google.com/store/apps/details?id=com.ironhuy.flappyTrader",
    ios: "",
  },
};

/**
 * redirect to url
 * @param url refer to url to redirect
 */
function viewAppOnStore(store, appId) {
  let appUrl = appUrls[appId][store];
  window.open(appUrl, "_blank");
}
