export const Prod = true;
export const localStorageKey = "_damirifa_userKey";

export const baseURL = Prod ? "https://api" : "http://localhost:8000";
export const queryString = (params: any) => {
  return Object.keys(params)
    .map((key) => {
      return `${key}=${params[key]}`;
    })
    .join("&");
};
export const paginationTakeCount = 8;
// export const paystackKey = "pk_live_364e0203b8da80f9f6912cb27557d67a70906a95";
export const seoTitleTemplate = "%s | Damirifa.com";
export const seoSiteUrl = "https://www.damirifa.com";
export const seoLocale = "en_IE";
export const seoSiteName = "damirifa.com";
export const seoTwitterHandle = "@Damirifa";
export const seoAdminTwitterHandle = "@Damirifa";
export const seoDescription =
  "A website that will enable the people to have a gateway on posting announcements about the deceased and their funeral and memorial service.";
