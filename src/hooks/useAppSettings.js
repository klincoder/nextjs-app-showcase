// Import resources
import { useRecoilValue } from "recoil";
import moment from "moment";

// Import custom files
import { appSettingsAtom } from "../recoil/atoms";
import { handleFormatDate } from "../config/functions";

// Compnent
export default function useAppSettings() {
  // Define all settings
  const allSettings = useRecoilValue(appSettingsAtom);

  // Define general settings
  const generalSettings = allSettings?.find(
    ({ id }) => id === "generalSettings"
  )?.data;

  // Define site info
  const siteInfo = {
    logo: generalSettings?.logo,
    siteName: generalSettings?.siteName,
    siteTagline: generalSettings?.siteTagline,
    supportEmail: generalSettings?.supportEmail,
    copyrightName: generalSettings?.copyrightName,
    fromName: generalSettings?.fromName,
    fromEmail: generalSettings?.fromEmail,
    adminName: generalSettings?.adminName,
    adminEmail: generalSettings?.adminEmail,
  };

  // Define todays date
  const todaysDate = moment.utc().format();
  const todaysDateFormat2 = handleFormatDate(todaysDate, 2);

  // Define companyBankInfo
  const companyBankInfo = generalSettings?.companyBankInfo;

  // Return data
  return {
    generalSettings,
    siteInfo,
    todaysDate,
    todaysDateFormat2,
    companyBankInfo,
  }; // close return
} // close component
